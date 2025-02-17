import NeedHelp from "@/components/NeedHelp";
import NeedLoan from "@/components/NeedLoan";
import UserMoneyManagement from "@/components/UserMoneyManagement";
import WalletCard from "@/components/WalletCard";
import Welcome from "@/components/Welcome";

const UserDashboard = () => {
  return (
    <div className="pr-10">
      <Welcome />
      <div className="flex pt-9 gap-6">
        <UserMoneyManagement />
        <WalletCard />
      </div>
      <div className="flex pt-5 gap-6">
        <NeedLoan />
        <NeedHelp />
      </div>
    </div>
  );
};

export default UserDashboard;
