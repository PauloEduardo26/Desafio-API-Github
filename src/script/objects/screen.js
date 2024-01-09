const screen = {
    userProfile: document.querySelector(".profile-data"),
    renderUser(user, userName){
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto de perfil do usuario" >
                                        <div class="data">
                                            <h1>${user.name ?? 'Nao possui nome cadastrado 😒'}</h1>
                                            <p>${user.bio ?? 'Nao possui bio cadastrada 😒'}</p>
                                            <p>Seguidores: ${user.followers}</p>
                                            <p>Seguindo: ${user.following}</p>
                                        </div>
                                    </div>`
        
        let repositoriesItens = ''
        
        user.repositories.forEach(repo => repositoriesItens += `<li>
                                                                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                                                                    <div class="repositories-info">
                                                                        <p>🍴${repo.forks}</p><p>⭐${repo.stargazers_count
                                                                        }</p><p>👀 ${repo.watchers}</p><p>👨‍💻${repo.language}</p>
                                                                    </div>
                                                                </li>`)

        
        if(user.repositories.length>0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                            <h2>Repositorios</h2>
                                            <ul>${repositoriesItens}</ul>
                                        </div>`
        }
        let eventItens = ''
        
        user.events.forEach(event =>{
            eventItens += `<li>${userName}/${event.actor.login} <span>-${event.payload.commits[0].message}</span></li>`
        })
        this.userProfile.innerHTML += `<div class="events">
                                        <h2>Eventos</h2>
                                        <ul>${eventItens}</ul>
                                       </div>`    
    },
    renderNotFound(){
        this.userProfile.innerHTML="<h3>usuario nao encontrado<h3>"   
    }
}

export { screen }