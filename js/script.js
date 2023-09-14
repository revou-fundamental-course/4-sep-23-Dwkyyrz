
const sideElements = document.querySelectorAll(".side");
const sideInput = document.getElementById("sideInput");
const processDetail = document.querySelector(".process-detail");
const processMessage = document.getElementById("processMessage");
const calculateBtn = document.getElementById("calculateBtn");

function updateSideText(value) {
  sideElements.forEach(function (sideElement) {
    sideElement.textContent = value + " cm";
  });
}

function calculate() {
  const sideLength = parseFloat(sideInput.value);

  if (!isNaN(sideLength) && sideLength > 0) {
    const calcType = document.getElementById("calcType").value;
    const area = sideLength * sideLength;
    const perimeter = 4 * sideLength;
    let resultMessage = "";

    if (calcType === "luas") {
      resultMessage = `Rumus: sisi * sisi <br><br>Luas = ${sideLength} x ${sideLength} = ${area} cm<sup>2</sup>`;
    } else {
      resultMessage = `Rumus: 4*sisi <br><br>Keliling = 4 x ${sideLength} = ${perimeter} cm`;
    }

    processMessage.innerHTML = `Proses Perhitungan:<br>${resultMessage}`;
    processDetail.style.display = "block";
  } else {
    processMessage.innerHTML = "Masukkan panjang sisi yang valid.";
    processDetail.style.display = "block";
  }
}

sideInput.addEventListener("input", function () {
  const value = this.value;
  updateSideText(value);
});


calculateBtn.addEventListener("click", function (e) {
  e.preventDefault();
  calculate();
});
