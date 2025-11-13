function displayTable(data) {
  let table = `<table>
      <tr><th>ID</th><th>Name</th><th>Subject</th><th>Marks</th><th>Grade</th></tr>`;
  data.forEach(stu => {
    let rowClass = stu.marks > 90 ? 'highlight' : '';
    table += `<tr class="${rowClass}">
                <td>${stu.id}</td>
                <td>${stu.name}</td>
                <td>${stu.subject}</td>
                <td>${stu.marks}</td>
                <td>${stu.grade}</td>
              </tr>`;
  });
  table += `</table>`;
  document.getElementById("tableContainer").innerHTML = table;
}
document.getElementById("loadFetch").addEventListener("click", () => {
  fetch("students.json")
    .then(res => res.json())
    .then(data => {
      displayTable(data);
      localStorage.setItem("students", JSON.stringify(data));
    })
    .catch(err => console.log("Error:", err));
});
$("#loadJQ").click(function() {
  $.getJSON("students.json", function(data) {
    displayTable(data);
    localStorage.setItem("students", JSON.stringify(data));
  });
});
document.getElementById("showAvg").addEventListener("click", () => {
  let students = JSON.parse(localStorage.getItem("students"));
  if (!students) {
    alert("Please load data first!");
    return;
  }
  let subjects = {};
  students.forEach(s => {
    if (!subjects[s.subject]) subjects[s.subject] = [];
    subjects[s.subject].push(s.marks);
  });
  let output = "<h3>Average Marks Per Subject:</h3>";
  for (let subject in subjects) {
    let total = subjects[subject].reduce((a, b) => a + b, 0);
    let avg = (total / subjects[subject].length).toFixed(2);
    output += `<p>${subject}: ${avg}</p>`;
  }
  document.getElementById("averageOutput").innerHTML = output;
});