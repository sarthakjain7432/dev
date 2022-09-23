let addBtn = document.querySelector(".add-btn");
let removeBtn = document.querySelector(".remove-btn");
let modalCont = document.querySelector(".modal-cont");
let mainCont = document.querySelector(".main-cont");
let textareaCont = document.querySelector(".textarea-cont");
let allPriorityColors = document.querySelectorAll(".priority-color");
let ticketElem = document.querySelector(".ticket-lock");
let toolboxColors = document.querySelectorAll(".color");

let colors = ["lightpink", "lightblue", "lightgreen", "black"];
let modalPriorityColor = colors[colors.length - 1];

let addFlag = false;
let removeFlag = false;

let lockClass = "fa-lock";
let unlockClass = "fa-unlock";

let ticketArr = [];

if (localStorage.getItem("jira_tickets")) {
  //Retrieve and display tickets
  ticketArr = JSON.parse(localStorage.getItem("jira_tickets"));
  ticketArr.forEach((ticketObj) => {
    createTicket(
      ticketObj.ticketColor,
      ticketObj.ticketTask,
      ticketObj.ticketID
    );
  });
}

for (let i = 0; i < toolboxColors.length; i++) {
  toolboxColors[i].addEventListener("click", (e) => {
    let currentToolboxColor = toolboxColors[i].classList[0];

    let filteredTickets = ticketArr.filter((ticketObj, idx) => {
      return currentToolboxColor === ticketObj.ticketColor;
    });

    //Remove previous tickets
    let allTicketCont = document.querySelectorAll(".ticket-cont");
    for (let i = 0; i < allTicketCont.length; i++) {
      allTicketCont[i].remove();
    }

    //Display new filtered tickets
    filteredTickets.forEach((ticketObj, idx) => {
      createTicket(
        ticketObj.ticketColor,
        ticketObj.ticketTask,
        ticketObj.ticketID
      );
    });
  });

  toolboxColors[i].addEventListener("dblclick", (e) => {
    let allTicketCont = document.querySelectorAll(".ticket-cont");
    for (let i = 0; i < allTicketCont.length; i++) {
      allTicketCont[i].remove();
    }

    ticketArr.forEach((ticketObj, idx) => {
      createTicket(
        ticketObj.ticketColor,
        ticketObj.ticketTask,
        ticketObj.ticketID
      );
    });
  });
}

//Listener for modal priority coloring
allPriorityColors.forEach((colorElem, idx) => {
  colorElem.addEventListener("click", (e) => {
    allPriorityColors.forEach((priorityColorElem, idx) => {
      priorityColorElem.classList.remove("border");
    });
    colorElem.classList.add("border");
    modalPriorityColor = colorElem.classList[0];
  });
});

addBtn.addEventListener("click", (e) => {
  //Display Modal
  //Generate ticket

  //addFlage, true -> Modal display
  //addFlag, false -> Modal none
  addFlag = !addFlag;
  if (addFlag) {
    modalCont.style.display = "flex";
  } else {
    modalCont.style.display = "none";
  }
});
removeBtn.addEventListener("click", (e) => {
  removeFlag = !removeFlag;
});
modalCont.addEventListener("keydown", (e) => {
  let key = e.key;
  if (key === "Shift") {
    createTicket(modalPriorityColor, textareaCont.value); //shortid Fn milega shortid-dist script se jiska humne html file me path scrit src me daal diya hai
    addFlag = false;
    setModalToDefault();
  }
});
function createTicket(ticketColor, ticketTask, ticketID) {
  let id = ticketID || shortid(); //to avoid duplicasy of tickets while filtering
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");
  ticketCont.innerHTML = `
        <div class="ticket-color ${ticketColor}"></div>
        <div class="ticket-id">#${id}</div>
        <div class="task-area">${ticketTask}</div>
        <div class="ticket-lock"><i class="fa-solid fa-lock"></i></div>`;

  mainCont.appendChild(ticketCont);

  //create object of ticket and add to array
  if (!ticketID) {
    ticketArr.push({ ticketColor, ticketTask, ticketID: id }); //to avoid duplicasy of tickets while filtering
    localStorage.setItem("jira_tickets", JSON.stringify(ticketArr));
  }

  handleRemoval(ticketCont, id);
  handleLock(ticketCont, id);
  handleColor(ticketCont, id);
}
function handleRemoval(ticket, id) {
  ticket.addEventListener("click", (e) => {
    if (!removeFlag) return;

    let idx = getTicketIdx(id);

    //DB removal
    ticketArr.splice(idx, 1);
    let strTicketArr = JSON.stringify(ticketArr);
    localStorage.setItem("jira_tickets", strTicketArr);

    ticket.remove(); //UI removal
  });
}
function handleLock(ticket, id) {
  let ticketLockElem = ticket.querySelector(".ticket-lock");
  let ticketLock = ticketLockElem.children[0];
  let ticketTaskArea = ticket.querySelector(".task-area");
  ticketLock.addEventListener("click", (e) => {
    let ticketIdx = getTicketIdx(id);

    if (ticketLock.classList.contains(lockClass)) {
      ticketLock.classList.remove(lockClass);
      ticketLock.classList.add(unlockClass);
      ticketTaskArea.setAttribute("contenteditable", "true"); //contenteditable ek boolean attribute hai jo allow karta hai content ko edit karne k liye
    } else {
      ticketLock.classList.remove(unlockClass);
      ticketLock.classList.add(lockClass);
      ticketTaskArea.setAttribute("contenteditable", "false");
    }

    //Modify data in localStorage (ticket task)
    ticketArr[ticketIdx].ticketTask = ticketTaskArea.innerText;
    localStorage.setItem("jira_tickets", JSON.stringify(ticketArr));
  });
}
function handleColor(ticket, id) {
  let ticketColor = ticket.querySelector(".ticket-color");
  ticketColor.addEventListener("click", (e) => {
    //get ticket idx from the ticket array
    let ticketIdx = getTicketIdx(id);

    let currentTicketColor = ticketColor.classList[1];
    //Get ticket color idx
    let currentTicketColorIdx = colors.findIndex((color) => {
      return currentTicketColor === color;
    });
    currentTicketColorIdx++;
    let newTicketColorIdx = currentTicketColorIdx % colors.length;
    let newTicketColor = colors[newTicketColorIdx];
    ticketColor.classList.remove(currentTicketColor);
    ticketColor.classList.add(newTicketColor);

    //Modify data in local storage (priority color change)
    ticketArr[ticketIdx].ticketColor = newTicketColor;
    localStorage.setItem("jira_tickets", JSON.stringify(ticketArr));
  });
}
function getTicketIdx() {
  let ticketIdx = ticketArr.findIndex((ticketObj) => {
    return ticketObj.ticketID === id;
  });
  return ticketIdx;
}
function setModalToDefault() {
  modalCont.style.display = "none";
  textareaCont.value = "";
  modalPriorityColor = colors[colors.length - 1];

  allPriorityColors.forEach((priorityColorElem, idx) => {
    priorityColorElem.classList.remove("border");
  });

  allPriorityColors[allPriorityColors.length - 1].classList.add("border");
}
