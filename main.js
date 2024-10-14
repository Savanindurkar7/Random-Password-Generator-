let input = document.querySelector(".inp")
let copy = document.querySelector(".cp")
let button = document.querySelector(".btn")

function genPass() {
  let latters = 'abcdefghijklmnopqrsuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890@#₹_&-+/*<€¥¢=§'
  let pass = ""
  input.value = ""
  for (var i = 0; i < 8; i++) {
    pass += latters.charAt(Math.floor(Math.random() * latters.length));
    
  }
  return pass
}

button.addEventListener("click",()=>{
  input.value = genPass()
})

copy.addEventListener("click",()=>{
  let copyText = input.value;
  navigator.clipboard.writeText(copyText)
})