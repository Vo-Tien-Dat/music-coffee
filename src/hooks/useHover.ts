"use client";
import { useState, useEffect, useRef, LegacyRef } from "react";

type HoverState = [boolean, LegacyRef<HTMLDivElement>];

const useHover = (): HoverState => {
  const [isHover, setHovered] = useState(false);
  const hoverRef = useRef<HTMLDivElement>(null);

  function handleMouseOver() {
    setHovered(true);
  }

  function handleMouseOut() {
    setHovered(false);
  }

  useEffect(() => {
    const node = hoverRef.current;
    console.log(node);
    if (node) {
      node.addEventListener("mouseenter", handleMouseOver);
      node.addEventListener("mouseleave", handleMouseOut);

      return () => {
        node.removeEventListener("mouseenter", handleMouseOver);
        node.removeEventListener("mouseleave", handleMouseOut);
      };
    }

    return () => {};
  }, []);

  return [isHover, hoverRef];
};

export default useHover;
