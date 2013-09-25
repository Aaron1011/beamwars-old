require(['resource', 'screens/play'], function(Resources, PlayScreen) {
    console.log("Hello world!");
    console.log("Me = ", me);

    var game = {
        // Run on page load.
        "onload" : function () {
            console.log("Loading...");
            // Initialize the video.
            if (!me.video.init("screen", 640, 480, true, 'auto')) {
                alert("Your browser does not support HTML5 canvas.");
                return;
            }

            // add "#debug" to the URL to enable the debug Panel
            if (document.location.hash === "#debug") {
                window.onReady(function () {
                    me.plugin.register.defer(debugPanel, "debug");
                });
            }

            // Initialize the audio.
            //me.audio.init("mp3,ogg");

            // Set a callback to run when loading is complete.
            me.loader.onload = this.loaded.bind(this);

            // Load the resources.
            me.loader.preload(Resources);

            // Initialize melonJS and display a loading screen.
            me.state.change(me.state.LOADING);
        },



        // Run on game resources loaded.
        "loaded" : function () {
            console.log("Loaded!");
            //me.state.set(me.state.MENU, new game.TitleScreen());
            me.state.set(me.state.PLAY, new game.PlayScreen());

            // Start the game.
            me.state.change(me.state.PLAY);
        },

        "PlayScreen": PlayScreen
    };

    game.onload();
});
