var weight, height, bmi, bmiValue, bodyLevel, error;

function calculate(){
    weight = document.getElementById("weight").value;
    height = document.getElementById("height").value;
    error = "Please enter some values";

    if (height < 0) {
        document.getElementById("error").innerHTML = "Negative values are not allowed";
        document.querySelector("#error").style.color = "red";
        document.getElementById("bmi-value").innerHTML = "--"
        document.getElementById("body-level").innerHTML = "--"     
    }

    height /= 100;
    height *= height;
    bmi = weight/height;
    bmi = bmi.toFixed(1);
    

    if (bmi >=1 && bmi <= 18.4){
       bmiValue = bmi;
       bodyLevel = "Under weight";
    //    document.querySelector("#body-level").style.color.blue = bodyLevel;

    }
    else if (bmi >= 18.5 && bmi <= 24.9){
        bmiValue = bmi;
        bodyLevel = "Normal";
    }
    else if (bmi >= 25 && bmi <= 29.9){
        bmiValue = bmi;
        bodyLevel = "Over weight";
    }
    else if (bmi >= 30 && bmi <= 34.9){
        bmiValue = bmi;
        bodyLevel = "Obese";
    }
    else if (bmi >= 35){
        bmiValue = bmi;
        bodyLevel = "Extremely Obese";
    }


    if (weight===0 || height===0){
        document.getElementById("error").innerHTML = error;
        document.getElementById("bmi-value").innerHTML = "--"
        document.getElementById("body-level").innerHTML = "--"

    }
    else {
        document.getElementById("error").innerHTML = "";
        document.getElementById("bmi-value").innerHTML = bmiValue;
        document.getElementById("body-level").innerHTML = bodyLevel;
    }

    if (weight < 0 ){
        document.getElementById("error").innerHTML = "Negative values are not allowed";
        document.querySelector("#error").style.color = "red";

        document.getElementById("bmi-value").innerHTML = "--"
        document.getElementById("body-level").innerHTML = "--"
       
    }
    else if (height < 0) {
        document.getElementById("error").innerHTML = "Negative values are not allowed";
        document.querySelector("#error").style.color = "red";
        document.getElementById("bmi-value").innerHTML = "--"
        document.getElementById("body-level").innerHTML = "--"     
    }
    // else {
    //     document.getElementById("error").innerHTML = "";

    // }

    if ((bmi >=1 && bmi <= 18.4) || (bmi >= 25 && bmi <= 29.9) || (bmi >= 30 && bmi <= 34.9) || (bmi >= 35)) {
        document.getElementById("suggest").innerHTML = "SUGGESTION : Please visit the Doctor and take care of your health "
    }
    else {
        document.getElementById("suggest").innerHTML = "";
    }
    
}
// document.querySelector("#result").style.color = "red";
