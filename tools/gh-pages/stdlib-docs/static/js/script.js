/* eslint-disable strict */
(function script() { // eslint-disable-line no-restricted-syntax
	'use strict';

	main();

	/**
	* Main execution sequence.
	*
	* @private
	*/
	function main() {
		var state;
		var links;
		var el;
		var i;

		// Initialize the browser history state:
		if ( history && history.pushState ) {
			state = {
				'url': location.href
			};
			history.pushState( state, '' );
		}
		// Add an event listener for whenever the active history changes:
		if ( window.addEventListener ) {
			window.addEventListener( 'popstate', onPopState );
		} else if ( window.attachEvent ) {
			// Non-standard IE8 and previous versions:
			el.attachEvent( 'onpopstate', onPopState );
		}
		// The goal is to intercept all navigation links so we can manually manage how content is loaded into the current page. This allows us to prevent fresh page loads each time a user clicks on a menu link.
		el = document.querySelector( '.slideout-menu' );
		links = el.querySelectorAll( 'a' );

		// For each link, add a `click` listener we'll use to intercept requests for new resources...
		for ( i = 0; i < links.length; i++ ) {
			addClickListener( links[ i ], onClick );
		}
	} // end FUNCTION main()

	/**
	* Callback invoked upon a change in the active history.
	*
	* @private
	* @param {Object} evt - event object
	*/
	function onPopState( evt ) {
		if ( evt.state && evt.state.url ) {
			load( evt.state.url, false );
		}
	} // end FUNCTION onPopState()

	/**
	* Adds a `click` event listener.
	*
	* @private
	* @param {DOMElement} el - DOM element to which to attach the listener
	* @param {Callback} clbk - callback invoked upon a `click` event
	*/
	function addClickListener( el, clbk ) {
		if ( el.addEventListener ) {
			el.addEventListener( 'click', clbk );
		} else if ( el.attachEvent ) {
			// Non-standard IE8 and previous versions:
			el.attachEvent( 'onclick', clbk );
		}
	} // end FUNCTION addClickListener()

	/**
	* Callback invoked upon a `click` event.
	*
	* @private
	* @param {Object} evt - event object
	*/
	function onClick( evt ) {
		var target;
		var href;

		// Prevent the browser from doing its default behavior (e.g., navigating to a new page):
		evt.preventDefault();

		// Extract the resource name to we can request it manually:
		target = evt.target || evt.srcElement;
		href = target.getAttribute( 'href' );

		// Load the resource:
		load( href, true );
	} // end FUNCTION onClick()

	/**
	* Loads a resource.
	*
	* @private
	* @param {string} url - URL (relative or absolute)
	* @param {boolean} bool - boolean indicating whether to update the browser history
	*/
	function load( url, bool ) {
		var xhttp;

		// Request the resource...
		xhttp = new XMLHttpRequest(); // TODO: account for older IE browsers
		xhttp.onreadystatechange = onReady;
		xhttp.open( 'GET', url, true );
		xhttp.send();

		/**
		* Callback invoked upon a state change in the HTTP request.
		*
		* @private
		*/
		function onReady() {
			var container;
			var state;
			var tmp;
			var el;

			// Process the request once the request is complete and successful...
			if ( this.readyState === 4 && this.status === 200 ) { // eslint-disable-line no-invalid-this
				// Create a temporary DOM element into which we can insert the request HTML page (note: we don't have to worry about the requested HTML containing script tags, as script content is not executed when using `innerHTML`):
				container = document.createElement( 'div' );
				container.innerHTML = this.responseText; // eslint-disable-line no-invalid-this

				// Extract the content we want to load into the existing page:
				tmp = container.querySelector( '.readme' );

				// Insert the content into the page:
				el = document.querySelector( '.readme' );
				el.innerHTML = tmp.innerHTML;

				// Update the top navigation:
				tmp = container.querySelector( '.top-nav' );
				el = document.querySelector( '.top-nav' );
				el.innerHTML = tmp.innerHTML;

				// Reset the scroll position:
				document.querySelector( 'body' ).scrollTop = 0;

				// Update browser history (note: browser history API available IE10+):
				if ( bool && history && history.pushState ) {
					state = {
						'url': url
					};
					history.pushState( state, '', url );
				}
			}
		} // end FUNCTION onReady()
	} // end FUNCTION load()
})();
