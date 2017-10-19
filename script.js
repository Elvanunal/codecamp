$(document).ready(function(){

$("header").hide();
$("header").fadeIn(2000);
});

$.getJSON("https://api.airtable.com/v0/appFRdRpDLrXwRAtf/musics?api_key=keyu2Ub4GvFkI7UKc",
                    function(data) {
              console.log(data);
            $.each(data.records, function(key,val){

$("<iframe src='https://open.spotify.com/embed?uri="+val.fields['spotify-link']+"&view=coverart' frameborder='0' allowtransparency='true'></iframe>").appendTo('#toplistapi');

           });
                    }
);




$.getJSON("https://api.airtable.com/v0/appFRdRpDLrXwRAtf/playlists?api_key=keyu2Ub4GvFkI7UKc",
                    function(data) {
              console.log(data);
            $.each(data.records, function(key,val){

$("<iframe src='https://open.spotify.com/embed?uri="+val.fields['spotify-link']+"&view=coverart' frameborder='0' allowtransparency='true'></iframe>").appendTo('#playlists');

           });
                    }
);




$.getJSON("https://api.airtable.com/v0/appFRdRpDLrXwRAtf/albums?api_key=keyu2Ub4GvFkI7UKc",
                    function(data) {
              console.log(data);
            $.each(data.records, function(key,val){

$("<iframe src='https://open.spotify.com/embed?uri="+val.fields['spotify-link']+"&view=coverart' frameborder='0' allowtransparency='true'></iframe>").appendTo('#albums');

           });
                    }
);








$.getJSON("https://api.airtable.com/v0/appFRdRpDLrXwRAtf/playlists2?api_key=keyu2Ub4GvFkI7UKc",
                    function(data) {
              console.log(data);
            $.each(data.records, function(key,val){

$("<iframe src='https://open.spotify.com/embed?uri="+val.fields['spotify-link']+"&view=coverart' frameborder='0' allowtransparency='true'></iframe>").appendTo('#playlists2');

           });
                    }
);
