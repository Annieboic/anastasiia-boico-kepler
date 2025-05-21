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

    
    alert('Thank you for the message!');

    const nameText = event.target.usersName.value;
    const emailText = event.target.usersEmail.value;
    const messageText = event.target.usersMessage.value;

    console.log("Name:", nameText);
    console.log("Email:", emailText);
    console.log("Message:", messageText);

    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");

    messageSection.style.display = "block";
    
    newMessage.innerHTML = `<a href="mailto:${emailText}">${nameText}</a> <span class="message_text">${messageText}</span>`;

    messageList.appendChild(newMessage);


    const editButton = document.createElement("button");
    editButton.textContent = "Edit Message";
    editButton.setAttribute("type", "button");
    editButton.addEventListener("click", function(event){
        const editTextChosen = newMessage.querySelector(".message_text"); //text chosen 

        const textToEdit = editTextChosen.textContent.trim(); //trim empty spaces


        //create input field

        const inputField = document.createElement("input")
        inputField.setAttribute("type", "text");
        inputField.value = textToEdit; //placed text to input


        //create save button after edditing

        const saveButton = document.createElement("button");
        saveButton.textContent = "Save";
        saveButton.setAttribute("type", "button");

        //replace buttons and text to input field

        newMessage.replaceChild(inputField,editTextChosen);
        editButton.replaceWith(saveButton);

        saveButton.addEventListener("click", function(event){
            const updatedText = inputField.value;

            const newSpan = document.createElement("span");
            newSpan.className = "message-textUpdated";
            newSpan.textContent = " " + updatedText;

            //replaceinput fiedl with a new span + text

            newMessage.replaceChild(newSpan, inputField);
            saveButton.replaceWith(editButton)
        })








    })

    
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.setAttribute("type", "button");
    removeButton.addEventListener("click", function(event){
        const entry = newMessage.parentNode; //ul element chosen
        
        newMessage.remove(); //remove list element after clicking

        if(messageList.children.length === 0){
            messageSection.style.display = "none";
        }

    })

    

    newMessage.appendChild(editButton);
    newMessage.appendChild(removeButton);
    
    
    
    messageForm.reset();


  });


  // (Optional) Hide the #messages section, including the Messages header, when the list is empty // DONE
 //(Optional) Create an "edit" button for each message entry that allows the user to input a new/modified message  // 
 //Link each project list to GitHub 




fetch("https://api.github.com/users/Annieboic/repos")
.then(response => {
    
    if(!response.ok){
        throw new Error(response.status)
    }
    
    return response.json()
})

.then((data) =>  {
    const repositories = data;
    console.log(repositories);

    const projectSection = document.getElementById("projects")
const projectList = projectSection.querySelector("ul")


for (let i = 0; i < repositories.length; i++) {
    const project = document.createElement("li");
    project.textContent = repositories[i].name;
    project.classList.add("project_list");
    projectList.appendChild(project);
}

})

.catch(error => console.error(error))






