"use client"
import React, { useState, useEffect, useRef } from "react";

interface TypingEffectProps {
  text: string;
  initialText?: string
  speed?: number; // Optional prop for typing speed
  delay?: number;
  as?: 'div' | 'span' | 'p' | 'h1' | 'h2' | 'h3';
  className?: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, initialText = "", speed = 100, delay = 0, as = 'div', className = '' }) => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [typedSource, setTypedSource] = useState<string>(text);
  const firstRun = useRef(true);

  // Reset while rendering when `text` changes — React's "adjust some state when
  // a prop changes" pattern. Doing this inside the effect is rejected by
  // react-hooks/set-state-in-effect (eslint-plugin-react-hooks@7).
  if (typedSource !== text) {
    setTypedSource(text);
    setDisplayedText("");
  }

  useEffect(() => {
    let typingInterval: NodeJS.Timeout;

    // Delay only on first mount; re-typed text (e.g. language switch) starts immediately.
    const initialDelay = firstRun.current ? delay : 0;
    firstRun.current = false;

    const typingTimeout = setTimeout(() => {
      typingInterval = setInterval(() => {
        setDisplayedText((prevText) => {
          const newIndex = prevText.length;
          if (newIndex < text.length) {
            return text.substring(0, newIndex + 1);
          }
          clearInterval(typingInterval);
          return prevText;
        });
      }, speed);
    }, initialDelay);

    // Cleanup function
    return () => {
      clearTimeout(typingTimeout);
      if (typingInterval) {
        clearInterval(typingInterval);
      }
    };
  }, [text, speed, delay]);

  const ComponentTag: React.ElementType = as;
  return <ComponentTag className={(className ? className + ' ' : '') + "text-center sm:text-left"}>{initialText}{displayedText}</ComponentTag>;
};

export default TypingEffect;

