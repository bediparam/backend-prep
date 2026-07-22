function calculateBMI() {
  const height = Number(document.getElementById("height").value) / 100;
  const weight = Number(document.getElementById("weight").value);
  const bmiP = document.getElementById("bmi");
  let bmi = weight / (height * height);

  bmiP.style.display = "block";
  bmiP.innerText = bmi.toPrecision(4);
}
