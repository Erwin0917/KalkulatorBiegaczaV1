import general from './general';

/* SpeedToPace */
const speedToPace = {
	inputSpeed: document.querySelector(".speedToPace .speedToPace__input_speed"),

	inputPace: document.querySelector(".speedToPace .speedToPace__input_pace"),

	chooseMethod(emptyInput){

		if(emptyInput.length == 0){
			general.alert("Podaj tylko jedną wartość");
		}else if(emptyInput.length == 2){
			general.alert("Podaj przynajmniej jedną wartość");
		}else if(emptyInput[0].placeholder == "km/h"){
			speedToPace.calculate.speed(speedToPace.inputPace.value);

		}else{
			speedToPace.calculate.pace(speedToPace.inputSpeed.value);
		}

	},
	calculate: {
		speed(pace){
			if( !general.onlyNumber(pace) ) return;

			if(pace.split(/[:;.,]/).length >= 2 ){
				const split = pace.split(/[:;.,]/);
				split[1] = split[1].length == 1 ? (split[1]*10) : split[1];
				split[1] = parseFloat(split[1]).toFixed(2);
				const rest = split[1] / 60;
				pace =  parseFloat(split[0]) + rest;
			}
			const speed = (60 / pace).toFixed(2) ;

            general.setValColor(speedToPace.inputSpeed);
			speedToPace.inputSpeed.value = `${speed} km/h`;
		},
		pace(speed){
			if( !general.onlyNumber(speed) ) return;

			if(speed.split(/[:;.,]/).length >= 2 ){
				const split = speed.split(/[:;.,]/);
				split[1] = `0.${split[1]}`
				speed = parseFloat(split[0]) + (parseFloat(split[1]) );
			}

			let pace = 60 / speed;

			const splitPace = pace.toFixed(2).toString().split(".");
			pace = parseFloat(splitPace[0]) + (parseFloat(splitPace[1]) / 10000 * 60)  ;
			pace = pace.toFixed(2);

            general.setValColor(speedToPace.inputPace);
			speedToPace.inputPace.value = `${pace.split(".").join(":")} min/km`;
		}
	}

}

export default speedToPace;