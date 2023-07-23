$(document).ready(function(){


    $(`.ex1 button`).click(function(){

    var 성별 = $(`.ex1 input[type=radio]:checked`).val()
    var 신장 = parseInt($(`.ex1 .long`).val()) /100
    var 체중 = parseInt($(`.ex1 .weight`).val())
    var bmi = 체중 / (신장 * 신장)
    var 체지방율

    if(성별 === "여자" && bmi < 20){
        체지방율 = "마름"
    }else if((성별 === "여자") && (bmi >= 20 && bmi < 25)){
        체지방율 = "저체중"
    }else if((성별 === "여자") && (bmi >= 25 && bmi < 30)){
        체지방율 = "적정"
    }else if((성별 === "여자") && (bmi >= 30 && bmi < 35)){
        체지방율 = "과체중"
    }else{
        체지방율 = "비만"
    }


    if(성별 === "남자" && bmi < 15){
        체지방율 = "마름"
    }else if((성별 === "남자") && (bmi >= 15 && bmi < 20)){
        체지방율 = "저체중"
    }else if((성별 === "남자") && (bmi >= 20 && bmi < 25)){
        체지방율 = "적정"
    }else if((성별 === "남자") && (bmi >= 25 && bmi < 30)){
        체지방율 = "과체중"
    }else{
        체지방율 = "비만"
    }

    $(`.ex1 .result`).html(`결과 : ${체지방율}`)

})

})



/* if (성별 === "male") {
    if (bmi < 15) { showResult(8, "결과 : 마름") }
    else if (bmi < 20) { showResult(8, "결과 : 저체중") }
    else if (bmi < 25) { showResult(8, "결과 : 적정") }
    else if (bmi < 30) { showResult(8, "결과 : 과체중") }
    else { showResult(8, "결과 : 비만") }
} else {
    if (bmi < 20) { showResult(8, "결과 : 마름") }
    else if (bmi < 25) { showResult(8, "결과 : 저체중") }
    else if (bmi < 30) { showResult(8, "결과 : 적정") }
    else if (bmi < 35) { showResult(8, "결과 : 과체중") }
    else { showResult(8, "결과 : 비만") }
} */