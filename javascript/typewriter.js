const TypeWriter = function(txtElement, words, wait = 3000)
{
    this.txtElement = txtElement;
    this.words =  words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

TypeWriter.prototype.type = function()
{
    // current index of word;

    const current = this.wordIndex % this.words.length;

    // full text

    const fulltxt = this.words[current];
    

    //check if deleting
    if(this.isDeleting){
        //remove character
        this.txt = fulltxt.substring(0, this.txt.length - 1);
    }
    else{
        //add character
        this.txt = fulltxt.substring(0, this.txt.length + 1);
    }   
    this.txtElement.innerHTML = `<span class='txt'>${this.txt}</span>`;

    // Type speed

    let typespeed = 0;

    if(this.isDeleting){
        typespeed = typespeed / 2;
    }

    // if word is completed

    if(!this.isDeleting && this.txt === fulltxt){
        // make pause at end
        typespeed = this.wait;
        //set delete to true
        this.isDeleting = true;
    }
    else if(this.isDeleting && this.txt === ""){
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // pause before start typing
        typespeed = 100;
    }

    setTimeout(() => this.type(), 500);
}

function init(){
    if(window.innerWidth >= 768){
        const txtElement = document.querySelector(".txt-type");
        const words = JSON.parse(txtElement.getAttribute("data-words"));
        const wait = txtElement.getAttribute("data-wait");
    
        new TypeWriter(txtElement, words, wait)
    }
   return;
}

window.addEventListener("load", init);


