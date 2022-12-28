import { useState } from "react";

export default function useHover() {
  const [hovering, setHovering] = useState(false);
  const hoverProps = {
    onMouseEnter: () => setHovering(true),
    onMouseLeave: () => setHovering(false),
  };

  return [hovering, hoverProps];
}
