function zlonclick(ev) {
  let a = document.getElementsByClassName("lie")
  let a2 =0
  for (let ind of a) {
    if(ev.currentTarget!==ind){
      a2++
    }
    ind.style.background=""
  }
  if(a2!=3){
    ev.currentTarget.style.background="#2ecc71"
  }
}
function froute(path) {
  switch (path) {
    case '/per':
      document.getElementsByClassName("lie")[0].style.background="#2ecc71"
      break;
    case '/case':
      document.getElementsByClassName("lie")[1].style.background="#2ecc71"
      break;
    case '/contact':
      document.getElementsByClassName("lie")[2].style.background="#2ecc71"
      break;
  }
}
export default {
  zlonclick,
  froute
}
