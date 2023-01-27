let addbtn = document.querySelector(".add-btn")
let modelcount = document.querySelector(".model-cont")
let maincount = document.querySelector(".main-cont");
let textareacont = document.querySelector(".textarea-cont")
let colors = ["lightpink","lightgreen","lightblue",'lightyellow'];
let modelPrioritycolor = colors[colors.length - 1];
let AllPriorityColor = document.querySelectorAll(".priority-color");
let lockElem = document.querySelector(".ticket-lock");
let toolBoxColor = document.querySelectorAll(".color");
let removeBtn = document.querySelector(".remove-btn")
//listener for model priority color

AllPriorityColor.forEach((colorElem, idx)=>{
    colorElem.addEventListener("click",(e)=>{
        AllPriorityColor.forEach((prioritycolorElem,idx)=>{
                prioritycolorElem.classList.remove("border");
            })
            colorElem.classList.add("border")
            modelPrioritycolor = colorElem.classList[0];
        })
    }
)

//add-btn-event

let addFlag = false;
addbtn.addEventListener("click",(e)=>{
    addFlag = !addFlag;
    if(addFlag){
        modelcount.style.display = "flex"
    }else{
        modelcount.style.display = "none"
    }
})

modelcount.addEventListener("keydown",(e)=>{
    let key = e.key;
    if(key === "Shift"){
        ticketCreate(modelPrioritycolor,textareacont.value);
        modelcount.style.display = "none";
        // addFlag = false;
        setModelToDefault();
    }
})

//create a ticket
let ticketsArr = [];
function ticketCreate(ticketColor,ticketTask,ticketId){
    let id = ticketId || shortid();
    let ticketCount = document.createElement("div");
    ticketCount.innerHTML = `
        <div class = "ticket-color ${ticketColor}"></div>
        <div class = "ticket-id">Ticket : - ${id}</div>
        <div class = "task-area">${ticketTask}</div>
        <div class = "ticket-lock">
            <i class = "fas fa-lock"></i>
        </div>
    `;

    maincount.append(ticketCount);
    if(!ticketId){
        ticketsArr.push({ticketColor,ticketTask,ticketId:id})
    }

    handleColor(ticketCount,id);
    handlelock(ticketCount,id);
    handleRemove(ticketCount,id);
}

function handleColor(ticket,id){
    let ticketColor = ticket.querySelector(".ticket-color");
    ticketColor.addEventListener("click",(e)=>{
        let ticketIdx = getTicketIdx(id);
        let currentTicketColor = ticketColor.classList[1];
        //get ticket color id,
        let currentTicketColorIdx = colors.findIndex((color)=>{
            return currentTicketColor === color;
        })

        currentTicketColorIdx++;
        let newTicketColorIdx = currentTicketColorIdx % colors.length;
        let newTicketColor = colors[newTicketColorIdx];
        ticketColor.classList.remove(currentTicketColor);
        ticketColor.classList.add(newTicketColor);
        ticketsArr[ticketIdx].ticketColor = newTicketColor;
    })
}

//handle lock....
let lockClass = "fa-lock";
let unlockClass = "fa-lock-open"

function handlelock(ticket,id){
    let ticketlockElem = ticket.querySelector(".ticket-lock");
    let ticketLock = ticketlockElem.children[0];
    console.log(ticketLock);
    let ticketTaskArea = ticket.querySelector(".task-area")

    ticketLock.addEventListener("click", (e)=>{
        let ticketIdx = getTicketIdx(id);
        console.log(ticketLock);
        if(ticketLock.classList.contains(lockClass)){
            ticketLock.classList.remove(lockClass);
            ticketLock.classList.add(unlockClass);
            console.log(ticketLock);
            ticketTaskArea.setAttribute("contenteditable","true");
        }else{
            ticketLock.classList.remove(unlockClass);
            ticketLock.classList.add(lockClass);
            console.log(ticketLock);
            ticketTaskArea.setAttribute("contenteditable","false");
        }

        ticketsArr[ticketIdx].ticketTask = ticketTaskArea.innerText;
    })
}

//remove btn 
let removeFlag = false;
removeBtn.addEventListener("click",(e)=>{
    removeFlag = !removeFlag
})

function handleRemove(ticket,id){
    // removeFlag = true;
    ticket.addEventListener("click",(e)=>{
        if(!removeFlag) return ;
        ticket.remove();
    })
}

function getTicketIdx(id){
    let ticketIdx = ticketsArr.findIndex((ticketObj)=>{
        return ticketObj.ticketId === id;
    })

    return ticketIdx;
}

function setModelToDefault(){
    // modelcount.display.style = "none";
    textareacont.value = "";
    modelPrioritycolor = colors[colors.length - 1];
    AllPriorityColor.forEach((prioritycolorElem,idx)=>{
        prioritycolorElem.classList.remove("border");
    })

    AllPriorityColor[AllPriorityColor.length-1].classList.add("border");
}