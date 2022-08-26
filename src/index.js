document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.addEventListener("submit", (e) => {
    event.preventDefault()
    const getText = document.getElementById("new-task-description")
    const li = document.createElement("li")
    const btn = document.createElement("button")
    btn.innerText = "X"
    btn.style.marginLeft = "50px"
    btn.style.backgroundColor = "red"
    btn.style.color = "white"
    btn.style.border = "none"
    li.append(getText.value, btn)
    document.getElementById("tasks").append(li)
  })
});
