"use client"
import React, { useState, useEffect } from "react";

interface TypingEffectProps {
  text: string;
  initialText?: string
  speed?: number; // Optional prop for typing speed
  delay?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, initialText = "", speed = 100, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
    let index = 0;
    const typingTimeout = setTimeout(() => {
      const typingInterval = setInterval(() => {
        setDisplayedText((prevText) => prevText + text.charAt(index)); // Use charAt() to safely access characters
        index += 1;

        if (index === text.length) {
          clearInterval(typingInterval); // Stop once full text is typed
        }
      }, speed);

      return () => clearInterval(typingInterval); // Cleanup on component unmount
    }, delay);

    return () => clearTimeout(typingTimeout); // Cleanup on component unmount
  }, [text, speed, delay]);

  return <div className="text-center">{initialText} {displayedText}</div>;
};

export default TypingEffect;

