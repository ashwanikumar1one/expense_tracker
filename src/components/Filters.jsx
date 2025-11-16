import React from "react";
import categories from "../util/categories";
import DateRangePicker from "./DateRangePicker";

function Filters({ setFilter }) {
  function onDatePick({ from, to }) {
    if ((from && to) || (!from && !to)) {
      setFilter((prev) => ({
        ...prev,
        dateRange: {
          from: from,
          to: to,
        },
      }));
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="container">
      <section className="filter-section">
        <div className="filter">
          <label htmlFor="type">Type</label>
          <select name="type" id="type" onChange={handleChange}>
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <div className="filter">
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            placeholder="Select Category"
            onChange={handleChange}
          >
            {categories.map((category) => {
              return (
                <option key={category} value={category}>
                  {category}
                </option>
              );
            })}
          </select>
        </div>
        <div className="filter">
          <label>Sort by Date</label>
          <DateRangePicker datePick={onDatePick} />
        </div>
      </section>
    </div>
  );
}

export default Filters;
