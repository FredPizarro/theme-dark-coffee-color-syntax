var io = require('socket.io').listen(server);

app.get( '/stream/:searchTerm', function( req, res, next ){
  var searchTerm = req.params.searchTerm

  twitter.stream( 'statuses/filter', { track: searchTerm }, function( stream ){
    stream.on( 'data', function(data){
      data.location = data.geo ? data.geo.coordinates : [];
      var tweet = {
        created_at: data.created_at,
        text: data.text,
        username: data.user.screen_name,
        followers_count: data.user.followers_count,
        following_count: data.user.friends_count,
        statuses_count:  data.user.statuses_count,
        profile_image_url: data.user.profile_image_url,
        coordinates: data.location
      };
      io.emit( 'tweet', tweet );
    });

    stream.on( 'error', function(error){
      throw error;
    } );
  } )

});
