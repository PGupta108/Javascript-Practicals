   //Example 1: Basic Storage
    function saveData() {
      let name = document.getElementById("username").value;
      localStorage.setItem("userName", name);
      sessionStorage.setItem("sessionName", name);
      alert("Data saved successfully!");
    }
    function loadData() {
      let localName = localStorage.getItem("userName");
      let sessionName = sessionStorage.getItem("sessionName");
      document.getElementById("output").innerHTML =
        `LocalStorage: ${localName || 'N/A'} <br> SessionStorage: ${sessionName || 'N/A'}`;
    }
    function clearData() {
      localStorage.removeItem("userName");
      sessionStorage.removeItem("sessionName");
      document.getElementById("output").textContent = "Storage cleared!";
    }
    //Example 2: Theme Switcher
    const body = document.body;
    const themeBtn = document.getElementById("toggleTheme");
    const fontSelect = document.getElementById("fontSizeSelect");

    const savedTheme = localStorage.getItem("theme") || "light";
    body.classList.add(savedTheme);
    themeBtn.textContent = savedTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";

    const savedFont = localStorage.getItem("fontSize") || "medium";
    fontSelect.value = savedFont;
    applyFontSize(savedFont);

    themeBtn.addEventListener("click", () => {
      const newTheme = body.classList.contains("dark") ? "light" : "dark";
      body.className = newTheme;
      localStorage.setItem("theme", newTheme);
      themeBtn.textContent = newTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";
    });
    fontSelect.addEventListener("change", () => {
      const fontSize = fontSelect.value;
      applyFontSize(fontSize);
      localStorage.setItem("fontSize", fontSize);
    });
    function applyFontSize(size) {
      switch(size) {
        case "small": body.style.fontSize = "14px"; break;
        case "medium": body.style.fontSize = "18px"; break;
        case "large": body.style.fontSize = "22px"; break;
      }
    }
    // Example 3: Session Counter
    if (sessionStorage.getItem("visits")) {
      let count = Number(sessionStorage.getItem("visits")) + 1;
      sessionStorage.setItem("visits", count);
    } else {
      sessionStorage.setItem("visits", 1);
    }
    document.getElementById("counter").textContent =
      `You have refreshed this tab ${sessionStorage.getItem("visits")} times.`;
    // Example 4: Form + sessionStorage
    const formInputs = ["name", "email", "message"];
    formInputs.forEach(id => {
      const input = document.getElementById(id);
      input.value = sessionStorage.getItem(id) || "";

      input.addEventListener("input", () => {
        sessionStorage.setItem(id, input.value);
        document.getElementById("formStatus").textContent = "Form data saved temporarily in sessionStorage.";
      });
    });