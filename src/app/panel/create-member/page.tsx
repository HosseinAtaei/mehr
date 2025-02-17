const page = () => {
  const Members = [
    {
      name: "امیر قنبری",
      status: "تکمیل شده",
    },
    {
      name: "مبینا قنبری",
      status: "تکمیل شده",
    },
    {
      name: "نگین سعیدی",
      status: "تکمیل شده",
    },
  ];
  return (
    <div className="pr-8 pt-4">
      <h1 className="text-xl pb-5">تعیین رمز برای کاربران</h1>
      <div className="pt-10 h-[305px] w-[1026px] bg-white rounded-md shadow">
        <div className="flex gap-7 justify-center">
          <div className="relative">
            <p className="bg-white absolute -top-3 right-5 px-3">نام کاربری</p>
            <input
              type="text"
              className="border-2 border-[#CACACA] focus:outline-[#4FD1C5] rounded-lg w-[440px] py-2"
            />
          </div>

          <div className="relative">
            <p className="bg-white absolute -top-3 right-5 px-3">
              شماره موبایل
            </p>
            <input
              type="number"
              className="border-2 border-[#CACACA] focus:outline-[#4FD1C5] rounded-lg w-[440px] py-2"
            />
          </div>
        </div>
        <div className="flex justify-center pt-28">
          <button className="bg-[#4FD1C5] w-full lg:w-[350px] h-[56px] text-white flex items-center justify-center rounded-md transition duration-150 active:scale-95">
            ثبت اطلاعات
          </button>
        </div>
      </div>
      <div className="w-[1026px] h-[552px] bg-white mt-5 rounded-md shadow">
        {Members.map((member, index) => (
          <div
            key={index}
            className="flex justify-between px-12 py-6 border-b border-[#0000001A]"
          >
            <p>{member.name}</p>
            <p>{member.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
