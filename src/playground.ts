const nature = () => {
  return new Promise((resolve, reject) => {
    console.log('...');
    
    setTimeout(() => {
      resolve('🦖')
    }, 2000)
  })
}

const demo = async () => {
  const data = await nature();
  console.log(data);
}
demo()
console.log('🌋');