// ----------------------------------- Functional Form ----------------------------------
const form = document.getElementById('formAdd');
const inpTitle = document.getElementById('inpTitle');
const inpAuthor = document.getElementById('inpAuthor');
const inpDate = document.getElementById('inpDate');
const inpContent = document.getElementById('inpText');
const output = document.getElementById('Output');

// Form Submit Event
form.addEventListener('submit', e => {
    e.preventDefault();
    const title = inpTitle.value;
    const author = inpAuthor.value;
    const date = inpDate.value;
    const content = inpContent.value;

    if (title && author && date && content) {
        let myObj = {
            "title": title,
            "author": author,
            "date": date,
            "content": content
        };

        let myObj_serialized = JSON.stringify(myObj);

        localStorage.setItem("myObj", myObj_serialized);
        location.reload();
    }
});

let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));
console.log(myObj_deserialized);

// Print the Object Stored in the local Storage

output.innerHTML = `<div> Title: ${myObj_deserialized["title"]}</div><div> Author: ${myObj_deserialized["author"]}</div><div> Date: ${myObj_deserialized["date"]}</div><div> Content: ${myObj_deserialized["content"]}</div>`;