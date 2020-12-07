const btnBurger = document.getElementById('burger');
const catalog = document.querySelector('.catalog');
//const closeMenu1 = document.getElementById('close_menu_btn');
const overlay = document.getElementById('overlay');
const aboutMe = document.getElementById('block_me');
const aboutMenuBtn = document.getElementById('about_menu');
const blockHome = document.getElementById('block_home');
const blockSkills = document.getElementById('block_skills');
const blockPortfolio = document.getElementById('block_portfolio');
const blockContacts = document.getElementById('block_contacts');

const btnHome = document.getElementById('btnHome');
const btnSkills = document.getElementById('btnSkills');
const btnPortfolio = document.getElementById('btnPortfolio');
const btnContacts= document.getElementById('btnContacts');


const aboutMenuBtn1 = document.getElementById('about_menu1');
const btnHome1 = document.getElementById('btnHome1');
const btnSkills1 = document.getElementById('btnSkills1');
const btnPortfolio1 = document.getElementById('btnPortfolio1');
const btnContacts1= document.getElementById('btnContacts1');

const openMenu = () => {

    catalog.classList.add('open');
    overlay.classList.add('active');
};

const closeMenu = () => {
    catalog.classList.remove('open');
    overlay.classList.remove('active');
};

const scrollAbout = () => {
    aboutMe.scrollIntoView();
    closeMenu();
};

const scrollHome = () => {
    blockHome.scrollIntoView();
    closeMenu();
};

const scrollSkills = () => {
    blockSkills.scrollIntoView();
    closeMenu();
};

const scrollPortfolio = () => {
    blockPortfolio.scrollIntoView();
    closeMenu();
};

const scrollContacts = () => {
    blockContacts.scrollIntoView();
    closeMenu();
};

btnBurger.addEventListener('click', openMenu);
//closeMenu1.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
aboutMenuBtn.addEventListener('click', scrollAbout);
btnHome.addEventListener('click', scrollHome);
btnSkills.addEventListener('click', scrollSkills);
btnPortfolio.addEventListener('click', scrollPortfolio);
btnContacts.addEventListener('click', scrollContacts);

aboutMenuBtn1.addEventListener('click', scrollAbout);
btnHome1.addEventListener('click', scrollHome);
btnSkills1.addEventListener('click', scrollSkills);
btnPortfolio1.addEventListener('click', scrollPortfolio);
btnContacts1.addEventListener('click', scrollContacts);



const portfolioDiv = document.querySelector('.portfolio_allimg');



async function getResponse() {
    const showMore = document.getElementById('showMore');
    showMore.addEventListener('click', addContent);
    let response = await fetch('https://jsonplaceholder.typicode.com/photos');
    let content = await response.json();
    let n = 3;
    content = content.splice(0, n);
    console.log(content);

    function addContent (){
        
        for(key in content){

            portfolioDiv.innerHTML += `<div class="portfolio_122div">
            <img class="portfolio1_11" src="${content[key].url}"></img>
            </div>
            <p class="fashion">Online fashion store - Homepage</p>`;
        
        }

    }

let key;

for(key in content){

    portfolioDiv.innerHTML += `<div class="portfolio_122div">
    <img class="portfolio1_11" src="${content[key].url}"></img>
    </div>
    <p class="fashion">Online fashion store - Homepage</p>`;

}
}
getResponse();

/* ddd */