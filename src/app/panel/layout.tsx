"use client";
import Sidebar from "@/components/Sidebar";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

const layout = ({ children }) => {
  return (
    <div className="flex">
      <Provider store={store}>
        <div className="w-1/5 text-[#A0AEC0]">
          <Sidebar />
        </div>
        <div className="bg-[#F8F9FA] w-4/5 p-6 overflow-y-auto">{children}</div>
      </Provider>
    </div>
  );
};

export default layout;
