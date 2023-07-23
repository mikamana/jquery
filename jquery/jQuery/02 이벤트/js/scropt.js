$(document).ready(function(){

/*  $(".ex1 button").click(function(){

        var num1 = parseInt(prompt("첫번째 숫자를 입력하세요"))
        var num2 = parseInt(prompt("두번째 숫자를 입력하세요"))
        var result = num1 % num2
            alert(`나머지는 ${result}`)

    }) */

/*   $(".ex2 button").click(function(){

        var num1 = parseInt($(".ex2 .num1").val())
        var num2 = parseInt($(".ex2 .num2").val())
        var result = num1 + num2

        $(".ex2 p").html(`결과 : ${result}`)

        $(".ex2 .num1").val('')
        $(".ex2 .num2").val('')


        // val 메소드는 값을 가져오는 기능과 값을 바꾸는 기능 두가지 기능을 한다.
    })  */






/* 
    $(".ex3 button").mouseenter(function(){


        $(".ex3 p").html("mouseenter")

// jsx 
// 파스칼 케이스는 리액트 할떄 주로 사용
})    .mouseleave(function(){

    $(".ex3 p").html("mouseleave")

}) */


/* $(".ex4 button").click(function(){

    var str =  $(".ex4 p").html()

    $(".ex4 .num3").val(str)

    // alert($(".ex4 p").html())    
})

// 유일하게 바꿀수 있는 UI = FORM 요소



})
 */

/* $(document).ready(function(){



    $(".ex2 button").click(function(){

        var num1 = parseInt($('.ex2 .num1').val())
        var num2 = parseInt($('.ex2 .num2').val())
        var result = num1 + num2
        alert(result)

        $(".ex2 p").html(`결과 : ${result}`)
        // html 메소드는 내용을 지워버리고 다른 내용으로 바꾸는 메소드이다.
        
    })

    $(document).ready(function(){

        $(".ex2 button").click(function(){

            var num1 = parseInt($(".ex2 .num1").val())
            var num2 = parseInt($(".ex2 .num2").val())
            var result = num1 + num2 

            $(".ex2 p").html(`결과 : ${result}`)

        })

    }) 

    

})
*/





/* window.addEventListener("DOMContentLoaded",()=>{


    const button1 = document.querySelector("button")
    
    initEvent()



    function initEvent(){

        button1.addEventListener("click", onMouse)

    }


    function onMouse(){

        alert("test")

    }

}) */

/* 
    $(".ex5 input").change(function(){

        var gder = $(".ex5 input:checked").val()
        $(".ex5 p").html(gder)

        
    // input : checked 는 다중의 요소들 중에 체크되어있는 요소만 선택하는 메소드이다.


    }) */






/*     $(".ex6 select").change(function(){

        var count = $(".ex6 select").val()
        
        $(".ex6 p").html(count)

    }) */

    $(".ex7 button").click(function(){

        var num1 = $(".ex7 .number1").val()
        var num2 = $(".ex7 .number2").val()
        var result1 = parseInt(num1+num2)
        var num3 = $(".ex7 .number3").val()
        var num4 = $(".ex7 .number4").val()
        var result2 = parseInt(num3+num4)
        var result3 =result1 + result2
        $(".ex7 .div_result").html(result3)
        
    })


    $(".ex8 .btn_1").click(function(){

        var containerWidth = parseInt($(".ex8 .container_width").val())
        var gridWidth = parseInt($(".ex8 .grid_width").val())
        var gridCount = parseInt($(".ex8 .grid_count").val())
        var marginCount = gridCount + 1
        
    })
    
    





})




/* 
    이벤트, 콜백함수
    ready(구문분석(파싱), 렌더링(화면표출), 제어기능(JS))
    
    스코프
    변수의 범위

    메소드
    명령어 (내장함수)
*/