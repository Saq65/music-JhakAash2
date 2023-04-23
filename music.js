
/*  var a=document.getElementById('mode');
  a.addEventListener('click',DarkMode);*/
  function DarkMode(a) {
    const b = document.body;
    b.classList.toggle('dark');
   var e = document.getElementById('mode');
    if (e.checked == true) {
        const rt = document.querySelectorAll('div');
        for (i = 0; i < rt.length; i++) {
            rt[i].style.background='#121212'
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
            ty[u].style.background='#272727'
        }
    }
    if(e.checked==true){
        const tr= document.querySelectorAll('.hbtn')
         for(o=0;o<tr.length;o++){
             tr[o].style.background=' #272727' 
         }
     }
     if(e.checked==true){
        document.getElementById('top').style.background='#272727'
     }
    if(e.checked==true){
        document.getElementById('hindi-s').style.background='#272727 '
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
        document.getElementById('eng-s').style.background=' #272727'
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
        document.getElementById('punjabi-s').style.background=' #272727'
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
        document.getElementById('d-m').innerHTML='Dark-mode'
        document.getElementById('d-m').style.color='black'      
    }
    if(e.checked==true){  
       const elm= document.querySelectorAll('li');
       for(u=0;u<elm.length;u++){
        elm[u].style.background='#121212 ';
        elm[u].style.color='white'
        elm[u].style.boxShadow='2px 1px 1px white outset'
        elm[u].style.fontfamily='arial'
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
document.getElementById('nav1').style.visibility='hidden'
}
else{document.getElementById('nav1').style.visibility=''
}
if(e.checked==true){
document.getElementById('nav2').style.visibility='hidden'
}
else{document.getElementById('nav2').style.visibility=''
}

if(e.checked==true){
document.getElementById('nav3').style.visibility='hidden'
}
else{document.getElementById('nav3').style.visibility=''
}
if(e.checked==true){
    document.getElementById('footer').style.background='#272727'
    }
}  
