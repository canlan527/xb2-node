const cb = (callback) => {
  const data = '🌏';
  callback(data);
}

cb((data) => {
  console.log(data);
})