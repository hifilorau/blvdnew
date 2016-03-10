$(function(){
	var vidPlay = $('#wistia_bigPlayButton_60');
	var watchButton = $('.video-scroll');
	  
	watchButton.click(function() {
		$('html, body').animate({
			 scrollTop: $(".video-wrapper").offset().top
    }, 1000);
		wistiaEmbed.play();
		console.log('test');
	 });
	
	
	});
	
	
	
	
//   $("#jquery_jplayer_1").jPlayer({
//        ready: function(event) {
//            $(this).jPlayer("setMedia", {
//				title: "Paranoid Android",
//				mp3: "https://s3-us-west-2.amazonaws.com/blvd-files/music/paranoidandroid.mp3"
//            });
//        },
//        play: function() { // To avoid both jPlayers playing together.
//            $(this).jPlayer("pauseOthers");
//        },
//        swfPath: "https://jplayer.org/latest/dist/jplayer",
//        supplied: "mp3, oga",
//		wmode: "window",
//		useStateClassSkin: true,
//		autoBlur: false,
//		smoothPlayBar: true,
//		keyEnabled: true,
//		remainingDuration: true,
//		toggleDuration: true       
//    });
//      
//    
//   $("#jquery_jplayer_2").jPlayer({
//    ready: function(event) {
//        $(this).jPlayer("setMedia", {
//            title: "Fly me to the Moon",
//            mp3: "https://s3-us-west-2.amazonaws.com/blvd-files/music/flymetothemoon.mp3"
//        });
//    },
//    play: function() { // To avoid both jPlayers playing together.
//      $(this).jPlayer("pauseOthers");
//    },
//    swfPath: "https://jplayer.org/latest/dist/jplayer",
//    cssSelectorAncestor: "#jp_container_2",
//    supplied: "mp3, oga",
//    wmode: "window",
//    useStateClassSkin: true,
//    autoBlur: false,
//    smoothPlayBar: true,
//    keyEnabled: true,
//    remainingDuration: true,
//    toggleDuration: true
//});
//    
//$("#jquery_jplayer_3").jPlayer({
//    ready: function(event) {
//        $(this).jPlayer("setMedia", {
//            title: "Fly me to the Moon",
//            mp3: "https://s3-us-west-2.amazonaws.com/blvd-files/music/singleladies.mp3"
//        });
//    },
//    play: function() { // To avoid both jPlayers playing together.
//      $(this).jPlayer("pauseOthers");
//    },
//    swfPath: "https://jplayer.org/latest/dist/jplayer",
//    cssSelectorAncestor: "#jp_container_3",
//    supplied: "mp3, oga",
//    wmode: "window",
//    useStateClassSkin: true,
//    autoBlur: false,
//    smoothPlayBar: true,
//    keyEnabled: true,
//    remainingDuration: true,
//    toggleDuration: true
//});
//    
//    
//    var jpStop =  $(".jp-stop")
//      jpStop.hide();
//    
//    
//      $(".jp-play").click(function () {
//        var playBut = $(this);
//        playBut.hide().siblings(".jp-stop").show();
//        //$("#aa").stop(true, false);
//        //audioTag1.pause();
//    });
//    
//    $(".jp-stop").click(function () {
//        $(this).hide().siblings(".jp-play").show();
//        //animateaa();
//    });
//                                   




//document.addEventListener('play', function(e){
//    var audios = document.getElementsByTagName('audio');
//    for(var i = 0, len = audios.length; i < len; i++){
//        if(audios[i] != e.target){
//            audios[i].pause();
//        }
//    }
//}, true);


