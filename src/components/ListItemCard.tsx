import { useDispatch } from "react-redux";
import {
  deleteItem,
  Item,
  toggleItemCompleted,
} from "../redux/features/items/itemsSlice";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  IconButton,
  Checkbox,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { MotionFlex } from "./ListCard";

type Props = {
  item: Item;
  i: number;
  customListName?: string;
};

const ListItemCard = ({ item, i, customListName }: Props) => {
  const [checked, setChecked] = useState(item.completed);

  const dispatch = useDispatch();
  return (
    <motion.div
      layout
      transition={{
        type: "spring",
        stiffness: 600,
        damping: 30,
      }}
    >
      <MotionFlex
        align="center"
        minH="70px"
        borderBottom="1px solid"
        borderColor={useColorModeValue("#f1f1f1", "viaxco.400")}
        // Mount and exit animations of each card
        opacity="0"
        variants={{
          hidden: (i: number) => ({ opacity: 0, y: -50 * i }),
          visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
              delay: i * 0.025,
            },
          }),
          exit: {
            opacity: 0,
            x: -50,
          },
        }}
        initial="hidden"
        animate="visible"
        exit="exit"
        custom={i}
      >
        <Box
          w={{ base: "82%", md: "83%" }}
          cursor="pointer"
          display="flex"
          alignItems="center"
        >
          <Checkbox
            flex="1"
            colorScheme="viaxco"
            p="20px"
            size="lg"
            spacing="2rem"
            fontWeight={400}
            color={useColorModeValue("main.blue", "white")}
            isChecked={checked}
            onChange={() => {
              setChecked(!checked);
              item._id &&
                customListName &&
                dispatch(
                  toggleItemCompleted(customListName, item._id, i, !checked)
                );
            }}
            textDecoration={checked ? "line-through" : undefined}
          >
            {item.task}
          </Checkbox>
        </Box>
        <IconButton
          m="auto"
          aria-label="Delete Item"
          variant="ghost"
          size={useBreakpointValue({ base: "sm", md: "md" })}
          colorScheme="red"
          onClick={() =>
            item._id &&
            customListName &&
            dispatch(deleteItem(customListName, item._id))
          }
          icon={<DeleteIcon />}
        />
      </MotionFlex>
    </motion.div>
  );
};

export default ListItemCard;
