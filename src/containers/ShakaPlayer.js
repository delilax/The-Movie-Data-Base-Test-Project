import React, { Component } from "react";
import shaka from "shaka-player";

//Installed mux.js for inspecting and manipulating video container formats
import muxjs from "mux.js"; 

//Harcoded link from assignment
var manifestUri =
  "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8";

class Main extends Component {
  componentDidMount() {
    //attach muxjs to windows beacuse shaka looks for mux in global environment
    window.muxjs = muxjs;

    // Install built-in polyfills to patch browser incompatibilities.
    shaka.polyfill.installAll();

    // Check to see if the browser supports the basic APIs Shaka needs.
    if (shaka.Player.isBrowserSupported()) {
      // Everything looks good!
      this.initPlayer();
    } else {
      // This browser does not have the minimum set of APIs we need.
      console.error("Browser not supported!");
    }
  }

  initPlayer() {
    console.log("init player");

    //getting video element
    const video = this.refs.video;

    var player = new shaka.Player(this.refs.video);

    // Listen for error events.
    player.addEventListener("error", this.onErrorEvent);

    // Try to load a manifest.
    // This is an asynchronous process.

    player
      .load(manifestUri)
      .then(function() {
        // This runs if the asynchronous load is successful.
        console.log("The video has now been loaded!");

        //Runs fullscreen video on load an start
        video.requestFullscreen().catch(err => {
          console.log(err);
        });
      })
      .catch(this.onError); // onError is executed if the asynchronous load fails.
  }

  onErrorEvent(event) {
    // Extract the shaka.util.Error object from the event.
    this.onError(event.detail);
  }

  onError(error) {
    // Log the error.
    console.error("Error code", error.code, "object", error);
  }

  componentWillUnmount() {
    // unmount stuff
    // kill stream hogging...:)
  }

  render() {
    return (
      <div>
        <video
          ref="video"
          width="500vmin"
          poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
          controls
          autoPlay
        ></video>
      </div>
    );
  }
}

export default Main;
