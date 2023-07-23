/* $(function(){


    $(`.ex1 button`).click(function(){
        var n = $(this).val() //클릭한 요소
        $(`.ex1 .result`).html(n)
    })

    $(`.ex2 a`).click(function(e){
        
        // 콜백함수에 사용하는 파라미터는 매개변수 역할이 아니라, event listner 역할을 한다.
        e.preventDefault() // 해당요소의 기능을 비활성화시키는 이벤트 메서드이다.
        var n = $(e.target).attr('data-num') // attr 속성은 html 속성을 사용하게하는 메서드이다.
        $(`.ex2 .result`).html(n)
        //value 속성은 form요소에만 적용된다.
    })
})//ready */



/* $(function(){


    $(`.ex1 button`).click(function(){

        var btn = $(this).val()

        alert(btn)

    })

    $(`.ex2 a`).click(function(e){

        e.preventDefault()
        var result = $(e.target).attr('data-num')
        $(`.ex2 .result`).html(`결과 : ${result}`)

        

    })

}) */

/* $(function(){

    var fnSetNumber = function(el,ex){


    }

    var n = el.attr('data-num')
    $(`.ex${ex} .result`).html(`선택한 숫자는 ${n} 입니다.`)


    $(`.ex${ex} button`).click(function(){

        fnSetNumber ($(this), 1)
        
    }) 


    $(`.ex2 a`).click(function(e){

        fnSetNumber ($(e.target), 2)

    }) 


}) */

/* $(function(){


    var fnChangeNum = function(el,num){

        $(`.ex${num} button`).css({'color':'#000', 'font-style':'normal'})
        el.css({'color' : '#F00', 'font-style':'italic'})

    }


    $(`.ex3 button`).click(function(){

        // $(this).css({'color': '#F00'}) // :는 객체 명령어이다. 객체는 `를 사용하면 안된다.
        fnChangeNum($(this), 3)

    })

    $(`.ex4 button`).click(function(){

        // $(this).css({'color': '#F00'}) // :는 객체 명령어이다. 객체는 `를 사용하면 안된다.
        fnChangeNum($(this), 4)

    })

}) */

/* $(function(){


    $(`.ex5 button`).click(function(){

        $(`.ex5 img`).hide()
        $(`.ex5 .img${$(this).html()}`).show()

    })


    $(`.ex6 button`).click(function(){

        $(`.ex6 img`).hide()
        $(`.ex6 .img${$(this).html()}`).show()

    })

}) */

/* $(function(){

    var fnNum = function(th, n){

        $(`.ex${n} img`).hide()
        $(`.ex${n} .img${$(th).html()}`).show()

    } 

    $(`.ex5 button`).click(function(){

        fnNum($(this),5)

    })

    $(`.ex6 button`).click(function(){

        fnNum($(this),6)
    })

})
 */
/* $(function(){

    $(`.ex5 button:nth-of-type(1)`).click(function(){
        
            $(`.ex5 .img1`).show()
    
    })

    $(`.ex5 button:nth-of-type(2)`).click(function(){

        $(`.ex5 .img2`).show()

    })

    $(`.ex5 button:nth-of-type(3)`).click(function(){

        $(`.ex5 .img3`).show()

    })

    $(`.ex5 button:nth-of-type(4)`).click(function(){

        $(`.ex5 .img4`).show()

    })

    $(`.ex5 button:nth-of-type(5)`).click(function(){

        $(`.ex5 .img5`).show()

    })

}) */

$(function(){

    //버튼이 추가로 생길 때마다 작업하지않게끔 함수를 한번더 리펙토링시켜준다.
/*     
    var fnBtn = function(n,th){

        $(`.ex${n} img`).hide()
        $(`.ex${n} .img${$(th).html()}`).show()

    } 

    $(`.ex5 button`).click(function(){
        
        fnBtn(5, $(this))

    })

    $(`.ex6 button`).click(function(){

        fnBtn(6, $(this))

    }) */

    $(`.ex7 button`).click(function(){


        $(`.ex7 .img1`).show()

        $(`.ex8 .img1`).show()


    })


})


/* $(function(){

    $(`.ex3 button`).click(function(){
        
        $(`.ex3 button`).css('color':'#000', 'font-weight':'normal')

    })


}) */








    



/*     $(`.ex1 button`).click(function(){
        var n = $(this).val() //클릭한 요소
        $(`.ex1 .result`).html(n)
    })

    $(`.ex2 a`).click(function(e){
        
        // 콜백함수에 사용하는 파라미터는 매개변수 역할이 아니라, event listner 역할을 한다.
        e.preventDefault() // 해당요소의 기능을 비활성화시키는 이벤트 메서드이다.
        var n = $(e.target).attr('data-num') // attr 속성은 html 속성을 사용하게하는 메서드이다.
        $(`.ex2 .result`).html(n)
        //value 속성은 form요소에만 적용된다.
    }) })*/
