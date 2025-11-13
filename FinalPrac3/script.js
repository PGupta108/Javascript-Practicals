let subjects = ["History", "Computers", "Economics"];
let topScore = 0;
let topCard = null;

window.onload = function() {
  document.getElementById("timestamp").innerText = new Date().toLocaleString();

  for (let i = 1; i <= 3; i++) {
    let select = document.getElementById("sub3_" + i);
    for (let j = 0; j < subjects.length; j++) {
      let opt = document.createElement("option");
      opt.value = subjects[j];
      opt.text = subjects[j];
      select.add(opt);
    }
  }
};

function updateSlider(sliderId, displayId) {
  let val = document.getElementById(sliderId).value;
  document.getElementById(displayId).innerText = val;
}

function calculate(num) {
  let name = document.getElementById("name" + num).value;
  let roll = document.getElementById("roll" + num).value;
  let s1 = parseFloat(document.getElementById("s1_" + num).value);
  let s2 = parseFloat(document.getElementById("s2_" + num).value);
  let s3 = parseFloat(document.getElementById("s3_" + num).value);

  if (!name || !roll || isNaN(s1) || isNaN(s2) || isNaN(s3) ||
      s1 < 0 || s1 > 100 || s2 < 0 || s2 > 100 || s3 < 0 || s3 > 100) {
    document.getElementById("result" + num).innerHTML = "<p style='color:red;'>Please enter valid details and marks!</p>";
    return;
  }

  let avg = (s1 + s2 + s3) / 3;
  let grade = "";
  if (avg >= 90) grade = "A+";
  else if (avg >= 80) grade = "A";
  else if (avg >= 70) grade = "B";
  else if (avg >= 60) grade = "C";
  else grade = "F";

  let remark = "";
  switch (true) {
    case avg >= 90: remark = "Outstanding"; break;
    case avg >= 80: remark = "Excellent"; break;
    case avg >= 70: remark = "Good"; break;
    case avg >= 60: remark = "Needs Improvement"; break;
    default: remark = "Fail";
  }

  document.getElementById("result" + num).innerHTML =
    "<p><strong>Average:</strong> " + avg + "</p>" +
    "<p><strong>Grade:</strong> " + grade + "</p>" +
    "<p><strong>Remark:</strong> " + remark + "</p>";

  let currentCard = document.getElementById("card" + num);
  currentCard.classList.remove("highlight");

  if (avg > topScore) {
    if (topCard) topCard.classList.remove("highlight");
    topScore = avg;
    topCard = currentCard;
    topCard.classList.add("highlight");
  }
}