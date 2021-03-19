import { useSelector } from "react-redux";
import { State } from "../redux/store";
import { Box, Heading } from "@chakra-ui/react";
import { Route, Switch } from "react-router-dom";

const Header = () => {
  const { today } = useSelector((state: State) => state.lists);
  const { listTitle } = useSelector((state: State) => state.items);

  return (
    <Box
      boxShadow="3px 3px 5px 0px rgba(4,16,68,0.5)"
      bg="main.blue"
      textAlign="center"
      className="box"
    >
      <Heading as="h1" color="white" p="10px">
        <Switch>
          <Route path="/:customListName">{listTitle}</Route>
          <Route path="/">{today}</Route>
        </Switch>
      </Heading>
    </Box>
  );
};

export default Header;
