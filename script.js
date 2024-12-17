// Get references to the buttons and pricing tables
const monthlyButton = document.getElementById("monthly");
const yearlyButton = document.getElementById("yearly");
const monthlyTable = document.getElementById("monthly-table");
const yearlyTable = document.getElementById("year-table");

// Function to toggle active states
function togglePricing(
  activeButton,
  inactiveButton,
  activeTable,
  inactiveTable
) {
  // Activate the clicked button
  activeButton.classList.add("active");
  inactiveButton.classList.remove("active");

  // Show the corresponding pricing table
  activeTable.style.display = "flex";
  inactiveTable.style.display = "none";
}

// Add event listeners to the buttons
monthlyButton.addEventListener("click", () => {
  togglePricing(monthlyButton, yearlyButton, monthlyTable, yearlyTable);
});

yearlyButton.addEventListener("click", () => {
  togglePricing(yearlyButton, monthlyButton, yearlyTable, monthlyTable);
});
