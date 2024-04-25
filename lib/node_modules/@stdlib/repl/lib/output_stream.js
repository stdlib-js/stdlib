/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* eslint-disable no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var readline = require( 'readline' );
var logger = require( 'debug' );
var Transform = require( 'readable-stream' ).Transform;
var inherit = require( '@stdlib/utils/inherit' );
var nextTick = require( '@stdlib/utils/next-tick' );
var setNonEnumerableReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var setNonEnumerableReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' ); // eslint-disable-line id-length
var repeat = require( '@stdlib/string/repeat' );
var RE_EOL = require( '@stdlib/regexp/eol' ).REGEXP;
var displayPrompt = require( './display_prompt.js' );


// VARIABLES //

var debug = logger( 'repl:output_stream' );

// Define the minimum viewport height necessary to support paging:
var MIN_VIEWPORT_HEIGHT = 6; // number of rows

// Define the number of rows which are reserved for displaying the paging UI (including the input prompt):
var RESERVED_PAGING_ROWS = 4;

// Define pager instructions:
var INSTRUCTIONS = '\u001b[1mUse UP/DOWN arrow keys to scroll. Press q to exit...\u001b[22m';


// FUNCTIONS //

/**
* Returns a list of indices corresponding to line segments.
*
* @private
* @param {string} str - input string
* @returns {Array<integer>} list of indices
*
* @example
* var str = 'foo\nbar\nbeep\nboop\n';
*
* var idx = findLineSegments( str );
* // returns [ 0, 4, 8, 13, 18 ]
*/
function findLineSegments( str ) {
	var lines;
	var out;
	var i;

	lines = str.split( RE_EOL ); // FIXME: this approach is not robust for three reasons: (1) line breaks may include carriage returns, not just line feeds (so the `+1` may not be appropriate), (2) it does not consider line feeds which are escaped (e.g., `\\\n`), and (3) assumes that line breaks map directly to displayed lines (while true most of the line for text which has been wrapped to 80 chars, such as repl.txt files, this may not be true for all outputs, some of which may spill across multiple lines)
	out = [ 0 ];
	for ( i = 0; i < lines.length-1; i++ ) {
		out.push( out[ i ] + lines[ i ].length + 1 );
	}
	return out;
}


// MAIN //

/**
* REPL output stream.
*
* @private
* @constructor
* @param {REPL} repl - REPL instance
* @param {boolean} autoPage - boolean indicating whether auto-paging should be initially enabled
* @returns {OutputStream} transform stream
*/
function OutputStream( repl, autoPage ) {
	if ( !( this instanceof OutputStream ) ) {
		return new OutputStream( repl, autoPage );
	}
	debug( 'Creating an output stream...' );
	Transform.call( this, {
		'encoding': 'utf8',
		'decodeString': false
	});

	// Cache a reference to the REPL instance:
	this._repl = repl;

	// Initialize a flag indicating whether "paging" is enabled:
	this._paging = autoPage;

	// Initialize a flag indicating whether "paging" is currently active:
	this._isPaging = false;

	// Initialize a buffer for caching streamed chunks:
	this._buffer = '';

	// Initialize a buffer for storing line breaks:
	this._indices = [];

	// Initialize a variable for tracking the current scroll position:
	this._idx = -1;

	// Initialize a flag indicating whether the stream has been destroyed:
	this._destroyed = false;

	return this;
}

/**
* Inherit from the `Transform` prototype.
*/
inherit( OutputStream, Transform );

/**
* Implements the `_transform` method.
*
* @private
* @name _transform
* @memberof OutputStream.prototype
* @type {Function}
* @param {(Buffer|string)} chunk - streamed chunk
* @param {string} encoding - Buffer encoding
* @param {Callback} clbk - callback to invoke after transformed the streamed chunk
* @returns {void}
*/
setNonEnumerableReadOnly( OutputStream.prototype, '_transform', function transform( chunk, encoding, clbk ) {
	var indices;

	// debug( 'Received a new chunk. Chunk: %s. Encoding: %s.', chunk.toString(), encoding ); // note: generally, one should not need to log each chunk, as doing so can create significant debugging noise, but we leave it here as a comment to toggle on/off in order to inspect individual chunks
	if ( !this._paging || this._isPaging ) { // note: the only time we want to check for whether to page is when paging is enabled, but we're not currently paging
		clbk( null, chunk );
		return;
	}
	chunk = chunk.toString();

	// Check whether paging is necessary...
	indices = findLineSegments( chunk );
	if ( !this._isScrollable( indices.length ) ) {
		clbk( null, chunk );
		return;
	}
	// Cache the current chunk:
	this._buffer = chunk;

	// Store the line segement indices:
	this._indices = indices;

	// Toggle the "paging" mode:
	this._isPaging = true;

	// Reset the scroll position:
	this._idx = 0;

	debug( 'Displaying pager view...' );
	this._hideCursor();
	this._showPager();

	clbk();
});

/**
* Gracefully destroys a stream, providing backward compatibility.
*
* @private
* @name destroy
* @memberof OutputStream.prototype
* @type {Function}
* @param {Object} [error] - optional error message
* @returns {OutputStream} stream instance
*/
setNonEnumerableReadOnly( OutputStream.prototype, '_destroy', function destroy( error ) {
	var self;
	if ( this._destroyed ) {
		debug( 'Attempted to destroy an already destroyed stream.' );
		return this;
	}
	self = this;
	this._destroyed = true;

	nextTick( close );

	return this;

	/**
	* Closes a stream.
	*
	* @private
	*/
	function close() {
		if ( error ) {
			debug( 'Stream was destroyed due to an error. Error: %s.', JSON.stringify( error ) );
			self.emit( 'error', error );
		}
		debug( 'Closing the stream...' );
		self.emit( 'close' );
	}
});

/**
* Hides the cursor.
*
* @private
* @name _hideCursor
* @memberof OutputStream.prototype
* @type {Function}
* @returns {OutputStream} output stream
*/
setNonEnumerableReadOnly( OutputStream.prototype, '_hideCursor', function hideCursor() {
	debug( 'Hiding cursor...' );
	this.push( '\u001B[?25l' );
	return this;
});

/**
* Displays the cursor.
*
* @private
* @name _showCursor
* @memberof OutputStream.prototype
* @type {Function}
* @returns {OutputStream} output stream
*/
setNonEnumerableReadOnly( OutputStream.prototype, '_showCursor', function showCursor() {
	debug( 'Showing cursor...' );
	this.push( '\u001B[?25h' );
	return this;
});

/**
* Resets the cursor position during paging.
*
* @private
* @name _resetCursor
* @memberof OutputStream.prototype
* @type {Function}
* @returns {OutputStream} output stream
*/
setNonEnumerableReadOnly( OutputStream.prototype, '_resetCursor', function resetCursor() {
	debug( 'Resetting cursor position...' );
	readline.moveCursor( this, 0, -this._repl.viewportHeight() );
	return this;
});

/**
* Returns the number of lines available for showing a pager.
*
* @private
* @name _pagerHeight
* @memberof OutputStream.prototype
* @type {Function}
* @returns {integer} pager height
*/
setNonEnumerableReadOnly( OutputStream.prototype, '_pagerHeight', function pagerHeight() {
	var vh = this._repl.viewportHeight();
	if ( vh < MIN_VIEWPORT_HEIGHT ) {
		return -1;
	}
	return vh - RESERVED_PAGING_ROWS;
});

/**
* Checks whether content having a specified number of lines is unable to fit within the current viewport.
*
* @private
* @name _isScrollable
* @memberof OutputStream.prototype
* @type {Function}
* @param {NonNegativeInteger} N - number of lines
* @returns {boolean} boolean indicating whether content is "scrollable"
*/
setNonEnumerableReadOnly( OutputStream.prototype, '_isScrollable', function isScrollable( N ) {
	var h = this._pagerHeight();
	return ( h > 0 && N > h );
});

/**
* Shows the pager.
*
* @private
* @name _showPager
* @memberof OutputStream.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( OutputStream.prototype, '_showPager', function showPager() {
	var height;

	// Resolve the current pager height:
	height = this._pagerHeight();
	debug( 'Current pager height: %d', height );

	debug( 'Displaying initial pager content...' );
	this.push( '\n' + this._buffer.substring( this._indices[ 0 ], this._indices[ height ] - 1 ) + '\n' );

	// Draw a seperator to denote that the output is scrollable below:
	this.push( repeat( '_', this._repl.viewportWidth() ) + '\n' );

	// Display scroll instructions:
	this.push( INSTRUCTIONS );

	// Reset the cursor position:
	this._resetCursor();
});

/**
* Closes the pager.
*
* @private
* @name _closePager
* @memberof OutputStream.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( OutputStream.prototype, '_closePager', function closePager() {
	var tmp;

	// Reset paging parameters:
	this._isPaging = false;
	this._idx = -1;

	// Clear previous output:
	readline.clearScreenDown( this );

	// Write the original data to the output stream:
	tmp = this._paging; // cache the flag indicating whether paging is enabled
	this._paging = false; // temporarily bypass paging
	this.write( '\n' + this._buffer );
	this._paging = tmp;

	// Return to normal execution by displaying the prompt:
	displayPrompt( this._repl, false );
	this._showCursor();

	// Reset the internal paging buffers:
	this._buffer = '';
	this._indices.length = 0;
});

/**
* Scrolls up.
*
* @private
* @name _scrollUp
* @memberof OutputStream.prototype
* @returns {void}
*/
setNonEnumerableReadOnly( OutputStream.prototype, '_scrollUp', function scrollUp() {
	// If we are already at the top of the page, we cannot scroll any further...
	if ( this._idx <= 0 ) {
		return;
	}
	this._idx -= 1;
	this._redraw();
});

/**
* Scrolls down.
*
* @private
* @name _scrollDown
* @memberof OutputStream.prototype
* @returns {void}
*/
setNonEnumerableReadOnly( OutputStream.prototype, '_scrollDown', function scrollDown() {
	// If we are already at the bottom of the page, we cannot scroll any further...
	if ( ( this._pagerHeight() + this._idx ) >= this._indices.length ) {
		return;
	}
	this._idx += 1;
	return this._redraw();
});

/**
* Redraws the page content.
*
* @private
* @name _redraw
* @memberof OutputStream.prototype
* @returns {void}
*/
setNonEnumerableReadOnly( OutputStream.prototype, '_redraw', function redraw() {
	var height;
	var width;
	var str;
	var idx;

	idx = this._idx;

	// Resolve the current viewport:
	width = this._repl.viewportWidth();

	// Resolve the current pager height:
	height = this._pagerHeight();

	// If we're not showing the first line of content, display a separator to convey that one can scroll up to see additional content...
	str = '';
	if ( idx > 0 ) {
		str += '\n' + repeat( '_', width ) + '\n';
	} else {
		str += '\n\n';
	}
	// If we're not already showing the last line of content, display, in addition to the page content, a separator to convey that one can scroll down to see additional content...
	if ( ( height + idx ) < this._indices.length ) {
		str += this._buffer.substring( this._indices[ idx ], this._indices[ height+idx ] - 1 ) + '\n';
		str += repeat( '_', width ) + '\n';
	} else {
		str += this._buffer.substring( this._indices[ idx ] ) + '\n';
		str += '\n';
	}
	// Display pager instructions:
	str += INSTRUCTIONS;

	// Clear previous output:
	readline.clearScreenDown( this );

	// Display the updated content:
	this.write( str );
	this._resetCursor();
});

/**
* Disables paging.
*
* @name disablePaging
* @memberof OutputStream.prototype
* @type {Function}
* @returns {OutputStream} output stream
*/
setNonEnumerableReadOnly( OutputStream.prototype, 'disablePaging', function disablePaging() {
	debug( 'Disabling paging...' );
	this._paging = false;
	return this;
});

/**
* Enables paging.
*
* @name enablePaging
* @memberof OutputStream.prototype
* @type {Function}
* @returns {OutputStream} output stream
*/
setNonEnumerableReadOnly( OutputStream.prototype, 'enablePaging', function enablePaging() {
	debug( 'Enabling paging...' );
	this._paging = true;
	return this;
});

/**
* Boolean indicating whether the output stream is currently in "paging" mode.
*
* @name isPaging
* @memberof OutputStream.prototype
* @type {Boolean}
*/
setNonEnumerableReadOnlyAccessor( OutputStream.prototype, 'isPaging', function isPaging() {
	return this._isPaging;
});

/**
* Callback which should be invoked **before** a "keypress" event is processed by a readline interface.
*
* @name beforeKeypress
* @memberof OutputStream.prototype
* @param {string} data - input data
* @param {(Object|void)} key - key object
* @returns {void}
*/
setNonEnumerableReadOnly( OutputStream.prototype, 'beforeKeypress', function beforeKeypress( data, key ) {
	if ( !this._isPaging ) {
		return;
	}
	if ( key.name === 'up' ) {
		debug( 'Received an UP keypress event. Scrolling up the page...' );
		return this._scrollUp();
	}
	if ( key.name === 'down' ) {
		debug( 'Received a DOWN keypress event. Scrolling down the page...' );
		return this._scrollDown();
	}
	// Check whether the user wants to stop paging...
	if ( key.name === 'q' || ( key.name === 'c' && key.ctrl ) ) {
		debug( 'Closing pager view...' );
		return this._closePager();
	}
});

/**
* Callback which should be invoked upon a "resize" event.
*
* @name onResize
* @memberof OutputStream.prototype
* @returns {void}
*/
setNonEnumerableReadOnly( OutputStream.prototype, 'onResize', function onResize() {
	if ( !this._isPaging ) {
		return;
	}
	if ( !this._isScrollable( this._indices.length ) ) {
		this._closePager();
		return;
	}
	this._redraw();
});


// EXPORTS //

module.exports = OutputStream;
