$(document).ready(function(){

    // 1,2번 예제
/*     function fn(n){
       
        var num1 = parseInt($(`.ex${n} input:first-child`).val())
        var num2 = parseInt($(`.ex${n} input:last-of-type`).val())
        var sum = num1 + num2 
        var sub = num1 - num2 
        var multi = num1 * num2 
        var divide = num1 / num2 
        var result = `합 : ${sum} 차 : ${sub} 곱 : ${multi} 제:${divide}`

        $(`.ex${n} p:last-child`).html(`결과 : ${result}`)
    }


    $(`.ex1 button`).click(function(){
        
        
        fn(1)


    })  

    $(`.ex2 button`).click(function(){
        
        
        fn(2)


    })   */

    
    // 3,4 번 예제
/*      $(function(){
        var fnSum = function(num1, num2){
        var sum = num1 +  num2 
        return sum 

        }

        var fnSub = function(num1,num2){

            return num1 - num2

        }

        $(`.ex3 button:nth-of-type(1)`).click(function(){

            var num1 = parseInt($(`.ex3 input:nth-child(1)`).val())
            var num2 = parseInt($(`.ex3 input:nth-child(2)`).val())
            var sum = fnSum(num1, num2)
            $('.ex3 p:last-child').html(`결과 : ${sum}`)

    })

    $(`.ex3 button:nth-of-type(2)`).click(function(){
    
        var num1 = parseInt($(`.ex3 input:nth-child(1)`).val())
        var num2 = parseInt($(`.ex3 input:nth-child(2)`).val())
         
        $('.ex3 p:last-child').html(`결과 : ${fnSub(num1, num2)}`)

})
            */ 



/*     $(`.ex3 button:nth-of-type(1)`).click(function(){

        var num1 = parseInt($(`.ex3 input:nth-of-type(1)`).val())
        var num2 = parseInt($(`.ex3 input:nth-of-type(2)`).val())
        var result1 = num1 + num2
        var result2 = num1 - num2
        var result3 = num1 * num2
        var result4 = num1 / num2
        $(`.ex3 p`).html(`더하기 : ${result1}, 빼기 : ${result2}, 곱하기 : ${result3}, 나누기 ${result4}`)

    }) */
/* 

    $(function(){

        var num1 = parseInt($(`.ex3 input:nth-of-type(1)`).val())
        var num2 = parseInt($(`.ex3 input:nth-of-type(2)`).val())


        $(`.ex3 button:nth-of-type(1)`).click(function(){


        })




    })

 */
    
    /* $(function(){ // ex4,5


        var fn = function(n){
    
            var num = parseInt($(`.ex${n} input`).val())
            return num*num*num
    
        }
    
        $(`.ex4 button`).click(function(){
    
            fn(4)
    
        }) //4 click
    
        $(`.ex5 button`).click(function(){
    
            fn(5)
    
        }) //5 click
    
    
    }) */

/*     $(function(){

        var fn = $(function(n){

            var num1 = parseInt($(`.ex${n} input:nth-of-type(1)`).val())
            var num2 = parseInt($(`.ex${n} input:nth-of-type(2)`).val())
            var result = (num1 + num2) * (num1 + num2) * (num1 + num2)  ;

            $(`.ex${n} p`).html(`결과 : ${result}`)

        })

        $(`.ex4 button`).click(function(){

            fn(4)

        })

        $(`.ex5 button`).click(function(){

            fn(5)

        })

    }) */


/*     $(function(){

        $(`.ex6 button`).click(function(){
            
            var num1 = parseInt($(`.ex6 input:nth-of-type(1)`).val())
            var num2 = parseInt($(`.ex6 input:nth-of-type(2)`).val())
            var num3 = parseInt($(`.ex6 input:nth-of-type(3)`).val())
            var sum = num1 + num2 + num3
            var aver = sum / 3

            $(`.ex6 p:nth-of-type(3)`).html(`총점 : ${sum}`)
            $(`.ex6 p:nth-of-type(4)`).html(`평균 : ${aver}`)

        })

    }) */


   /*  $(function(){

        var fnSub = function(){

            var num1 = parseInt($(`.ex7 input:nth-of-type(1)`).val())
            var num2 = parseInt($(`.ex7 input:nth-of-type(2)`).val())
            var num3 = parseInt($(`.ex7 input:nth-of-type(3)`).val())
            var sum = num1 + num2 + num3
            return sum

        }

        var fnAver = function(){

            var num1 = parseInt($(`.ex7 input:nth-of-type(1)`).val())
            var num2 = parseInt($(`.ex7 input:nth-of-type(2)`).val())
            var num3 = parseInt($(`.ex7 input:nth-of-type(3)`).val())
            var aver = (num1 + num2 + num3) / 3
            return aver

        }

        $(`.ex7 button`).click(function(){

            $(`.ex7 p:nth-of-type(3)`).html(`총점 : ${fnSub()}`)
            $(`.ex7 p:nth-of-type(4)`).html(`평균 : ${fnAver()}`)

        })


    })
 */
    $(function(){

        var fn = function(n){

            var num1 = parseInt($(`.ex${n} input:nth-of-type(1)`).val())
            var num2 = parseInt($(`.ex${n} input:nth-of-type(2)`).val())
            var num3 = parseInt($(`.ex${n} input:nth-of-type(3)`).val())
            var sum = num1 + num2 + num3
            var aver1 = parseInt((sum / 3) * 100) / 100 
            var aver2 = (sum/3).toFixed(2)
            $(`.ex${n} p:nth-of-type(3)`).html(`총점 : ${sum}`)
            $(`.ex${n} p:nth-of-type(4)`).html(`평균 : ${aver2}`)
            
        }

        $(`.ex6 button`).click(function(){

            fn(6)

        })
        $(`.ex7 button`).click(function(){

            fn(7)

        })

    })


})


