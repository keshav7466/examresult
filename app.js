var total=document.getElementById("total");
var ob=document.getElementById("ob");
var result;
var h2=document.getElementById("h2");
var img=document.getElementById("img");
var btn=document.getElementById("btn");
img.style.visibility="hidden";
function show(){
    result=(ob.value/total.value)*100;
    if(result>0 && result<=100)
    {
        if(result>=80)
        {
            h2.innerHTML="Congratulations:"+result+" "+"%";
            img.src="cng.gif";
            img.style.visibility="visible";
        }
        if(result<80 && result>=60)
        {
            h2.innerHTML="Very Good:"+result+" "+"%";
            img.src="very.gif";
            img.style.visibility="visible";
        }
        if(result<60)
        {
            h2.innerHTML="Try Hard:"+result+" "+"%";
            img.src="try.gif";
            img.style.visibility="visible";
        }
    }
}