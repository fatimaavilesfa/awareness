const form = document.querySelector( "form" )
 
//function to get value
const getValue = (options) =>  {
  let result = [];
  for (let i = 0, length = options.length; i < length; i++) {
    if (options[i].checked) {
      result.push(options[i].value);
    }
  }
  return result;
}
  // ...to take over the submit event
  form.addEventListener( 'submit', function ( event ) {
    //method cancels the event if it is cancelable
    event.preventDefault();
    //variables needed 
    let gender = getValue(document.getElementsByName('gender')),
        age =  getValue(document.getElementsByName('age')),
        active = getValue(document.getElementsByName('activity')), 
        relatives = getValue(document.getElementsByName('family')),
        pressure = getValue(document.getElementsByName('pressure')),
        popup = document.getElementById("myPopup"),
        sugar = document.getElementById('sugar').value,
        score = 0,
        message,
        bmi;

   

    //to mesure the bmi
    let height = Number(document.getElementById('height').value);
    let weight = Number(document.getElementById('weight').value);
    bmi =  weight / (height * height);
    
    if(gender[0] === 'male') {
      score++;
    }
    if(age[0] === '59') {
      score++;
    }
    else if(age[0] === '60') {
      score += 2;
    }
    if(active[0] === 'no') {
      score++;
    }
    if(bmi < 29.9 && bmi > 24.9) {
      score++;
    }
    else if(bmi > 30) {
      score += 2;
    }
    if(relatives.length === 1) {
      score++;
    }
    else if(relatives.length > 1) {
      score += 2;
    }
    if(sugar !== 'no') {
      score++;
    }
    if(pressure === 'yes') {
      score++;
    }
   
    if(score < 3) {
      message = "Low risk!"
    }
    else if(score < 7) {
      message = "Medium risk!"
    } else {
      message = "High risk, please visit a doctor!"
    }
   
    console.log(gender, age, active, relatives, bmi, sugar)

 //to display the result of test
 popup.textContent = message;
 popup.classList.toggle("show");



  setTimeout(() => {
    document.getElementById("delete").click()
    document.getElementById('formid').reset()
  }, 3000);
});


