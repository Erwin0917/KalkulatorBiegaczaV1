import general from './general';

/* Multicalculator */

const multicalculator = {
	inputPace: document.querySelector("#ID_input_pace"),
	inputTime: document.querySelector("#ID_input_time"),
	inputDistance: document.querySelector("#ID_input_distance"),

	chooseMethod(emptyInputs){
		if(emptyInputs.length == 3 || emptyInputs.length == 0){
			general.alert("Podaj dwie wartości");
			return;
		}else if(emptyInputs[0].placeholder == "min/km"){
			multicalculator.calculate.pace(multicalculator.inputTime.value, multicalculator.inputDistance.value);

		}else if(emptyInputs[0].placeholder == "min"){
			multicalculator.calculate.time(multicalculator.inputPace.value, multicalculator.inputDistance.value);

		}else multicalculator.calculate.distance(multicalculator.inputPace.value, multicalculator.inputTime.value);

	},

	calculate: {
		pace(time, distance){
			if( !general.onlyNumber(time) || !general.onlyNumber(distance)) return;

			let pace = null;

			time = general.replaceToDot(time);
			distance = general.replaceToDot(distance);

			if( time.split(/[:;.,]/).length >= 2 ){
				time =  typeof time === "number" ? time : parseFloat(time);
				const splitTime = time.toFixed(2).toString().split(".");
				time = parseFloat(splitTime[0]) + (parseFloat(splitTime[1]) /  60)  ;
				time.toFixed(2);
			}

			pace = (time / (distance / 1000)).toFixed(2);

			if( pace.split(".") != 0 ){
				const splitPace = pace.split(".");
				pace = parseFloat(splitPace[0]) + Math.round( 100 * (parseFloat(splitPace[1]) * 0.006) ) / 100 ;
				pace = pace.toFixed(2);
			}

			general.setValColor(multicalculator.inputPace);
			multicalculator.inputPace.value = `${pace.toString().split(".").join(":")} min/km`;
		},
		time(pace, distance){
			if( !general.onlyNumber(pace) || !general.onlyNumber(distance)) return;

			let time = null;

			pace = general.replaceToDot(pace);
			distance = general.replaceToDot(distance);

			if( pace.split(/[:;.,]/).length >= 2 ){
				const split = pace.split(/[:;.,]/);
				split[1] = split[1].length == 1 ? (split[1]*10) : split[1];

				const rest = split[1] / 60;
				pace =  parseFloat(split[0]) + rest;
			}

			time = pace * (distance / 1000);

			general.setValColor(multicalculator.inputTime);
			multicalculator.inputTime.value = `${time.toFixed(2).toString().split(".").join(":")} min`;

		},
		distance(pace, time){
			if( !general.onlyNumber(pace) || !general.onlyNumber(time)) return;

			let distance = null;

			pace = general.replaceToDot(pace);
			time = general.replaceToDot(time);

			if( pace.split(/[:;.,]/).length >= 2 ){
				const splitPace = pace.split(/[:;.,]/);
				splitPace[1] = splitPace[1].length == 1 ? (splitPace[1]*10) : splitPace[1];

				const rest = splitPace[1] / 60;
				pace =  parseFloat(splitPace[0]) + rest;
			}

			if( time.split(/[:;.,]/).length >= 2 ){
				time =  typeof time === "number" ? time : parseFloat(time);

				const splitTime = time.toFixed(2).toString().split(".");
				time = parseFloat(splitTime[0]) + (parseFloat(splitTime[1]) /  60)  ;
				time = time.toFixed(2);
			}

			distance = (time / pace) * 1000;

			general.setValColor(multicalculator.inputDistance);
			multicalculator.inputDistance.value = `${Math.round(distance)} m`;
		}
	}
}

export default multicalculator;