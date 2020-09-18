<!DOCTYPE html>
<html>
<head>
	<title>Digitaliza Já</title>
	<link rel="stylesheet" href="style.css">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
	<div class="main_wrap">
		<div class="window_height d-flex flex-column justify-content-center">
			<div class="container text-center">
				<h1 class="title_2">Cane Bootstrap Html Template</h1>
				<h2 class="title_4">Bootstrap, Fontawesome, And modals</h1>
				<h2 class="text mb-5">Html template just how I like it.</h1>

				<a href class="btn btn-success" id="show_success_message">Modal success</a>
				<a href class="btn btn-danger" id="show_error_message">Modal error</a>
			</div>
		</div>
	</div>

	<div class="modal-wrap">

		<!-- success popup -->
		<div class="modal fade" tabindex="-1" id="success_message">
		  <div class="modal-dialog modal-dialog-centered" role="document">
		    <div class="modal-content">
		      <div class="modal-body text-center">
		      	<i class="fas fa-check big-icon big-icon-success"></i>
		        <p class="message_placeholder text"></p>
		        <button type="button" class="btn btn-orange " data-dismiss="modal">Continuar</button>
		      </div>
		    </div>
		  </div>
		</div>


		<!-- error popup -->
		<div class="modal fade" tabindex="-1" id="error_message">
		  <div class="modal-dialog modal-dialog-centered" role="document">
		    <div class="modal-content">
		      <div class="modal-body text-center">
		      	<i class="fas fa-times big-icon big-icon-error"></i>
		        <p class="message_placeholder text"></p>
		        <button type="button" class="btn btn-orange " data-dismiss="modal">Continuar</button>
		      </div>
		    </div>
		  </div>
		</div>

	</div>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
	<script>
		let Main = {
			init:function(){
				$("#show_success_message").click(function(e){
					e.preventDefault();
					Main.show_success_message("Mensagem de sucesso vai aqui!");
				});

				$("#show_error_message").click(function(e){
					e.preventDefault();
					Main.show_error_message("Mensagem de erro vai aqui!");
				});
			},
			show_success_message:function(message){
				// $(".modal.in").modal("hide");
				$("#success_message .message_placeholder").html(message);
				$("#success_message").modal("show");
			},
			show_error_message:function(message){
				// $(".modal.in").modal("hide");
				$("#error_message .message_placeholder").html(message);
				$("#error_message").modal("show");
			}
		}
		var $ = jQuery;
		$(function(){
			Main.init();
		});
	</script>
</body>
</html>