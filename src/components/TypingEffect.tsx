"use client"
import React, { useState, useEffect } from "react";

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

  useEffect(() => {
    // Reset displayed text when component mounts or props change
    setDisplayedText("");
    
    let typingInterval: NodeJS.Timeout;
    
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
    }, delay);

    // Cleanup function
    return () => {
      clearTimeout(typingTimeout);
      if (typingInterval) {
        clearInterval(typingInterval);
      }
    };
  }, [text, speed, delay]);

  const ComponentTag: any = as;
  return <ComponentTag className={(className ? className + ' ' : '') + "text-center sm:text-left"}>{initialText}{displayedText}</ComponentTag>;
};

export default TypingEffect;

