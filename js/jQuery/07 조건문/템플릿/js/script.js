

/* 요소안에 태그를 넣고싶을 때는 html속성을 사용하고, 텍스트만 넣고싶을땐 text속성을 사용해도된다. */
/* $(`.ex1 button`).click(function(e){

    // e.preventDefault() 폼의 원래 기능(전송기능)을 상실시키는 메서드이다.
    $(`.ex1 .result`).text(`안녕하세요`)
    
}) */

$(function(){

// 컴퓨터뽑기()가 하는 일은 가위바위보중에 하나를 제시
// 

    var 컴퓨터뽑기 = function(){

        //1~3중에 하나를 뽑는다.
        var 숫자 = Math.ceil(Math.random() * 3) // 0.000001 ~ 2.9999999
        //Math.round(1.5)->2 (반올림) , Math.floor(1.7)->1(자리내림), Math.ceil(1.2)->2(자리올림)
        //Math.ceil(0.000001)->1 , Math.ceil(2.99999)->3
        // 컴퓨터가 1이면 가위 2이면 바위 3이면 보로 변경한다.
        var 결과

        if(숫자===1) 결과 = "가위"
        else if(숫자===2) 결과 = "바위"
        else 결과 = "보";         console.log(결과);
        return 결과        

/*         3~8 중에 하나의 숫자를 뽑아보세요
            var num1 = Math.random() * (8 - 3 + 1) -> 0.00001 ~ 5.9999999
            정수 = Math.floor(소수점) -> 0 ~ 5
            뽑기 = 정수 + 3 -> 3 ~ 8 */
       
    }

    var 승부 = function(컴, 유저){

        var 승부결과
        // 유저 = 유저가 가위일때, 컴은 보 또는 유저가 바위이면서 컴은 가위 또는 유저가 보이면서 컴은 주먹이면 된다. 
        if((유저 === "가위" && 컴 === "보") ||
            (유저 === "바위" && 컴 === "가위") ||
            (유저 === "보" && 컴 === "바위")){

            승부결과 = "이겼습니다."


        }else if((유저 === "가위" && 컴 === "바위") ||
                (유저 === "바위" && 컴 === "보") ||
                (유저 === "보" && 컴 === "가위")){

            승부결과 = "졌습니다."
            
        }else{
            
            승부결과 = "비겼습니다."

        }return 승부결과

    }

    $(`form.ex1`).submit(function(e){ 
            e.preventDefault()
            // submit은 form요소 안에있는 버튼을 클릭할 때 사용하는 이벤트를 처리하는 메서드이다.
            var 컴퓨터뽑은값 = 컴퓨터뽑기() //가위바위보 중에 하나를 리턴한다. 절차지향적으로 짜는 것 연습
            var 유저선택값 = $(`.ex1 input[type=radio]:checked`).val()
            var 승부결과 =  승부(컴퓨터뽑은값, 유저선택값) //승부결과를 리턴하는 함수
            var 출력 = `컴퓨터:${컴퓨터뽑은값}<br><br> 유저:${유저선택값}<br><br> 결과:${승부결과}`

            $(`.ex1 .result`).html(`${출력}`)

    })

})


$(function(){

    var fnSetNum = function(ex){

        
        var 랜덤숫자1 = Math.floor(Math.random() * 10)
        var 랜덤숫자2 = Math.floor(Math.random() * 10)
        $(`.ex2 .q${ex} .num1`).val(랜덤숫자1)
        $(`.ex2 .q${ex} .num2`).val(랜덤숫자2)

    }

    fnSetNum(1)
    fnSetNum(2)
    fnSetNum(3)

    var fnCheckNum = function(q){

        var num1 = parseInt($(`.ex2 .q${q} .num1`).val())
        var num2 = parseInt($(`.ex2 .q${q} .num2`).val())
        var userNum = parseInt($(`.ex2 .q${q} .usernum`).val())
        
        if(num1 + num2 === userNum){
            return true
        }else{
            return false
        }

    }//fnCehckNum

    $(`.ex2`).submit(function(e){

        e.preventDefault()

        var result
        //fnCheckNum(1)
        //fnCheckNum(2)
        //fnCheckNum(3)
        //if( fnCheckNum(1)===true && fnCheckNum(2)===true && fnCheckNum(3)===true )
        if( fnCheckNum(1) && fnCheckNum(2) && fnCheckNum(3)){ //3항목 모두 정답이라면
            
            result = "정답"

        }else{

            result = "오답"

        }

        $(`.ex2 .result`).html(result)

    })


})


$(function(){
    
    /* 
       무효한값 : undefined, null, NaN, "", false  
     */

    /* 유효한 값인지 무효한 값인지 판정한다. */

    var n = false
    if(!n){ //n이 유효한 값이라면
        console.log('조건:참')
    
    }else{
        console.log("거짓")
    }

})


$(function(){



    $(`.ex3`).submit(function(e){

        e.preventDefault()

        var 입력한값1 = parseInt($(`.ex3 input[type=number]:nth-of-type(1)`).val())
        var 입력한값2 = parseInt($(`.ex3 input[type=number]:nth-of-type(2)`).val())
        var 선택한연산자 = $(`.ex3 select option:selected`).val()
        var 결과 = `${입력한값1} ${연산자} ${입력한값2}`

        if(선택한연산자 === "더하기"){

            연산자 = +

        }else if(선택한연산자 === "빼기"){

            연산자 = -

        }else{
            연산자 = *
        }

        alert(결과)

    })

})