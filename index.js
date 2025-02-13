/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

// === State ===

function makeFreelancer() {
  const freelancerName = NAMES[Math.floor(Math.random() * NAMES.length)];
  const freelancerOccupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const freelancerRate =
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) +
    PRICE_RANGE.min;
  return { freelancerName, freelancerOccupation, freelancerRate };
}

const freelancers = Array.from({ length: NUM_FREELANCERS }, makeFreelancer);

// === Components ===

function FreelancerRow(freelancer) {
  const { freelancerName, freelancerOccupation, freelancerRate } = freelancer;

  const $row = document.createElement("section");
  $row.innerHTML = `
  <span id ="name">${freelancerName}</span>
  <span id = "occupation">${freelancerOccupation}</span>
  <span id = "rate">${freelancerRate}</span>
  `;
  return $row;
}

function FreelancerRows() {
  const $rows = document.createElement("article");
  const $freelancers = freelancers.map(FreelancerRow);
  $rows.replaceChildren(...$freelancers);
  return $rows;
}

const averageRate = () => (PRICE_RANGE.min + PRICE_RANGE.max) / 2;

/*function test() {
  const tableBody = document.querySelector("#freelancerRows");

  freelancers.forEach((freelancer) => {
    const row = tableBody.createElement("tr");
  });
  const nameCell = row.createElement("td");
  nameCell.textcontent = freelancers.name;
  row.appendChild(nameCell);

  const occupationCell = row.createElement("td");
  occupationCell.textContent = freelancers.occupation;
  row.appendChild(occupationCell);

  const rateCell = row.createElement("td");
  rateCell.textContent = freelancers.rate;
  row.appendChild(rateCell);

  tableBody.appendChild(row);
}*/

// === Render ===

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
  <h1>Freelancer Forum</h1>
  <p>The average rate is $${averageRate()}</p>
   <table>
   <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Occupation</th>
        <th scope="col">Rate</th>
      </tr>
      </thead>
      <tbody id="freelancerRows"></tbody>
    </table>
  <FreelancerRows></FreelancerRows>
  `;
  $app.querySelector("FreelancerRows").replaceWith(FreelancerRows(freelancers));
}
render();
