for (let start=1; start<=100; start++){
  //
  let output: string = "";

  if (start % 3 == 0){
    output += "foo";
  }

  if (start % 5 == 0){
    output += "bar";
  }

  if (output !== ""){
    console.log(`${start}: ${output}`);
  }
  
}









