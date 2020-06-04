const form = document.querySelector( 'form' )
 
//function to get value
const getValue = (options) =>  {
  let result = [],
      length = options.length;
  for (let i = 0 ; i < length; i++) {
    if (options[i].checked) {
      result.push(options[i].value);
    }
  }
  return result;
}
//to display  relatives options
function hasFam(element) {
  if(element.id === 'no') {
    document.getElementById('yesFam').innerHTML = '';
  }
  if(element.id === 'yes') {
    document.getElementById('yesFam').innerHTML = `
    <p>Select the ones that apply</p>
    <input type='checkbox' id='mother' value='mother' name='famMemb'>
                <label for='mother'>Mother</label><br>
                <input type='checkbox' id='father' value='father' name='famMemb'>
                <label for='father'>Father</label><br> 
                <input type='checkbox' id='siblings' value='siblings' name='famMemb'>
                <label for='siblings'>Siblings</label><br>
    `;
  }
}

  // ...to take over the submit event
  form.addEventListener( 'submit', function ( event ) {
    //method cancels the event if it is cancelable
    event.preventDefault();
    //variables needed 
    let gender = getValue(document.getElementsByName('gender'))[0],
        age =  getValue(document.getElementsByName('age'))[0],
        active = getValue(document.getElementsByName('activity'))[0], 
        relatives = getValue(document.getElementsByName('famMemb')),
        symptoms = getValue(document.getElementsByName('symptoms')),
        popup = document.getElementById('myPopup'),
        pressure = document.getElementById('pressure').value,
        score = 0,
        message,
        bmi;

   

    //to mesure the bmi
    let height = Number(document.getElementById('height').value);
    let weight = Number(document.getElementById('weight').value);
    bmi =  weight / (height * height);
    
    //add point to score
    if(gender === 'male') {
      score++;
    }

    if(age === '59') {
      score++;
    }
    else if(age === '60') {
      score += 2;
    }

    if(active === 'no') {
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

    if(symptoms.length > 2 && 4 < symptoms.length) {
      score ++;
    }
    else if(symptoms.length > 4) {
      score += 2;
    }


    if(pressure === 'yes' || pressure == 140 ) {
      score++;
    } 
    else if (pressure ==='hyper') {
      score += 2;
    }
   

    //mesure the risk
    if(score < 4) {
      message = 'Low risk!'
    }
    else if(score < 9) {
      message = 'Medium risk!'
    } else {
      message = 'High risk, please visit a doctor!'
    }
   
    console.log(gender, age, active, relatives, symptoms, bmi)

      

  //to display the result of test
  popup.textContent = message;
  popup.classList.toggle('show');



  setTimeout(() => {
    fetch('/data', {
      method: "post",
      headers: {
        'Accept': 'application/text',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        gender,
        age,
        active,
        bmi,
        pressure,
        relatives,
        symptoms
      })
    });
    document.getElementById('delete').click()
    document.getElementById('formid').reset()
  }, 3000);
});




