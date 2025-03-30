
var i = 0;

var txt =  "I am a Software Engineer";
var speed = 100;
isDone= false;

function typeWriter() {
    if(i <txt.length && isDone == false)  // Type
    {
        document.getElementById("typingEffect").innerHTML += txt.charAt(i);
        i++;
        if (i==txt.length)
        {
            isDone = true;
        }
        setTimeout(typeWriter,speed);
    }
    else if (i != 0 && isDone == true) // Delete
    {
        document.getElementById("typingEffect").innerHTML = txt.slice(0,i);
        i--;
        if (i == 0)
        {
            document.getElementById("typingEffect").innerHTML = txt.slice(0,i); //delete 1 more character
            isDone=false; 
        }
        setTimeout(typeWriter,speed)
    }
}

typeWriter();