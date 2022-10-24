function listBtn() {
  let listBtn = document.getElementById("selective");
  let textlistn = document.getElementById("more-content");
  if (textlistn.style.display === "none") {
    textlistn.style.display = "block";
  } else {
    textlistn.style.display = "none";
  }
}

// function drop_display() {
//   let sel_list = document.getElementById("select_item");
//   if (sel_list.val === 1)
// }

// var selection = document.getElementById("selec_item");

// selection.onchange = function(event){
//   var rc = event.target.options[event.target.selectedIndex].val;
//   var clnc = event.target.options[event.target.selectedIndex].dataset.clnc;
//   console.log("rc: " + rc);
//   console.log("clnc: " + clnc);
// };
