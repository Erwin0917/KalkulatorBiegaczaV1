/* General */
const general = {
	inputCheck(inputs){
		let emptyInputs = [];
		for(let input of inputs){
			if( !(input.value.trim()) ){
				emptyInputs.push(input);
			}
		}
		return emptyInputs;
	},

	alert(text){
		const alertBox = document.createElement("div");
		alertBox.classList.add("modal__alert");

		alertBox.innerHTML = `<h2>${text}</h2><button class="alert__btn">OK</button>`;

		document.body.appendChild(alertBox);

		const closeBtn = document.querySelector(".modal__alert .alert__btn");
		closeBtn.addEventListener("click", (e) => alertBox.remove() );
	},

	setValColor(input){
		input.style.color = "#55ff2b";
	},

	onlyNumber(value){
		if( /[a-z]/i.exec(value) ){
			general.alert("Podaj samą liczbę");
			return false;
		}
		return true;
	},

	replaceToDot(value){
		if(/[:;.,]/.exec(value)) return value.replace(/[:;.,]/, ".");

		return value;
	}
}

export default general;