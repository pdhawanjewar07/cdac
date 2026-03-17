export default {};

const str_1: string = "9dJ3v882OlS1k"

function get_sum_int_from_string(str: string): number{
  //
  let sum: number = 0;

  for (let ch_idx=0; ch_idx<str.length; ch_idx++){
    //
    let ch: string = str[ch_idx];
    if ( !isNaN(Number(ch))){
      sum += Number(ch);
    }
  }
  return sum;
}

console.log(get_sum_int_from_string(str_1));

