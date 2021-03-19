import { Box, useColorModeValue } from "@chakra-ui/react";
import AddNewListOrItem from "./AddNewListOrItem";
import ListCards from "./ListCards";

type Props = {
  customListName?: string;
};

const Card = ({ customListName }: Props) => {
  // Custom css value depending on the color mode
  // useColorModeValue("light", "dark")
  const boxShadow = useColorModeValue(
    "5px 5px 15px -5px rgba(0, 0, 0, 0.5)",
    "5px 5px 15px -5px rgba(4,16,68,0.5)"
  );
  return (
    <Box
      boxShadow={boxShadow}
      bg={useColorModeValue("white", "viaxco.500")}
      className="box"
    >
      <ListCards customListName={customListName} />
      <AddNewListOrItem customListName={customListName} />
    </Box>
  );
};

export default Card;
