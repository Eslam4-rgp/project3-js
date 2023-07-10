function toggleMenu() {
    const toggleMenu = document.querySelector(".taggleMenu");
    const navigation = document.querySelector(".navigation");
        toggleMenu.classList.toggle('active');
        navigation.classList.toggle('active');
    }
    const navigationselector = document.querySelector(".navigation");
    navigationselector.onclick = function() {
    const toggleMenu = document.querySelector(".taggleMenu");
    const navigation = document.querySelector(".navigation");
    navigation.classList.toggle('active');
    toggleMenu.classList.toggle('active');
    }
    let setting = document.querySelector(".setting-box"),
    togglese = document.querySelector(".toggle-setting"),
    spin = document.querySelector(".fa-gear");
    togglese.onclick =  function () {
       setting.classList.toggle("open"); 
       spin.classList.toggle("fa-spin"); 
} 
// start setting  ...........................................................
// switch color
let colorLi = document.querySelectorAll(".Colors-list li");
colorLi.forEach(li => {
    li.addEventListener("click", (e) => {
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
        // set item in local storage
        localStorage.setItem("color-option", e.target.dataset.color);
        // remove All active
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        })
        // Add active on self
        e.target.classList.add("active");
        // handelActive ();
    });
});
// get item from localStorage
let mainColor = localStorage.getItem("color-option");
if (mainColor != null) {
    document.documentElement.style.setProperty("--main-color", mainColor);
    // remove all active from ul li
    document.querySelectorAll(".Colors-list li").forEach(element => {
        element.classList.remove("active");
        // Add active on self
        if (element.dataset.color === mainColor) {
            element.classList.add("active");
        }
    });
}

// switch background. ....................................................
let backgroundInterval;
let backgroundOption = true;
let backgroundLocalItem = localStorage.getItem("background-option");

let backgroundspan = document.querySelectorAll(".random-back span");

backgroundspan.forEach(span => {
    span.addEventListener("click", (e) => {
        // remove All active
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        })
        // Add active on self
        e.target.classList.add("active");
        if (e.target.dataset.background === "yes") {
            backgroundOption = true;
            randomsOption()
            localStorage.setItem("background-option", true)
        } else {
            backgroundOption = false;
            clearInterval(backgroundInterval)
            localStorage.setItem("background-option", false)
        }
    });
});
// remove all active 
document.querySelectorAll(".random-back span").forEach(element => {
    element.classList.remove("active");
})
if (backgroundLocalItem !== null) {
    if (backgroundLocalItem === "true") {
        backgroundOption = true;
        document.querySelector(".option-box .yes").classList.add("active");
    } else {
        backgroundOption = false;
        document.querySelector(".option-box .no").classList.add("active");
    };
}   

//  End switch background. ....................................................

// start show option bullites ...................................................
let bullites = document.querySelectorAll(".bullites-optio span");
let containerBullites = document.querySelector(".nav-bullets");

bullites.forEach (span => {
    span.addEventListener('click', (e) => {
        // remove All active
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        })
        // Add active on self
        e.target.classList.add("active");
        if (span.dataset.display === "show") {
            containerBullites.style.display = "block";
            localStorage.setItem("bullts-opt", "block");
        } else {
            containerBullites.style.display = "none";
            localStorage.setItem("bullts-opt", "none");
        }
    });
});

// remove all active 
document.querySelectorAll(".bullites-optio span").forEach(element => {
    element.classList.remove("active");
})
// get from localstorage
let bullitlocalstorage = localStorage.getItem("bullts-opt");
if (bullitlocalstorage !== null) { 
    if (bullitlocalstorage === "block") {
        containerBullites.style.display = "block";
        document.querySelector(".bullites-optio .yes").classList.add("active");
    } else {
        containerBullites.style.display = "none";
        document.querySelector(".bullites-optio .no").classList.add("active");
    }
}
// End show option bullites ...................................................
// reset..........
let reset = document.querySelector(".reset-option");
reset.addEventListener('click', (e) => {
        // localStorage.clear();
        document.querySelectorAll(".option-box span").forEach(element => {
            element.classList.remove("active");
        });
        document.querySelectorAll(".Colors-list li").forEach(element => {
            element.classList.remove("active");
        });
        document.documentElement.style.setProperty("--main-color", "#ff9800");
        document.querySelector(".bullites-optio .yes").classList.add("active");
        document.querySelector(".option-box .yes").classList.add("active");
    });
// reset..............
// start loop image ..................................................
let landingPage = document.querySelector(".landing-page");
let images = ["q (1).jpg","q (2).jpg","q (3).jpg","q (4).jpg"];

function randomsOption() {
    if (backgroundOption === true) {
        backgroundInterval =  setInterval(function(){
               let randoms = Math.floor(Math.random() * images.length);
           landingPage.style.backgroundImage = 'url("image/' + images[randoms] +'")';
       },2000)
    }
}
randomsOption()
// End loop image
// clearInterval(backgroundInterval);

// scroll 
let ourSkills = document.querySelector(".skills");
window.onscroll = function () {
let skillsOfSetTop =  ourSkills.offsetTop;
let skillsOfSetHeight =  ourSkills.offsetHeight;
let windowHeight =  window.innerHeight;
let page =  window.pageYOffset;
if (page > (skillsOfSetTop + skillsOfSetHeight - windowHeight)) {
    let allskills = document.querySelectorAll(".skills-box .skill-progress span");
    // for (let i = 0;i < allskills.length ;i++) {
    //     allskills[i].style.width = allskills[i].dataset.progress;
    // }
    allskills.forEach(e => {
        e.style.width = e.dataset.progress;
        
    })
}
}

// gallery
// create popup with image
let galleryImg = document.querySelectorAll('.gallary img');

galleryImg.forEach(img => {
    img.addEventListener('click', (e) => {
        // create overlay element
        let overlay = document.createElement('div');
        overlay.classList.add('overlay');
        document.body.appendChild(overlay);
        // create popup element
        let popup = document.createElement('div');
        popup.classList.add('popup');
        overlay.appendChild(popup);
        // create image element
        let image = document.createElement('img');
        image.classList.add('image');
        popup.appendChild(image);
        image.src = e.target.src;
        // create close button
        let closeButton = document.createElement('button');
        closeButton.classList.add('close');
        closeButton.innerHTML = '&times;';
        popup.appendChild(closeButton);
        // close button click event
        closeButton.addEventListener('click', (e) => {
            overlay.remove();
        });
        overlay.addEventListener('click', (e) => {
            overlay.remove();
        });
        if (img.alt !== null) {
            // creat heading
            let heading = document.createElement("h3");
            heading.classList.add('headingd');
            heading.innerHTML = img.alt; // textcontent
            // let text = document.createTextNode(img.alt)  
            // heading.appendChild(text);
            popup.appendChild(heading);
        }
    });
});
// create popup with image ..........

// let allNav = document.querySelectorAll(".navigation li a");
// window.onscroll = function () {
//     let homeSetTop =  document.querySelector(".landing-page").offsetTop;
//     let aboutOfSetTop =  document.querySelector(".about-us").offsetTop;
//     let skillsOfSetTop =  document.querySelector(".skills").offsetTop;
//     let galleryOfSetTop =  document.querySelector(".gallary").offsetTop;
//     let timeOfSetTop =  document.querySelector(".timeLine").offsetTop;
//     let featuresOfSetTop =  document.querySelector(".features").offsetTop;
//     let testimonulsOfSetTop =  document.querySelector(".testimonuls").offsetTop;
//     let windowHeight =  window.innerHeight;
//     let page =  window.pageYOffset;

//     if (page >= homeSetTop && page < aboutOfSetTop){
//         allNav[0].classList.add("active");
//     } else {
//         allNav[0].classList.remove("active");
//     }
//     if (page > aboutOfSetTop && page < skillsOfSetTop){
//         allNav[1].classList.add("active");
//     } else {
//         allNav[1].classList.remove("active");
//     }
//     if (page > skillsOfSetTop && page < galleryOfSetTop){
//         allNav[2].classList.add("active");
//     } else {
//         allNav[2].classList.remove("active");
//     }
//     if (page > galleryOfSetTop && page < timeOfSetTop){
//         allNav[3].classList.add("active");
//     } else {
//         allNav[3].classList.remove("active");
//     }
//     if (page > timeOfSetTop && page < featuresOfSetTop){
//         allNav[4].classList.add("active");
//     } else {
//         allNav[4].classList.remove("active");
//     }
//     if (page > featuresOfSetTop && page < testimonulsOfSetTop){
//         allNav[5].classList.add("active");
//     } else {
//         allNav[5].classList.remove("active");
//     }
//     if (page > testimonulsOfSetTop){
//         allNav[6].classList.add("active");
//     } else {
//         allNav[6].classList.remove("active");
//     }
// }


// active when onclick 
let activeNave = document.querySelectorAll(".navigation li a");
activeNave.forEach(a => {
    a.addEventListener("click", (e) => {
        // remove All active
        activeNave.forEach(element => {
            element.classList.remove("active");
        })
        // Add active on self
        e.target.classList.add("active");
    });
});
//end active when onclick 


let buttonup = document.querySelector(".button-up");
let head = document.querySelector(".header-page");
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {
    head.style.top = "0";
} else {
    head.style.top = "-70px";
}

// start skills ..........
let ourSkills = document.querySelector(".skills");
let skillsOfSetTop =  ourSkills.offsetTop;
let skillsOfSetHeight =  ourSkills.offsetHeight;
let windowHeight =  window.innerHeight;
let page =  window.pageYOffset;
if (page > (skillsOfSetTop + skillsOfSetHeight - 10 - windowHeight)) {
    let allskills = document.querySelectorAll(".skills-box .skill-progress span");
    allskills.forEach(e => {
        e.style.width = e.dataset.progress;
        
    })
}
// end skills......
//end button up ...................
this.scrollY >= 1000 ? buttonup.classList.add("show") : buttonup.classList.remove("show");
prevScrollpos = currentScrollPos;
}
buttonup.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
//end button up .....................



// start loader in first page........................
const loader = document.querySelector(".loader");
    setTimeout( () => loader.style.display = "none", 3000);
// End loader in first page.........................