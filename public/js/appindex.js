
function responsive(item) {
    const num = item.id;
    let x = document.getElementById('t'+num).innerHTML
    console.log(typeof x, x == '')
    if(x == '') {
        if(num == '1') {
            document.getElementById('t'+num).innerHTML = `
                <p>
                    If you have type 1 diabetes, your body does not make insulin. Your immune system attacks and destroys the cells in your 
                    pancreas that make insulin. Type 1 diabetes is usually diagnosed in children and young adults, although it can appear at 
                    any age. People with type 1 diabetes need to take insulin every day to stay alive.
                </p>`
        }
        if(num == 2) {
            document.getElementById('t'+num).innerHTML = `
                <p>
                    If you have type 2 diabetes, your body does not make or use insulin well. You can develop type 2 diabetes at any age, even
                    during childhood. However, this type of diabetes occurs most often in middle-aged and older people. Type 2 is the most common 
                    type of diabetes.
                </p>
            `
        }
        if(num == 3) {
            document.getElementById('t'+num).innerHTML = `
                <p>
                Gestational diabetes develops in some women when they are pregnant. Most of the time, this type of diabetes goes away after the
                baby is born. However, if you’ve had gestational diabetes, you have a greater chance of developing type 2 diabetes later in life.
                Sometimes diabetes diagnosed during pregnancy is actually type 2 diabetes.
                </p>
            `
        }
        if(num == 4) {
            document.getElementById('t'+num).innerHTML = `
                <p>
                Occurs when your blood sugar is higher than normal, but it’s not high enough for a diagnosis of type 2 diabetes.
                If there is no action taken it can eventually become type 2 diabetes.
                </p>
            `
        }
        
    } 
    else {
        document.getElementById('t'+num).innerHTML = ''
    }
}
