import getIncomeExpense from "@/actions/getIncomeExpense";
import { addSpace } from "@/lib/utils";

const IncomeExpense = async () => {
  const { income, expense } = await getIncomeExpense();

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{addSpace(Number(income?.toFixed(2)))}€</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{addSpace(Number(expense?.toFixed(2)))}€</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
