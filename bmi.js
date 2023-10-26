console.log("BMI Calculator");

let form= document.querySelector('form');
// console.log(form);

form.addEventListener('submit',function(e){
      e.preventDefault();
    let height=parseInt(document.getElementById('height').value);
    let weight=parseInt(document.getElementById('width').value);
    let result=document.getElementById('result');
    
    if(height==='' || height<0 || isNaN(height))
       {
            result.innerHTML="Please enter valid height"
       }
    else if(weight==='' || weight<0 || isNaN(weight))
    {
         result.innerHTML="Please enter valid weight"
    }
    else
    {
        const bmi=(weight/((height * height)/10000)).toFixed(2);
        if(bmi <18)
        {
            result.innerHTML=`<span>BMI Weight : ${bmi} Under Weight</span>`
        }
        else if(bmi >=18 || bmi<24)
        {
            result.innerHTML=`<span>BMI Weight : ${bmi} Normal Range</span>`
        }
        else if(bmi >24)
        {
            result.innerHTML=`<span>BMI Weight : ${bmi} Over Weight</span>`
        }
      
    }


})
