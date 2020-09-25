Main = {
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
		$(".modal.in").modal("hide");
		$("#success_message .message_placeholder").html(message);
		$("#success_message").modal("show");
	},
	show_error_message:function(message){
		$(".modal.in").modal("hide");
		$("#error_message .message_placeholder").html(message);
		$("#error_message").modal("show");
	}
}
var $ = jQuery;
$(function(){
	Main.init();
});