//Finding maximum number form array

//regalar array parameter
function maximum1(numbers){
    let number1=1;
    numbers.forEach(number2 => {
        // console.log(typeof(num))
        // let num2ber=parseInt(num);
        if (number2>number1) {
            number1=number2;
        }
    }
    )
    console.log(number1)

}

var numbers=[1,5,8,3,5]
maximum1(numbers)



//rest parameter
function maximum(...arr){
    let num1=parseInt(arr[0])

    arr.forEach(num => {
        // console.log(typeof(num))
        let num2=parseInt(num);
        if (num2>num1) {
            num1=num2;
        }
    }
    )
    console.log(num1)
}

maximum(1,12,4,2,5,6,9,10)