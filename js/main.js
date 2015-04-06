var app = {};

app.changePage = function(page){
	$('#main-w .page.active').addClass('inactive').removeClass('active');
	$('#' + page).addClass('active');
	setTimeout(function(){ 
		$('#main-w .page.inactive').removeClass('inactive');
	}, 1000);
};

app.login = function(){
	var valid = true;
	var data = {
		username: $('#l-username').val(),
		password: $('#l-password').val()
	};
	if(data.username == ''){
		$('#l-username').addClass('error');
		valid = false;
	}
	if(data.password == ''){
		$('#l-password').addClass('error');
		valid = false;
	}
	if(valid){
		$('#l-username').val('');
		$('#l-password').val('');
		app.changePage('login-s');	
	}	
};

app.register = function(){
	var valid = true;
	var data = {
		usser: $('#r-username').val(),
		pass: $('#r-password').val(),
		name: $('#r-name').val(),
		act: 1,
		cel: $('#r-phone').val(),
		sexo: $('#r-sexo').val(),
		pais: $('#r-pais').val()
	};
	if(data.usser == ''){
		$('#r-username').addClass('error');
		valid = false;
	}
	if(data.pass == ''){
		$('#r-password').addClass('error');
		valid = false;
	}
	if(data.name == ''){
		$('#r-name').addClass('error');
		valid = false;
	}
	if(data.cel == ''){
		$('#r-phone').addClass('error');
		valid = false;
	}
	if(valid){
		$('#r-username').val('');
		$('#r-password').val('');
		$('#r-name').val('');
		$('#r-phone').val(''),
		app.changePage('register-s');	
	}	
};

app.events = function() {
	
	$('#login-action').click(function(e){
		app.login();
		e.preventDefault();
		e.stopPropagation();
	});

	$('#register-action').click(function(e){
		app.register();
		e.preventDefault();
		e.stopPropagation();
	});

	$('.back-main').click(function(e){
		app.changePage('login');
		e.preventDefault();
		e.stopPropagation();
	});

	$('#register-go').click(function(e){
		app.changePage('register');
		e.preventDefault();
		e.stopPropagation();
	});
	
	$('form input').change(function(){
		$(this).removeClass('error');
	});

	$('form select').change(function(){
		$(this).removeClass('error');
	});

};




app.init = function() {
	app.events();
};

$( document ).ready(function() {
    app.init();
});