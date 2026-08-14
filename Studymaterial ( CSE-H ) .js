let subject=document.getElementsByClassName('subject-btn');
let expandedcard=document.querySelector('.subjects-card-expanded');
let subjectcard=document.querySelector('.subjects-card');

console.log("Count of buttons is:"+subject.length);

for (let i=0;i<subject.length;i++){
    subject[i].addEventListener('click',function(e){
        e.stopPropagation();
        let subject_name=this.getAttribute("data-subject");
        console.log("You have clicked "+subject_name+" Subject.");
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
