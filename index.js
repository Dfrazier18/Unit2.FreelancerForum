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

function MakeFreelancer() {
  const freelancerName = NAMES[Math.floor(Math.random() * NAMES.length)];
  const freelancerOccupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const freelancerRate =
    PRICE_RANGE[Math.floor(Math.random() * PRICE_RANGE.length)];
  return { freelancerName, freelancerOccupation, freelancerRate };
}

// === Components ===

// === Render ===

/*function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
  <h1>Freelancer Forum</h1>
  <FreelancerCards></FreelancerCards>
  `;
}
*/
