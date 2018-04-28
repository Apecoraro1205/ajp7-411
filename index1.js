
        "use strict";
        // this is the shortcut notation for document ready	
        $(function() {
            // when the text field gets focus it gets ride of the default value
            $(':text').focus(function() {
                //console.log('got focus');
                var field = $(this);

                //Text fields have an attribute called defaultValue, which represents the text inside the field when the page first loads. 			
                if (field.val() == field.prop('defaultValue')) {
                    field.val('');
                }
            });

            $(':text').blur(function() {
                //console.log('got focus');
                var field = $(this);

                //Text fields have an attribute called defaultValue, which represents the text inside the field when the page first loads. 			
                if (field.val() == '') {
                    field.val(field.prop('defaultValue'));
                }
            });

            $("#signup").submit(function() {
                var field = $("#getinput");
                var field1 = $("#getinput1");
                var field2 = $("#getinput2");

                //alert('This is a good validation example because the default value considered an error on submission');

                if (field.val() == '' || field.val() == field.prop('defaultValue')) {
                    alert("Please fill out every field and submit again");
                    // since there is invalid input returning false will keep us from navigating to the new form 
                    return false;
                } else if (field1.val() == '' || field1.val() == field1.prop('defaultValue')) {
                    alert("Please fill out every field and submit again");
                    // since there is invalid input returning false will keep us from navigating to the new form 
                    return false;
                } else if (field2.val() == '' || field2.val() == field2.prop('defaultValue')) {
                    alert("Please fill out every field and submit again");
                    // since there is invalid input returning false will keep us from navigating to the new form 
                    return false;
                } else {
                    // input is valid so we'll navigate to the new form
                    alert('Your name is ' + $("#getinput").val() + ' you live in ' + $("#getinput1").val() + ' you are ' + $("#getinput2").val() + ' years old');

                }

            });


        }); // end ready
