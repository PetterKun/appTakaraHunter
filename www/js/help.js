//---------------------------------------------------------------- HELP ---------------------------------------------------------------*/
$(document).ready(function()
{
	$(".botonhelp").click(function(e)
	{
		$.mobile.changePage("dialog-boxes/info/help.html", {role:"dialog"}); //<-- cargar con ajax
	});
});