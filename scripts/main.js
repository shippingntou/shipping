function listBtn() {
  let listBtn = document.getElementById("selective");
  let textlistn = document.getElementById("more-content");
  if (textlistn.style.display === "none") {
    textlistn.style.display = "block";
  } else {
    textlistn.style.display = "none";
  }
}

function select() {
  let selection = document.getElementById("select_item");
  let visit1 = document.getElementById("visit1");
  let visit2 = document.getElementById("visit2");
  visit1.style.display = "none";
  visit2.style.display = "none";
  if (selection.selectedIndex === 1) {
    visit1.style.display = "block";
  } else if (selection.selectedIndex === 2) {
    visit2.style.display = "block";
  }
}
