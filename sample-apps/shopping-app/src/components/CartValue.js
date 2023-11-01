import { useAppContext } from "../context/AppContext";

const CartValue = () => {
  const { expenses, Location } = useAppContext();
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.unitprice * item.quantity);
  }, 0);

  return (
    <div className="alert alert-primary">
      <span>
        Cart Value: {Location}
        {totalExpenses}
      </span>
    </div>
  );
};

export default CartValue;
