//your JS code here. If required.
// Function to create a promise that resolves after a random time between min and max seconds
function createRandomPromise(min, max) {
  const randomTime = Math.random() * (max - min) + min;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(randomTime.toFixed(3));
    }, randomTime * 1000);
  });
}

// Function to update the table with the results after promises resolve
function updateTable(results) {
  const tableBody = document.getElementById("output");

  // Remove loading text
  tableBody.innerHTML = "";

  // Populate the table
  results.forEach((result, index) => {
    const row = tableBody.insertRow();

    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    if (index === results.length - 1) {
      // Total row
      cell1.innerHTML = "Total";
      cell2.innerHTML = result + "s";
    } else {
      // Promise rows
      cell1.innerHTML = "Promise " + (index + 1);
      cell2.innerHTML = result + "s";
    }
  });
}

// Array to store promises
const promises = [
  createRandomPromise(1, 3),
  createRandomPromise(1, 3),
  createRandomPromise(1, 3),
];

// Add a row with loading text
updateTable(["Loading..."]);

// Wait for all promises to resolve using Promise.all
Promise.all(promises)
  .then((results) => {
    // Update the table with results after promises resolve
    updateTable(results);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
