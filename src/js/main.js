import { initializeMap } from "./mapApi";
import { createChart } from "./mapChart";

const fahrenheitInput = document.getElementById("fahrenheit");
const celsiusInput = document.getElementById("celsius");
const labelFahrenheit = document.getElementById("labelFahrenheit");
const labelCelsius = document.getElementById("labelCelsius");

const updateTextColor = () => {
	if (fahrenheitInput.checked) {
		labelFahrenheit.style.color = "black";
		labelCelsius.style.color = "white";
	} else {
		labelFahrenheit.style.color = "white";
		labelCelsius.style.color = "black";
	}
};

updateTextColor();

fahrenheitInput.addEventListener("change", updateTextColor);
celsiusInput.addEventListener("change", updateTextColor);

initializeMap();
createChart();
