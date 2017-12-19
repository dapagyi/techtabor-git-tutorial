/*for (var i = 1; i <= 100; i++) {
  if (i%3==0) console.log('Fizz');
  else console.log(i);
}*/

function buzz(a) {
  for (var i = 1; i <= 100; i++) {
    if (i%a==0) console.log('Fizz');
    else console.log(i);
  }
}
buzz(4);
