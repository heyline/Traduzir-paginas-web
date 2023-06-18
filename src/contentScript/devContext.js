function open_inspect_effect() {
  window.onmouseover = e => e.target.style.setProperty("outline", "2px solid red");
  window.onmouseout = e => e.target.style.removeProperty("outline");
  window.onclick = e => open_inspect_effect_onclickFun(e)
}


function open_inspect_effect_onclickFun(e){
  e.target.style.setProperty("background", "#FF000077");

  browser.runtime.sendMessage({
    action: "qqqqqqqq2"
  });

}


function part_two(){
  window.onmouseover = e => ()=>{}
  window.onmouseout = e  => ()=>{}
  window.onclick = e => ()=>{}
  console.error("part_twodddddddddddddddddd")
}
