//footer

const footerElement = document.createElement("footer");
document.body.appendChild(footerElement);


const nameFooter = "Anastasia Boico";
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");

footer.classList.add("footer_element");


const copyright = document.createElement("p");
copyright.innerHTML =  `${nameFooter} © ${thisYear}`;

copyright.classList.add("copyright")

footer.appendChild(copyright);

//styling Footer


footer.style.color = "gray";
footer.style.textAlign = "center";


//skills

const skills = ["JavaScript", "HTML", "CSS", "GitHub", "React", "Postman", "Figma", "Bootstrap", "Chakra", "MongoDB", "Node.js", "GraphQL APIs"]

const skillsSection = document.getElementById("skills")

const  skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++){
    const skill = document.createElement("li");
    skill.textContent = skills[i];
    skill.classList.add("skill");
    skillsList.appendChild(skill)
}


