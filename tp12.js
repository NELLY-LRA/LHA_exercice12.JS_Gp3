document.getElementById("generateTable").addEventListener("click", function () {
  const dimension = parseInt(document.getElementById("dimension").value);
  const minValue = parseInt(document.getElementById("minValue").value);
  const maxValue = parseInt(document.getElementById("maxValue").value);
  const errorElement = document.getElementById("error");
  const tableContainer = document.getElementById("tableContainer");

  errorElement.textContent = "";
  tableContainer.innerHTML = "";

  // Validation des champs
  if (isNaN(dimension) || isNaN(minValue) || isNaN(maxValue)) {
    errorElement.textContent = "Veuillez entrer uniquement des nombres entiers.";
    return;
  }

  if (minValue >= maxValue) {
    errorElement.textContent = "La valeur minimale doit être inférieure à la valeur maximale.";
    return;
  }

  if (dimension <= 0) {
    errorElement.textContent = "La dimension du tableau doit être un nombre positif.";
    return;
  }

  // Génération du tableau
  const table = document.createElement("table");
  table.className = "table table-bordered text-center";
  const values = {};
  let row;

  for (let i = 0; i < dimension; i++) {
    if (i % 10 === 0) {
      row = table.insertRow();
    }
    const cell = row.insertCell();
    const value = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    cell.textContent = value;

    // Compteur des valeurs
    if (values[value]) {
      values[value]++;
    } else {
      values[value] = 1;
    }
    // Ajout d'un indicateur de répétition
    cell.innerHTML = `
      <span>${value}</span>
      <span class="count">${values[value]}</span>
    `;
  }

  // Réaffichage des répétitions dans chaque cellule
  const cells = table.getElementsByTagName("td");
  for (let cell of cells) {
    const cellValue = parseInt(cell.textContent);
    cell.querySelector(".count").textContent = values[cellValue];
  }

  tableContainer.appendChild(table);
});
