
/*  var a=document.getElementById('mode');
  a.addEventListener('click',DarkMode);*/
function DarkMode(a) {
    const b = document.body;
    b.classList.toggle('dark');
   var e = document.getElementById('mode');
    if (e.checked == true) {
        const rt = document.querySelectorAll('div');
        for (i = 0; i < rt.length; i++) {
            rt[i].style.background='silver'
        }
        
    }else{
        const rt = document.querySelectorAll('div');
        for (i = 0; i < rt.length; i++) {
            rt[i].style.background=''
        }
    }
    if(e.checked==true){
        document.getElementById('hindi-s').style.background='#E6E6FA'
        document.getElementById('hindi-s').style.color='#000000'
        document.getElementById('hindi-s').style.textShadow='none'
        document.getElementById('hindi-s').style.fontSize='bold'
    }else{
        document.getElementById('hindi-s').style.background=''
        document.getElementById('hindi-s').style.color=''
        document.getElementById('hindi-s').style.textShadow=''
        document.getElementById('hindi-s').style.fontSize=''
    }
    if(e.checked==true){
        document.getElementById('eng-s').style.background='#E6E6FA'
        document.getElementById('eng-s').style.color='#000000'
        document.getElementById('eng-s').style.textShadow='none'
        document.getElementById('eng-s').style.fontSize='bold'
    }else{
        document.getElementById('eng-s').style.background=''
        document.getElementById('eng-s').style.color=''
        document.getElementById('eng-s').style.textShadow=''
        document.getElementById('eng-s').style.fontSize=''
    }
    if(e.checked==true){
        document.getElementById('punjabi-s').style.background='#E6E6FA'
        document.getElementById('punjabi-s').style.color='#000000'
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
} 
