const nature = () => {
  return new Promise((resolve, reject) => {
    console.log('...');
    
    setTimeout(() => {
      resolve('🦖')
    }, 2000)
  })
}

nature().then(res => {
  console.log(res);
})

console.log('🌋');