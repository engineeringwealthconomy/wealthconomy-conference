"use client";

import React, { useEffect, useRef, useState } from "react";

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  threshold?: number;
  rootMargin?: string;
  className?: string;
}

export function Reveal({
  children,
  delay = 0,
  duration = 700,
  threshold = 0.1,
  rootMargin = "0px 0px -40px 0px",
  className = "",
  style,
  ...props
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // If the browser doesn't support IntersectionObserver, reveal immediately
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, [threshold, rootMargin]);

  return (
    <div
      ref={elementRef}
      style={{
        ...style,
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-7"
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
