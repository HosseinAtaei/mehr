"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/authSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import back from "../../public/images/back.svg";
import logo from "../../public/images/logo.svg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const { isLoading, error, role } = useSelector((state) => state.auth);

  const handleLogin = () => {
    dispatch(loginUser({ username, password }))
      .unwrap()
      .then(() => {
        toast.success("ورود با موفقیت انجام شد!");
      })
      .catch((err) => {
        toast.error(err || "خطا در ورود به سیستم");
      });
  };

  return (
    <div>
      <ToastContainer />
      <div
        className="w-full bg-cover h-[430px] pt-8"
        style={{ backgroundImage: "url('/images/login-header.svg')" }}
      >
        <div className="pr-11 pb-20 flex gap-6 items-center">
          <Image src={logo} alt="Logo" className="w-6 h-6" />
          <h1 className="font-bold text-base lg:text-lg">صندوق قرض الحسنه مهر</h1>
        </div>
        <div className="bg-white w-full max-w-lg lg:max-w-2xl mx-auto rounded-xl p-8 shadow-xl flex flex-col justify-center items-center space-y-6">
          <div className="flex justify-between items-center w-full">
            <h2 className="text-[#4FD1C5] text-lg lg:text-xl">وارد کردن نام کاربری</h2>
            <Link href="/" className="flex items-center text-sm lg:text-base">
              بازگشت
              <Image src={back} alt="Back" className="h-5" />
            </Link>
          </div>

          <p className="text-[#999999] text-sm text-center py-8">
            برای وارد شدن به صندوق لطفا نام کاربری و رمز عبوری که از قبل در اختیار شما داده شده است را وارد کنید
          </p>

          <div className="w-full space-y-3 px-10">
            <input
              type="text"
              placeholder="نام کاربری"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="rounded-xl border-2 border-[#E2E8F0] w-full h-12 px-4 focus:outline-none"
            />
            <p className="text-xs pb-8 text-[#999999]">نام کاربری شما شماره ملی شما است</p>
            <input
              type="password"
              placeholder="رمز عبور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-xl border-2 border-[#E2E8F0] w-full h-12 px-4 focus:outline-none"
            />
            <p className="text-xs pb-8 text-[#999999]">رمز ورود شخصی خود را وارد کنید</p>
          </div>

          <button
            onClick={handleLogin}
            className="bg-[#4FD1C5] text-white w-1/3 h-12 rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
          >
            {isLoading ? "در حال ورود..." : "ورود"}
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
