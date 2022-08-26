document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.addEventListener("submit", (e) => {
    event.preventDefault()
    const getText = document.getElementById("new-task-description")
    const li = document.createElement("li")
    li.append(getText.value)
    document.getElementById("tasks").append(li)
  })
});
