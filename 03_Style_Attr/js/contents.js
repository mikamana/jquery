$(document).ready(function () {


   var $contents = $("#contents_list>li")
   var $moreDiv = $("<div class='contents_bg'>자세히보기</div>")

   // 이 작업을 순수스크립트로 한다면, 
   // var moreDiv = document.createElement("div")
   // moreDiv.className= 'contents_bg'
   // moreDiv.innerHTML = "자세히보기"

   initEvent()

   function initEvent() {

     $contents.on("mouseenter", showMoreDiv)
     $contents.on("mouseleave", hideMoreDiv)

   }

   function showMoreDiv() {

     $moreDiv.appendTo($(this))

   }
   
   function hideMoreDiv(){

     $moreDiv.remove()

   }






 })
