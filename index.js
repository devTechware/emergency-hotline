function getElement(id) {
  return document.getElementById(id);
}

getElement("card-container").addEventListener("click", function(event) {
  if(event.target.className.includes("like-btn")) {
    let likeCount = Number(getElement("like-count").innerText);
    likeCount += 1;
    getElement("like-count").innerText = likeCount;
  }
});