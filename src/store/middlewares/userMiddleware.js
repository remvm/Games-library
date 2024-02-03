import { createListenerMiddleware } from "@reduxjs/toolkit";
import { removeUser, setUser } from "../reducers/userSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: setUser,
  effect: (action) => {
    toast.success(`User ${action.payload.email} logged in`);
  },
});

listenerMiddleware.startListening({
  actionCreator: removeUser,
  effect: () => {
    toast.success("Logged Out");
  },
});
