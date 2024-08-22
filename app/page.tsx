import { currentUser } from "@clerk/nextjs/server";
import Guest from "@/components/Guest";
import AddTransactions from "@/components/AddTransactions";
import Balance from "@/components/Balance";
import IncomeExpense from "@/components/IncomeExpense";
import TransactionList from "@/components/TransactionList";

const HomePage = async () => {
  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }

  return (
    <div className="home-div">
      <h2>Welcome, {user.firstName}!</h2>
      <Balance />
      <IncomeExpense />
      <AddTransactions />
      <TransactionList />
    </div>
  );
};

export default HomePage;
