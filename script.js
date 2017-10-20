$(document).ready(function(){


  //* ANIMATION HIT THE RADIO cacher -> transparence *//
  $("header").hide();
  $("header").fadeIn(6000);
});


  //* TOP LIST API *//
  $.getJSON("https://api.airtable.com/v0/appFRdRpDLrXwRAtf/musics?api_key=keyu2Ub4GvFkI7UKc",
    function(data) {
    console.log(data);
  $.each(data.records, function(key,val){

    $("<iframe src='https://open.spotify.com/embed?uri="+val.fields['spotify-link']+"&view=coverart' frameborder='0' allowtransparency='true'></iframe>").appendTo('#toplistapi');
           });
                    }
);



  //* api DE LA CATEGORIE PLAYLISTS *//
  $.getJSON("https://api.airtable.com/v0/appFRdRpDLrXwRAtf/playlists?api_key=keyu2Ub4GvFkI7UKc",
    function(data) {
    console.log(data);
  $.each(data.records, function(key,val){

    $("<iframe src='https://open.spotify.com/embed?uri="+val.fields['spotify-link']+"&view=coverart' frameborder='0' allowtransparency='true'></iframe>").appendTo('#playlists');

           });
                    }
);

//* api DE LA PLAYLIST2*//

$.getJSON("https://api.airtable.com/v0/appFRdRpDLrXwRAtf/playlists2?api_key=keyu2Ub4GvFkI7UKc",
                    function(data) {
              console.log(data);
            $.each(data.records, function(key,val){

$("<iframe src='https://open.spotify.com/embed?uri="+val.fields['spotify-link']+"&view=coverart' frameborder='0' allowtransparency='true'></iframe>").appendTo('#playlists2');

           });
                    }
);

  //* api DES ALBUMS*//

  $.getJSON("https://api.airtable.com/v0/appFRdRpDLrXwRAtf/albums?api_key=keyu2Ub4GvFkI7UKc",
      function(data) {
      console.log(data);
  $.each(data.records, function(key,val){

    $("<iframe src='https://open.spotify.com/embed?uri="+val.fields['spotify-link']+"&view=coverart' frameborder='0' allowtransparency='true'></iframe>").appendTo('#albums');

           });
                    }
);
