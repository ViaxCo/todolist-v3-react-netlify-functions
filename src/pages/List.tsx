import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../redux/features/items/itemsSlice";
import { setHomeIsLoading } from "../redux/features/lists/listsSlice";
import { State } from "../redux/store";
import Header from "../components/Header";
import HeaderTwo from "../components/HeaderTwo";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { Link, Spinner, useColorMode } from "@chakra-ui/react";
import { Link as RouterLink, useParams } from "react-router-dom";
import { motion } from "framer-motion";

// Define interface for url parameter
interface ParamsTypes {
  customListName: string;
}

const List = () => {
  // Get the url parameter (/:customListName) value
  const { customListName } = useParams<ParamsTypes>();
  // useColorMode for color mode check
  const { colorMode } = useColorMode();

  const dispatch = useDispatch();
  const { listIsLoading } = useSelector((state: State) => state.items);

  useEffect(() => {
    dispatch(getItems(customListName));
  }, [dispatch, customListName]);
  return (
    <>
      {/* Show spinner when fetching Items */}
      {listIsLoading ? (
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
            <Link
              as={RouterLink}
              to="/"
              style={{ textDecoration: "none" }}
              onClick={() => dispatch(setHomeIsLoading(true))}
            >
              <Header />
            </Link>
            <HeaderTwo customListName={customListName} />
            <Card customListName={customListName} />
          </motion.div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default List;
