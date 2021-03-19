import {
  IconButton,
  ChakraProps,
  forwardRef,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  isValidMotionProp,
  motion,
  MotionProps,
  useCycle,
} from "framer-motion";

// Create a custom motion component from IconButton
const MotionIconButton = motion.custom(
  forwardRef<MotionProps & ChakraProps, "button">((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return (
      <IconButton
        aria-label="Toggle Dark and Light"
        ref={ref}
        {...chakraProps}
      />
    );
  })
);

const ColorModeButton = () => {
  // useColorMode for color mode check and toggle
  const { colorMode, toggleColorMode } = useColorMode();
  // useCycle to cycle between different animation states
  const [animate, cycle] = useCycle({ rotate: 0 }, { rotate: 360 });
  return (
    <MotionIconButton
      variant="ghost"
      borderRadius="50%"
      colorScheme="viaxco"
      onClick={toggleColorMode}
      animate={animate}
      onTap={() => cycle()}
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    />
  );
};

export default ColorModeButton;
