(() => {
    const el = id=>
        document.getElementById(id);
    const num = v=>{ 
        const n=Number(v); 
        if(Number.isNaN(n)) 
            throw 'Not a number';
        return n;
    };
    const rev = s=>{ 
        s=String(s).trim();
        const neg=s.startsWith('-');
        let d=(neg?s.slice(1):s).replace(/^0+/, '');
        d=d.split('').reverse().join('')||'0'; 
        return neg?'-'+d:d;
    };
    const isPalindromeNum = s=>
        String(s).trim()===String(rev(s)).trim();
    const clean = s=>
        String(s).toLowerCase().replace(/[^a-z0-9]/g,'');
    const isPalindromeWord = s=>{ 
        const c=clean(s); 
        if(!c) 
            throw 'Nothing to check'; 
        return c===c.split('').reverse().join(''); 
    };
    const sqrtSafe = x=>{ 
        const n=Number(x);
        if(Number.isNaN(n))
            throw 'Invalid';
        if(n<0)
            throw 'Negative';
        return Math.sqrt(n);
    };
    const isPrime = n=>{
        n=Number(n); 
        if(!Number.isInteger(n)||n<2)
            return false;
        if(n%2===0)
            return n===2;
        for(let i=3;i*i<=n;i+=2)
            if(n%i===0)
                return false;
            return true; };
    const fact = n=>{
        n=Number(n);
        if(!Number.isInteger(n)||n<0)
            throw 'Invalid';
        let r=1;
        for(let i=2;i<=n;i++) 
            r*=i; 
        return r;
    };
    const containsWorkout = s=>/\bworkout\b/i.test(String(s));
    const locker = (pin) => {
        let note='(none)';
        return (p, newNote)=>{
            if(String(p)!==String(pin))
                return 'Access Denied';
            if(newNote!=null){
                note=String(newNote);
                return 'Saved';
            }
            return note;
        };
    };
    const L = locker('9999');
  function menu(){
    const m = `Choose:
1) Compare calories
2) Factorial (small n)
3) Note contains "Workout"?
4) Locker save/get (PIN 9999)
5) Reverse steps & numeric palindrome
6) Word palindrome
7) Sqrt calories
8) Prime heart-rate
9) Exit`;
    return prompt(m);
  }
  document.getElementById('start').onclick = ()=>{
    while(1){
        const c = menu(); 
        if(c==null) 
            return alert('Cancelled');
        try{
                switch(c.trim()){
                case '1': { 
                    const b=prompt('breakfast cal:'), l=prompt('lunch cal:'); 
                    alert('Higher: '+ Math.max(num(b),num(l))); 
                    break; 
                }case '2': { 
                    const n=prompt('n (non-neg int):');
                    alert('ID: '+ fact(n));
                    break;
                }case '3': { 
                    alert( containsWorkout(prompt('note:'))? 'Contains "Workout"':'Does not'); 
                    break; 
                }case '4': {
                    const a=(prompt("enter 'save' or 'get'")||'').toLowerCase();
                    if(a==='save'){ 
                        const p=prompt('PIN:'), note=prompt('note:'); 
                        alert(L(p,note)); 
                    }else if(a==='get'){
                        alert(L(prompt('PIN:')));
                    }else alert('Unknown');                        break;
                }
                case '5': { 
                    const s=prompt('steps:'); 
                    const r=rev(s); 
                    alert('Reversed: '+r+'\nNumeric palindrome: '+isPalindromeNum(s));
                    break;
                }case '6': {
                    alert(isPalindromeWord(prompt('text:'))? 'Palindrome':'Not palindrome');
                    break;
                }case '7': { 
                    alert('sqrt: '+ sqrtSafe(prompt('calories:'))); 
                    break; 
                }case '8': { 
                    const hr=prompt('heart-rate:'); 
                    alert(isPrime(hr)? hr+' is prime': hr+' is not prime'); 
                    break;
                }case '9':
                default: return alert('Goodbye'); 
            }
        }catch(e){ alert('Error: '+e); console.error(e); }
    }
};
})();
