/* ==========================================
   STUDENT TOOLKIT
   app.js
========================================== */


document.addEventListener("DOMContentLoaded", () => {



/* ===========================
   Theme Toggle
=========================== */


const themeButton = document.getElementById("themeToggle");


const savedTheme = localStorage.getItem(
    "studentToolkitTheme"
);



if(savedTheme === "dark"){

    document.body.classList.add("dark");

    if(themeButton){

        themeButton.textContent = "☀️";

    }

}




if(themeButton){


    themeButton.addEventListener("click",()=>{


        document.body.classList.toggle("dark");


        if(document.body.classList.contains("dark")){


            localStorage.setItem(
                "studentToolkitTheme",
                "dark"
            );


            themeButton.textContent="☀️";


        }


        else{


            localStorage.setItem(
                "studentToolkitTheme",
                "light"
            );


            themeButton.textContent="🌙";


        }


    });


}







/* ===========================
   Contact Form
=========================== */


const contactForm =
document.getElementById("contactForm");



if(contactForm){


contactForm.addEventListener(
"submit",
(e)=>{


e.preventDefault();



const name =
document.getElementById("name")?.value.trim();



const email =
document.getElementById("email")?.value.trim();



const subject =
document.getElementById("subject")?.value.trim();



const message =
document.getElementById("message")?.value.trim();




if(
!name ||
!email ||
!subject ||
!message
){


alert(
"Please fill all fields."
);


return;


}




const emailPattern =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;



if(!emailPattern.test(email)){


alert(
"Please enter a valid email address."
);


return;


}



alert(
"Thank you! Your message has been submitted successfully."
);



contactForm.reset();



});

}





/* ===========================
   Smooth Scroll
=========================== */


document
.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{


anchor.addEventListener(
"click",
function(e){



const target =
document.querySelector(
this.getAttribute("href")
);



if(target){


e.preventDefault();



target.scrollIntoView({

behavior:"smooth"

});


}



});


});









/* ===========================
   Back To Top Button
=========================== */


let topButton =
document.getElementById("topBtn");



if(!topButton){


topButton =
document.createElement("button");


topButton.id="topBtn";


topButton.innerHTML="↑";


topButton.title=
"Back to Top";


document.body.appendChild(topButton);


}



window.addEventListener(
"scroll",
()=>{


if(window.scrollY > 300){


topButton.style.display="block";


}

else{


topButton.style.display="none";


}


});




topButton.addEventListener(
"click",
()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});










/* ===========================
   Active Navigation
=========================== */


const currentPage =
window.location.pathname
.split("/")
.pop()
|| "index.html";



document
.querySelectorAll("nav a")
.forEach(link=>{


const linkPage =
link.getAttribute("href")
?.split("/")
.pop();



if(linkPage === currentPage){


link.classList.add("active");


}


});











/* ===========================
   Fade Animation
=========================== */


const animatedElements =
document.querySelectorAll(

".feature-card,"+
".tool-card,"+
".stat-box,"+
".contact-form,"+
".contact-info,"+
".about-content,"+
".faq,"+
".content-page,"+
".calculator-card"

);



if(
"IntersectionObserver" in window
){



const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add(
"show"
);


observer.unobserve(
entry.target
);


}



});


},
{

threshold:0.15

}

);



animatedElements.forEach(el=>{


observer.observe(el);


});



}




/* ===========================
   Current Year
=========================== */


const year =
document.getElementById("year");



if(year){


year.textContent =
new Date()
.getFullYear();


}



});







/* ==========================================
   Utility Functions
========================================== */


function showResult(id,text){


const box =
document.getElementById(id);



if(box){


box.style.display="block";


box.innerHTML=text;


}


}




function hideResult(id){


const box =
document.getElementById(id);



if(box){


box.style.display="none";


}


}





function resetForm(formId){


const form =
document.getElementById(formId);



if(form){


form.reset();


}


}






/* ==========================================
   END OF app.js
========================================== */