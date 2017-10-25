/* HRmax */

const HRmax = {
    method: null,

    inputAge: document.querySelector("#age"),
    inputWeight: document.querySelector("#weight"),
    isWoman: document.querySelector("#Woman"),
    isMan: document.querySelector("#Man"),

    setMethod(){
        const allDesc = document.querySelectorAll(".HRmax form .desc");
        allDesc.forEach( div => div.classList.add("desc_off"))

        const desc = document.querySelector(`.HRmax form label[for='${this.id}'] .desc`)
        desc.classList.remove("desc_off");

        HRmax.method = this.id;
    },

    initCalc(){
        if(HRmax.method === null) return general.alert("wybierz metodę") ;

        if(document.querySelector(".HRmax__output")) document.querySelector(".HRmax__output").remove()

        if(!HRmax.inputAge.value) return general.alert("Podaj wiek");

        let result = null;

        switch (HRmax.method){
            case "JohnMoores" :
                result = (HRmax.isWoman.checked) ? 216 - (1.09 * parseFloat(HRmax.inputAge.value)) : 202 - (0.55 * parseFloat(HRmax.inputAge.value));
                HRmax.HRresult(Math.round(result));
            break;

            case "Tanaki" :
                result = (HRmax.isWoman.checked) ? 207.2 - (0.65 * parseFloat(HRmax.inputAge.value)) : 209.6 - (0.72 * parseFloat(HRmax.inputAge.value));
                HRmax.HRresult(Math.round(result));
            break;

            case "Foxa" :
                result =  220 -  parseFloat(HRmax.inputAge.value);
                HRmax.HRresult(Math.round(result));
            break;

            case "Sally" :
                if(!HRmax.inputWeight.value) return general.alert("Podaj wagę")
                result = (HRmax.isWoman.checked) ? 210 - ((0.5 * parseFloat(HRmax.inputAge.value)) - ( 0.022 * parseFloat(HRmax.inputWeight.value) )) : 210 - ((0.5 * parseFloat(HRmax.inputAge.value)) - ( 0.022 * parseFloat(HRmax.inputWeight.value) + 4 ));
                HRmax.HRresult(Math.round(result));
            break;
        }
    },

    HRresult(text){
        const output = document.createElement("div");
        output.classList.add("HRmax__output");
        output.innerHTML = `<h2>Twoje HRmax wynosi <span>${text}</span></h2>`;

        document.querySelector(".HRmax").appendChild(output);
    }
}

// set method
const HRmethods = document.querySelectorAll(".HRmax form input[name='HR_type']");

HRmethods.forEach( input => input.addEventListener("change", HRmax.setMethod) );

