let currentProject = document.querySelector('.project-name');
const currentProjectImage = document.querySelector('.current-project-image');
const projectList = document.querySelector('.project-list');
let github = document.querySelector('.github');
let link = document.querySelector('.arrow');
const openGithub = (href) => {
    window.open(href, '_blank');
}
const openLink = (href) => {
    window.open(href, '_blank');
}
const projectObj = {
    'name' : ['Screen Printing','Art Gallery','Art Fair','More..'],
    'imageUrl': ['./assets/imgs/1759214919143.png', './assets/imgs/ArtGallery.png','./assets/imgs/ArtFair.png','./assets/imgs/More.png'],
    'github': ['https://www.instagram.com/p/DP0-X59Cput','https://www.instagram.com/p/DIasW4gT_mX','https://www.instagram.com/p/DCdqg8sq8EJ','https://www.instagram.com/silhouette_bu'],
    'link': ['https://www.linkedin.com/company/silhouette-creative-society/','https://www.linkedin.com/company/silhouette-creative-society/','https://www.linkedin.com/company/silhouette-creative-society/','https://www.linkedin.com/company/silhouette-creative-society/']
};

currentProject.innerText = projectObj.name[0];
currentProjectImage.src = projectObj.imageUrl[0];
let githubLink = projectObj.github[0];
let linkLink = projectObj.link[0];
github.addEventListener('click',()=>{
    openGithub(githubLink);
});
link.addEventListener('click',()=>{
    openLink(linkLink);
});
let list = `
<li class="project-list-item"><p>${projectObj.name[0]}</p></li>
<li class="project-list-item"><p>${projectObj.name[1]}</p></li>
<li class="project-list-item"><p>${projectObj.name[2]}</p></li>
<li class="project-list-item"><p>${projectObj.name[3]}</p></li>
`;
projectList.innerHTML = list;
currentProjectImage.src = projectObj.imageUrl[0];

const projectListItems = document.querySelectorAll('.project-list-item');
projectListItems.forEach((item,index)=>{
    projectListItems[0].style.display = "none";
    item.addEventListener('click',()=>{
        projectListItems.forEach((item)=>{
            item.style.display = "block";
        });
        item.style.display = "none";
        currentProject.innerText = projectObj.name[index];
        currentProjectImage.src = projectObj.imageUrl[index];
        console.log(projectObj.github[index]);    
        githubLink = projectObj.github[index];
        linkLink = projectObj.link[index];
        github.addEventListener('click',()=>{
            openGithub(githubLink);
        });
        link.addEventListener('click',()=>{
            openLink(linkLink);
        });
    });
});

//Navbar Shifting in Mobile view
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav = document.querySelector(".mobile-navbar-links");

const toggleNavbar = () =>{
    nav.classList.toggle("active");   
    mobile_nav.classList.toggle("active");
};

const removeNav = () =>{
    nav.classList.remove("active");   
    mobile_nav.classList.remove("active");
};

mobile_nav.addEventListener('click', () => toggleNavbar());
nav.addEventListener('click', () => removeNav());
