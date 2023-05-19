import ItemIcon from "./Items/ItemIcon";
import ItemInfo from "./Items/ItemInfo";
import ItemCost from "./Items/ItemCost";
import Wrapper from "./Wrappers/Wrapper";
import ItemContainer from "./Wrappers/ItemContainer";
import InfoAlert from "./Alerts/InfoAlert";
import { monthToString } from "../utils/monthToString";
import { getIcons } from "../utils/getIcons";
import { expensesStats } from "../utils/expensesStats";
import { classes } from "../utils/iconClasses";
import { useState, useEffect } from "react";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filter, setFilter] = useState("");
  const [filteredMonths, setFilteredMonths] = useState([]);
  const [monthStats, setMonthStats] = useState([]);

  const handleFilter = (month) => {
    setFilter(month);
    let filteredMonths = props.allExpenses.filter((item) => {
      return monthToString(item.data.date) === month;
    });
    setFilteredMonths(filteredMonths);

    //Calcular estadísticas de ingresos y gastos
    setMonthStats(expensesStats(filteredMonths));
  };

  useEffect(() => {
    //Obtiene la fecha del mes actual y obtiene el nombre del mes
    let currentMonth = monthToString(new Date(Date.now()).toLocaleDateString());
    //Filter by current month
    let expenses = props.allExpenses.filter((item) => {
      return monthToString(item.data.date) === currentMonth;
    });

    let stats = expensesStats(expenses);

    setFilter(currentMonth);
    setFilteredMonths(expenses);
    setMonthStats(stats);
  }, [props.allExpenses]);

  return (
    <>
      <ExpensesFilter
        onFilter={handleFilter}
        stats={monthStats}
        month={filter}
      />
      <Wrapper
        content={
          (filteredMonths.length > 0 &&
            filteredMonths.map((item, index) => {
              return (
                <ItemContainer key={index}>
                  <ItemIcon
                    icons={getIcons(item.category)}
                    classes={classes[item.category]}
                  />
                  <ItemInfo data={item.data} />
                  <ItemCost money={item.money} />
                </ItemContainer>
              );
            })) || <InfoAlert info="No hay gastos registrados" />
        }
      />
    </>
  );
};

export default Expenses;
