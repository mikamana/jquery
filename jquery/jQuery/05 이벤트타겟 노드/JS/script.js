$(function(){

    var fnSlider = function(el,n){

        var num = el.val() //클릭한 버튼의 번호를 가져온다

        $(`.ex${n} img`).hide() //.css({'display':'none'}) 과 같은 말이다.
        $(`.ex${n} .img${num}`).css({'display':'block'})
        $(`.ex${n} button`).removeClass('active')
        //$(`.ex1 .img3`).show() //display레벨을 jquery가 알아서 찾아서 정해준다.
  /*       $(`.ex${n} button`).css({'background':'#FFF'})
        el.css({'background':'yellow'}) */ //css 메서드는 여러 개의 css속성 변경시 수정보완이 불편함
        el.addClass('active')//클릭한 버튼에게 active라는 클래스명을 추가해준다.
    }

    $(`.ex1 button`).click(function(){

        fnSlider($(this),1)

    })/*  ex1 click */


    $(`.ex2 button`).click(function(){

        fnSlider($(this),2)

    })/*  ex2 click */

    $(`.ex3 button`).click(function(e){

        e.stopPropagation() //  부모의 일을 중지시키는 메소드, 버블링을 중지한다.  

        $(this).parent().siblings('div').removeClass('active')
        $(this).parent().addClass('active')
        
    })

    $(`.ex3 .box`).click(function(){

        $(`.ex3 button`).siblings('div').children().removeClass()
        $(this).children('button').addClass('active') // children 메서드에는 어떤 자식 요소가 들어갈지 값을 입력해야한다.

    })

    $(`.ex4 button`).click(function(){
        /* $(this).parent().siblings('p').children('button').removeClass() */
        $('.ex4 button').not($(this)).removeClass('active')
        // $(this).addClass('active')
        //스타일 변경하는 속성은 css와 addClass, toggleClass가 있다.
        $(this).toggleClass('active') // toggleClass 속성은 
        
    })

})

$(function(){


    var fnBtn = function(em){

        em.parent().siblings().children('button').removeClass()
        em.toggleClass('active')

    }

    $(`.ex_test button`).click(function(){

        fnBtn($(this))

    })
    // ex5 
    
    $(`.ex_6 button`).click(function(){

        fnBtn($(this))

    })

    //ex6

})




