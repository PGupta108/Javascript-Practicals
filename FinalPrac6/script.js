const resume1 = `
   Name:   jOhN    doE   
   Email:   john.doe@Example.com    
   Phone:  9876543210  
   Skills:   HTML, CSS,   JavaScript,  Python,   SQL    
   Extra: Contact me at john.altmail@example.org 
   #developer #coder
`;
document.getElementById('resume').value = resume1;
function formatName(rawName) {
    if (!rawName) return "";
    let name = rawName.trim().replace(/\s+/g, ' ');
    name = name.toLowerCase();
    const capitalizePart = (part) => {
        return part.split(/([\'\-])/).map(seg => {
            if (seg === "'" || seg === "-") return seg;
            return seg.charAt(0).toUpperCase() + seg.slice(1);
        }).join('');
    };
    return name.split(' ').map(w => capitalizePart(w)).join(' ');
}
    function extractEmails(text) {
      if (!text) return [];
      const re = /[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/g;
      const matches = text.match(re) || [];
      return matches.map(e => e.toLowerCase());
    }
    function validateMobile(number) {
      if (!number) return "Invalid phone number";
      const digits = number.replace(/\D/g, '');
      if (/^[6-9]\d{9}$/.test(digits)) return digits;
      return "Invalid phone number";
    }
    function processSkills(rawSkills) {
      if (!rawSkills) return [];
      const s = rawSkills.replace(/^[^\:]*:\s*/i, '').trim();
      if (!s) return [];
      return s.split(',').map(x => x.trim()).filter(x => x.length>0);
    }
    function extractHashtags(text) {
      if (!text) return [];
      const re = /#\w[\w\-]*/g;
      const matches = text.match(re) || [];
      return matches;
    }
    function countWords(text) {
    if (!text) return 0;
    const cleaned = text.replace(/\s+/g, ' ').trim();
    if (!cleaned) return 0;
    const arr = cleaned.match(/[\w']+/g) || [];
    return arr.length;
    }
    function countVowels(text) {
      if (!text) return 0;
      const matches = text.match(/[aeiou]/gi) || [];
      return matches.length;
    }
    function processResume(resumeText) {
      const output = {};
      const nameLine = (resumeText.match(/^\s*Name\s*:\s*(.+)$/im) || [])[1] || '';
      output.name = formatName(nameLine);
      const emails = extractEmails(resumeText);
      output.email = emails.length > 0 ? emails[0] : "";
      output.emailCount = emails.length;
      const phoneLine = (resumeText.match(/^\s*Phone\s*:\s*([^\n\r]+)/im) || [])[1] || '';
      output.phone = validateMobile(phoneLine);
      const skillsLine = (resumeText.match(/^\s*Skills\s*:\s*(.+)$/im) || [])[1] || '';
      output.skills = processSkills(skillsLine);
      output.hashtags = extractHashtags(resumeText);
      output.wordCount = countWords(resumeText);
      output.vowelCount = countVowels(resumeText);

      return output;
    }
    document.getElementById('processBtn').addEventListener('click', () => {
      const input = document.getElementById('resume').value;
      const result = processResume(input);
      document.getElementById('output').textContent = JSON.stringify(result, null, 2);
      console.log(result);
    });
    window.addEventListener('load', () => {
      document.getElementById('processBtn').click();
    });