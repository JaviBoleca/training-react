import "./InputExpenses.css";
import { useState } from "react";
import { faCircle, faPlus } from "@fortawesome/free-solid-svg-icons";
import { classes } from "../utils/iconClasses";
import ItemIcon from "./Items/ItemIcon";
import Wrapper from "./Wrappers/Wrapper";

const InputExpenses = (props) => {
  const [expense, setNewExpense] = useState({
    title: "",
    amount: 0,
    category: "incoming",
    isIncome: false,
  });

  const [visible, setVisible] = useState(true);

  const handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setNewExpense({ ...expense, [name]: value }); // [name] is a dynamic key y ... conserva el resto de expense
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onNewExpense(expense); //Envía el valor de expense al componente padre
    setNewExpense({
      title: "",
      amount: 0,
      category: "incoming",
      isIncome: false,
    }); //Resetea la variable inicial para seguir añadiendo gastos
  };

  const handleVisible = (e) => {
    e.stopPropagation();
    setVisible(!visible); //Cambia el estado de visible - toggle
  };

  return (
    <Wrapper
      content={
        <form onSubmit={handleSubmit} className="new-expense">
          <ItemIcon
            onClick={handleVisible}
            icons={[faCircle, faPlus]}
            classes={classes.insurance}
            size="fa-2x"
          />
          <h2>Input Expense</h2>
          <div className={`form-container ${!visible && "hidden"}`}>
            <label htmlFor="title">
              <h3>TITLE</h3>
            </label>
            <input
              type="text"
              onChange={handleInputChange}
              name="title"
              id="title"
              value={expense.title}
            />
          </div>
          <div className={`form-container ${!visible && "hidden"}`}>
            <label htmlFor="amount">
              {" "}
              {/*información adicional asociada al id del input*/}
              <h3>AMOUNT</h3>
            </label>
            <input
              type="number"
              onChange={handleInputChange}
              name="amount"
              id="amount"
              value={expense.amount}
              max={10000}
              min={1}
              step={0.1} //Incremento con las flechas
            />
          </div>
          <div className={`form-container ${!visible && "hidden"}`}>
            <label htmlFor="category">
              {" "}
              {/*información adicional asociada al id del input*/}
              <h3>CATEGORY</h3>
            </label>
            <select
              onChange={handleInputChange}
              name="category"
              id="category"
              value={expense.category}
            >
              <option value="incoming">incoming</option>
              <option value="transfer">transfer</option>
              <option value="car">car</option>
              <option value="bizum">bizum</option>
              <option value="bill">bill</option>
              <option value="electricity">electricity</option>
            </select>
          </div>
          <div
            className={`form-container income-container ${
              !visible && "hidden"
            }`}
          >
            <label>
              {" "}
              <h3>IS INCOME</h3>
              <input
                type="checkbox"
                onChange={handleInputChange}
                name="isIncome"
                checked={expense.isIncome}
              />
              <span className="checkmark" aria-hidden="true"></span>
            </label>
          </div>
          <button className={`${!visible && "hidden"}`}>Add Record</button>
        </form>
      }
    />
  );
};

export default InputExpenses;
