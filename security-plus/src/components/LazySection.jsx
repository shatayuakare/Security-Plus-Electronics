// components/LazySection.jsx
import { useEffect, useRef, useState } from "react";

export default function LazySection({
    children,
    minHeight = "300px",
    rootMargin = "300px",
}) {
    const ref = useRef(null);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldRender(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin,
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [rootMargin]);

    return (
        <div
            ref={ref}
            style={{ minHeight }}
        >
            {shouldRender ? children : null}
        </div>
    );
}