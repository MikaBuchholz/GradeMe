var button = document.getElementById("submit-button");
var checkbox = document.getElementById("checkbox")
var pointAverageTextBox = document.getElementById("text-box")
var gradeAverageTextBox = document.getElementById("text-box-2")
var inputPointsTextBox = document.getElementById("latest-grade-box")
var gradeGroup = document.getElementById("grade-container")
var reloadButton = document.getElementById("reload-button")
var addedPoints = 0
var gradeAmount = 0
var pointList = []
var gradeList = []
var lkList = []
var test = 0
var lkCounter = 0
var gradeDict = {15: 1.0, 14: 1.0, 13: 1.3, 12: 1.7, 11: 2.0, 10: 2.3, 9: 2.7, 8: 3.0, 7: 3.3, 6: 3.7, 5: 4.0, 4: 4.3, 3: 4.6, 2: 5.0, 1: 5.3, 0: 6.0}


//This is shit js code, but im too lazy to fix it now, maybe later

button.onclick = function(){
    var inputGrade = parseInt(document.getElementById('input-field').value)
    var saveInput = inputGrade
    

    if (inputGrade >= 1 && inputGrade <= 15) {
        if (checkbox.checked) {
            pointList.push(inputGrade)
            pointList.push(inputGrade)

            gradeList.push(gradeDict[inputGrade])
            gradeList.push(gradeDict[inputGrade])

            isLK = true
        } else {
            pointList.push(inputGrade)
            gradeList.push(gradeDict[inputGrade])
            isLK = false
            
        }

        gradeAmount += 1
        inputPointsTextBox.innerText = `Total: ${gradeAmount}`
        
        var summedUpPoints= pointList.reduce((a, b) => a + b, 0)
        var summedUpGrades = gradeList.reduce((a, b) => a + b, 0)

        var gradeAverage = summedUpGrades / gradeList.length

        var testAverage = summedUpPoints / pointList.length
        var testAverage = testAverage.toFixed(2)
        gradeAverage = gradeAverage.toFixed(2)
      
        if (pointList.length == 2 && isLK) {
            testAverage = saveInput
        }

        pointAverageTextBox.innerText = `Point Average: ${testAverage}`
        gradeAverageTextBox.innerText = `Grade Average: ${gradeAverage}`
        
        const newDiv = document.createElement("div")

        if (checkbox.checked) {
            newDiv.style.backgroundColor = 'coral';
        }
 
        newDiv.setAttribute('class', 'new-grades-div')
        newDiv.onclick = function () {
            if (newDiv.style.backgroundColor == 'coral') {
                lkStatus = true
            } else {
                lkStatus = false
            }
            //var removedElement = newDiv.getElementsByTagName('p')[0].innerHTML
            gradeAmount = gradeAmount - 1
            calculateGrades(summedUpPoints, pointList, pointAverageTextBox, newDiv, saveInput, inputPointsTextBox, lkStatus, gradeAmount, gradeList)
            newDiv.remove()
        }

        const newTag = document.createElement('p')
        newTag.setAttribute('class', 'new-grade-p')
        newTag.textContent = saveInput
        newDiv.appendChild(newTag)

        gradeGroup.appendChild(newDiv)
        
    } else {
        
    }
    document.getElementById('input-field').value = "";
    checkbox.checked = false



}

function calculateGrades (summedUpPoints, pointList, pointAverageTextBox, newDiv, saveInput, inputPointsTextBox, lkStatus, gradeAmount, gradeList) {
            for (i = 0; i < pointList.length; i++) {
                if (pointList[i] == saveInput || gradeList[i] == gradeDict[saveInput])  {
                    if (lkStatus) {
                        pointList.splice(i, 2)
                        gradeList.splice(i, 2)
                    }else {
                        pointList.splice(i, 1)
                        gradeList.splice(i, 1)
                    }
                    
                    var summedUpPoints= pointList.reduce((a, b) => a + b, 0)
                    var averagePoints = summedUpPoints / pointList.length

                    var summedUpGrades = gradeList.reduce((a, b) => a + b, 0)
                    var gradeAverage = summedUpGrades / gradeList.length
                   
                    if (averagePoints > 15) {
                        averagePoints = 15
                    }
                    
                    gradeAverage = gradeAverage.toFixed(2)
                    averagePoints = averagePoints.toFixed(2)
                    pointAverageTextBox.innerText = `Point Average: ${averagePoints}`
                    gradeAverageTextBox.innerText = `Grade Average: ${gradeAverage}`

                    var lkGrade = pointList[pointList.length - 1];
                   
                    if (lkGrade === undefined || !isNaN(lkGrade)) {
                        //lkGrade = 'Empty'
                    }

                    inputPointsTextBox.innerText = `Total: ${gradeAmount}`
                 
                    break
                }
            }
        
        if(pointList.length === 0) {
            inputPointsTextBox.innerText = `Total: Empty`
            pointAverageTextBox.innerText = `Point Avergade: Empty`
            gradeAverageTextBox.innerText = 'Grade Average: Empty'
            gradeAmount = 0
        }
}

