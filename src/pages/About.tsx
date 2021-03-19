import {
  Box,
  Divider,
  Heading,
  Image,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import avatar from "../avatar.png";
import Footer from "../components/Footer";
import ColorModeButton from "../components/ColorModeButton";
import { motion } from "framer-motion";

const About = () => {
  // useColorMode for color mode check and toggle
  const { colorMode } = useColorMode();
  return (
    <div
      style={{ position: "relative", overflow: "hidden" }}
      className="container"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.4,
          delay: 0.3,
        }}
      >
        <Box
          bg={useColorModeValue("white", "main.blue")}
          boxShadow="5px 5px 15px -5px rgba(0, 0, 0, 0.5)"
          textAlign="center"
          display="flex"
          flexDir="column"
          alignItems="center"
          className="box"
        >
          <Heading
            as="h1"
            color={useColorModeValue("main.blue", "white")}
            p="10px"
            fontSize={{ base: "1.5rem", md: "2rem" }}
          >
            About Page.
          </Heading>
          <Divider
            border="none"
            bgColor={useColorModeValue("main.blue", "white")}
            height="2px"
            w="70%"
            m="auto"
            mb={4}
          />
          <ColorModeButton />
          <motion.div
            className="blender about"
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
          <Image src={avatar} alt="Avatar" mt="30px" />
          <Text
            p="20px"
            fontSize="1.2rem"
            fontWeight={400}
            color={useColorModeValue("main.blue", "white")}
          >
            I am a Software Engineer.
          </Text>
        </Box>
      </motion.div>
      <Footer />
    </div>
  );
};

export default About;
