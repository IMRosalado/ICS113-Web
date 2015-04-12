function onLogIn()
	{
		 $('#profile').removeClass("hidden");
		 $('#login').addClass("hidden");
		 return true;
	}
function onLogOut()
	{
		 $('#login').removeClass("hidden");
		 $('#profile').addClass("hidden");
		 return true;
	}
function validateLogInForm()
{
	var email = $('#logemail').val();
	var password = $('#logpassword').val();
	
	if (email == "" || password == "")
	{
		return false;
	}
	else
	{
		onLogIn();
		return true;
	}

	
	
}
function validateForm()
{
	var mobile = $("#inputMobile").val();
	var amount = $("#inputAmount").val();
	
	if (isNaN(amount))
	{
		alert("Enter valid amount.");
		return false;
	}
	else if (isNaN(mobile))
	{
		alert("Enter valid contact number.");
		return false;
	}
	else
	{
		return true;
	}
		

}
function validateCreation()
{
	var mobile = $("#inputMobile").val();
	
	if (isNaN(mobile))
	{
		alert("Enter valid contact number.");
		return false;
	}
	else
	{
		return true;
	}
		

}

$(document).ready(function(){
	$(window).load(function(){
		$('.body').fadeIn("slow").delay(800);
	});
	
	$('.proj').mouseover(function(){
		$('.projmenu').fadeIn();
		$(this).css("background-color", "rgba(0,0,0,0.3)");
	});
	$('.projmenu').mouseleave(function(){
		$(this).fadeOut();
		$('.proj').css("background-color", "rgba(0,0,0,0)");
	});
	
	$('.log').mouseover(function(){
		$('.logmenu').toggle("fade");
		$(this).css("background-color", "rgba(0,0,0,0.3)");
	});
	
	$('.profile').mouseover(function(){
		$('.profilemenu').fadeIn();
		$(this).css("background-color", "rgba(0,0,0,0.3)");
	});
	$('.profilemenu').mouseover(function(){
		$(this).fadeIn();
	});
	$('.profilemenu').mouseleave(function(){
		$(this).fadeOut();
		$('.profile').css("background-color", "rgba(0,0,0,0)");
	});
	
	$('#pastbutton').click(function(){
		$('html, body').animate({scrollTop: $("#pastprojects").offset().top}, 1000)
	});
	$('#currentbutton').click(function(){
		$('html, body').animate({scrollTop: $("#currentprojects").offset().top}, 1000)
	});
	$('#nextbutton').click(function(){
		$('html, body').animate({scrollTop: $("#nextprojects").offset().top}, 1000)
	});
	$('#backtomainbutton1').click(function(){
		$('html, body').animate({scrollTop: $("#mainprojtab").offset().top}, 1000)
	});
	$('#backtomainbutton2').click(function(){
		$('html, body').animate({scrollTop: $("#mainprojtab").offset().top}, 1000)
	});
	$('#backtomainbutton3').click(function(){
		$('html, body').animate({scrollTop: $("#mainprojtab").offset().top}, 1000)
	});
	$('#tocarousel').click(function(){
		$('html, body').animate({scrollTop: $("#myCarousel").offset().top}, 1000)
	});
	$('#toadminbutton').click(function(){
		$('html, body').animate({scrollTop: $("#admins").offset().top}, 1000)
	});
	$('#toonetimebutton').click(function(){
		$('html, body').animate({scrollTop: $("#onetimedonors").offset().top}, 1000)
	});
	$('#tomonthlybutton').click(function(){
		$('html, body').animate({scrollTop: $("#monthlydonors").offset().top}, 1000)
	});
	$('#backtotop1').click(function(){
		$('html, body').animate({scrollTop: $("#top").offset().top}, 1000)
	});
	$('#backtotop2').click(function(){
		$('html, body').animate({scrollTop: $("#top").offset().top}, 1000)
	});
	$('#backtotop3').click(function(){
		$('html, body').animate({scrollTop: $("#top").offset().top}, 1000)
	});
});
