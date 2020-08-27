<html>
<head>
	<title>MailChimp Sign-Up Form</title>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.2/jquery.validate.min.js"></script>
	<script type="text/javascript">
		$(document).ready(function() {
			// jQuery Validation
			$("#signup").validate({
				// if valid, post data via AJAX
				submitHandler: function(form) {
					$.post("subscribe.php", { fname: $("#fname").val(), lname: $("#lname").val(), email: $("#email").val() }, function(data) {
						$('#response').html(data);
					});
				},
				// all fields are required
				rules: {
					fname: {
						required: true
					},
					lname: {
						required: true
					},
					email: {
						required: true,
						email: true
					}
				}
			});
		});
	</script>
</head>

<body>
	<div class="subscribe wow fadeInUp">
	
	<form class="form-inline" role="form" action="subscribe.php" method="post">
		<div class="form-group">
			<label class="sr-only" for="subscribe-email">Email address</label>
			<input type="text" name="email" placeholder="Enter your email..." class="subscribe-email form-control" id="subscribe-email">
		</div>
		<button type="submit" class="btn">Subscribe</button>
	</form>

	<div class="success-message"></div>
	<div class="error-message"></div>
	</div>
</body>
</html>
