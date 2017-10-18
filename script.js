$(document).ready(function(){

$("header").hide();
$("header").fadeIn(2000);
});

$.getJSON("https://api.airtable.com/v0/appFRdRpDLrXwRAtf/musics?api_key=keyu2Ub4GvFkI7UKc",
                    function(data) {
              console.log(data);
            $.each(data.records, function(key,val){
              console.log(val.fields.title);

             $("<li>"+val.fields.title+"</li>").appendTo("#musiques");
            });
                    }
);
