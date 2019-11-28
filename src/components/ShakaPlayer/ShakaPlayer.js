import React, { Component } from 'react';
import shaka from 'shaka-player';
import muxjs from "mux.js";

var manifestUri = 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8';

class Main extends Component {

	componentDidMount() {
		window.muxjs=muxjs;
	  	// Install built-in polyfills to patch browser incompatibilities.
		shaka.polyfill.installAll();

		// Check to see if the browser supports the basic APIs Shaka needs.
		if (shaka.Player.isBrowserSupported()) {
    		// Everything looks good!
    		console.log("BROWSER SUPPORTED");
			this.initPlayer();
		} else {
			// This browser does not have the minimum set of APIs we need.
			console.error('Browser not supported!');
		}
	}

	initPlayer(){
		console.log("init player")

		var player = new shaka.Player(this.refs.video);

		// Listen for error events.
		player.addEventListener('error', this.onErrorEvent);

		// Try to load a manifest.
		// This is an asynchronous process.
		// player.load(manifestUri).then(function() {
		player.load(manifestUri).then(function() {
			// This runs if the asynchronous load is successful.
			console.log('The video has now been loaded!');
		}).catch(this.onError);  // onError is executed if the asynchronous load fails.
	}
	
	onErrorEvent(event) {
		// Extract the shaka.util.Error object from the event.
		this.onError(event.detail);
	}
	
	onError(error) {
		// Log the error.
		console.error('Error code', error.code, 'object', error);
	}

	componentWillUnmount() {
		// unmount stuff
		// kill stream hogging...:)
	}

	render() {
   		return (
	    	<div>
		    	<h2>Player</h2>
		    	<video ref="video"
				   width="320"
	       			poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
	           	controls autoPlay>
	       		</video>
	    	</div>
	    );
  	}
}

export default Main;