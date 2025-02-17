import MonthlyChart from "@/components/MonthlyChart";

const page = () => {
  return (
    <div className="pr-8 pt-4">
      <h1 className="text-xl pb-5">مدیریت مالی</h1>
      <div className="w-[1026px] h-[475px] bg-white rounded-md shadow">
        <h1 className="text-center py-7">نمودار موجودی 6ماه اول صندوق</h1>
        <div className="pl-5 pr-3 h-[300px]">
          <MonthlyChart />
        </div>
        <div className="flex items-center justify-around pt-10">
          <p>
            خروجی <span className="text-rose-500">●</span>
          </p>

          <p>
            ورودی <span className="text-blue-500">●</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
