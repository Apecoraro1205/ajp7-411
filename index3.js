  "use strict";
        // this is the shortcut notation for document ready	

        $(function() {
            $("#datepicker").datepicker(); //adds datepicker
            $("#spinner").spinner(); //adds spinner
            $('#signup').validate(); //validation

            $('#signup').submit(function(e) {

                e.preventDefault(); //Prevents from submitting (which is the default action)

                // if the form is not valid don't do anything else but return
                if (!$("#signup").valid()) return;
            });



            var myForm = document.getElementById("signup"); //displays input
            myForm.onsubmit = function() {
                var n1 = document.getElementById("name").value;
                var n2 = document.getElementById("datepicker").value;
                var n3 = document.getElementById("spinner").value;
                var n4 = document.getElementById("web").value;
                var n5 = document.getElementById("email").value;
                document.getElementById("result").innerHTML = "Your name: " + n1 + "<br />" + "Your birth date: " + n2 + "<br />" + "Your family member amount: " + n3 + "<br />" + "Your favorite website: " + n4 + "<br />" + "Your work email: " + n5; //the actual display html
                return false;
            }


        }); // end ready
