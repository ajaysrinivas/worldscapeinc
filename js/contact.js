	// Contact form
 $('#send_now').click(function(){
$("#main-contact-form").validate({
    rules: {
name: {required: true},
lname: {required: true},
    email: {required: true},
number: {required: true},
    subject: {required: true},
    message: {required: true},
captcha: {required: true},
   },
submitHandler:function(form){
       $('#send_now').attr('disabled','disabled');
   }
});
}); 

 var form = $('#main-contact-form');
    $("#reload").click(function() {
	$("img#img").remove();
		var id = Math.random();
        $('<img id="img" src="captcha.php?id='+id+'"/>').appendTo("#imgdiv");
		 id ='';
    });

	$('#main-contact-form').submit(function(data){
		data.preventDefault();
 var captcha = $("#captcha1").val();
if (captcha == '')
        {
console.log('captcha');
           // alert("Fill captcha Field");
        }

        else
        {	//validating CAPTCHA with user input text
            		var form_status = $('<div class="form_status"></div>');
if ($("#main-contact-form").valid()) {
		$.ajax({
			type: "POST",
			url: $(this).attr('action'),
data:$('#main-contact-form').serialize(),
			beforeSend: function(data){
$(".captcha_error").css('display', 'none');
				form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
			},success: function(data) {

console.log(data);
if(data == "success") {
        form_status.html('<p class="text-success">Thank you for contact us. As early as possible  we will contact you</p>').delay(3000).fadeOut();
$('#main-contact-form')[0].reset();
}
else
{
	if(data == "error") {
$('#send_now').prop('disabled',false);
form.append(form_status.html('<p class="captcha_error" style="color:red">Please Enter valid captcha</p>'));
}
}

      }


		});
}
}
	});


	
