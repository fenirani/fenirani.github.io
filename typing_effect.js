
var i = 0;
var j =0;

var txt =  ["Software Engineer","Front End Developer", "Gamer", "Fanstasy Football Fan"];
var speed = 100;
isDone= false;

function typeWriter() {
    if(i <txt[j].length && isDone == false)  // Type
    {
        speed=100; //reset speed to normal
        document.getElementById("typingEffect").innerHTML += txt[j].charAt(i);
        i++;
        if (i==txt[j].length)
        {
            isDone = true;
            speed = 2000; //slow down speed when the word is finished
        }
        setTimeout(typeWriter,speed);
    }
    else if (i != 0 && isDone == true) // Delete
    {
        speed = 100; //reset speed to normal
        document.getElementById("typingEffect").innerHTML = txt[j].slice(0,i);
        i--;
        if (i == 0)
        {
            document.getElementById("typingEffect").innerHTML = txt[j].slice(0,i); //delete 1 more character
            isDone=false;
            j++;
            if (j== txt.length)
            {
                j=0; // reset the 'loop'
            }
        }
        setTimeout(typeWriter,speed)
    }    
}

typeWriter();