import "../sass/normalize.scss";
import "../sass/style.scss";

import chooseType from './types';




const buttons = document.querySelectorAll("[data-type]");
buttons.forEach(function(btn){
	btn.addEventListener("click", chooseType);
});
