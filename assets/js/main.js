// Grundumsatz bei Männern (Kalorien je Tag)
// 66.47 + (13.7 * Körpergewicht in kg) + (5 * Körpergröße in cm) – (6.8 * Alter in Jahren) = Grundumsatz
// Grundumsatz bei Frauen (Kalorien je Tag)
// 655.1 + (9.6 * Körpergewicht in kg) + (1.8 * Körpergröße in cm) – (4.7 * Alter in Jahren) = Grundumsatz
// Achtung: Das Ergebnis wird in Kilokalorien ausgegeben!

// Um den Gesamtumsatz auszurechnen, sollte der PAL-Faktor (PAL=Physical Activity Level) mit dem Grundumsatz multipliziert werden.

const bodyHeight = document.body.querySelector("#bodyheight");
const age = document.body.querySelector("#age");
const weight = document.body.querySelector("#weight");
const select = document.body.querySelector("#select");

const female = document.body.querySelector("#female");
const male = document.body.querySelector("#male");

const output = document.body.querySelector(".output");
const outputSum = document.body.querySelector(".outputSum");
const outputKjl = document.body.querySelector(".outputKjl");
const outputSumKjl = document.body.querySelector(".outputSumKjl");
const outputFail = document.body.querySelector(".outputFail");

const check = () => {
  if (female.checked == true) {
    const resultKcal =
      655.1 + (9.6 * weight.value + 1.8 * bodyHeight.value - 4.7 * age.value);

    const resultSum = resultKcal * select.value;
    const resultKjl = resultKcal * 4.1868;
    const resultSumKjl = resultSum * 4.1868;

    output.textContent = ` ${resultKcal.toFixed(2)}`;
    outputSum.textContent = ` ${resultSum.toFixed(2)} `;
    outputKjl.textContent = ` ${resultKjl.toFixed(2)} `;
    outputSumKjl.textContent = ` ${resultSumKjl.toFixed(2)} `;
  } else if (male.checked == true) {
    const resultKcal =
      66.47 + 13.7 * weight.value + 5 * bodyHeight.value - 6.8 * age.value;

    const resultSum = resultKcal * select.value;
    const resultKjl = resultKcal * 4.1868;
    const resultSumKjl = resultSum * 4.1868;

    output.textContent = ` ${resultKcal.toFixed(2)} `;
    outputSum.textContent = ` ${resultSum.toFixed(2)} `;
    outputKjl.textContent = ` ${resultKjl.toFixed(2)} `;
    outputSumKjl.textContent = ` ${resultSumKjl.toFixed(2)} `;
  } else {
    outputFail.textContent = "*Bitte vervöllständige deine Eingabe*";
    outputFail.style.color = "red";
  }
};
