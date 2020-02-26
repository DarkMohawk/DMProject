// Je mets les éléments HTML dans des variables pour les manipulés

const rouge = document.getElementById("rouge");
const vert = document.getElementById("vert");
const orange = document.getElementById("orange");
const compteur = document.getElementById("compteur");
const b1 = document.getElementById("bouton1");



    let i=0;
    function augmenter() { // un compteur (en auto-incrémentation) qui se remet à zero et relance la fonction
                i++;
                document.getElementById("compteur").innerHTML = i;
                if( i >= 15){
                i=0;
                
                }else if(i === 1 || i < 4 ){

                    rouge.style.backgroundColor="rgba(255, 0, 0, 0.2)"; // color
                        rouge.style.WebkitFilter = "drop-shadow(0 0 0rem red)"; // ombre porté en couleur
                    orange.style.backgroundColor="rgba(255, 69, 0, 1)";
                        orange.style.WebkitFilter = "drop-shadow(0 0 2rem rgba(255, 69, 0, 1))";
                    vert.style.backgroundColor="rgba(0, 255, 0, 0.2)";
                        vert.style.WebkitFilter = "drop-shadow(0 0 0rem rgba(0, 255, 0, 1))";
                        b1.onclick = false;

                }else if(i === 4 || i < 10){

                    rouge.style.backgroundColor="rgba(255, 0, 0, 1)";
                         rouge.style.WebkitFilter = "drop-shadow(0 0 2rem red)";
                    orange.style.backgroundColor="rgba(255, 69, 0, 0.2)";
                        orange.style.WebkitFilter = "drop-shadow(0 0 0rem rgba(255, 69, 0, 1))";
                    vert.style.backgroundColor="rgba(0, 255, 0, 0.2)";
                        vert.style.WebkitFilter = "drop-shadow(0 0 0rem rgba(0, 255, 0, 1))";

                }else if( i === 10){

                    rouge.style.backgroundColor="rgba(255, 0, 0, 0.2)";
                        rouge.style.WebkitFilter = "drop-shadow(0 0 0rem red)";
                    orange.style.backgroundColor="rgba(255, 69, 0, 0.2)";
                        orange.style.WebkitFilter = "drop-shadow(0 0 0rem rgba(255, 69, 0, 1))";
                    vert.style.backgroundColor="rgba(0, 255, 0, 1)";
                        vert.style.WebkitFilter = "drop-shadow(0 0 2rem rgba(0, 255, 0, 1))";

                }else if( i > 10 ){

                    b1.onclick = () => { clearTimeout("augmenter()", 500);
                            i = 0; // lorsque le pieton appuie sur le bouton lorque le feu est vert (i>=10)
                            } // i reviens à O pour laisser passer le pieton
                 }
    }
    
        setInterval("augmenter()", 1000); // permet à l'incrémentation de s'incrémenter toute 1sec
        
 