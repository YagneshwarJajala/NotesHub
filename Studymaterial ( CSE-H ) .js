/* THEME-TOGGLER */

const theme=document.getElementById('theme-toggle');
const savedtheme=localStorage.getItem('theme');
if(savedtheme === "dark"){
    document.body.dataset.theme="dark";
}
theme.addEventListener("click",function(){
    if(document.body.dataset.theme === "dark"){
        document.body.removeAttribute("data-theme");
        localStorage.setItem("theme","light");
    }
    else{
        document.body.dataset.theme="dark";
        localStorage.setItem("theme","dark");
    }
});



/* SUBJECT CARD EXPANSION */

const subjectbtns=document.getElementsByClassName('subject-btn');
let expandedcard=document.querySelector('.subjects-card-expanded');
let subjectcard=document.querySelector('.subjects-card');
let subject="";/* STORING SUBJECT NAME */

console.log("Count of buttons is:"+subjectbtns.length);

for (let i=0;i<subjectbtns.length;i++){
    subjectbtns[i].addEventListener('click',function(e){
        e.stopPropagation();
        subject=this.dataset.subject;
        console.log("You have clicked "+subject+" Subject.");
        expandedcard.classList.add("show");
        subjectcard.classList.add("open");
    });

}
expandedcard.addEventListener('click', function(e) {
    e.stopPropagation();
});


document.addEventListener('click', function() {

    expandedcard.classList.remove("show");
    subjectcard.classList.remove("open");

});

/* SECTION */
const params =new URLSearchParams(window.location.search);
const section=params.get("section");
console.log(section);
let sectionname=document.getElementsByClassName('section-name');
for (let i=0;i<sectionname.length;i++){

    sectionname[i].textContent=`${section}`;
}

/* STORING UNIT */
const unitbtns=document.getElementsByClassName('unit-btn');
for( let i=3;i<(unitbtns.length);i++){
    unitbtns[i].textContent="Will be available soon";
    unitbtns[i].disabled=true;
    unitbtns[i].style.backgroundColor="#f5f5f553";
}
for(let i=0;i<unitbtns.length;i++){

    unitbtns[i].addEventListener("click",function(e)
        {
            e.stopPropagation();
            const unit=this.dataset.unit;
            console.log('You selected unit:'+unit);
            const pdfpath=`${section}${subject}${unit}.pdf`;
            console.log("pdf path:"+pdfpath);
            window.open(pdfpath,"_blank");
        }
    )
}

/* SCROLL AWAY BEHAVIOUR */

const logo=document.querySelector('.logo');
window.addEventListener("scroll", () =>{
    if(window.scrollY>450){
        logo.style.display="none";
    }
    else{
        logo.style.display="block";
    }
});