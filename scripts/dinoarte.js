
        var playing = false; // to make sure the first finishes before launching the second

        function play_or_mute(audio, name, marker) {
            if (marker.object3D.visible == true && audio.muted == true) {
                    audio_play(audio, name);
                } 
            if (marker.object3D.visible == false) {
                audio_muted(audio, name);
            }
        }

        function audio_play(audio, name) {
            audio.play();
            audio.muted = false;
            playing = true;
            //console.log("audio_play " + name);
        }

        function audio_muted(audio, name) {
            audio.muted = true;
            //console.log("audio_muted " + name);
        }

        function audio_unmuted(audio, name) {
            audio.muted = false;
            //console.log("audio_unmuted " + name);
        }

        function audio_ended(audio, name) {
            audio.currentTime = 0;
            playing = false;
            audio.muted = true;
            //console.log("audio_ended " + name);
        }
