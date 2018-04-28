        "use strict";
        // this is the shortcut notation for document ready	
        $(function() {

            $('#signup').validate() //validation

            $('#signup').submit(function(e) {
                event.preventDefault(); //Prevents from submitting (which is the default action)


                // if the form is not valid don't do anything else but return
                if (!$('signup').valid()) return;

                // if you get here the form is valid so do wother stuff

            });




        }); // end ready