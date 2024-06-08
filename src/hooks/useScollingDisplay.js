import React, {useState, useEffect} from 'react';

export default function useScrollingDisplay(ref1, ref2, ref3) {

    const [isOnscreen, setIsOnscreen] = useState(false);

  
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        const [entry] = entries;
  
        setIsOnscreen(entry.isIntersecting);
      });
  
      observer.observe(ref.current);
  
      return () => {
        observer.disconnect();
      };
    }, [ref]);
  
    return isOnscreen;
  
}