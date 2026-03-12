// add text items to array an display them as unordered list
let array = [];

function add_item()
{
    data_item = document.getElementById("text_input").value;
    console.log(typeof(data_item));
    if (data_item == "")
    {
        alert("Enter some text first. It is empty.");
    }
    array.push(data_item);
};


function display_array()
{
    output_ul = document.getElementById("unordered_list");

    for (const item of array)
    {
        const li = document.createElement("li");
        li.textContent = item;
        output_ul.append(li);
    };

};
