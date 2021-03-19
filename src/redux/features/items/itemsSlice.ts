import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch } from "../../store";

// Item type
export type Item = {
  _id?: string;
  task: string;
  completed: boolean;
};

// Slice state
export type ItemSlice = {
  items: Item[];
  listTitle: string;
  listIsLoading: boolean;
  adding: boolean;
};

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: [] as Item[],
    listTitle: "",
    listIsLoading: true,
    adding: null as boolean | null,
  } as ItemSlice,
  reducers: {
    itemsReceived(state, { payload: { items, listTitle } }) {
      state.listIsLoading = false;
      state.items = items as Item[];
      state.listTitle = listTitle as string;
    },
    itemAdded(state, { payload: item }) {
      state.items.push(item);
    },
    itemDeleted(state, { payload: id }) {
      state.items = state.items.filter(item => item._id !== id);
    },
    itemCompletedToggled(state, { payload: { item, index } }) {
      state.items[index] = item as Item;
    },
    setListIsLoading(state, { payload: value }) {
      state.listIsLoading = value as boolean;
    },
    setAdding(state, action) {
      state.adding = action.payload as boolean;
    },
  },
});

export const getItems = (customListName: string) => async (
  dispatch: AppDispatch
) => {
  const res = await axios.get(`/api/${customListName}`);
  const { items, listTitle } = res.data;
  dispatch(itemsReceived({ items, listTitle }));
};

export const addItem = (customListName: string, name: string) => async (
  dispatch: AppDispatch
) => {
  const res = await axios.post(
    `/api/${customListName}`,
    { text: name },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const { item } = res.data;
  dispatch(itemAdded(item));
  dispatch(setAdding(false));
};

export const deleteItem = (customListName: string, id: string) => async (
  dispatch: AppDispatch
) => {
  dispatch(itemDeleted(id));
  await axios.delete(`/api/${customListName}/${id}`);
};

export const toggleItemCompleted = (
  customListName: string,
  id: string,
  index: number,
  checked: boolean
) => async (dispatch: AppDispatch) => {
  const res = await axios.patch(`/api/${customListName}/${id}`, {
    completed: checked,
  });
  const items: Item[] = res.data.items;
  const item = items.find(item => item._id === id);
  dispatch(itemCompletedToggled({ item, index }));
};

export const {
  itemsReceived,
  itemAdded,
  itemDeleted,
  itemCompletedToggled,
  setListIsLoading,
  setAdding,
} = itemsSlice.actions;
export default itemsSlice.reducer;
