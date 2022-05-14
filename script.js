let string="";
let buttons=document.querySelectorAll('.button');
for(var i=0;i<buttons.length;i++)
{
    document.querySelectorAll('.button')[i].addEventListener("click",function(e){
        // console.log(e.target.innerHTML);
        if(e.target.innerHTML== "="){
            string = eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML== "AC"){
            string="";
            document.querySelector('input').value=string;
        }
        else{
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;
        }
    })


   
}