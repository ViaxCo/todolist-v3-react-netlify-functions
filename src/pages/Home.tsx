import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLists } from "../redux/features/lists/listsSlice";
import { State } from "../redux/store";
import Header from "../components/Header";
import HeaderTwo from "../components/HeaderTwo";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { Spinner, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Home = () => {
  // useColorMode for color mode check
  const { colorMode } = useColorMode();

  const dispatch = useDispatch();
  const { homeIsLoading } = useSelector((state: State) => state.lists);

  useEffect(() => {
    dispatch(getLists());
  }, [dispatch]);
  return (
    <>
      {/* Show spinner when fetching Lists */}
      {homeIsLoading ? (
        <Spinner
          color={colorMode === "light" ? "main.blue" : "viaxco.50"}
          size="xl"
          thickness="4px"
          position="absolute"
          top="-35%"
          left="0"
          bottom="0"
          right="0"
          margin="auto"
        />
      ) : (
        <div
          style={{ position: "relative", overflow: "hidden" }}
          className="container"
        >
          <motion.div
            initial={{ y: -20, opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.2,
            }}
          >
            <Header />
            <HeaderTwo />
            <Card />
          </motion.div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
