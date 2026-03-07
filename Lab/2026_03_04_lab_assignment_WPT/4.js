// var args i.e., multiple(unknown_amount) args

function sum_all(...arr)
{
    let sum = 0;
    for (num_item of arr)
    {
        sum += num_item;
    }

    return sum;
};

console.log(sum_all(1, 2, 3, 4, 5, 6));

