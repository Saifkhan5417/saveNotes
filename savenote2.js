console.log("is it running");
showNotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  console.log('you have clicked')
  let addTxt = document.getElementById("addTxt");
  let addTitle = document.getElementById("addTitle");
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
      text : addTxt.value,
      title : addTitle.value
  } 
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value = "";
  console.log(notesObj);
  showNotes();
});
function showNotes() {
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
     let html = "";
  //   let title = document.getElementById('title')
//   let titleVal = title.value;
//   titleVal 
  notesObj.forEach(function (element, index) {
    html += `       <div class=" noteCard card  my-2 mx-2" style="width: 18rem;">
       
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1 + " : "+" "+ element.title}</h5>
          <p class="card-text">${element.text}</p>
          <button id="${index}" onclick= "deletenote(this.id)" class="btn btn-danger">Delete</button>
        </div>
      </div>`;
  });
  let notesEle = document.getElementById("note");
  if (notesObj.length != 0) {
    notesEle.innerHTML = html;
  } else {
    notesEle.innerHTML = `<center>Add Some "Information" To Save</center>`;
  }
}
function deletenote(index) {
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index , 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}
// search engine
let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  searchVal = search.value;
  let cardPara = document.getElementsByClassName("noteCard");
  Array.from(cardPara).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(searchVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
