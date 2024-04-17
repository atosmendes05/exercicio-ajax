document.addEventListener('DOMContentLoaded', function(){
    const nome = document.querySelector('#name')
    const username = document.querySelector('#username')
    const perfil = document.querySelector('#avatar')
    const repositorio = document.querySelector('#repositorio')
    const seguidore = document.querySelector('#Seguidores')
    const seguindo = document.querySelector('#Seguindo')
    const link = document.querySelector('#link')
    

    fetch('https://api.github.com/users/atosmendes05')
    .then(function(resposta){
        return resposta.json()
    })
    .then(function(json){
        nome.innerHTML = json.name
        username.innerHTML = json.login
        perfil.src = json.avatar_url
        repositorio.innerHTML = json.public_repos
        seguidore.innerHTML = json.followers
        seguindo.innerHTML = json.following
        link.href = json.html_url
    })
})