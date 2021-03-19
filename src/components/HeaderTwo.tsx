import {
  Box,
  Heading,
  HStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import ColorModeButton from "./ColorModeButton";
import { motion } from "framer-motion";

type Props = {
  customListName?: string;
};

const HeaderTwo = ({ customListName }: Props) => {
  // useColorMode for color mode check and toggle
  const { colorMode } = useColorMode();
  // Custom css value depending on the color mode
  // useColorModeValue("light", "dark")
  const boxShadow = useColorModeValue(
    "4px 4px 8px -2px rgba(0, 0, 0, 0.3)",
    "4px 4px 8px -2px rgba(4,16,68,0.5)"
  );

  return (
    <Box
      m="-10px auto -20px auto"
      borderRadius="5px"
      boxShadow={boxShadow}
      bg={useColorModeValue("white", "main.blue")}
      textAlign="center"
      p="10px 20px 10px 20px"
      w="fit-content"
    >
      <HStack spacing={4}>
        <Heading
          color={useColorModeValue("main.blue", "white")}
          fontSize="1.5rem"
        >
          Your {customListName ? "Items" : "Lists"}
        </Heading>
        <ColorModeButton />
        <motion.div
          className="blender main"
          variants={{
            light: {
              transform: "scale(0)",
              opacity: 0.5,
              transition: { ease: "easeInOut", duration: 0.4 },
            },
            dark: {
              transform: "scale(60)",
              opacity: 0,
              transition: { ease: "easeInOut", duration: 0.6 },
            },
          }}
          initial={{ opacity: 0, transform: "scale(0)" }}
          animate={colorMode === "light" ? "light" : "dark"}
        ></motion.div>
      </HStack>
    </Box>
  );
};

export default HeaderTwo;
