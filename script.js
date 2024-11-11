
// Plant data: pH range, temperature range, and corresponding plants
const plantData = [
    { name: "Tomato", phRange: [5.5, 7.0], tempRange: [18, 25] },
    { name: "Lettuce", phRange: [6.0, 7.0], tempRange: [10, 20] },
    { name: "Spinach", phRange: [6.0, 7.5], tempRange: [15, 25] },
    { name: "Cucumbers", phRange: [5.5, 7.0], tempRange: [18, 30] },
    { name: "Carrot", phRange: [6.0, 6.8], tempRange: [10, 20] },
    { name: "Peas", phRange: [6.0, 7.5], tempRange: [10, 18] },
    { name: "Strawberries", phRange: [5.5, 6.5], tempRange: [15, 22] },
    // Add more plants with pH and temperature ranges
];

function findPlants() {
    // Get the input values for pH and temperature
    const ph = parseFloat(document.getElementById('ph').value);
    const temperature = parseFloat(document.getElementById('temperature').value);
    
    // Validate inputs
    if (isNaN(ph) || isNaN(temperature)) {
        alert("Please enter valid values for pH and temperature.");
        return;
    }
    
    // Filter plants based on the conditions entered
    const suitablePlants = plantData.filter(plant => 
        ph >= plant.phRange[0] && ph <= plant.phRange[1] && 
        temperature >= plant.tempRange[0] && temperature <= plant.tempRange[1]
    );
    
    // Display the results
    const plantList = document.getElementById('plant-list');
    plantList.innerHTML = ''; // Clear previous results
    
    if (suitablePlants.length > 0) {
        suitablePlants.forEach(plant => {
            const li = document.createElement('li');
            li.textContent = plant.name;
            plantList.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = "No plants found for these conditions.";
        plantList.appendChild(li);
    }
}
