import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { Item } from "../items/itemsSlice";
import { getDay } from "../../../utils/date";
import { AppDispatch } from "../../store";
import history from "../../../utils/history";

const day = getDay();

// List type
export type List = {
  _id?: string;
  name: string;
  items: Item[];
};

// Slice state
export type ListSlice = {
  lists: List[];
  today: string;
  homeIsLoading: boolean;
};

const listsSlice = createSlice({
  name: "lists",
  initialState: {
    lists: [] as List[],
    today: day,
    homeIsLoading: true,
  } as ListSlice,
  reducers: {
    listsReceived(state, { payload: lists }) {
      state.homeIsLoading = false;
      state.lists = lists as List[];
    },
    addList(state, { payload: name }) {
      history.push(`/api/${name}`);
    },
    listDeleted(state, { payload: id }) {
      state.lists = state.lists.filter(list => list._id !== id);
    },
    setHomeIsLoading(state, { payload: value }) {
      state.homeIsLoading = value as boolean;
    },
  },
});

export const getLists = () => async (dispatch: AppDispatch) => {
  const res = await axios.get("/api");
  const lists: List[] = res.data.lists;
  dispatch(listsReceived(lists));
};

export const deleteList = (id: string) => async (dispatch: AppDispatch) => {
  dispatch(listDeleted(id));
  await axios.delete(`/api/${id}`);
};

export const {
  listsReceived,
  addList,
  listDeleted,
  setHomeIsLoading,
} = listsSlice.actions;
export default listsSlice.reducer;
