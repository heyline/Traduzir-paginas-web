function open_inspect_effect() {
  window.onmouseover = e => e.target.style.setProperty("outline", "2px solid red");
  window.onmouseout = e => e.target.style.removeProperty("outline");
  window.onclick = e => open_inspect_effect_onclickFun(e)
}


function open_inspect_effect_onclickFun(e){
  e.target.style.setProperty("background", "#FF000077");

  browser.runtime.sendMessage({
    action: "clickNode",
    eventData: {
      target: e.target.outerHTML,
      classList: Array.from(e.target.classList),
    }
  });
}

function part_two(a){
  console.error("a")
  console.error(a)
  window.onmouseover = e => ()=>{}
  window.onmouseout = e  => ()=>{}
  window.onclick = e => ()=>{}
  console.error("执行结束")
}
