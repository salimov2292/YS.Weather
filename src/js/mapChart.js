import { Chart } from "chart.js/auto";

export function createChart() {
	const ctx = document.getElementById("myGraphWeather");

	// Данные для графика
	const labels = [
		"Январь",
		"Февраль",
		"Март",
		"Апрель",
		"Май",
		"Июнь",
		"Июль",
		"Август",
		"Сентябрь",
		"Октябрь	",
		"Ноябрь",
		"Декабрь",
	];
	const data = {
		labels: labels,
		datasets: [
			{
				label: "Средняя температура",
				data: [10, 40, 12, 13, 18, 20, 25, 30, 35, 40, 12, 20],
				fill: false,
				borderColor: "#CEE7E6",
				tension: 0.1,
			},
		],
	};

	// Сам график
	new Chart(ctx, {
		type: "line",
		data: data,
		options: {
			maintainAspectRatio: false,
			devicePixelRatio: 2,
			plugins: {
				legend: {
					display: false,
				},
			},
			animations: {
				tension: {
					duration: 1000,
					easing: "easeOutCirc",
					from: 1,
					to: 0,
					loop: true,
				},
			},
			scales: {
				y: {
					type: "linear",
					beginAtZero: true,
				},
			},
		},
	});
}
