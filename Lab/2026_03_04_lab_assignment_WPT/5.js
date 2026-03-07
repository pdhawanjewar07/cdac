// change text case of input field text as per selected radio button and output it in a div 

function handleRadioInput()
{
    input_text = document.getElementById("input_text").value;
    if (input_text == ""){alert("Field is empty"); return;}

    output_div = document.getElementById("output");

    case_array = document.getElementsByName("change_case");
    for (let radio of case_array)
    {
        if (radio.checked)
        {
            switch (radio.value) {
                case "uppercase":
                    output_div.innerHTML = input_text.toUpperCase();
                    return;
                case "lowercase":
                    output_div.innerHTML = input_text.toLowerCase();
                    return;
            
                default:    // as it is
                    output_div.innerHTML = input_text;
                    return;
            }
        }
        
    }
}




