const promise = new Promise((resolve, reject) => {
  const numbers = [10, 20, 30, 40, 50, 5, 9, 25, 44, 33]
  const sum = numbers.reduce((acc, number) => acc + number)
  if (sum  < 8000) {
    .then(response => console.log('Promise resolvida'))
    .catch(reject => console.log('Promise rejeitada'))
  }
});

Promises()