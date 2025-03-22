import React, { useEffect, useState } from 'react';

interface TypeWriterProps {
  text: string;
  delay?: number;
  startDelay?: number;
}

const TypeWriter: React.FC<TypeWriterProps> = ({ text, delay = 50, startDelay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Start typing after the initial delay
    const startTimeout = setTimeout(() => {
      setIsTyping(true);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [startDelay]);

  useEffect(() => {
    if (!isTyping) return;

    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(intervalId);
        setIsDone(true);
      }
    }, delay);

    return () => clearInterval(intervalId);
  }, [text, delay, isTyping]);

  return (
    <span className="inline-block">
      {displayText}
      {!isDone && (
        <span className="inline-block w-[2px] h-[1em] bg-current animate-pulse ml-1" />
      )}
    </span>
  );
};

export default TypeWriter;