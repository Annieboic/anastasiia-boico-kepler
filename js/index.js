//footer

const footerElement = document.createElement("footer");
document.body.appendChild(footerElement);


const nameFooter = "Anastasia Boico";
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");

footer.classList.add("footer_element");
const copyrightSymb = "\u00A9";

const copyright = document.createElement("p");
copyright.innerHTML =  `${nameFooter} ${copyrightSymb} ${thisYear}`;

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

//Message Form



const messageForm = document.querySelector('form');
messageForm.addEventListener("submit", function(event){
    event.preventDefault();

    const nameText = event.target.usersName.value;
    const emailText = event.target.usersEmail.value;
    const messageText = event.target.usersMessage.value;

    console.log("Name:", nameText);
    console.log("Email:", emailText);
    console.log("Message:", messageText);

    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");
    
    newMessage.innerHTML = `<a href="mailto:${emailText}">${nameText}</a> <span>${messageText}</span>`;

    messageList.appendChild(newMessage);

    

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.setAttribute("type", "button");
    removeButton.addEventListener("click", function(event){
        const entry = newMessage.parentNode; //ul element chosen
        
        newMessage.remove(); //remove list element after clicking

    })

    newMessage.appendChild(removeButton);
    
    
    messageForm.reset();


  });


  // (Optional) Hide the #messages section, including the Messages header, when the list is empty
 //(Optional) Create an "edit" button for each message entry that allows the user to input a new/modified message


