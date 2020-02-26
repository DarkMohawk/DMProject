(function(){
  
    const list = document.querySelector('#list'),
        form = document.querySelector('form'),
        item = document.querySelector('#item'),
        recupSt = document.getElementById("item").value;

    
    form.addEventListener('submit',function(e){
      e.preventDefault();
      list.innerHTML += '<li>'+ item.value +'</li>';
    ajouter();
      item.value = "";
    },false)

    list.addEventListener('click',function(e){
        const t = e.target;
        if(t.classList.contains('fait')){
          t.parentNode.removeChild(t);
        } else {
          t.classList.add('fait');
          t.style.backgroundColor = "green";
        }
      ajouter();
      },false)

    function ajouter() {
      window.localStorage.myitems = list.innerHTML;
     let monobjet = {
        propriete1 : recupSt,
     };
     let monobjet_json = JSON.stringify(monobjet);
     localStorage.setItem("objet",monobjet_json);

    }
    
    function affValeur() {
      let valeurStck = window.localStorage.myitems;
      if(!valeurStck) {
        list.innerHTML = '<li>Faire la vaiselle</li>'+
                         '<li>Etendre le linge</li>'+
                         '<li>Sortir les poubelles</li>'+
                         '<li>Nourrir le chien</li>';
      }
      else {
        list.innerHTML = valeurStck;
      }
    }
    affValeur();

let totalElment =document.querySelectorAll('li').length ;
    console.log(totalElment);
  })();
