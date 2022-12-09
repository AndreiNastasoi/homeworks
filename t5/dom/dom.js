function validateForm() {
    var name = document.forms["detailsdo"]["atext"].value;
    var email = document.forms["detailsdo"]["btext"].value;
    var subject =document.forms["detailsdo"]["ctext"].value;

    if (name, email, subject == "") {

        var name = document.getElementById("name").setAttribute("style","border-color: red; border-radius:10px;" )
        var email = document.getElementById("email").setAttribute("style","border-color: red;border-radius:10px; ")
        var subject = document.getElementById("subject").setAttribute("style","border-color: red;border-radius:10px;")
  
         
        
    } 
          else {  
               var display = document.getElementById("buttonmessage") ; display.style.visibility = "initial";
  
              }
            
}
