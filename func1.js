var dot = document.getElementById("dots");
var more = document.getElementById("more");
var btn_txt = document.getElementById("btn_txt");
btn_txt.addEventListener("click",()=>{


    if(dot.style.display === "none")
    {
        dot.style.display = "inline";
        btn_txt.innerHTML = "Read more"; 
        more.style.display = "none";
    }
    else {
        dot.style.display = "none";
        btn_txt.innerHTML = "Read less"; 
        more.style.display = "inline";
     }
})
var dot1 = document.getElementById("dot1");
var more1 = document.getElementById("more1");
var btn_txt1 = document.getElementById("btn_txt1");
btn_txt1.addEventListener("click",()=>{


    if(dot1.style.display === "none")
    {
        dot1.style.display = "inline";
        btn_txt1.innerHTML = "Read more"; 
        more1.style.display = "none";
    }
    else {
        dot1.style.display = "none";
        btn_txt1.innerHTML = "Read less"; 
        more1.style.display = "inline";
     }
})
var dot2 = document.getElementById("dot2");
var more2 = document.getElementById("more2");
var btn_txt2 = document.getElementById("btn_txt2");
btn_txt2.addEventListener("click",()=>{


    if(dot2.style.display === "none")
    {
        dot2.style.display = "inline";
        btn_txt2.innerHTML = "Read more"; 
        more2.style.display = "none";
    }
    else {
        dot2.style.display = "none";
        btn_txt2.innerHTML = "Read less"; 
        more2.style.display = "inline";
     }
})
var onsub=document.getElementById("box1");
var submit=document.getElementById("submit");
submit.addEventListener("click",()=>{
    if(document.getElementById("cmt").value=="")
    {
        alert("Please fill the comments Sections!!");
    }
    else{
    onsub.setAttribute('style','display:none');
    alert("Thank you for submitting your comment!!");
    }
    
var comment =document.getElementById("cmt");
const db=firebase.database();
const ref=db.ref("data/");
var inputs=db.ref().child('data').push().key;
db.ref("data/"+inputs).set({
    comments: document.getElementById("cmt").value,
})
comment.value='';
})
