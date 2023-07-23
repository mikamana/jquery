$(document).ready(function () {


   var $mainMenu = $("#mainmenu_list>li")
   var $subMenu = $(".submenu_list")
   var $subBg = $("#sub_bg")
   var $headerWrap = $("#header_wrap")
   var $nextBtn = $("#next_btn")
   var $prevBtn = $("#prev_btn")

   init()
   initEvent()

   function init() {

      $subMenu.css('display', 'none')
      $subBg.css('display', 'none')


   }

   function initEvent() {

      $headerWrap.on('mouseleave', hideSubMenu)
      $mainMenu.on('mouseenter', showSubMenu)

   }

   // 정리하는 방법중에 외부파일로 정리하는 방법이있고, 함수로 정리하는 방법이 있다.


   function showSubMenu() {

      $subMenu.css('display', 'block')
      $subBg.css('display', 'block')

   }

   function hideSubMenu() {

      $subMenu.css('display', 'none')
      $subBg.css('display', 'none')

   }



})