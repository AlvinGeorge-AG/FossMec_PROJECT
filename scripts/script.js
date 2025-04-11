let joinbtn = document.getElementById('joinnow');
function col(){
    joinbtn.style.backgroundColor="#0095ff";
    joinbtn.style.cursor="pointer";
    joinbtn.style.color="black";
}
function coll(){
    joinbtn.style.backgroundColor="#012E40";
    joinbtn.style.color="white";
}
joinbtn.addEventListener("mouseover",col);
joinbtn.addEventListener("mouseout",coll);

//typewriter
data =[
    "Apache is one of the most popular open-source web servers, powering millions of websites.",
    "Linux powers over 96% of the world's top 1 million servers.",
    "Android, the most used mobile OS, is based on Linux.",
    "The first version of the Linux kernel was just 10,239 lines of code.",
    "Python was created by Guido van Rossum as a hobby project during Christmas.",
    "Git, the tool powering GitHub, was created by Linus Torvalds in just 10 days!",
    "VS Code, developed by Microsoft, is built on an open-source framework called Electron.",
    "The first email system was written on open systems using Unix.",
    "The term “Open Source” was coined in 1998 to replace the more ambiguous “free software”.",
    "Thousands of open-source contributors collaborate across time zones without ever meeting in person."
    
];

let currentQute = document.getElementById('facts');
let index = 0;
function QuoteChange(){
    
    if(index===(data.length)){
        index = 0;
    }
    currentQute.innerHTML=data[index]
    index++;
}
setInterval(QuoteChange,5000);