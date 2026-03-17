for (let start = 1; start <= 100; start++) {
    //
    let output = "";
    if (start % 3 == 0) {
        output += "foo";
    }
    if (start % 5 == 0) {
        output += "bar";
    }
    if (output !== "") {
        console.log(`${start}: ${output}`);
    }
}
export {};
