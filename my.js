$( document ).ready(function() {

  //Hikvsion NVR uri
  var config = JSON.parse( `[
    "rtsp://username:password@your.ip.address:554/Streaming/Channels/101",
    "rtsp://username:password@your.ip.address:554/Streaming/Channels/201",
    "rtsp://username:password@your.ip.address:554/Streaming/Channels/301",
    "rtsp://username:password@your.ip.address:554/Streaming/Channels/402"
  ]`);

  var i = 0;

  //Firefox 52 ESR on Raspian cannot play more than 4 cameras (max stability)
  config.forEach(function(element) {

    var div =  document.createElement("div");
    $(div).attr("id", i);
    $(div).addClass("half");


    var embed = document.createElement("embed");
    $(embed).attr("type", "application/x-vlc-plugin");
    $(embed).attr("controls", "false");
    $(embed).attr("pluginspage", "http://www.videolan.org");
    $(embed).attr("width", "100%");
    $(embed).attr("height", "100%");
    $(embed).attr("loop", "no");
    $(embed).attr("target", element);

    var object = document.createElement("object");
    $(object).attr("classid", "clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921");
    $(object).attr("target", "http://download.videolan.org/pub/videolan/vlc/last/win32/axvlc.cab");
    $(object).css("display:none");

    $(div).append(embed);
    $(div).append(object);
    $("#biggest").append(div);

    i=i++;

  });

});
