
/*  var a=document.getElementById('mode');
  a.addEventListener('click',DarkMode);*/
function DarkMode(a) {
    const b = document.body;
    b.classList.toggle('dark');
   var e = document.getElementById('mode');
    if (e.checked == true) {
        const rt = document.querySelectorAll('div');
        for (i = 0; i < rt.length; i++) {
            rt[i].style.background='#1D1D1D'
        }
        
    }else{
        const rt = document.querySelectorAll('div');
        for (i = 0; i < rt.length; i++) {
            rt[i].style.background=''
        }
    }
    if(e.checked==true){
       const ty= document.querySelectorAll('#hindi')
        for(u=0;u<ty.length;u++){
            ty[u].style.background='black'
        }
    }
    if(e.checked==true){
        const tr= document.querySelectorAll('.hbtn')
         for(o=0;o<tr.length;o++){
             tr[o].style.background='#C7C2C2'
         }
     }
     if(e.checked==true){
        document.getElementById('top').style.background='black'
     }
    if(e.checked==true){
        document.getElementById('hindi-s').style.background='black'
        document.getElementById('hindi-s').style.color='#ffffff'
        document.getElementById('hindi-s').style.textShadow='none'
        document.getElementById('hindi-s').style.fontSize='bold'
    }else{
        document.getElementById('hindi-s').style.background=''
        document.getElementById('hindi-s').style.color=''
        document.getElementById('hindi-s').style.textShadow=''
        document.getElementById('hindi-s').style.fontSize=''
    }
    if(e.checked==true){
        document.getElementById('eng-s').style.background='black'
        document.getElementById('eng-s').style.color='#ffffff'
        document.getElementById('eng-s').style.textShadow='none'
        document.getElementById('eng-s').style.fontSize='bold'
    }else{
        document.getElementById('eng-s').style.background=''
        document.getElementById('eng-s').style.color=''
        document.getElementById('eng-s').style.textShadow=''
        document.getElementById('eng-s').style.fontSize=''
    }
    if(e.checked==true){
        document.getElementById('punjabi-s').style.background='black'
        document.getElementById('punjabi-s').style.color='#ffffff'
        document.getElementById('punjabi-s').style.textShadow='none'
        document.getElementById('punjabi-s').style.fontSize='bold'
    }else{
        document.getElementById('punjabi-s').style.background=''
        document.getElementById('punjabi-s').style.color=''
        document.getElementById('punjabi-s').style.textShadow=''
        document.getElementById('punjabi-s').style.fontSize=''
    }
    if(e.checked===true){
        document.getElementById('d-m').innerHTML='light-mode'
        document.getElementById('d-m').style.color='white'
    }else{
        document.getElementById('d-m').innerHTML='dark-mode'
        document.getElementById('d-m').style.color='black'      
    }
    if(e.checked==true){  
       const elm= document.querySelectorAll('li');
       for(u=0;u<elm.length;u++){
        elm[u].style.background='black';
        elm[u].style.color='white'
        elm[u].style.boxShadow='2px 1px 1px white inset'
       // elm[u].style.border='1px outset white'
       }
    }else{  
        const elm= document.querySelectorAll('li');
        for(u=0;u<elm.length;u++){
         elm[u].style.background=''
         elm[u].style.color=''
         elm[u].style.boxShadow=''
         elm[u].style.border=''
        }
     }
     if(e.checked==true){
        document.getElementById('cont').style.color='white'
     }else{
        document.getElementById('cont').style.color=''
     }
if(e.checked==true){
document.getElementById('nav1').style.Visibility='hidden'
}else{document.getElementById('nav1').style.Visibility=''
}
}  
