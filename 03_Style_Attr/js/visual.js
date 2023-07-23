$(document).ready(function(){


   var $visualImg = $("#visual_list>li").eq(1).find('img')

   // 개수를 알아내는 메서드
   var visualImgLength =  $("#visual_list>li").size()

   var visualImgIndex= 1;

   initEvent()

   function initEvent(){

     $("#next_btn").on("click", showImgNext)
     $("#prev_btn").on("click", showImgPrev)

   }

   function showImgNext(){

     visualImgIndex++;

     if(visualImgIndex>=visualImgLength){
       visualImgIndex = 0;
     }

     // jquery 에서는 templete literal 사용불가
     $visualImg.attr('src', "./images/visual_0"+visualImgIndex+".jpg")

   }

   function showImgPrev(){

     visualImgIndex--;

     if(visualImgIndex<0){
       visualImgIndex = 2;
     }

     // jquery 에서는 templete literal 사용불가
     $visualImg.attr('src', "./images/visual_0"+visualImgIndex+".jpg")


   }



 })