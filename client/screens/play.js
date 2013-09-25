define([], function() {

    console.log("From play: me = ", me);

    var PlayScreen = me.ScreenObject.extend({

        onResetEvent: function() {
            // stuff to reset on state change
            // load a level
            me.levelDirector.loadLevel("map");
        },

        /* ---

        action to perform when game is finished (state change)

        --- */
        onDestroyEvent: function() {
        }

    });

    return PlayScreen;
});
