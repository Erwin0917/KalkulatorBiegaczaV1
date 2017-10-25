function chooseType(){
	const type = this.dataset.type;

	let emptyInputs;

	switch (type){
	case "speedToPace":
		emptyInputs= general.inputCheck([speedToPace.inputPace, speedToPace.inputSpeed]);
		speedToPace.chooseMethod(emptyInputs);
		break;
	case "multiCalculator":
		emptyInputs = general.inputCheck([multicalculator.inputPace, multicalculator.inputTime, multicalculator.inputDistance,]);
		multicalculator.chooseMethod(emptyInputs);
		break;
	case "HRmax":
		HRmax.initCalc();
		break;
	}
}


const buttons = document.querySelectorAll("[data-type]");
buttons.forEach(function(btn){
	btn.addEventListener("click", chooseType);
});
