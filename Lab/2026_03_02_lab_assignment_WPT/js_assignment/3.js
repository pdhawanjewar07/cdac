/*
_________________
*   *   *
*   *
*
_________________
*/

for (let row=1; row<=3; row++)
{
    for (let col=3; col>=row; col--)
    {
        // console.log("*\t");  // default behaviour is newline
        process.stdout.write("*\t");
    }
    console.log("\n");
}