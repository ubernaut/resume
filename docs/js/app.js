window.toggleDark = () => {
  let body = document.getElementById("body");
  body.classList.add("crt");

  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
  }
};
