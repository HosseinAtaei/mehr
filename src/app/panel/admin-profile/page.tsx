import Image from "next/image";
import pic from "../../../../public/images/employee.svg";

const page = () => {
  return (
    <div className="pr-8 pt-4">
      <h1 className="text-xl pb-5">پروفایل مدیریت</h1>

      <div className="w-[1026px] h-[825px] bg-white rounded-md shadow">
        <div className="flex gap-7 pt-9 justify-center">
          <div className="relative">
            <p className="bg-white absolute -top-3 right-5 px-3">نام</p>
            <input
              type="text"
              className="border-2 border-[#CACACA] focus:outline-[#4FD1C5] rounded-lg w-[440px] py-2"
            />
          </div>

          <div className="relative">
            <p className="bg-white absolute -top-3 right-5 px-3">
              نام خانوادگی
            </p>
            <input
              type="text"
              className="border-2 border-[#CACACA] focus:outline-[#4FD1C5] rounded-lg w-[440px] py-2"
            />
          </div>
        </div>
        <div className="flex gap-7 pt-9 justify-center">
          <div className="relative">
            <p className="bg-white absolute -top-3 right-5 px-3">
              شماره موبایل
            </p>
            <input
              type="number"
              className="border-2 border-[#CACACA] focus:outline-[#4FD1C5] rounded-lg w-[440px] py-2"
            />
          </div>

          <div className="relative">
            <p className="bg-white absolute -top-3 right-5 px-3">کد ملی</p>
            <input
              type="number"
              className="border-2 border-[#CACACA] focus:outline-[#4FD1C5] rounded-lg w-[440px] py-2"
            />
          </div>
        </div>

        <div className="flex justify-center pt-10">
          <button className="bg-[#4FD1C5] w-full lg:w-[350px] h-[50px] text-white flex items-center justify-center rounded-md transition duration-150 active:scale-95">
            ذخیره اطلاعات
          </button>
        </div>

        <div className="flex justify-center pt-10">
          <Image src={pic} alt="Admin" width={521} height={467} />
        </div>
      </div>
    </div>
  );
};

export default page;
