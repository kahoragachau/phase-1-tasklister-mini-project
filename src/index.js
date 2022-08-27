document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.addEventListener("submit", (e) => {
    event.preventDefault()
    const getText = document.getElementById("new-task-description")
    const li = document.createElement("li")
    const btn = document.createElement("button")
    const doneBtn = document.createElement("button")
    // li.style.listStyleType = "none"
    btn.innerText = "X"
    doneBtn.innerText = "✅"
    doneBtn.style.marginLeft = "25px"
    doneBtn.style.backgroundColor = "green"
    doneBtn.style.color = "white"
    doneBtn.style.border = "none"
    btn.style.marginLeft = "25px"
    btn.style.backgroundColor = "red"
    btn.style.color = "white"
    btn.style.border = "none"
    li.append(getText.value, btn, doneBtn)
    document.getElementById("tasks").append(li)
  })
});
