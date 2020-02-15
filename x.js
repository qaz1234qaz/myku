function NewMyGetIPCall()
{
	alert(1)

}


function NewMyGetIP()
{
	mUrl="http://ip-api.com/json/";
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
				//NewgetUrlPostMy(saveurl,b,muuid);
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

