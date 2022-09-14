function updateImg(newImg) {
  let imgWellcome = document.querySelector("img");
  imgWellcome.outerHTML = newImg;
}
function updateParag(newParag) {
  let parag = document.querySelector(".changeParag");
  parag.innerHTML = newParag;
}
function additionHope(hope) {
  let parag = document.querySelector(".wellcome");
  parag.innerHTML = hope;
}
function canJoin(name) {
  return name;
}

function join() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");

  if (canJoin(name)) {
    updateParag(`Wellcome to our team ${name}!`);
    updateImg(
      `<img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/043/737/original/thank-you.jpg?1660590079">`
    );
  } else {
    updateParag(`I hope you change your mind!`);
    additionHope(
      `<img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/043/739/original/Maybe_later.jpg?1660590134">`
    );
  }
}

let joinButton = document.querySelector(".join-button");
joinButton.addEventListener("click", join);
