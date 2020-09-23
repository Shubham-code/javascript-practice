const courses = [
    {
        name :"Complete ReactJS Course",
        price : "2",
    },
    {
        name :"Complete Angular Course",
        price : "2.1",
    },
    {
        name :"Complete Mern Course",
        price : "2.8",
    },
    {
        name :"Complete C++ Course",
        price : "2.5",
    },
    {
        name :"Complete Django Course",
        price : "2.4",
    }
]

function generateList(){
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach(course => {
        
        const li = document.createElement("li")
        li.classList.add("list-group-item")

        const name = document.createTextNode(course.name)
        li.appendChild(name)

        const span = document.createElement("span")
        span.classList.add("float-right")
        const price = document.createTextNode("$ " + course.price)
        span.appendChild(price)

        li.appendChild(span)
        ul.appendChild(li)
    })
}

window.addEventListener("load",generateList);

const button = document.querySelector(".sort-btn")
button.addEventListener("click", () => {
    courses.sort((a,b) => a.price - b.price)    
    generateList();
});

const buttonA = document.querySelector(".unsort-btn")
buttonA.addEventListener("click", () => {
    courses.sort((a,b) => b.price - a.price)
    generateList();
});
