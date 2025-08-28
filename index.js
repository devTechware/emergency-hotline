// document.getElementById function
function getElement(id) {
  return document.getElementById(id);
}

//Heart Icons clicking functionality
getElement("card-container").addEventListener("click", function(event) {
  if(event.target.className.includes("like-btn")) {
    let likeCount = Number(getElement("like-count").innerText);
    likeCount += 1;
    getElement("like-count").innerText = likeCount;
  }
});

//Call Buttons clicking functionality
getElement("card-container").addEventListener("click", function(event) {
  if(event.target.className.includes("call-btn")) {
    let totalCoin = Number(getElement("total-coin").innerText);
    
    if(totalCoin < 20) {
      alert("You don't have enough coins. You need minimum 20 coins to make a call.");
    } else {
      const serviceName = event.target.parentNode.parentNode.children[1].children[0].innerText;
      const serviceNumber = event.target.parentNode.parentNode.children[2].children[0].innerText;
      const callTime = new Date().toLocaleTimeString();
            
      alert(`Calling ${serviceName}: ${serviceNumber} ... `);
      
      totalCoin -= 20;
      getElement("total-coin").innerText = totalCoin;
      
      const callHistoryContainer = getElement("call-history-container");
      const callHistory = document.createElement("div");
      callHistory.innerHTML = `
                                <div
                                  class="flex justify-between items-center bg-[#f2f2f2] p-3 rounded-lg"
                                >
                                  <div>
                                    <p class="text-sm font-inter font-semibold">
                                      ${serviceName}
                                    </p>
                                    <p class="text-sm">${serviceNumber}</p>
                                  </div>
                                  <div class="text-sm font-medium">${callTime}</div>
                                </div>
                              `;

      callHistoryContainer.appendChild(callHistory);
    }
    
  }
});

// Call History clear button functionality
getElement("clear-btn").addEventListener("click", function() {
  getElement("call-history-container").innerHTML = "";
});

//Copy Buttons clicking functionality
getElement("card-container").addEventListener("click", function(event) {
  if(event.target.className.includes("copy-btn")) {
    const copyServiceNumber = event.target.parentNode.parentNode.children[2].children[0].innerText;
    let copyCounter = Number(getElement("copy-count").innerText);
    copyCounter += 1;
    getElement("copy-count").innerText = copyCounter;
    alert(`${copyServiceNumber} Number copied.`);
    navigator.clipboard.writeText(copyServiceNumber);
  }
});