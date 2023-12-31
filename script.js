function countdown(){
const today=new Date();
const newYear=new Date(today.getFullYear()+1,1,1,0,0,0);
const remainingSec=newYear-today;
const s=Math.floor(remainingSec/1000%60);
const m=Math.floor(remainingSec/(60*1000)%60);
const h=Math.floor(remainingSec/(60*60*1000)%24);
const d=Math.floor(remainingSec/(24*60*60*1000)-31);
document.getElementById("day").innerText=d;
document.getElementById("hr").innerText=h;
document.getElementById("min").innerText=m;
document.getElementById("sec").innerText=s;
// console.log(hr.innerText=h)
}
setInterval(countdown,1000)