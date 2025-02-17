import { useSelector } from "react-redux";
import AdminPanel from "./AdminPanel";
import UserPanel from "./UserPanel";

const Sidebar = () => {
  const { role } = useSelector((state) => state.auth); // دریافت نقش کاربر از Redux

  return (
    <div className="bg-[#F8F9FA] h-full pr-11">
      {role === "admin" ? (
        // اگر نقش کاربر "admin" بود، AdminPanel نمایش داده می‌شود
        <AdminPanel />
      ) : (
        // اگر نقش کاربر غیر از "admin" باشد، UserPanel نمایش داده می‌شود
        <UserPanel />
      )}
    </div>
  );
};

export default Sidebar;
