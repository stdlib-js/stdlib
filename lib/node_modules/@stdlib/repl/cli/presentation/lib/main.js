/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

/* eslint-disable no-underscore-dangle, no-invalid-this, no-restricted-syntax */

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var watchFile = require( 'fs' ).watch; // TODO: replace with stdlib pkg
var EventEmitter = require( 'events' ).EventEmitter;
var logger = require( 'debug' );
var isFunction = require( '@stdlib/assert/is-function' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var setNonEnumerableReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var setNonEnumerableReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' ); // eslint-disable-line id-length
var setNonEnumerable = require( '@stdlib/utils/define-nonenumerable-property' );
var clamp = require( '@stdlib/math/base/special/clamp' );
var wrap = require( '@stdlib/math/base/special/wrap' );
var readFile = require( '@stdlib/fs/read-file' ).sync;
var repeat = require( '@stdlib/string/repeat' );
var constructorName = require( '@stdlib/utils/constructor-name' );
var cwd = require( '@stdlib/process/cwd' );
var inherit = require( '@stdlib/utils/inherit' );
var nextTick = require( '@stdlib/utils/next-tick' );
var format = require( '@stdlib/string/format' );
var formatLines = require( './format.js' );
var defaults = require( './defaults.js' );
var validate = require( './validate.js' );
var parse = require( './parse.js' );
var footer = require( './footer.js' );
var blankLine = require( './blank_line.js' );
var commands = require( './commands.js' );
var setCommands = require( './set_commands.js' );
var DOCS = require( './docs.js' );


// VARIABLES //

var debug = logger( 'repl:presentation' );
var DEFAULT_WIDTH = 80;
var DEFAULT_HEIGHT = 25;


// MAIN //

/**
* Presentation constructor.
*
* @private
* @constructor
* @param {string} [text] - presentation text
* @param {REPL} repl - REPL instance
* @param {Options} [options] - function options
* @param {string} [options.borderTop='*'] - top border character sequence
* @param {string} [options.borderBottom='*'] - bottom border character sequence
* @param {string} [options.borderLeft='* '] - left border character sequence
* @param {string} [options.borderRight=' *'] - right border character sequence
* @param {(boolean|string)} [options.counter=false] - slide counter
* @param {(PositiveInteger|null)} [options.width=null] - presentation width
* @param {(PositiveInteger|null)} [options.height=null] - presentation height
* @param {string} [options.workspace="presentation"] - REPL workspace name
* @param {string} [options.load] - file path specifying a presentation file to load
* @param {boolean} [options.autoClear=true] - boolean indicating whether to automatically clear the screen before writing a rendered slide to the REPL
* @param {boolean} [options.loop=false] - boolean indicating whether to "loop" a presentation
* @throws {Error} must provide a REPL instance
* @throws {TypeError} presentation text argument must be a string
* @throws {TypeError} REPL argument must be a REPL instance
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Presentation} presentation instance
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
*
* // Create a new REPL presentation:
* var pres = new Presentation( repl );
*
* // ...
*
* // Close the REPL:
* repl.close();
*/
function Presentation() { // eslint-disable-line stdlib/no-redeclare
	var options;
	var nargs;
	var text;
	var repl;
	var cmds;
	var opts;
	var self;
	var err;
	var cmd;
	var FLG;
	var d;
	var i;

	nargs = arguments.length;
	if ( !( this instanceof Presentation) ) {
		if ( nargs === 0 ) {
			throw new Error( 'invalid invocation. Insufficient arguments. Must provide a REPL instance.' );
		}
		if ( nargs === 1 ) {
			return new Presentation( arguments[ 0 ] );
		}
		if ( nargs === 2 ) {
			return new Presentation( arguments[ 0 ], arguments[ 1 ] );
		}
		return new Presentation( arguments[ 0 ], arguments[ 1 ], arguments[ 2 ] ); // eslint-disable-line max-len
	}
	if ( nargs === 0 ) {
		throw new Error( 'invalid invocation. Insufficient arguments. Must provide a REPL instance.' );
	}
	opts = defaults();
	if ( nargs === 1 ) {
		repl = arguments[ 0 ];
	} else if ( nargs === 2 ) {
		if ( isString( arguments[ 0 ] ) ) {
			text = arguments[ 0 ];
			repl = arguments[ 1 ];
		} else {
			repl = arguments[ 0 ];
			options = arguments[ 1 ];
			err = validate( opts, options );
			if ( err ) {
				throw err;
			}
		}
	} else { // nargs === 3
		text = arguments[ 0 ];
		if ( !isString( text ) ) {
			throw new TypeError( format( 'invalid argument. Presentation text must be a string. Value: `%s`.', text ) );
		}
		repl = arguments[ 1 ];
		options = arguments[ 2 ];
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	if ( constructorName( repl ) !== 'REPL' ) {
		throw new TypeError( format( 'invalid argument. REPL argument must be a REPL instance. Value: `%s`.', repl ) );
	}
	self = this;
	debug( 'Options: %s', JSON.stringify( opts ) );

	// Call the parent constructor:
	EventEmitter.call( this );

	setNonEnumerableReadOnly( this, '_repl', repl );
	setNonEnumerableReadOnly( this, '_opts', opts );
	setNonEnumerable( this, '_source', '' );
	setNonEnumerable( this, '_watcher', null );

	setNonEnumerableReadOnly( this, '_slides', [] );
	setNonEnumerable( this, '_slide', null );

	setNonEnumerable( this, '_slideCursor', -1 );
	setNonEnumerable( this, '_fragmentCursor', 0 );

	// Switch to a "presentation" workspace:
	FLG = repl._quiet;
	repl._quiet = true;
	repl._context.workspace( opts.workspace );
	repl._quiet = FLG;

	// Add presentation commands:
	cmds = commands( this );
	setCommands( repl._context, cmds );

	// Load presentation command documentation into the REPL environment...
	for ( i = 0; i < cmds.length; i++ ) {
		cmd = cmds[ i ];
		d = DOCS.help[ cmd[ 0 ] ];
		if ( d ) {
			repl._context.userDoc( cmd[ 0 ], cmd[ 2 ], d ); // full command
			repl._context.userDoc( cmd[ 1 ], cmd[ 2 ], d ); // shortcut
		}
	}
	// Check whether to parse a provided presentation text or load a presentation file...
	if ( text ) {
		parse( this._slides, text );
		this._slide = this._slides[ 0 ] || null;
		this._slideCursor = 0;
		this._fragmentCursor = 0;
	} else if ( opts.load ) {
		this.load( opts.load );
	}
	// Perform any clean-up tasks upon closing the REPL environment:
	repl.on( 'exit', onClose );

	return this;

	/**
	* Callback invoked upon closing a REPL environment.
	*
	* @private
	*/
	function onClose() {
		debug( 'REPL environment closed. Performing presentation clean-up tasks.' );
		self.unwatch();
	}
}

/*
* Inherit from the `EventEmitter` prototype.
*/
inherit( Presentation, EventEmitter );

// NOTE: keep properties and methods in alphabetical order...

/**
* Sets the current slide (and slide fragment).
*
* @private
* @name _select
* @memberof Presentation.prototype
* @type {Function}
* @param {integer} n - slide number (zero-based)
* @param {integer} [fragment=0] - slide fragment
* @returns {(Object|null)} selected slide
*/
setNonEnumerableReadOnly( Presentation.prototype, '_select', function select( n, fragment ) {
	var sc;
	var fc;
	var N;

	// Limit the slide cursor range in order to avoid multiple previous/next calls moving the cursors indefinitely away from the slide deck...
	N = this.length;
	if ( this._opts.loop ) {
		sc = wrap( n, 0, N );
	} else {
		sc = clamp( n, -1, N );
	}
	if ( sc === -1 || sc === N ) {
		debug( 'Unable to select slide. Slide cursor out-of-range.' );
		this._slide = null;
	} else {
		this._slide = this._slides[ sc ];
	}
	if ( this._slide && arguments.length > 1 ) {
		// Limit the slide fragment cursor range:
		N = this._slide.fragments.length;
		fc = clamp( fragment, -1, N );
		if ( fc === -1 || fc === N ) {
			debug( 'Unable to select slide fragment. Fragment cursor out-of-range.' );
			this._slide = null;
		}
	} else {
		fc = 0;
	}
	if ( this._slide ) {
		debug( 'Selected slide %d and fragment %d.', sc, fc );
		this._slideCursor = sc;
		this._fragmentCursor = fc;
	}
	return this._slide;
});

/**
* Returns the current presentation slide index.
*
* ## Notes
*
* -   The returned index is the nominal (i.e., one-based) slide index.
*
* @name currentSlide
* @memberof Presentation.prototype
* @type {integer}
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
*
* // Create a new REPL presentation:
* var pres = new Presentation( repl );
*
* // ...
*
* // Return the current presentation slide index:
* var idx = pres.currentSlide;
*
* // ...
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnlyAccessor( Presentation.prototype, 'currentSlide', function getCurrentSlide() {
	return this._slideCursor + 1;
});

/**
* Jumps to the last fragment of the last slide.
*
* @name end
* @memberof Presentation.prototype
* @type {Function}
* @returns {Presentation} presentation instance
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
*
* // Create a new REPL presentation:
* var pres = new Presentation( repl );
*
* // ...
*
* // Jump to the last fragment of the last slide:
* pres.end();
*
* // ...
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnly( Presentation.prototype, 'end', function end() {
	var s = this._slides[ this.length-1 ];
	if ( s ) {
		debug( 'Jumping to the last fragment of the last slide.' );
		this._select( this.length-1, s.fragments.length-1 );
	}
	return this;
});

/**
* Jumps to the first slide.
*
* @name first
* @memberof Presentation.prototype
* @type {Function}
* @returns {Presentation} presentation instance
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
*
* // Create a new REPL presentation:
* var pres = new Presentation( repl );
*
* // ...
*
* // Move to the first slide:
* pres.first();
*
* // ...
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnly( Presentation.prototype, 'first', function first() {
	debug( 'Jumping to the first slide.' );
	this._select( 0 );
	return this;
});

/**
* Jumps to the first fragment of the current slide.
*
* @name firstFragment
* @memberof Presentation.prototype
* @type {Function}
* @returns {Presentation} presentation instance
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
*
* // Create a new REPL presentation:
* var pres = new Presentation( repl );
*
* // ...
*
* // Jump to the first fragment of the current slide:
* pres.firstFragment();
*
* // ...
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnly( Presentation.prototype, 'firstFragment', function firstFragment() {
	debug( 'Jumping to the first fragment of the current slide.' );
	this._select( this._slideCursor, 0 );
	return this;
});

/**
* Returns the presentation height.
*
* @name height
* @memberof Presentation.prototype
* @type {PositiveInteger}
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
*
* // Create a new REPL presentation:
* var pres = new Presentation( repl );
*
* // Return the presentation height:
* var height = pres.height;
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnlyAccessor( Presentation.prototype, 'height', function getHeight() {
	if ( this._opts.height ) {
		return this._opts.height;
	}
	if ( this._repl._ostream.isTTY ) {
		return this._repl._ostream.rows;
	}
	return DEFAULT_HEIGHT;
});

/**
* Jumps a specified number of slides.
*
* @name jump
* @memberof Presentation.prototype
* @type {Function}
* @param {integer} n - number of slides to jump
* @returns {Presentation} presentation instance
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
*
* // Create a new REPL presentation:
* var pres = new Presentation( repl );
*
* // ...
*
* // Jump to the third previous slide:
* pres.jump( -3 );
*
* // ...
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnly( Presentation.prototype, 'jump', function jump( n ) {
	if ( !isInteger( n ) ) {
		throw new TypeError( format( 'invalid argument. Must provide an integer. Value: `%s`.', n ) );
	}
	n = clamp( this.currentSlide+n, 1, this.length ) - 1;

	debug( 'Jumping to slide %d.', n );
	this._select( n );

	return this;
});

/**
* Jumps to a specified slide number.
*
* ## Notes
*
* -   This method expects the nominal (i.e., one-based) slide number.
*
* @name jumpTo
* @memberof Presentation.prototype
* @type {Function}
* @param {integer} n - slide number (one-based)
* @returns {Presentation} presentation instance
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
*
* // Create a new REPL presentation:
* var pres = new Presentation( repl );
*
* // ...
*
* // Jump to a particular slide:
* pres.jumpTo( 1 );
*
* // ...
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnly( Presentation.prototype, 'jumpTo', function jumpTo( n ) {
	if ( !isInteger( n ) ) {
		throw new TypeError( format( 'invalid argument. Must provide an integer. Value: `%s`.', n ) );
	}
	debug( 'Jumping to slide %d.', n-1 );
	this._select( n-1 );
	return this;
});

/**
* Jumps to the last slide.
*
* @name last
* @memberof Presentation.prototype
* @type {Function}
* @returns {Presentation} presentation instance
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
*
* // Create a new REPL presentation:
* var pres = new Presentation( repl );
*
* // ...
*
* // Move to the last slide:
* pres.last();
*
* // ...
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnly( Presentation.prototype, 'last', function last() {
	debug( 'Jumping to the last slide.' );
	this._select( this.length-1 );
	return this;
});

/**
* Jumps to the last fragment of the current slide.
*
* @name lastFragment
* @memberof Presentation.prototype
* @type {Function}
* @returns {Presentation} presentation instance
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
*
* // Create a new REPL presentation:
* var pres = new Presentation( repl );
*
* // ...
*
* // Jump to the last fragment of the current slide:
* pres.lastFragment();
*
* // ...
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnly( Presentation.prototype, 'lastFragment', function lastFragment() {
	debug( 'Jumping to the last fragment of the current slide.' );
	if ( this._slide ) {
		this._select( this._slideCursor, this._slide.fragments.length-1 );
	}
	return this;
});

/**
* Returns the presentation length.
*
* @name length
* @memberof Presentation.prototype
* @type {integer}
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
*
* // Create a new REPL presentation:
* var pres = new Presentation( repl );
*
* // ...
*
* // Return the presentation length:
* var len = pres.length;
*
* // ...
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnlyAccessor( Presentation.prototype, 'length', function getLength() {
	return this._slides.length;
});

/**
* Loads a presentation from a file.
*
* ## Notes
*
* -   Relative file paths are resolved relative to the current working directory.
*
* @name load
* @memberof Presentation.prototype
* @type {Function}
* @param {string} file - file path
* @throws {TypeError} must provide a valid file path
* @throws {Error} unable to read file path
* @returns {Presentation} presentation instance
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
*
* // Create a new REPL presentation:
* var pres = new Presentation( repl );
*
* // ...
*
* // Load a presentation from a file:
* try {
*     pres.load( './path/to/presentation/file.txt' );
* } catch ( err ) {
*     console.error( err.message );
* }
*
* // ...
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnly( Presentation.prototype, 'load', function load( file ) {
	var fpath;
	var FLG;
	if ( !isString( file ) ) {
		throw new TypeError( format( 'invalid argument. Must provide a string. Value: `%s`.', file ) );
	}
	// Stop watching any prior presentation files regardless as to whether we can successfully load a presentation file from the specified file path...
	if ( this._watcher ) {
		FLG = true;
		this.unwatch();
	}
	debug( 'Attempting to load source presentation file: %s', file );
	fpath = resolve( cwd(), file );
	debug( 'Resolved file path: %s', fpath );

	// Attempt to load the presentation file:
	file = readFile( fpath, {
		'encoding': 'utf8'
	});
	if ( file instanceof Error ) {
		throw file;
	}
	debug( 'Successfully loaded source presentation file.' );

	// Cache source filename:
	this._source = fpath;

	// Reset the presentation slides:
	this._slides.length = 0;

	// Parse the loaded file into presentation slides:
	parse( this._slides, file );

	// Set the current slide:
	this._slide = this._slides[ 0 ] || null;

	// Set the slide cursors:
	this._slideCursor = 0;
	this._fragmentCursor = 0;

	// If we were watching a prior presentation file, start watching the new presentation file...
	if ( FLG ) {
		this.watch();
	}
	return this;
});

/**
* Proceeds to the next slide or slide fragment.
*
* @name next
* @memberof Presentation.prototype
* @type {Function}
* @returns {Presentation} presentation instance
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
*
* // Create a new REPL presentation:
* var pres = new Presentation( repl );
*
* // ...
*
* // Move to the next slide (or fragment):
* pres.next();
*
* // ...
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnly( Presentation.prototype, 'next', function next() {
	var s = this._select( this._slideCursor, this._fragmentCursor+1 );
	if ( s === null ) {
		debug( 'Moving to the next slide.' );
		this._select( this.currentSlide ); // Note: `currentSlide` is one-based, so do not need to increment
	} else {
		debug( 'Moving to the next slide fragment.' );
	}
	return this;
});

/**
* Moves to the next slide.
*
* @name nextSlide
* @memberof Presentation.prototype
* @type {Function}
* @returns {Presentation} presentation instance
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
*
* // Create a new REPL presentation:
* var pres = new Presentation( repl );
*
* // ...
*
* // Move to the next slide:
* pres.nextSlide();
*
* // ...
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnly( Presentation.prototype, 'nextSlide', function nextSlide() {
	debug( 'Moving to the next slide.' );
	this._select( this.currentSlide ); // Note: `currentSlide` is one-based, so do not need to increment
	return this;
});

/**
* Proceeds to the previous slide or slide fragment.
*
* @name prev
* @memberof Presentation.prototype
* @type {Function}
* @returns {Presentation} presentation instance
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
*
* // Create a new REPL presentation:
* var pres = new Presentation( repl );
*
* // ...
*
* // Move to the previous slide (or fragment):
* pres.prev();
*
* // ...
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnly( Presentation.prototype, 'prev', function prev() {
	var s = this._select( this._slideCursor, this._fragmentCursor-1 );
	var f;
	if ( s === null ) {
		s = this._slideCursor - 1;
		if ( s >= 0 ) {
			f = this._slides[ s ].fragments.length - 1;
		} else {
			f = 0;
		}
		debug( 'Moving to the last fragment of the previous slide.' );
		this._select( s, f );
	} else {
		debug( 'Moving to the previous slide fragment.' );
	}
	return this;
});

/**
* Moves to the previous slide.
*
* @name prevSlide
* @memberof Presentation.prototype
* @type {Function}
* @returns {Presentation} presentation instance
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
*
* // Create a new REPL presentation:
* var pres = new Presentation( repl );
*
* // ...
*
* // Move to the previous slide:
* pres.prevSlide();
*
* // ...
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnly( Presentation.prototype, 'prevSlide', function prevSlide() {
	debug( 'Moving to the previous slide.' );
	this._select( this._slideCursor-1 );
	return this;
});

/**
* Reloads a presentation.
*
* @name reload
* @memberof Presentation.prototype
* @type {Function}
* @throws {Error} must first load a presentation before being able to reload
* @throws {Error} unable to reload presentation
* @returns {Presentation} presentation instance
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
*
* // Create a new REPL presentation:
* var pres = new Presentation( repl );
*
* // ...
*
* // Reload a presentation:
* try {
*     pres.reload();
* } catch ( error ) {
*     console.error( error.message );
* }
*
* // ...
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnly( Presentation.prototype, 'reload', function reload() {
	var currentSlide = this.currentSlide;
	if ( this._source === '' ) {
		throw new Error( 'invalid operation. No presentation to reload. Use the `load()` method to load a presentation.' );
	}
	debug( 'Attempting to reload presentation.' );
	try {
		this.load( this._source );
	} catch ( err ) {
		throw new Error( format( 'unexpected error. Unable to reload presentation. Error: %s', err.message ) );
	}
	this.jumpTo( currentSlide );
	debug( 'Successfully reloaded presentation.' );
	return this;
});

/**
* Renders the current presentation slide.
*
* @name render
* @memberof Presentation.prototype
* @type {Function}
* @returns {(string|null)} rendered slide
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
*
* // Create a new REPL presentation:
* var pres = new Presentation( repl );
*
* // ...
*
* // Render the current presentation slide:
* var slide = pres.render();
*
* // ...
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnly( Presentation.prototype, 'render', function render() {
	var paddingBottom;
	var borderRight;
	var borderLeft;
	var paddingTop;
	var newline;
	var height;
	var width;
	var nrows;
	var frows;
	var lines;
	var fill;
	var frag;
	var str;
	var idx;
	var w;
	var i;

	if ( this._slide === null ) {
		return null;
	}
	w = this.width;

	height = this.slideHeight;
	width = this.slideWidth;

	nrows = this._slide.length;

	idx = clamp( this._fragmentCursor, 0, this._slide.fragments.length-1 );
	frag = this._slide.fragments[ idx ];
	frows = frag.length;

	borderRight = this._opts.borderRight;
	borderLeft = this._opts.borderLeft;
	newline = this._opts.newline;
	fill = this._opts.whitespace;

	paddingTop = ( ( height-nrows )/2 )|0; // Note: presentation slide length assumed never greater than 2*(2^31-1)!
	paddingBottom = height - frows - paddingTop;
	if ( this._opts.counter ) {
		paddingBottom -= 1;
	}
	// Format slide content:
	lines = formatLines( width, frag, fill, width-this._slide.maxLength );

	// Render the top border:
	str = repeat( this._opts.borderTop, w );
	str += newline;

	// Add top padding:
	for ( i = 0; i < paddingTop; i++ ) {
		str += blankLine( width, fill, borderLeft, borderRight );
		str += newline;
	}
	// Render the slide content:
	for ( i = 0; i < lines.length; i++ ) {
		str += borderLeft;
		str += lines[ i ].text;
		str += borderRight;
		str += newline;
	}
	// Add bottom padding:
	for ( i = 0; i < paddingBottom; i++ ) {
		str += blankLine( width, fill, borderLeft, borderRight );
		str += newline;
	}
	// Render the footer:
	if ( this._opts.counter ) {
		str += borderLeft;
		str += footer( width, fill, this._opts.counter, this._slideCursor+1, this.length ); // eslint-disable-line max-len
		str += borderRight;
		str += newline;
	}
	// Render the bottom border:
	str += repeat( this._opts.borderBottom, w );

	return str;
});

/**
* Runs any code on the current presentation slide.
*
* @name run
* @memberof Presentation.prototype
* @type {Function}
* @param {Function} clbk - callback
* @throws {TypeError} must provide a function
* @returns {void}
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
*
* // Create a new REPL presentation:
* var pres = new Presentation( repl );
*
* // ...
*
* // Run any code on the current slide:
* pres.run( done );
*
* function done() {
*     // Close the REPL:
*     repl.close();
* }
*/
setNonEnumerableReadOnly( Presentation.prototype, 'run', function run( clbk ) {
	var self;
	var code;
	var len;
	var src;
	var s;
	var i;
	var j;

	if ( !isFunction( clbk ) ) {
		throw new TypeError( format( 'invalid argument. Must provide a function. Value: `%s`.', clbk ) );
	}
	self = this;
	s = this._slides[ this._slideCursor ];
	if ( s ) {
		if ( s.code ) {
			// NOTE: we run source lines from ALL code blocks!
			code = [];
			for ( i = 0; i < s.code.length; i++ ) {
				if ( s.code[ i ].lang === 'javascript' ) {
					src = s.code[ i ].src;
					for ( j = 0; j < src.length; j++ ) {
						code.push( src[ j ] );
					}
				}
			}
			if ( code.length ) {
				debug( 'Forwarding each line of slide code to the REPL readline interface in order to mimic user input.' );
				len = code.length;
				i = -1;
				return next();
			}
		}
		debug( 'Slide does not contain code to run. Skipping.' );
	} else {
		debug( 'No slide is currently selected. Skipping.' );
	}
	nextTick( clbk );

	/**
	* Callback invoked the REPL command queue drains.
	*
	* @private
	* @param {string} cmd - command
	* @param {boolean} success - boolean indicating whether the command successfully executed
	*/
	function next() {
		i += 1;
		if ( i < len ) {
			if ( code[ i ] ) {
				debug( 'Forwarding line %d.', i );
				self._repl._rli.write( code[ i ]+'\n' );
				self._repl.once( 'drain', next );
			} else {
				debug( 'Skipping blank code line.' );
				nextTick( next );
			}
		} else {
			debug( 'Finished executing slide code.' );
			nextTick( clbk );
		}
	}
});

/**
* Shows a presentation.
*
* @name show
* @memberof Presentation.prototype
* @type {Function}
* @returns {Presentation} presentation instance
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
*
* // Create a new REPL presentation:
* var pres = new Presentation( repl );
*
* // ...
*
* // Show the current presentation slide:
* pres.show();
*
* // ...
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnly( Presentation.prototype, 'show', function show() {
	var str = this.render();
	if ( str ) {
		// FIXME: should only use ANSI escape codes when output stream is a TTY

		/*
		* [ANSI escape sequences][1]:
		*
		* -   `\u001b`: ESC, the escape character
		* -   `[2K`: clear the entire line
		* -   `[1G`: move the cursor to the beginning of the line
		* -   `[2A`: move the cursor to up two lines
		*
		* [1]: https://en.wikipedia.org/wiki/ANSI_escape_code
		*/
		str = '\u001b[2K\u001b[1G' + str + this._opts.newline;
		if ( this._opts.autoClear ) {
			debug( 'Clearing the REPL screen.' );
			this._repl.clear();
		} else {
			str += this._opts.newline + this._opts.newline + '\u001b[2A';
		}
		debug( 'Writing a presentation slide to the REPL.' );
		this._repl._ostream.write( str );
		this._repl._displayPrompt( false );
	}
	return this;
});

/**
* Returns the presentation slide content height.
*
* @name slideWidth
* @memberof Presentation.prototype
* @type {integer}
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
*
* // Create a new REPL presentation:
* var pres = new Presentation( repl );
*
* // Return the presentation slide content height:
* var h = pres.slideHeight;
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnlyAccessor( Presentation.prototype, 'slideHeight', function getSlideHeight() {
	return this.height - 5; // header, footer, blank line, and REPL prompt
});

/**
* Returns the presentation slide content width.
*
* @name slideWidth
* @memberof Presentation.prototype
* @type {integer}
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
*
* // Create a new REPL presentation:
* var pres = new Presentation( repl );
*
* // Return the presentation slide content width:
* var w = pres.slideWidth;
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnlyAccessor( Presentation.prototype, 'slideWidth', function getSlideWidth() {
	return this.width - this._opts.borderLeft.length - this._opts.borderRight.length; // eslint-disable-line max-len
});

/**
* Stops watching a presentation file for changes.
*
* @name unwatch
* @memberof Presentation.prototype
* @type {Function}
* @param {Error} [error] - error
* @returns {Presentation} presentation instance
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
*
* // Create a new REPL presentation:
* var pres = new Presentation( repl );
*
* // ...
*
* // Watch a presentation source file:
* try {
*     pres.watch();
* } catch ( error ) {
*     console.error( error.message );
* }
*
* // ...
*
* // Stop watching a presentation source file:
* pres.unwatch();
*
* // ...
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnly( Presentation.prototype, 'unwatch', function unwatch( error ) {
	if ( this._watcher ) {
		debug( 'No longer watching a source presentation file for changes.' );
		this._watcher.close();
		this._watcher = null;
		if ( error ) {
			this.emit( 'unwatch', error );
		}
	}
	return this;
});

/**
* Watches a presentation source file for changes.
*
* ## Notes
*
* -   The method does not track source file "renames". If the source presentation file is renamed, watching stops.
*
* @name watch
* @memberof Presentation.prototype
* @type {Function}
* @throws {Error} must first load a presentation before being able to monitor changes
* @throws {Error} unable to watch presentation
* @returns {Presentation} presentation instance
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
*
* // Create a new REPL presentation:
* var pres = new Presentation( repl );
*
* // ...
*
* // Watch a presentation source file:
* try {
*     pres.watch();
* } catch ( error ) {
*     console.error( error.message );
* }
*
* // ...
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnly( Presentation.prototype, 'watch', function watch() {
	var opts;
	var self;
	var w;
	if ( this._source === '' ) {
		throw new Error( 'invalid operation. No presentation file to watch. Use the `load()` method to load a presentation.' );
	}
	if ( this._watcher ) {
		debug( 'Already watching a source presentation file for changes.' );
		return this;
	}
	self = this;
	opts = {
		'persistent': false,
		'encoding': 'utf8'
	};
	debug( 'Attempting to watch source presentation file for changes: %s', this._source );
	try {
		w = watchFile( this._source, opts, onChange );
	} catch ( err ) {
		throw new Error( format( 'unexpected error. Unable to watch presentation source file. Error: %s', err.message ) );
	}
	w.on( 'error', onError );

	debug( 'Watching source presentation file.' );
	this._watcher = w;
	this.emit( 'watch' );

	return this;

	/**
	* Callback invoked upon a modification to a presentation source file.
	*
	* @private
	* @param {string} event - event type
	* @param {(string|Buffer)} filename - name of file which triggered the event
	* @returns {void}
	*/
	function onChange( event ) {
		var err;
		if ( event === 'rename' ) {
			if ( self._watcher ) {
				debug( 'Encountered a "rename" event for the source presentation file.' );
				err = new Error( 'unexpected error. Encountered a "rename" event for the source presentation file. No longer watching source presentation file for changes.' );
				self.unwatch( err );
			}
			return;
		}
		// Case: event === 'change'
		debug( 'Detected a change to the source presentation file.' );
		self.reload();
		self.emit( 'change' );
	}

	/**
	* Callback invoked upon encountering an error.
	*
	* @private
	* @param {Error} error - error
	*/
	function onError( error ) {
		debug( 'Encountered an error while watching a source presentation file. Error: %s', error.message );
		self.unwatch( error );
	}
});

/**
* Returns the presentation width.
*
* @name width
* @memberof Presentation.prototype
* @type {PositiveInteger}
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
*
* // Create a new REPL presentation:
* var pres = new Presentation( repl );
*
* // Return the presentation width:
* var width = pres.width;
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnlyAccessor( Presentation.prototype, 'width', function getWidth() {
	if ( this._opts.width ) {
		return this._opts.width;
	}
	if ( this._repl._ostream.isTTY ) {
		return this._repl._ostream.columns;
	}
	return DEFAULT_WIDTH;
});


// EXPORTS //

module.exports = Presentation;
