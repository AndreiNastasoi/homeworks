window.addEventListener("load", function () {
  var commentContainer = document.querySelector(".content");
  var addCommentElement = document.querySelector("#comment");
  var addButtonElement = document.querySelector("#button");
  
  addButtonElement.addEventListener("click", function () {
    var commentElement = createCommentElement(addCommentElement.value);
    commentContainer.appendChild(commentElement);
  });
});
function deleteCommentElement(event) {
  event.target.parentElement.parentElement.removeChild(
    event.target.parentElement
  );
}
function createCommentElement(textareaValue) {
  var div = document.createElement("div");
  div.classList.add("arg");
  div.innerHTML =
    "" +
    textareaValue +
    " <button onclick=deleteCommentElement(event)>Delete</button>";
  return div;
}