function action(e) {
              
                var btn = e.target || e.srcElement;
                
               
                document.getElementById('res').innerHTML+=document.getElementById(btn.id).innerHTML;
            }
            
            
document.getElementById("btn0").onclick=action;
document.getElementById("btn1").onclick=action;
document.getElementById("btnSum").onclick=action;
document.getElementById("btnSub").onclick=action;
document.getElementById("btnMul").onclick=action;
document.getElementById("btnDiv").onclick=action;

document.getElementById("btnClr").onclick=function()
{
document.getElementById("res").innerHTML="";
};

document.getElementById("btnEql").onclick=function()
{
var expression=document.getElementById("res").innerHTML;
let exp_arr=expression.match(/([01]+)([\+\-\*\/])([01]+)/);
let result=parseInt(exp_arr[1],2)+exp_arr[2]+parseInt(exp_arr[3],2);
document.getElementById("res").innerHTML=Math.floor(eval(result)).toString(2);
};
