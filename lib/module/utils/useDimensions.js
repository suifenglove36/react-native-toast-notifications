import { useEffect, useState } from "react";
import { Dimensions } from "react-native";
export function useDimensions() {
  const [dimensions, setDimensions] = useState(Dimensions.get("window"));

  const onChange = ({
    window
  }) => {
    setDimensions(window);
  };

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", onChange);
    return () => subscription.remove();
  }, []);
  return dimensions;
}
//# sourceMappingURL=useDimensions.js.map