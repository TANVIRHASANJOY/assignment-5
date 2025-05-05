
// please click alert ok button three time

document.getElementById("btn-1").addEventListener("click",function(){
 let value=alert("clicked")
})
document.getElementById("btn-2").addEventListener("click",function(){
    alert("clicked")
    })
 document.getElementById("btn-3").addEventListener("click",function(){
     alert("clicked")
        })
 document.getElementById("btn-4").addEventListener("click",function(){
            alert("clicked")
            })
 document.getElementById("btn-5").addEventListener("click",function(){
                alert("clicked")
                })
 document.getElementById("btn-6").addEventListener("click",function(){
                    alert("clicked")
                    })
                 
       


                      document.getElementById("btn-1").addEventListener("click", function () {
                        alert("clicked");
                      
                        // Disable the button
                        this.disabled = true;
                        this.style.opacity = "0.5"; // Optional visual effect
                      
                        // Decrease total-task
                        let totalTaskElement = document.getElementById("total-task");
                        let totalValue = parseInt(totalTaskElement.innerText, 10);
                        if (totalValue > 0) {
                          totalValue -= 1;
                          totalTaskElement.innerText = totalValue < 10 ? "0" + totalValue : totalValue;
                        }
                      
                        // Increase done-task
                        let doneTaskElement = document.getElementById("done-task");
                        let doneValue = parseInt(doneTaskElement.innerText, 10);
                        doneValue += 1;
                        doneTaskElement.innerText = doneValue < 10 ? "0" + doneValue : doneValue;
                      
                        // Add <p> to activity log
                        const activityLog = document.getElementById("activity-log");
                        const newParagraph = document.createElement("p");
                        newParagraph.className = "m-4";
                        newParagraph.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
                        activityLog.appendChild(newParagraph);
                      });
                      
                      // Clear last activity <p>
                      document.getElementById("clear-btn").addEventListener("click", function () {
                        const activityLog = document.getElementById("activity-log");
                        const paragraphs = activityLog.querySelectorAll("p");
                      
                        if (paragraphs.length > 0) {
                          activityLog.removeChild(paragraphs[paragraphs.length - 1]);
                        }
                      });
                      

                    //   for btn-2
                    document.getElementById("btn-2").addEventListener("click", function () {
                        alert("clicked");
                      
                        // Disable the button
                        this.disabled = true;
                        this.style.opacity = "0.5"; // Optional visual effect
                      
                        // Decrease total-task
                        let totalTaskElement = document.getElementById("total-task");
                        let totalValue = parseInt(totalTaskElement.innerText, 10);
                        if (totalValue > 0) {
                          totalValue -= 1;
                          totalTaskElement.innerText = totalValue < 10 ? "0" + totalValue : totalValue;
                        }
                      
                        // Increase done-task
                        let doneTaskElement = document.getElementById("done-task");
                        let doneValue = parseInt(doneTaskElement.innerText, 10);
                        doneValue += 1;
                        doneTaskElement.innerText = doneValue < 10 ? "0" + doneValue : doneValue;
                      
                        // Add <p> to activity log
                        const activityLog = document.getElementById("activity-log");
                        const newParagraph = document.createElement("p");
                        newParagraph.className = "m-4";
                        newParagraph.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
                        activityLog.appendChild(newParagraph);
                      });
                      
                      // Clear last activity <p>
                      document.getElementById("clear-btn").addEventListener("click", function () {
                        const activityLog = document.getElementById("activity-log");
                        const paragraphs = activityLog.querySelectorAll("p");
                      
                        if (paragraphs.length > 0) {
                          activityLog.removeChild(paragraphs[paragraphs.length - 1]);
                        }
                      });

                    //   for btn-3
                    document.getElementById("btn-3").addEventListener("click", function () {
                        alert("clicked");
                      
                        // Disable the button
                        this.disabled = true;
                        this.style.opacity = "0.5"; // Optional visual effect
                      
                        // Decrease total-task
                        let totalTaskElement = document.getElementById("total-task");
                        let totalValue = parseInt(totalTaskElement.innerText, 10);
                        if (totalValue > 0) {
                          totalValue -= 1;
                          totalTaskElement.innerText = totalValue < 10 ? "0" + totalValue : totalValue;
                        }
                      
                        // Increase done-task
                        let doneTaskElement = document.getElementById("done-task");
                        let doneValue = parseInt(doneTaskElement.innerText, 10);
                        doneValue += 1;
                        doneTaskElement.innerText = doneValue < 10 ? "0" + doneValue : doneValue;
                      
                        // Add <p> to activity log
                        const activityLog = document.getElementById("activity-log");
                        const newParagraph = document.createElement("p");
                        newParagraph.className = "m-4";
                        newParagraph.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
                        activityLog.appendChild(newParagraph);
                      });
                      
                      // Clear last activity <p>
                      document.getElementById("clear-btn").addEventListener("click", function () {
                        const activityLog = document.getElementById("activity-log");
                        const paragraphs = activityLog.querySelectorAll("p");
                      
                        if (paragraphs.length > 0) {
                          activityLog.removeChild(paragraphs[paragraphs.length - 1]);
                        }
                      });

                    //   for btn-4
                    document.getElementById("btn-4").addEventListener("click", function () {
                        alert("clicked");
                      
                        // Disable the button
                        this.disabled = true;
                        this.style.opacity = "0.5"; // Optional visual effect
                      
                        // Decrease total-task
                        let totalTaskElement = document.getElementById("total-task");
                        let totalValue = parseInt(totalTaskElement.innerText, 10);
                        if (totalValue > 0) {
                          totalValue -= 1;
                          totalTaskElement.innerText = totalValue < 10 ? "0" + totalValue : totalValue;
                        }
                      
                        // Increase done-task
                        let doneTaskElement = document.getElementById("done-task");
                        let doneValue = parseInt(doneTaskElement.innerText, 10);
                        doneValue += 1;
                        doneTaskElement.innerText = doneValue < 10 ? "0" + doneValue : doneValue;
                      
                        // Add <p> to activity log
                        const activityLog = document.getElementById("activity-log");
                        const newParagraph = document.createElement("p");
                        newParagraph.className = "m-4";
                        newParagraph.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
                        activityLog.appendChild(newParagraph);
                      });
                      
                      // Clear last activity <p>
                      document.getElementById("clear-btn").addEventListener("click", function () {
                        const activityLog = document.getElementById("activity-log");
                        const paragraphs = activityLog.querySelectorAll("p");
                      
                        if (paragraphs.length > 0) {
                          activityLog.removeChild(paragraphs[paragraphs.length - 1]);
                        }
                      });
                    //   for btn-5
                    document.getElementById("btn-5").addEventListener("click", function () {
                        alert("clicked");
                      
                        // Disable the button
                        this.disabled = true;
                        this.style.opacity = "0.5"; // Optional visual effect
                      
                        // Decrease total-task
                        let totalTaskElement = document.getElementById("total-task");
                        let totalValue = parseInt(totalTaskElement.innerText, 10);
                        if (totalValue > 0) {
                          totalValue -= 1;
                          totalTaskElement.innerText = totalValue < 10 ? "0" + totalValue : totalValue;
                        }
                      
                        // Increase done-task
                        let doneTaskElement = document.getElementById("done-task");
                        let doneValue = parseInt(doneTaskElement.innerText, 10);
                        doneValue += 1;
                        doneTaskElement.innerText = doneValue < 10 ? "0" + doneValue : doneValue;
                      
                        // Add <p> to activity log
                        const activityLog = document.getElementById("activity-log");
                        const newParagraph = document.createElement("p");
                        newParagraph.className = "m-4";
                        newParagraph.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
                        activityLog.appendChild(newParagraph);
                      });
                      
                      // Clear last activity <p>
                      document.getElementById("clear-btn").addEventListener("click", function () {
                        const activityLog = document.getElementById("activity-log");
                        const paragraphs = activityLog.querySelectorAll("p");
                      
                        if (paragraphs.length > 0) {
                          activityLog.removeChild(paragraphs[paragraphs.length - 1]);
                        }
                      });
                      
                    //   for btn-6
                    document.getElementById("btn-6").addEventListener("click", function () {
                        alert("clicked");
                      
                        // Disable the button
                        this.disabled = true;
                        this.style.opacity = "0.5"; // Optional visual effect
                      
                        // Decrease total-task
                        let totalTaskElement = document.getElementById("total-task");
                        let totalValue = parseInt(totalTaskElement.innerText, 10);
                        if (totalValue > 0) {
                          totalValue -= 1;
                          totalTaskElement.innerText = totalValue < 10 ? "0" + totalValue : totalValue;
                        }
                      
                        // Increase done-task
                        let doneTaskElement = document.getElementById("done-task");
                        let doneValue = parseInt(doneTaskElement.innerText, 10);
                        doneValue += 1;
                        doneTaskElement.innerText = doneValue < 10 ? "0" + doneValue : doneValue;
                      
                        // Add <p> to activity log
                        const activityLog = document.getElementById("activity-log");
                        const newParagraph = document.createElement("p");
                        newParagraph.className = "m-4";
                        newParagraph.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
                        activityLog.appendChild(newParagraph);
                      });
                      
                      // Clear last activity <p>
                      document.getElementById("clear-btn").addEventListener("click", function () {
                        const activityLog = document.getElementById("activity-log");
                        const paragraphs = activityLog.querySelectorAll("p");
                      
                        if (paragraphs.length > 0) {
                          activityLog.removeChild(paragraphs[paragraphs.length - 1]);
                        }
                      });
                      
                      
                      