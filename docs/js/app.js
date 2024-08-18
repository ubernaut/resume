window.toggleDark = () => {
  let body = document.getElementById("body");
  if (body.getAttribute("class") == "light") {
    body.setAttribute("class", "crt dark");
  } else {
    body.setAttribute("class", "light");
  }
};
