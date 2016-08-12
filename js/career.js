
$("#live-search").submit(function(){

  var res=$("#search-box").val();
var searchQuery = res.toLowerCase();
if( "web application development (ui/ux) ".indexOf(searchQuery) > -1 ) {
window.location = "#web-application";
}
else if("devops".indexOf(searchQuery) > -1 )
    {
        window.location = "#support-operation";
    }
else if("testing as services".indexOf(searchQuery) > -1 )
    {
        window.location = "#testing-services";
    }
else if("mobility".indexOf(searchQuery) > -1 )
    {
        window.location = "#mobility";
    }
else if("big data / analytics".indexOf(searchQuery) > -1 )
    {
        window.location = "#data-analytics";
    }
else if("application / software development".indexOf(searchQuery) > -1 )
    {
        window.location = "#app-software-development";
    }
else if("consulting services".indexOf(searchQuery) > -1 )
    {
        window.location = "#consulting-services";
    }

    else
    {
        document.getElementById("search").submit();
    }


});
