const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.src = siteContent["nav"]["img-src"];
//////nav////////

const navA = document.querySelectorAll("a");
navA[0].textContent = siteContent["nav"]["nav-item-1"]
navA[0].style.color = "green";
navA[1].textContent = siteContent["nav"]["nav-item-2"]
navA[1].style.color = "green";
navA[2].textContent = siteContent["nav"]["nav-item-3"]
navA[2].style.color = "green";
navA[3].textContent = siteContent["nav"]["nav-item-4"]
navA[3].style.color = "green";
navA[4].textContent = siteContent["nav"]["nav-item-5"]
navA[4].style.color = "green";
navA[5].textContent = siteContent["nav"]["nav-item-6"]
navA[5].style.color = "green";

const ctaH1 = document.querySelectorAll("h1");
ctaH1[0].textContent = siteContent["cta"]["h1"];
const ctaButton = document.querySelectorAll("button");
ctaButton[0].textContent = siteContent["cta"]["button"];
const ctaImg = document.getElementById("cta-img");
ctaImg.src = siteContent["cta"]["img-src"];

const h4Headings = document.getElementsByTagName('h4');
h4Headings[0].textContent = siteContent['main-content']['features-h4'];
h4Headings[1].textContent = siteContent['main-content']['about-h4'];
const midImg = document.querySelector('.middle-img');
midImg.src = siteContent['main-content']['middle-img-src'];
h4Headings[2].textContent = siteContent['main-content']['services-h4'];
h4Headings[3].textContent = siteContent['main-content']['product-h4'];
h4Headings[4].textContent = siteContent['main-content']['vision-h4'];

const pContent = document.getElementsByTagName('p');
pContent[0].textContent = siteContent['main-content']['features-content'];
pContent[1].textContent = siteContent['main-content']['about-content'];
pContent[2].textContent = siteContent['main-content']['services-content'];
pContent[3].textContent = siteContent['main-content']['product-content'];
pContent[4].textContent = siteContent['main-content']['vision-content'];

const contactsCH4 = document.querySelectorAll('.contact h4');
contactsCH4[0].textContent = siteContent['contact']['contact-h4'];
const contactA = document.querySelectorAll('.contact p');
contactA[0].textContent = siteContent['contact']['address'];
contactA[1].textContent = siteContent['contact']['phone'];
contactA[2].textContent = siteContent['contact']['email'];

const footersC = document.querySelectorAll('footer');
footersC[0].textContent = siteContent['footer']['copyright'];

var aTag1 = document.createElement('P');
var aText1 = document.createTextNode('Home');
aTag1.appendChild(aText1);
document.getElementById('nav').appendChild(aTag1);

var aTag2 = document.createElement('P');
var aText2 = document.createTextNode('Home');
aTag2.appendChild(aText2);
document.getElementById('nav').appendChild(aTag2);



// var para = document.createElement("P");                       // Create a <p> node
// var t = document.createTextNode("This is a paragraph.");      // Create a text node
// para.appendChild(t);                                          // Append the text to <p>
// document.getElementById("myDIV").appendChild(para); 










