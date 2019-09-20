//Create variables
let day= document.getElementById('day');
let month= document.getElementById('month');
let year= document.getElementById('year');
let centuary=document.getElementById('centuary');
let form=document.getElementById('form');
let error=document.getElementById('error');
let gender=document.getElementById('select');

//Create a function


//prevent the submit button from submitting form 
form.addEventListener('submit', (e)=> {
    let messages = []
    if(day.value=== ""|| day.value == null || month.value=== ""|| year.value == null){
        messages.push('All fields are required')
     
    }
    if(day.value<=0 || month.value<=0){
        messages.push('Please enter a valid Date of Birth');
    }
    if(centuary.value<=0 || centuary.value==null){
        messages.push('Invalid Centuary Entered');
    }

    if(day.value>31 || month.value>12 || year.value>2019){
        messages.push('Please enter a valid Date of Birth');
    }

    if(gender.value==null || gender.value=="" ){
        messages.push('Please provide your Gender');
    }
    if(centuary.value<19 || centuary>21 ){
        messages.push('Please provide Valid centuary');
    }
    


    if(messages.length>0){
        e.preventDefault()
        error.innerText=messages.join(", ")

    } else{
        day=day.value;
        month=month.value;
        centuary=centuary.value;
        year=year.value;
        gender=gender.value;
        var Day = ( ( (centuary/4) -2*centuary-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7;
        var newDay= Math.round(Day);
        if(newDay==1){
            e.preventDefault()
            var exactDay="Monday";
            
        }
        if(newDay==2){
            e.preventDefault()
            var exactDay="Tuesday";
        }

        if(newDay==3){
            e.preventDefault()
            var exactDay="Wednesday";
        }

        if(newDay==4){
            e.preventDefault()
            var exactDay="Thursday";
        }

        if(newDay==5){
            e.preventDefault()
            var exactDay="Friday";
        }

        if(newDay==6){
            e.preventDefault()
            var exactDay="Saturday";
        }
        if(newDay==0){
            e.preventDefault()
            var exactDay="Sunday";
        }
        
        if(exactDay=="Monday" && gender=="Male"){
            error.innerText="Your Ghanian Name is Kwadwo";
        } else if(exactDay=="Monday" && gender=="Female"){
            error.innerText="Your Ghanian Name is Adwoa";
        } 
        else if(exactDay=="Tuesday" && gender=="Male"){
            error.innerText="Your Ghanian Name is Kwabena";
        } else if(exactDay=="Tuesday" && gender=="Female"){
            error.innerText="Your Ghanian Name is Abenaa";

        } else if(exactDay=="Wednesday" && gender=="Male"){
            error.innerText="Your Ghanian Name is Kwaku";
        } else if(exactDay=="Wednesay" && gender=="Female"){
            error.innerText="Akua";

        } else if(exactDay=="Thursday" && gender=="Male"){
            error.innerText="Your Ghanian Name is Yaw";
        } else if(exactDay=="Thursday" && gender=="Female"){
            error.innerText="Your Ghanian Name is Yaa";
            
        } else if(exactDay=="Friday" && gender=="Male"){
            error.innerText="Your Ghanian Name is Kofi";            
        } else if(exactDay=="Friday" && gender=="Female"){
            error.innerText="Your Ghanian Name is Afua";

        } else if(exactDay=="Saturday" && gender=="Male"){
            error.innerText="Your Ghanian Name is Kwame";
        } else if(exactDay=="Saturday" && gender=="Female"){
            error.innerText="Your Ghanian Name is Ama";

        } else if(exactDay=="Sunday" && gender=="Male"){
            error.innerText="Your Ghanian Name is Kwasi";
        } else if(exactDay=="Sunday" && gender=="Female"){
            error.innerText="Your Ghanian Name is Akosua";
        } 
        



























    }


});