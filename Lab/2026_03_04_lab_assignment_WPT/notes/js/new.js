function main() {
    var n = 5;
    var s = '';

    // Outer loop to print all rows
    for (var i = 0; i < n; i++) {
        s = '';
        // Inner loop to print the * in each row
        for (var j = 0; j < n - i; j++)
            s += "* ";
        //console.log("* ");
        console.log(s);
        //console.log("\n");
    }
}

main();