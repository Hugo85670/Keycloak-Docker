

var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1;

if(window["HappytechBridge"] != undefined)
{
    document.addEventListener("DOMContentLoaded", function()
    {
        var el = document.getElementsByTagName("input");
    
        for(i=0; i<el.length; i++)
        {
    
            el[i].addEventListener("focus", function(e)
            {
                // the next line is required to work around a bug in WebKit (Chrome / Safari)
                location.href = "#";
                location.href = "#" + e.target.id;
                window.scrollBy(0, -e.target.offsetHeight );
                //console.log("scrollto : " + "#"+  e.target.id);
                //e.target.scrollIntoView(true); marche pas
            });
        }
    });
}
	



