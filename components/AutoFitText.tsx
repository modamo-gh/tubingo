import { useLayoutEffect, useRef, useState } from "react";

const fitText = (el: HTMLElement, max: number, min: number) => {
    const parent = el.parentElement;

    if (!parent) {
        return;
    }

    // Get actual available space from parent
    const parentStyles = window.getComputedStyle(parent);
    const paddingLeft = parseFloat(parentStyles.paddingLeft);
    const paddingRight = parseFloat(parentStyles.paddingRight);
    const paddingTop = parseFloat(parentStyles.paddingTop);
    const paddingBottom = parseFloat(parentStyles.paddingBottom);

    const containerWidth = parent.clientWidth - paddingLeft - paddingRight;
    const containerHeight = parent.clientHeight - paddingTop - paddingBottom;

    let best = min,
        high = max,
        low = min;

    // Set initial styles
    el.style.fontSize = `${min}px`;
    el.style.lineHeight = "1";
    el.style.whiteSpace = "normal";

    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);
        el.style.fontSize = `${mid}px`;

        // Force layout recalculation
        el.offsetHeight;

        // Check if text fits using scrollHeight/Width which gives actual content size
        const textWidth = el.scrollWidth;
        const textHeight = el.scrollHeight;

        const fits = textWidth <= containerWidth && textHeight <= containerHeight;

        if (fits) {
            best = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    el.style.fontSize = `${best}px`;
};

interface AutoFitTextProps {
    className?: string;
    max?: number;
    min?: number;
    text: string;
}

const AutoFitText = ({
    className,
    max = 40,
    min = 4,
    text
}: AutoFitTextProps) => {
    const ref = useRef<HTMLSpanElement | null>(null);
    const [isReady, setIsReady] = useState(false);

    useLayoutEffect(() => {
        const el = ref.current;

        if (!el) {
            return;
        }

        const timeoutId = setTimeout(() => {
            fitText(el, max, min);
            setIsReady(true);
        }, 10);

        return () => clearTimeout(timeoutId);
    }, [max, min, text]);

    useLayoutEffect(() => {
        const handleResize = () => {
            const el = ref.current;
            if (el) {
                fitText(el, max, min);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [max, min]);

    return (
        <div className="w-full h-full flex items-center justify-center">
            <span
                className={`${className} text-center ${!isReady ? 'opacity-0' : 'opacity-100'} transition-opacity duration-100`}
                ref={ref}
                style={{
                    wordBreak: "normal",
                    overflowWrap: 'break-word',
                    lineHeight: '1',
                    display: 'inline-block'
                }}
            >
                {text}
            </span>
        </div>
    );
};

export default AutoFitText;