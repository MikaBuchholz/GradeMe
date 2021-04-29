var button = document.getElementById("submit-button");
var checkbox = document.getElementById("checkbox")
var pointAverageTextBox = document.getElementById("text-box")
var inputPointsTextBox = document.getElementById("latest-grade-box")
var gradeGroup = document.getElementById("grade-container")
var reloadButton = document.getElementById("reload-button")
var addedPoints = 0
var gradeAmount = 0
var gradeList = []
var lkList = []
var test = 0
var lkCounter = 0


//TODO Spelling, Calculation


button.onclick = function(){
    var inputGrade = parseInt(document.getElementById('input-field').value)
    var saveInput = inputGrade
    if (checkbox.checked) {
        var lk = '(LK)'
    } else {
        lk = ''
    }
    
    if (inputGrade >= 1 && inputGrade <= 15) {
        if (checkbox.checked) {
            gradeList.push(inputGrade)
            gradeList.push(inputGrade)
        } else {
            gradeList.push(inputGrade)
        }

        inputPointsTextBox.innerText = `Input Points: ${saveInput} ${lk}`
        


        var summedUpGrades= gradeList.reduce((a, b) => a + b, 0)
        var testAverage = summedUpGrades / gradeList.length
        var testAverage = testAverage.toFixed(2)
      
        if (gradeList.length == 2) {
            testAverage = saveInput
        }

       

        pointAverageTextBox.innerText = `Point Avergade: ${testAverage}`
        
        const newDiv = document.createElement("div")

        if (checkbox.checked) {
            newDiv.style.backgroundColor = 'coral';
        }
 
        newDiv.setAttribute('class', 'new-grades-div')
        newDiv.onclick = function () {
            //var removedElement = newDiv.getElementsByTagName('p')[0].innerHTML
            calculateGrades(summedUpGrades, gradeList, pointAverageTextBox, newDiv, saveInput, inputPointsTextBox)
            newDiv.remove()
        }

        const newTag = document.createElement('p')
        newTag.setAttribute('class', 'new-grade-p')
        newTag.textContent = saveInput
        newDiv.appendChild(newTag)

        gradeGroup.appendChild(newDiv)
        
    } else {
        window.alert('Wrong Input')
        
    }
    document.getElementById('input-field').value = "";
    checkbox.checked = false
}

function calculateGrades (summedUpGrades, gradeList, pointAverageTextBox, newDiv, saveInput, inputPointsTextBox) {
        if (newDiv.style.backgroundColor == 'coral') {
            for (i = 0; i < gradeList.length; i++) {
                if (gradeList[i] == saveInput)  {
                    gradeList.splice(i, 2)
                    

                    var summedUpGrades= gradeList.reduce((a, b) => a + b, 0)
                    var averagePoints = summedUpGrades / gradeList.length
                   
                    
                    if (averagePoints > 15) {
                        averagePoints = 15
                    }
                    
                    averagePoints = averagePoints.toFixed(2)
                    pointAverageTextBox.innerText = `Point Avergade: ${averagePoints}`
                    var lkGrade = parseInt(gradeList[gradeList.length - 1]);
                    
                    if (lkGrade === undefined || !isNaN(lkGrade)) {
                        lkGrade = 'Empty'
                    }

                    inputPointsTextBox.innerText = `Input Points: ${lkGrade}`
                 
                    break
                    
                }
            }
        }else{
            for (i = 0; i < gradeList.length; i++) {
                if (gradeList[i] == saveInput) {
                    gradeList.splice(i, 2)
                    

                    var summedUpGrades= gradeList.reduce((a, b) => a + b, 0)
                    var averagePoints = summedUpGrades / (gradeList.length + lkCounter)

                    if (averagePoints > 15) {
                        averagePoints = 15
                    }
                
                    averagePoints = averagePoints.toFixed(2)

                    pointAverageTextBox.innerText = `Point Avergade: ${averagePoints}`
                    
                    var lkGrade = parseInt(gradeList[gradeList.length - 1]);

                    if (lkGrade === undefined || isNaN(lkGrade)) {
                        lkGrade = 'Empty'
                    }

                    inputPointsTextBox.innerText = `Input Points: ${lkGrade}`
                  
                    break
                }
            } 
        }
        
        if(gradeList.length === 0) {
            inputPointsTextBox.innerText = `Input Points: Empty`
            pointAverageTextBox.innerText = `Point Avergade: Empty`
        }
}


reloadButton.onclick = function () {
    location.reload();
}