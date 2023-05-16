import React from "react";
import { useInView } from "react-intersection-observer";

export const AnimatedItem = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const className = inView ? "fade-in" : "default";
  return (
    <div ref={ref} className={className} style={{ flex: "1 1 25%" }}>
      {children}
    </div>
  );
};
