const form = document.getElementById("gymForm");
function showMsg(id, msg, valid=false) {
  const el = document.getElementById(id);
  el.textContent = msg;
  el.className = valid ? "valid" : "invalid";
}
document.getElementById("name").oninput = e=>{
  const v = e.target.value.trim();
  showMsg("nameMsg", /^[A-Za-z ]{3,}$/.test(v) ? "✅ Looks good" : "❌ Only letters, min 3 chars", /^[A-Za-z ]{3,}$/.test(v));
};
document.getElementById("email").oninput = e=>{
  const v = e.target.value;
  showMsg("emailMsg", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "✅ Valid" : "❌ Invalid email", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));
};
document.getElementById("age").oninput = e=>{
  const v = e.target.value;
  showMsg("ageMsg", v>=18 && v<=60 ? "✅ Valid age" : "❌ 18–60 only", v>=18 && v<=60);
};
document.getElementById("membership").onchange = e=>{
  showMsg("memberMsg", e.target.value ? "✅ Selected" : "❌ Choose a plan", !!e.target.value);
};
document.getElementById("password").oninput = e=>{
  const v = e.target.value;
  const strong = /[A-Z]/.test(v)&&/[a-z]/.test(v)&&/\d/.test(v)&&/[!@#$%^&*]/.test(v)&&v.length>=6;
  showMsg("passMsg", strong ? "✅ Strong password" : "❌ Must have A,a,1,special", strong);
};
document.getElementById("cpassword").oninput = e=>{
  const match = e.target.value === document.getElementById("password").value;
  showMsg("cpassMsg", match ? "✅ Match" : "❌ Mismatch", match);
};
document.getElementById("phone").oninput = e=>{
  showMsg("phoneMsg", /^\d{10}$/.test(e.target.value) ? "✅ Valid" : "❌ 10 digits only", /^\d{10}$/.test(e.target.value));
};
document.getElementById("dob").onchange = e=>{
  const dob = new Date(e.target.value);
  showMsg("dobMsg", dob < new Date() ? "✅ Valid DOB" : "❌ Future date not allowed", dob < new Date());
};
document.getElementById("photo").onchange = e=>{
  const f = e.target.files[0];
  if(!f) return;
  const valid = (/\.(jpg|png)$/i).test(f.name) && f.size <= 1024*1024;
  showMsg("photoMsg", valid ? "✅ OK" : "❌ JPG/PNG ≤1MB", valid);
};
form.onsubmit = e=>{
  e.preventDefault();
  const genderChecked = [...document.getElementsByName("gender")].some(r=>r.checked);
  const terms = document.getElementById("terms").checked;
  showMsg("genderMsg", genderChecked?"✅ Selected":"❌ Select gender", genderChecked);
  showMsg("termsMsg", terms?"✅ Accepted":"❌ Must accept", terms);
  const allValid = [...document.querySelectorAll("span")].every(s=>s.className==="valid");
  document.getElementById("result").textContent = allValid ? "✅ Form submitted successfully! Welcome to FitZone Gym." : "❌ Please fix errors.";
};
form.onreset = ()=>{ 
  document.querySelectorAll("span").forEach(s=>s.textContent=""); 
  document.getElementById("result").textContent=""; 
};