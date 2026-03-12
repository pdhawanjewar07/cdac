function square_num()
{
    input_num = document.getElementById("input_num").value;
    // console.log(input_num);
    output_div = document.getElementById("output");
    output_div.innerHTML = input_num ** 2;
}