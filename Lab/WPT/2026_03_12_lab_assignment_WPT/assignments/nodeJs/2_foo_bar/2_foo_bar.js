for (var start = 1; start <= 100; start++) {
    //
    var output = "";
    if (start % 3 == 0) {
        output += "foo";
    }
    if (start % 5 == 0) {
        output += "bar";
    }
    if (output !== "") {
        console.log("".concat(start, ": ").concat(output));
    }
}
