function handleDeleteElement(e){
    const articles = document.querySelector(".articles");
    if(window.confirm("voulez vous vraiemnt supprimer cette article")){
        articles.removeChild(e.target.parentNode.parentNode);
        console.log("Delete");
    }  
}

function handleAddElement(elm){
    console.log('Add');
    const article = elm.parentNode.parentNode ;
    console.log(article);
    const listArticle = document.querySelector(".section-main");
    const ajoutArticle = document.querySelector(".ajout-article-main");
    const imgArticle = article.getElementsByTagName("img")[0].getAttribute("src");
    const nameArticle = article.getElementsByTagName("h2")[0].innerHTML;
    const dateArticle = article.getElementsByTagName("span")[0].innerHTML;
    const para = article.getElementsByTagName("p")[0].innerHTML;
    console.log(imgArticle,nameArticle,dateArticle,para);


    // e.preventDefault() // Annule l'évènement
    // e.stopPropagation() // Empèche l'évènement de remonter vers les éléments parents
    // e.target // contient l'élément sur lequel on a cliqué
    // e.currentTarget // contient l'élément sur lequel on a greffé l'écouteur
    // console.log(this) ;

}

 
 function ajoutEvent(){
    let btnDeletes = document.querySelectorAll("#supprime");
    for(let i=0; i<btnDeletes.length; i++ ){

        btnDeletes[i].addEventListener("click", handleDeleteElement)
     }
 }
 ajoutEvent();

function addArticle(){

    const listArticle = document.querySelector(".section-main");
    const ajoutArticle = document.querySelector(".ajout-article-main");
    if(listArticle.style.display=='none'){
        listArticle.style.display = 'flex';
        ajoutArticle.style.display = 'none';
    }
    else{
        listArticle.style.display = 'none';
        ajoutArticle.style.display = 'flex';    
    }
    console.log("Add Article")
    
};
function handleSubmit(){
    console.log('submit');
}

const form = document.querySelector("form");

// Empêcher le form d'être soumis
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const articles = document.querySelector(".articles");
    const article = document.querySelector(".article").cloneNode(true);
    let auteur = e.target[0].value;
    let profil = e.target[1].value;
    let categorie = e.target[2].value;
    let contenuArtitcle = e.target[3].value;
    //mise a jour valuer article
    article.querySelector("img").setAttribute("src",profil);
    article.querySelector("h2").innerHTML = auteur ;
    article.querySelector("span").innerHTML = new Date();
    article.querySelector("p").innerHTML = contenuArtitcle ;

    // ajout au noeud la nouvelle article
    articles.appendChild(article);
    console.log(articles);
    console.log(auteur,profil,categorie,contenuArtitcle);
    ajoutEvent();
    addArticle()

    // article.querySelector("img") = e.target.value.


    // document.querySelector(".ajout-article-main");
    // article.getElementsByTagName("img")[0].getAttribute("src");
    // article.getElementsByTagName("h2")[0].innerHTML;
    // article.getElementsByTagName("span")[0].innerHTML;
    // getElementsByTagName("p")[0].innerHTML;
    console.log(article);
  });