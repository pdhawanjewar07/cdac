
function get_perfect_num(prime_num: number): number{
  //
  let perfect_num: number = Math.pow(2, (prime_num - 1)) * (Math.pow(2, prime_num) - 1)
  return perfect_num;
}

let prime_arr: number[] = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];

prime_arr.forEach(prime => {
  console.log(get_perfect_num(prime));
})