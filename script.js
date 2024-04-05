// let Name =document.getElementById(`name`).value;
// let Phone=document.getElementById(`phone`).value;
// let Email= document.getElementById('email').value;
const list = document.querySelector(".bar")
const form = document.querySelector(".form")
const resetButton = document.querySelector('.reset-button');

// function msg(){
//     name.textContent=Name.value;

// }
// document.getElementById(`p1`).textContent = msg


function displayInfo(e) {
    e.preventDefault()
    // Get the values from the input fields
    let Name = document.getElementById('name').value;
    let Phone = document.getElementById('phone').value;
    let Email = document.getElementById('email').value;

    // document.getElementById(`p1`).textContent = Name
    // document.getElementById(`p2`).textContent = Phone
    // document.getElementById(`p3`).textContent = Email
    // document.getElementById(`p4`).textContent =`registered`

    // const passed = validation(Name, Phone, Email)

    // if(!passed){
    //     alert("something went wrong")
    //     return
    // }


    if (Name.length < 3) {
        alert("Name must be at least 3 characters long.");
        return;
    }

   

    // Validate Email (must contain @gmail.com)
    if (!Email.endsWith('@gmail.com')) {
        alert("Email must end with @gmail.com");
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
    <p id="p1">${Name}</p>
    <p id="p2">${Phone}</p>
    <p id="p3">${Email}</p>
    `
    list.appendChild(li)

    form.reset()

   
    // // Display the values in a paragraph
    // let infoParagraph = document.getElementById('info');
    // infoParagraph.innerHTML = `Name: ${Name}<br>Phone: ${Phone}<br>Email: ${Email}`;

}

function clearDisplayedData() {
    // Remove all list items
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

form.addEventListener("submit", displayInfo)

resetButton.addEventListener('click', clearDisplayedData);

// Select the reset button

// Function to clear all displayed data

// Add event listener to the reset button



// function clearAllInfo() {
//     // Remove all list items
//     while (list.firstChild) {
//         list.removeChild(list.firstChild);
//     }
// }


// const validation = (a,b,c){
//     if(name,length < 4 ){

//         return false;
//     }
// }
