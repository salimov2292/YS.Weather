import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import { fromLonLat } from "ol/proj";
import { apply } from "ol-mapbox-style";

export function initializeMap() {
	const styleURL = "mapbox://styles/ys2292/clo1fbo2w00a501qx94k1apli";
	const accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

	const mapPromise = apply("map", styleURL, {
		accessToken: accessToken,
	});

	mapPromise.then(function (map) {
		map.setView(
			new View({
				center: fromLonLat([37.6176, 55.7558]),
				zoom: 10,
			}),
		);

		const weatherLayer = new TileLayer({
			source: new XYZ({
				url: `https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${
					import.meta.env.VITE_OPENWEATHERMAP_API_KEY
				}`,
				attributions: ['Weather data © <a href="https://openweathermap.org/">OpenWeatherMap</a>'],
			}),
			opacity: 0,
		});

		map.addLayer(weatherLayer);

		map.on("pointermove", function (e) {
			weatherLayer.setOpacity(1);
		});

		map.getTargetElement().addEventListener("mouseout", function (e) {
			weatherLayer.setOpacity(0);
		});
	});
}
