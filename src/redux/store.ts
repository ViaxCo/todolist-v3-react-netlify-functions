import { configureStore } from "@reduxjs/toolkit";
import listsReducer, { ListSlice } from "./features/lists/listsSlice";
import itemsReducer, { ItemSlice } from "./features/items/itemsSlice";

// State type
export type State = {
  lists: ListSlice;
  items: ItemSlice;
};

const store = configureStore({
  reducer: {
    lists: listsReducer,
    items: itemsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;
