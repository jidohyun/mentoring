document.addEventListener("DOMContentLoaded", function () {
  const addBtn = document.querySelector("#Add_btn");
  const clear = document.querySelector("#btn");
  const modalBox = document.querySelector(".modal__background");
  const no = document.querySelector("#NO");
  const yes = document.querySelector("#YES");
  const count = document.querySelector("#count");
  function style(number) {
    if (number != 0) {
      clear.style = "background-color: #00ddff";
    } else {
      clear.style = "background-color: #99ced6";
    }
  }

  let number = 0;
  addBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const inputText = document.getElementById("inpp").value.trim();
    if (inputText !== "") {
      addNewToDo(inputText);
      number = number + 1;
      count.innerText = number;
      style(number);
      console.log(number);
      document.getElementById("inpp").value = "";
    }
  });

  function addNewToDo(text) {
    const todobox = document.querySelector(".todobox");
    const listItem = document.createElement("div");
    listItem.classList.add("list-item");
    const done = document.createElement("button");
    done.classList.add("done-btn");
    done.innerText = "✔︎";
    const hi_text = document.createElement("span");
    hi_text.classList.add("hi-text");
    hi_text.innerText = text;
    const time = document.createElement("span");
    time.classList.add("time");
    const currentDate = new Date();
    time.innerText = currentDate.toLocaleTimeString();
    const del = document.createElement("button");
    del.classList.add("del-btn");
    del.innerText = "❌";
    listItem.appendChild(done);
    listItem.appendChild(hi_text);
    listItem.appendChild(time);
    listItem.appendChild(del);
    todobox.appendChild(listItem);

    del.addEventListener("click", function (event) {
      event.preventDefault();
      listItem.remove();
      number = number - 1;
      count.innerText = number;
      style(number);
      console.log(number);
    });

    done.addEventListener("click", function (event) {
      event.preventDefault();
      if (hi_text.style.textDecoration === "line-through") {
        hi_text.style.textDecoration = "none";
        hi_text.style.fontStyle = "normal";
      } else {
        hi_text.style.textDecoration = "line-through";
        hi_text.style.fontStyle = "italic";
      }
    });

    clear.addEventListener("click", function (event) {
      event.preventDefault();
      if (number != 0) {
        modalBox.style = "display: block";
      }
    });

    no.addEventListener("click", function (event) {
      event.preventDefault();
      modalBox.style = "display: none";
    });

    yes.addEventListener("click", function (event) {
      event.preventDefault();
      todobox.innerHTML = "";
      number = 0;
      count.innerText = number;
      style(number);
      modalBox.style = "display: none";
    });
  }
});
