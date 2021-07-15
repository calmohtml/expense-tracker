"use strict";

const form = document.querySelector("#form");
let acumIncome = 0;
let acumExpense = 0;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (form.quantity.value === "") {
    return console.log("Error: Insert a number");
  }

  let parsedValue = parseInt(form.quantity.value);
  let typeOfQuantity = form.typeOfQuantity.value;
  let descriptionValue = form.description.value;
  let description =
    descriptionValue.charAt(0).toUpperCase() + descriptionValue.slice(1);

  let totalIncome = document.querySelector("#totalIncome");
  let totalExpense = document.querySelector("#totalExpense");
  let balanceTotal = document.querySelector("#balanceTotal");

  if (typeOfQuantity == "income") {
    let ul = totalIncome.querySelector("ul");
    ul.insertAdjacentHTML(
      "beforeend",
      `
      <li>
        <h3>
          ${description}: $${parsedValue}
        </h3>
      </li>
    `
    );
    acumIncome += parsedValue;
  } else {
    let ul = totalExpense.querySelector("ul");
    ul.insertAdjacentHTML(
      "beforeend",
      `
      <li>
        <h3>
          ${description}: $${parsedValue}
        </h3>
      </li>
    `
    );
    acumExpense += parsedValue;
  }

  balanceTotal.innerHTML = `<h2>Total: $${acumIncome - acumExpense}</h2>`;
});
