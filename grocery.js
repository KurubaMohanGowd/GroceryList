let containerEl=document.createElement("div");
containerEl.classList.add("bg-container","p-4");
document.body.appendChild(containerEl);

let headingEl=document.createElement("h1");
headingEl.textContent="Grocery List";
headingEl.classList.add("text-center","pb-4");
headingEl.style.color="white";
containerEl.appendChild(headingEl);

let listcontainer=document.createElement("ul");

listcontainer.classList.add("list-box");
containerEl.appendChild(listcontainer);

let grocList=[
    'Milk','Peanut Butter', 'Chips','Tomato', 'Cake'
    ];
for (let item of grocList){
    let itemEl=document.createElement("li");
    itemEl.textContent=item ;
    listcontainer.appendChild(itemEl);
}

let checkDeliver=document.createElement("input");
checkDeliver.type="checkBox"
checkDeliver.id="deliveryMode"
containerEl.appendChild(checkDeliver)

let labelItem=document.createElement("label")
labelItem.textContent="Need Home Delivery"
labelItem.style.color="white"
labelItem.classList.add("pl-2")
containerEl.appendChild(labelItem)
labelItem.setAttribute("for","deliveryMode")

let breakEl=document.createElement("br")
containerEl.appendChild(breakEl)


let btnElement=document.createElement("button")
btnElement.classList.add("btn","btn-primary")
btnElement.textContent="Proceed to Pay"
containerEl.appendChild(btnElement)






