letday=date.getDay();
day=1;

if(day==1||day==2){
    letbanner=document.querySelector('.banner');
    banner.style.display='block';

    document.querySelector(".banner-button").addEventListener("click",function(){
        banner.style.display='none';
      });
}else{
    letbanner=document.querySelector('.banner');
    banner.style.display='none';
}
