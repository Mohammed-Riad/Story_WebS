//chapter (1)

let girl;
document.getElementById("bow1").addEventListener('click',()=>
{

    girl="firts bowl"

    document.getElementById("lm").innerHTML="the girl choose:" +" " + girl;
    getOne()
})

document.getElementById("bow2").addEventListener('click',()=>
{
    girl="secund bowl"
    
    document.getElementById("lm").innerHTML="the girl choose:" + "  " +girl;

    getOne()
})


document.getElementById("bow3").addEventListener('click',()=>
{
    girl="last bowl"

    document.getElementById("lm").innerHTML="the girl choose:" + " " + girl;
    
    getOne()

    
})

document.getElementById("bu").addEventListener("click",()=>
{
    document.getElementById("chapter1").style.display="none"
    document.getElementById("chapter2").style.display="block"
})

function getOne()
{
    if (girl == "firts bowl") {
        
        girl="This porridge is too hot!"

        document.getElementById("ls").innerHTML=girl;
    }
    else if (girl == "secund bowl")
    {
        girl="This porridge is too cold"

        document.getElementById("ls").innerHTML=girl;

    }else if( girl == "last bowl")
    {
        girl="Ahhh, this porridge is just right"

        document.getElementById("ls").innerHTML=girl;
    }
    
}


//chapter (2)



let gir;

document.getElementById("chair1").addEventListener("click",()=>
{
        gir="first chair"

        document.getElementById("nb").innerHTML="the girl choose:" + " " + gir
        gettwo()
})

document.getElementById("chair2").addEventListener("click",()=>
{
    gir="secund chair"
    
        document.getElementById("nb").innerHTML="the girl choose:" + " " + gir
    gettwo()
})

document.getElementById("chair3").addEventListener("click",function()
{
    gir="last chair"

    document.getElementById("nb").innerHTML="the girl choose:" + " " + gir

    gettwo()
})

document.getElementById("bd").addEventListener("click",function()
{
    document.getElementById("chapter2").style.display="none"
    document.getElementById("chapter3").style.display="block"
})
function gettwo()
{
    if (gir == "first chair") {
        
        gir="This chair is too big!"
    }
    if (gir == "secund chair") {
        
        gir="This chair is too big, too!"
    }
    if (gir == "last chair") {
    
        gir="Ahhh, this chair is just right"
    }

    document.getElementById("xx").innerHTML=gir
}
