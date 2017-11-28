/*global $ APIKEY*/
$(document).ready (function() {
    $.ajax({
        method: "GET",
        url: "https://newsapi.org/v2/sources",
        data: { category:"technology", country: "us", language: "en", apiKey: APIKEY },
        success: function(data) {
            if (data.status == "ok") {
                console.log(data);
                for (var i = 0; i < data.sources.length; i++) {
                    var source = document.createElement("OPTION");
                    source.setAttribute("value", data.sources[i].name);
                    source.innerHTML = data.sources[i].name;
                    document.getElementById('selection').appendChild(source);
                }
            }
        }
    })
//     .done(function( data ) {
//         console.log( data );
//         console.log( data.status );
//         console.log( data.sources[0] );
//   });
     $('#source').submit(function(event) {
        event.preventDefault();
        alert(document.getElementById("selection").value);
        // alert(document.getElementById("selection").name);
        
        for (var i = 0; i < document.getElementById("selection").length; i++);
        var articleName = document.getElementById("selection").value;
        var article = document.getElementById("article");
        article.innerHTML = articleName;
        
    });
});



