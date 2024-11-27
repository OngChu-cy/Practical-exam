deleteButton = document.getElementById('deleteStudentButton');
// add an event listener to delete the last row/student on double clicking the deleteButton


button = document.getElementById('addStudentButton');
// add an event listener to style the button on click


function showNewStudentForm(){
// display the form on clicking the button
}

function validateForm(){
        var name = document.getElementById('name').value;
        var stdid = document.getElementById('stdid').value;
        var email = document.getElementById('email').value;
        var age = document.getElementById('age').value;
    
        var namePattern = /^[a-zA-Z0-9]{5,20}$/;
        var stdidPattern = /^[a-zA-Z0-9]{7}$/
        var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (namePattern.test(name)){
            return true;
        }else{
            alert("Invalid person's name")
        }

        if (stdidPattern.test(stdid)){
            return true;
        }else{
            alert('Invalid student ID')
        }

        if (emailPattern.test(email)){
            return true;
        }else{
            alert('Invalid email address')
        }

        if (age >= 0 || age <= 100 ){
            return true;
        }else{
            alert('Invalid age')
        }
    } 
    // regex for name: /^[A-Za-z]+(?: [A-Za-z]+)*$/  allows names habving one or more words with one white spaces in between
    // regex for email:  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    // regex for student id: /^[a-zA-Z0-9]{7}$/  accepts alphanumeric values of 7 characters


