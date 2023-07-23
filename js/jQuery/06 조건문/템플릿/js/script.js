$(document).ready(function(){

    /* 비교연산자 
        a>b(b보다 a가큼) , a<b(a보다b가큼), a>=b(이상), a<=b(이하), a===b(a와b가같다), a!==b(b가아니다)
    */

    /* 조건문법
    
        조건문은 함수당 하나 사용 if(), else if(), else()

    */

    /* 논리연산자
    
    &&(and) => 면서, 그리고 , 모든비교연산이 참일 경우 최종 참
    ||(or) => 거나, 또는, 비교연산중 하나만 참이어도 최종 참
    and or 연산자를 병행할경우 ()를 사용해야한다.


    if(3>2 && 3<2){alert()}
    if(3>2 || 3<2){alert()}

    */



/*     
    $(function(){

        $(`.ex1 button`).click(function(){

            var input = parseInt($(`.ex1 input`).val())
            var result
            //  if( 2 > 1 ) {할일} 

            if(input === 1){
                result = '정답'
            }else{
                result = '오답'
            }

            $(`.ex1 .result`).html(result)

        }) 
        


    }) */

/*     $(function(){

        $(`.ex2 button`).click(function(){

            var input = parseInt($(`.ex2 input`).val())
            var result
                if(input === 1 ){
                    result = '정답'

                }else if(input === 3){
                    result = '정답'
                }else{
                    result ='오답'
                }

            $(`.ex2 .result`).html(result)
        })

    }) */

/*     $(function(){


        $(`.ex3 button`).click(function(){


            var input = parseInt($(`.ex3 input`).val())
            var result

            if(input < 5 || input > 10){
                result = "정답"
            }else{
                result = "오답"
            }

            $(`.ex3 .result`).html(result)

        })


    }) */


/*     $(function(){

        $(`.ex4 button`).click(function(){

            var input = parseInt($(`.ex4 input`).val())
            var result


            if(input >= 5 && input <= 10){

                result = "정답"

            }else{

                result = "오답"

            }

            $(`.ex4 .result`).html(result)


        })


    }) */


    $(function(){

        $(`.ex5 button`).click(function(){

            var seName = $(`.ex5 select option:selected`).html()
            var sePrice = parseInt($(`.ex5 select option:selected`).val())
            var seCount = parseInt($(`.ex5 input:checked`).val())
            var seAge = parseInt($(`.ex5 input[type=number]`).val())
            var result
            var sum = seCount * sePrice

            if(seName === "담배" && seAge <= 19){ 

                result = "학생입니다."
    
            }else{
    
                result = "성인입니다."
    
            }

            $(`.ex5 .result`).html(`가격 : ${sum} 수량 : ${seCount} 가격 성인유무 : ${result}`)

        })

/*         $(`.ex5 button`).click(function(){

            alert("33")
        var seName = $(`.ex5 select option:selected`).html()
        var sePrice = parseInt($(`.ex5 select option:selected`).val())
        var seCount = parseInt($(`.ex5 input:checked`).val())
        var seAge = parseInt($(`.ex5 input[type=number]`).val())
        var result
            

        if(seName === "담배" && seAge <= 19){ 

            result = "학생입니다."

        }else(){

            result = "성인입니다."

        }

    }) */

    })


    $(function(){

        $(`.ex6 button`).click(function(){


            var ev = parseInt($(`.ex6 input`).val())
            var result
            if(ev >= 100 && ev <= 100 && ev % 2 === 0){

                result = "짝수입니다."

            }else{

                result = "홀수입니다."

            }  

            $(`.ex6 .result`).html(result)

        })

    })


    $(function(){

        $(`.ex7 button`).click(function(){

           var 성인여부 = $(`.ex7 input[type=radio]:checked`).val()
           var 점수 = $(`.ex7 input[type=number]`).val()
           var result 

           if((성인여부 === "성인" && 점수 >= 80) || (성인여부 === "미성인" && 점수 >= 60)){

            result = "합격"

           }else{

            result = "불합격"
            
           }

           $(`.ex7 .result`).html(result)

        })


        // 성인이면서 80점이상 또는 미성년이면서 60점이상인게 합격
    })

//삼항연산자 조건식 ? 참일떄 실행할코드 : 거짓일때실행할코드 '

/* 조건식1
    ? 조건식1 (참,거짓)
        ?조건식1-1 (참,거짓)
        :조건식1-2 (참,거짓)

    : 조건식2 (참,거짓)
        ?조건식2-1 (참,거짓)
        :조건식2-2 (참,거짓)

     */


})