//getting the html elements to work with
let inputs = document.querySelectorAll('.inputd')

let inputCelsius = document.querySelector('.celsius')
let inputFahrenheit = document.querySelector('.fahrenheit')
let inputKelvin = document.querySelector('.kelvin')



// console.log(inputCelsius);
// console.log(inputFahrenheit);
// console.log(inputKelvin);

//getting the input from user for diffent cases - celsius,fahrenheit and kelvin
inputCelsius.addEventListener('input', celsiusCase)
inputFahrenheit.addEventListener('input', fahrenheitCase)
inputKelvin.addEventListener('input', kelvinCase)





//function for celsius
function celsiusCase(e) {

    let celsiusVal = e.target.value;
    // console.log(e.target.value);
    
    inputFahrenheit.value = (celsiusVal * 9 / 5 + 32);
    inputKelvin.value = (celsiusVal / celsiusVal * celsiusVal + 273.15);
}




//function for fahrenheit
function fahrenheitCase(e) {
    let fahrenheitVal = e.target.value;
    // console.log(fahrenheitVal);

    inputCelsius.value = ((fahrenheitVal - 32) / 1.8)
    inputKelvin.value = ((fahrenheitVal -32) * 5) / 9 + 273.15 
}




//function for kelvin
function kelvinCase(e) {
    let kelvinVal = e.target.value;
    // console.log(kelvinVal);

    inputCelsius.value = kelvinVal - 273.15;
    inputFahrenheit.value = (kelvinVal - 273.15) * 9/5 + 32
}