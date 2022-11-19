import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchCustomers } from "./asyncActions/customers";
import {
  addCustomerAction,
  removeCustomerAction,
} from "./store/customerReducer";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash ** 2 });
  };

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash ** 2 });
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer));
  };

  return (
    <div className="App">
      <div className="money">
        <div className="counter">{cash}</div>
        <div className="btns">
          <button onClick={() => addCash(2)} className="btn">
            Add cash
          </button>
          <button onClick={() => getCash(2)} className="btn">
            Get cash
          </button>
          <button onClick={() => addCustomer(prompt())} className="btn">
            Add customer
          </button>
          <button onClick={() => dispatch(fetchCustomers())} className="btn">
            Get customers
          </button>
        </div>
        {customers.length > 0 ? (
          <div>
            {customers.map((customer, i) => (
              <div key={i} onClick={() => removeCustomer(customer)}>
                {customer.name}
              </div>
            ))}
          </div>
        ) : (
          <div style={{ fontSize: "2rem" }}>No customers</div>
        )}
      </div>
    </div>
  );
}

export default App;
