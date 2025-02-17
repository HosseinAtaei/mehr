import DepositReceipt from "@/components/DepositReceipt";
import MainCard from "@/components/MainCard";
import MonthlyChart from "@/components/MonthlyChart";
import NumbersOfLoanReq from "@/components/NumbersOfLoanReq";
import NumbersOfUsers from "@/components/NumbersOfUsers";
import SupportNotif from "@/components/SupportNotif";
import Welcome from "@/components/Welcome";

const AdminDashboard = () => {
  return (
    <div className="pr-10">
      <Welcome />
      <div className="flex gap-8 pt-7">
        <NumbersOfUsers />
        <NumbersOfLoanReq />
        <MainCard />
      </div>
      <DepositReceipt />
      <div className="flex gap-7 pt-3">
        <div className="w-[558px] h-[479px] bg-white rounded-md shadow">
          <h1 className="p-7">نمودار موجودی 6 ماه اول صندوق</h1>
          <div className="h-[350px] mx-5">
            <MonthlyChart />
          </div>
        </div>
        <SupportNotif />
      </div>
    </div>
  );
};

export default AdminDashboard;
