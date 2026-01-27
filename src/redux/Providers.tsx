"use client";
import { Provider } from "react-redux";
import { store } from "./store";

import AOSInit from "@components/AOSInit";

const Providers = ({ children }: any) => {
  return (
    <Provider store={store}>
      <AOSInit />
      {children}
    </Provider>
  );
};

export default Providers;
