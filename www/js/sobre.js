//---------------------------------------------------------------- SOBRE LA APP ---------------------------------------------------------------*/
$(document).ready(function()
{
	$(".botonsobre").click(function(e)
	{
		$.mobile.changePage("dialog-boxes/info/sobre-app.html", {role:"dialog"}); //<-- cargar con ajax
	});
});