import { getUser } from "./services/user.js";
import { getRepos } from "./services/repositories.js";
import { getEvents } from "./services/events.js";
import { user } from "./objects/user.js";

import { screen } from "./objects/screen.js";
//Nao pode faltar o .js no final do from


document.getElementById("btn-search").addEventListener("click", ()=>{
    let userName = document.getElementById("input-search").value;
    if(!validateEmptyInput(userName))getUserData(userName);   
})

function validateEmptyInput(userName){
    if(userName.length===0){
        alert("preencha o nome")
        return true
    }
}
document.getElementById("input-search").addEventListener("keyup", (e) =>{
    const userName = e.target.value
    const key = e.which || e.keyCode 
    const isEnterKeyPressed = key === 13

    if(isEnterKeyPressed){
        if(!validateEmptyInput(userName))getUserData(userName);  
    } 
})


async function getUserData(userName){

    const userResponse = await getUser(userName)
    const eventsResponse = await getEvents(userName)
    
    //console.log(eventsResponse)
    if(userResponse.message==="Not Found"){
        screen.renderNotFound()
        return
    }

    const repositoriesResponse = await getRepos(userName)

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    user.setEvents(eventsResponse)
    screen.renderUser(user, userName)
    
}



