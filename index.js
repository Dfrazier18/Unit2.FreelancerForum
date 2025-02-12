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

// === Render ===

/*function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
  <h1>Freelancer Forum</h1>
  <FreelancerCards></FreelancerCards>
  `;
}
*/
