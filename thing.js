if (process.env.SECRET_VAR === '1234') {
  console.log('SECRET_VAR matched expectation!')
} else {
  console.log('SECRET_VAR did not match expectation!')
}

console.log('SECRET_VAR is:' + process.env.SECRET_VAR)
console.log('NONSECRET_VAR is:' + process.env.NONSECRET_VAR)
console.log('UNSET_VAR is:' + process.env.UNSET_VAR)
