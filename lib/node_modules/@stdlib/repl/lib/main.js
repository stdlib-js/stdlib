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

/* eslint-disable no-restricted-syntax, no-invalid-this, no-underscore-dangle, max-lines, max-lines-per-function, max-statements */

'use strict';

// MODULES //

var EventEmitter = require( 'events' ).EventEmitter;
var readline = require( 'readline' );
var proc = require( 'process' );
var resolve = require( 'path' ).resolve;
var logger = require( 'debug' );
var inherit = require( '@stdlib/utils/inherit' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var isFunction = require( '@stdlib/assert/is-function' );
var isConfigurableProperty = require( '@stdlib/assert/is-configurable-property' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var objectKeys = require( '@stdlib/utils/keys' );
var setNonEnumerable = require( '@stdlib/utils/define-nonenumerable-property' );
var setNonEnumerableReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var setReadOnly = require( '@stdlib/utils/define-read-only-property' );
var properties = require( '@stdlib/utils/properties' );
var append = require( '@stdlib/utils/append' );
var format = require( '@stdlib/string/format' );
var Boolean = require( '@stdlib/boolean/ctor' );
var cwd = require( '@stdlib/process/cwd' );
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var RE_EOL = require( '@stdlib/regexp/eol' ).REGEXP;
var fifo = require( '@stdlib/utils/fifo' );
var nextTick = require( '@stdlib/utils/next-tick' );
var assign = require( '@stdlib/object/assign' );
var validate = require( './validate.js' );
var parseKey = require( './parse_key.js' );
var defaults = require( './defaults.js' );
var isSettingName = require( './is_setting_name.js' );
var setAliases = require( './set_aliases.js' );
var setAliasesGlobal = require( './set_aliases_global.js' );
var setCommands = require( './set_commands.js' );
var setCommandsGlobal = require( './set_commands_global.js' );
var propertyComparator = require( './property_comparator.js' );
var createEvalContext = require( './create_evaluation_context.js' );
var commands = require( './commands.js' );
var displayPrompt = require( './display_prompt.js' );
var inputPrompt = require( './input_prompt.js' );
var OutputStream = require( './output_stream.js' );
var completerFactory = require( './completer.js' );
var MultilineHandler = require( './multiline_handler.js' );
var Keybindings = require( './keybindings.js' );
var EditorActions = require( './editor_actions.js' );
var CompleterEngine = require( './completer_engine.js' );
var PreviewCompleter = require( './completer_preview.js' );
var AutoCloser = require( './auto_close_pairs.js' );
var SyntaxHighlighter = require( './syntax_highlighter.js' );
var ALIAS_OVERRIDES = require( './alias_overrides.js' );
var SETTINGS = require( './settings.js' );
var SETTINGS_VALIDATORS = require( './settings_validators.js' );


// VARIABLES //

var debug = logger( 'repl' );


// MAIN //

/**
* REPL constructor.
*
* @constructor
* @param {Options} options - constructor options
* @param {string} [options.inputPrompt='In [%d]: '] - input prompt
* @param {string} [options.outputPrompt='Out[%d]: '] - output prompt
* @param {ReadableStream} [options.input=process.stdin] - input stream
* @param {WritableStream} [options.output=process.stdout] - output stream
* @param {boolean} [options.sandbox=true] - boolean indicating whether to run a REPL in a sandboxed context
* @param {PositiveInteger} [options.timeout=4294967295] - number of milliseconds to execute a command before terminating execution
* @param {boolean} [options.isTTY] - boolean indicating whether the input and output streams should be treated like a TTY (terminal) and whether the REPL should use ANSI/VT100 escape codes when writing to the output stream
* @param {string} [options.welcome] - welcome message
* @param {NonNegativeInteger} [options.padding=1] - number of empty lines between successive commands
* @param {Object} [options.themes] - table containing color themes for syntax highlighting
* @param {string} [options.load] - file path specifying a JavaScript file to load and evaluate line-by-line (e.g., a previous REPL history file)
* @param {string} [options.save] - file path specifying where to save REPL command history
* @param {string} [options.log] - file path specifying where to save REPL commands and printed output
* @param {string} [options.quiet=false] - boolean indicating whether log information, confirmation messages, and other possible REPL diagnostics should be silenced
* @param {Object} [options.keybindings] - REPL keybindings
* @param {Object} [options.settings] - REPL settings
* @param {boolean} [options.settings.autoClosePairs=true] - boolean indicating whether to automatically insert matching brackets, parentheses, and quotes
* @param {boolean} [options.settings.autoDeletePairs=true] - boolean indicating whether to automatically delete adjacent matching brackets, parentheses, and quotes
* @param {boolean} [options.settings.autoPage] - boolean indicating whether to automatically page return values requiring a display size exceeding the visible screen
* @param {boolean} [options.settings.bracketedPaste] - boolean indicating whether to enable bracketed-paste mode
* @param {boolean} [options.settings.completionPreviews] - boolean indicating whether to enable completion previews for auto-completion
* @param {boolean} [options.settings.autoDisableBracketedPasteOnExit] - boolean indicating whether to automatically disable bracketed-paste upon exiting the REPL
* @param {boolean} [options.settings.syntaxHighlighting] - boolean indicating whether to enable syntax highlighting
* @param {string} [options.settings.theme] - initial color theme for syntax highlighting
* @throws {Error} must provide valid options
* @returns {REPL} REPL instance
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* function onExit() {
*     console.log( 'REPL closed.' );
* }
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
* repl.on( 'exit', onExit );
*
* // ...
*
* // Close the REPL:
* repl.close();
*/
function REPL( options ) {
	var ostream;
	var themes;
	var opts;
	var self;
	var err;
	var i;

	if ( !( this instanceof REPL ) ) {
		if ( arguments.length ) {
			return new REPL( options );
		}
		return new REPL();
	}
	self = this;

	opts = defaults();
	if ( arguments.length ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	opts.isTTY = ( opts.isTTY === void 0 ) ? opts.output.isTTY : opts.isTTY;
	opts.settings.autoPage = ( opts.settings.autoPage === void 0 ) ? opts.isTTY : opts.settings.autoPage; // eslint-disable-line max-len
	opts.settings.bracketedPaste = ( opts.settings.bracketedPaste === void 0 && opts.isTTY ) ? true : opts.settings.bracketedPaste; // eslint-disable-line max-len
	opts.settings.completionPreviews = ( opts.settings.completionPreviews === void 0 ) ? opts.isTTY : opts.settings.completionPreviews; // eslint-disable-line max-len
	opts.settings.autoDisableBracketedPasteOnExit = ( opts.settings.autoDisableBracketedPasteOnExit === void 0 ) ? opts.isTTY : opts.settings.autoDisableBracketedPasteOnExit; // eslint-disable-line max-len
	opts.settings.syntaxHighlighting = ( opts.settings.syntaxHighlighting === void 0 ) ? opts.isTTY : opts.settings.syntaxHighlighting; // eslint-disable-line max-len

	debug( 'Options: %s', JSON.stringify({
		'input': '<readable_stream>',
		'output': '<writable_stream>',
		'sandbox': opts.sandbox,
		'timeout': opts.timeout,
		'isTTY': opts.isTTY,
		'inputPrompt': opts.inputPrompt,
		'outputPrompt': opts.outputPrompt,
		'padding': opts.padding,
		'welcome': opts.welcome,
		'load': opts.load,
		'save': opts.save,
		'log': opts.log,
		'quiet': opts.quiet,
		'settings': opts.settings
	}));

	// Call the parent constructor:
	EventEmitter.call( this );

	// Create an internal output stream:
	ostream = new OutputStream( this, opts.settings.autoPage );

	// Setup the output stream pipeline:
	ostream.pipe( opts.output );

	// Cache references to the input and output streams:
	setNonEnumerableReadOnly( this, '_istream', opts.input );
	setNonEnumerableReadOnly( this, '_ostream', ostream );
	setNonEnumerableReadOnly( this, '_wstream', opts.output );

	// Cache options:
	setNonEnumerableReadOnly( this, '_inputPrompt', opts.inputPrompt );
	setNonEnumerableReadOnly( this, '_outputPrompt', opts.outputPrompt );
	setNonEnumerableReadOnly( this, '_padding', opts.padding );
	setNonEnumerableReadOnly( this, '_timeout', opts.timeout );
	setNonEnumerableReadOnly( this, '_isTTY', opts.isTTY );
	setNonEnumerableReadOnly( this, '_sandbox', opts.sandbox );
	setNonEnumerableReadOnly( this, '_settings', opts.settings );
	setNonEnumerable( this, '_quiet', opts.quiet ); // allow this to be internally toggled

	// Initialize an internal data store:
	setNonEnumerableReadOnly( this, '_internal', {} );
	setNonEnumerableReadOnly( this._internal, 'presentation', {} );
	setNonEnumerableReadOnly( this._internal.presentation, 'cache', {} );
	setNonEnumerable( this._internal.presentation, 'counter', 0 );

	// Initialize an internal command queue:
	setNonEnumerableReadOnly( this, '_queue', fifo() );

	// Initialize a strided internal buffer for storing the command history:
	setNonEnumerableReadOnly( this, '_history', [] );

	// Initialize an internal buffer for storing the current command:
	setNonEnumerableReadOnly( this, '_cmd', [] );

	// Initialize a executed command counter:
	setNonEnumerable( this, '_count', -1 );

	// Initialize an internal buffer for saving regular expression matches between command evaluations:
	setNonEnumerableReadOnly( this, '_regexp', [ '', '', '', '', '', '', '', '', '', '' ] );

	// Initialize a strided internal cache of context globals:
	setNonEnumerableReadOnly( this, '_contextVars', [] );

	// For non-sandboxed REPLs, initialize an internal buffer for storing a (unique) sorted list of "built-in" REPL global variables/properties which need to be deleted upon closing a REPL in order to allow garbage collection and prevent memory leaks:
	setNonEnumerableReadOnly( this, '_globalVars', ( this._sandbox ) ? null : [] );

	// Initialize a strided internal cache of resolved global variables/properties in order to allow, e.g., help text look-up based on object reference, not just alias name (note: members alternate between `'<string_alias>'` and `<resolved_value>`):
	setNonEnumerableReadOnly( this, '_aliases', [] );

	// Initialize a strided internal buffer for storing user-defined documentation:
	setNonEnumerableReadOnly( this, '_userdocs', [] );

	// Initialize an internal buffer for storing a (unique) sorted list of workspace global variables/properties which were *initially* introduced during a REPL session (note: this overlaps with `_globalVars`, but more accurately represents a snapshot of the `global` state *before* a user begins entering commands, which is useful when wanting determine what variables/identifiers a user has introduced during a REPL session):
	setNonEnumerableReadOnly( this, '_workspace', [] );

	// Initialize a strided internal buffer for caching "base" workspace variables:
	setNonEnumerableReadOnly( this, '_workspaces', {} );
	setReadOnly( this._workspaces, 'base', [] );

	// Define the current workspace:
	setNonEnumerable( this, '_currentWorkspace', 'base' );

	// Initialize an internal flag indicating whether the REPL has been closed:
	setNonEnumerable( this, '_closed', false );

	// Initialize an internal flag indicating whether the REPL is currently busy with asynchronous processing:
	setNonEnumerable( this, '_busy', false );

	// Initialize an internal flag indicating whether we've received a `SIGINT` signal:
	setNonEnumerable( this, '_SIGINT', false );

	// Initialize an internal variable for caching the result of the last successfully evaluated command:
	setNonEnumerable( this, '_ans', void 0 );

	// Initialize an internal variable for setting a command callback:
	setNonEnumerable( this, '_done', void 0 );

	// Initialize internal variables for setting a keybinding:
	setNonEnumerable( this, '_isCapturingKeybinding', false );
	setNonEnumerable( this, '_targetAction', '' );

	// Create a REPL execution context:
	setNonEnumerable( this, '_context', this.createContext() );

	// Create a new TAB completer:
	setNonEnumerableReadOnly( this, '_completer', completerFactory( this ) );

	// Create an internal readline interface:
	debug( 'Creating readline interface...' );
	setNonEnumerableReadOnly( this, '_rli', readline.createInterface({
		'input': this._istream,
		'output': this._ostream,
		'terminal': opts.isTTY,
		'prompt': opts.inputPrompt
	}));

	// Initialize a multi-line handler:
	setNonEnumerableReadOnly( this, '_multilineHandler', new MultilineHandler( this, this._rli._ttyWrite ) );

	// Initialize keybindings:
	setNonEnumerableReadOnly( this, '_keybindings', new Keybindings( opts.keybindings ) );

	// Initialize an editor actions instance:
	setNonEnumerableReadOnly( this, '_editorActions', new EditorActions( this, this._rli._ttyWrite ) );

	// Create a new TAB completer engine:
	setNonEnumerableReadOnly( this, '_completerEngine', new CompleterEngine( this, this._completer, this._wstream, this._rli._ttyWrite ) );

	// Create a new auto-closer:
	setNonEnumerableReadOnly( this, '_autoCloser', new AutoCloser( this._rli, this._settings.autoClosePairs, this._settings.autoDeletePairs, this._multilineHandler ) );

	// Initialize a preview completer:
	setNonEnumerableReadOnly( this, '_previewCompleter', new PreviewCompleter( this._rli, this._completer, this._ostream, this._settings.completionPreviews ) );

	// Initialize a syntax-highlighter:
	setNonEnumerableReadOnly( this, '_syntaxHighlighter', new SyntaxHighlighter( this, this._ostream, this._settings.syntaxHighlighting ) );

	// Cache a reference to the private readline interface `ttyWrite` to allow calling the method when wanting default behavior:
	setNonEnumerableReadOnly( this, '_ttyWrite', this._rli._ttyWrite );

	// Overwrite the private `ttyWrite` method to allow processing input before a "keypress" event is triggered:
	this._rli._ttyWrite = beforeKeypress; // WARNING: overwriting a private property

	// Add event listeners:
	this._rli.on( 'close', onClose );
	this._rli.on( 'line', onLine );
	this._rli.on( 'SIGINT', onSIGINT );
	proc.on( 'SIGWINCH', onSIGWINCH ); // terminal resize

	// Add listener for "command" events:
	this.on( 'command', onCommand );

	// Instruct the input stream to begin emitting "keypress" events:
	readline.emitKeypressEvents( this._istream, this._rli );

	// Add a listener for "keypress" events:
	this._istream.on( 'keypress', onKeypress );

	// Write a welcome message:
	this._wstream.write( opts.welcome );

	// TODO: check whether to synchronously initialize a REPL history file

	// TODO: check whether to synchronously initialize a REPL log file

	// Add any provided user-defined themes...
	if ( opts.themes ) {
		themes = objectKeys( opts.themes );
		for ( i = 0; i < themes.length; i++ ) {
			this.addTheme( themes[ i ], opts.themes[ themes[ i ] ] );
		}
	}
	// Set the syntax highlighting theme...
	this.settings( 'theme', opts.settings.theme );

	// Initialize bracketed-paste:
	if ( opts.settings.bracketedPaste !== void 0 ) {
		this.settings( 'bracketedPaste', opts.settings.bracketedPaste );
	}
	// Check whether to load and execute a JavaScript file (e.g., prior REPL history) upon startup...
	if ( opts.load ) {
		this.load( opts.load );
	} else {
		displayPrompt( this, false );
		this._count += 1;
	}
	return this;

	/**
	* Callback invoked prior to emitting a "keypress" event.
	*
	* @private
	* @param {string} data - input data
	* @param {(Object|void)} key - key object
	*/
	function beforeKeypress( data, key ) {
		var completed;
		var FLG; // flag denoting whether to bypass the default keypress behavior

		if ( self._ostream.isPaging ) {
			self._ostream.beforeKeypress( data, key );
			return;
		}
		if ( self._isCapturingKeybinding ) {
			self._captureKeybinding( key );
			return;
		}
		self._autoCloser.beforeKeypress( data, key );
		completed = self._previewCompleter.beforeKeypress( data, key );
		FLG = self._editorActions.beforeKeypress( data, key );

		// If ENTER keypress is encountered or if a preview was completed while navigating, gracefully close the completer...
		if ( completed || ( key && key.name === 'return' ) ) {
			self._completerEngine.closeCompleter();
		} else if ( ( key && key.name === 'tab' ) || self._completerEngine.isNavigating() ) {
			self._completerEngine.beforeKeypress( data, key );
			return;
		}
		// If completion was auto-completed or an action was triggered, don't trigger multi-line keybindings to avoid double operations...
		if ( !completed && !FLG ) {
			self._multilineHandler.beforeKeypress( data, key );
			return;
		}
		if ( !FLG ) {
			self._ttyWrite.call( self._rli, data, key );
		}
	}

	/**
	* Callback invoked upon an input stream "keypress" event.
	*
	* @private
	* @param {string} data - input data
	* @param {(Object|void)} key - key object
	* @returns {void}
	*/
	function onKeypress( data, key ) {
		var autoClosed;

		autoClosed = self._autoCloser.onKeypress( data, key );

		// If auto-closing was performed, explicitly remove any currently displayed completion preview...
		if ( autoClosed ) {
			self._previewCompleter.clear();
		}
		self._completerEngine.onKeypress( data, key );
		self._multilineHandler.onKeypress( data, key );
		self._syntaxHighlighter.onKeypress();
		self._previewCompleter.onKeypress( data, key );
	}

	/**
	* Callback invoked upon a readline interface "line" event.
	*
	* @private
	* @param {string} line - line data
	*/
	function onLine( line ) {
		self._SIGINT = false; // reset flag
		if ( self._closed === false ) {
			self._multilineHandler.processLine( line );
		}
	}

	/**
	* Callback invoked upon a readline interface "close" event.
	*
	* @private
	*/
	function onClose() {
		if ( self._settings.bracketedPaste && self._settings.autoDisableBracketedPasteOnExit ) { // eslint-disable-line max-len
			self._multilineHandler.disableBracketedPaste();
		}
		ostream.end();
		ostream.unpipe();

		debug( 'Readline interface closed.' );
		self._istream.removeListener( 'keypress', onKeypress );
		proc.removeListener( 'SIGWINCH', onSIGWINCH );

		debug( 'Exiting REPL...' );
		self.emit( 'exit' );
	}

	/**
	* Callback invoked upon receiving a "SIGWINCH" event (i.e., a terminal/console resize event).
	*
	* @private
	* @returns {void}
	*/
	function onSIGWINCH() {
		debug( 'Received a SIGWINCH event. Terminal was resized.' );
		self._ostream.onResize();
		self._completerEngine.onResize();
	}

	/**
	* Callback invoked upon receiving a "SIGINT" event (e.g., Ctrl-C).
	*
	* @private
	* @returns {void}
	*/
	function onSIGINT() {
		var isEmpty;

		debug( 'Received a SIGINT event.' );

		// If the REPL is currently busy executing a command, stop waiting for it to finish:
		if ( self._busy ) {
			self._done( new Error( 'unexpected error. Command execution terminated.' ) );
			return;
		}
		// Check whether the user has entered any characters:
		isEmpty = ( self._rli.line.length === 0 );

		// Close the completer engine:
		self._completerEngine.closeCompleter();

		// Clear the current line:
		self.clearLine();

		// In the absence of any entered partial and/or unevaluated commands, determine whether we should close the REPL...
		if ( self._cmd.length === 0 && isEmpty ) {
			if ( self._SIGINT ) {
				self._SIGINT = false;
				self.close();
				return;
			}
			self._ostream.write( 'To exit, enter ^D or ^C again or enter quit().\n' );
			self._SIGINT = true;
		} else {
			self._SIGINT = false;
		}
		// Reset the command queue:
		self._queue.clear();

		// Clear any command which has been buffered but not yet executed:
		self.clearCommand();

		// Display a new prompt:
		displayPrompt( self, false );
	}

	/**
	* Callback invoked upon executing a command.
	*
	* @private
	* @param {string} cmd - command
	* @param {boolean} success - boolean indicating whether the command successfully executed
	*/
	function onCommand( cmd, success ) {
		self._count += 1;
		debug( 'Command count: %d', self._count );

		// Update the internal command history buffer: [..., <id>, <cmd>, <success>, ...]
		self._history.push( self._count, cmd, success );

		// TODO: if successful and if necessary, (asynchronously?) write the command to a history file (question: do we only want to write successful commands to the history file? maybe we need to option for limiting to successful commands?)

		// TODO: if necessary, (asynchronously?) write the command and result to a log file (JSON serialization?)
	}
}

/*
* Inherit from the `EventEmitter` prototype.
*/
inherit( REPL, EventEmitter );

/**
* Displays a command prompt.
*
* @private
* @name _displayPrompt
* @memberof REPL.prototype
* @type {Function}
* @param {boolean} [preserveCursor=false] - boolean indicating whether to preserve the cursor position
* @returns {REPL} REPL instance
*/
setNonEnumerableReadOnly( REPL.prototype, '_displayPrompt', function showPrompt( preserveCursor ) {
	displayPrompt( this, Boolean( preserveCursor ) );
	return this;
});

/**
* Returns the current command prompt.
*
* @private
* @name _prompt
* @memberof REPL.prototype
* @type {Function}
* @returns {string} command prompt
*/
setNonEnumerableReadOnly( REPL.prototype, '_prompt', function prompt() {
	return inputPrompt( this._inputPrompt, this._count );
});

/**
* Captures the next "keypress" as a keybinding.
*
* @private
* @name _captureKeybinding
* @memberof REPL.prototype
* @type {Function}
* @param {(Object|void)} key - key object
* @returns {void}
*/
setNonEnumerableReadOnly( REPL.prototype, '_captureKeybinding', function captureKeybinding( key ) {
	var parsedKeys;

	if ( !key ) {
		return;
	}
	parsedKeys = parseKey( key );
	try {
		this.setKeybinding( this._targetAction, parsedKeys );
		this._ostream.write( format( '\n\nSuccessfully set the following keybindings for action `%s`.\n\n%s\n', this._targetAction, JSON.stringify( parsedKeys, null, 2 ) ) );
	} catch ( err ) {
		this._ostream.write( format( '\n\nError: %s\n', err.message ) );
	}
	this._isCapturingKeybinding = false;
	this._targetAction = '';
	displayPrompt( this, false );
});

/**
* Returns the current line's prompt length.
*
* @name promptLength
* @memberof REPL.prototype
* @type {Function}
* @returns {number} prompt length
*/
setNonEnumerableReadOnly( REPL.prototype, 'promptLength', function promptLength() {
	if ( this._multilineHandler.lineIndex() === 0 ) {
		return this._prompt().length;
	}
	return 0;
});

/**
* Returns the REPL viewport.
*
* @name viewport
* @memberof Repl.prototype
* @type {Function}
* @returns {(Array<integer>|null)} viewport dimensions (or null)
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
*
* // Query the REPL viewport:
* var v = repl.viewport();
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnly( REPL.prototype, 'viewport', function viewport() {
	if ( !this._isTTY ) {
		return null;
	}
	if ( this._wstream.rows && this._wstream.columns ) {
		return [ this._wstream.rows, this._wstream.columns ];
	}
	return null;
});

/**
* Returns the REPL viewport height.
*
* @name viewportHeight
* @memberof Repl.prototype
* @type {Function}
* @returns {integer} viewport height
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
*
* // Query the REPL viewport height:
* var v = repl.viewportHeight();
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnly( REPL.prototype, 'viewportHeight', function viewportHeight() {
	if ( !this._isTTY || !isNumber( this._wstream.rows ) ) {
		return -1;
	}
	return this._wstream.rows;
});

/**
* Returns the REPL viewport width.
*
* @name viewportWidth
* @memberof Repl.prototype
* @type {Function}
* @returns {integer} viewport width
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
*
* // Query the REPL viewport width:
* var v = repl.viewportWidth();
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnly( REPL.prototype, 'viewportWidth', function viewportWidth() {
	if ( !this._isTTY || !isNumber( this._wstream.columns ) ) {
		return -1;
	}
	return this._wstream.columns;
});

/**
* Creates a REPL context.
*
* @name createContext
* @memberof REPL.prototype
* @type {Function}
* @returns {Object} REPL context
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
*
* // Return a new REPL context:
* var ctx = repl.createContext();
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnly( REPL.prototype, 'createContext', function createContext() {
	var context;
	var cmds;

	debug( 'Creating REPL execution context...' );

	// Create an evaluation context:
	context = createEvalContext( this._contextVars, this._ostream, this._sandbox ); // eslint-disable-line max-len

	// Add project APIs...
	if ( this._sandbox ) {
		setAliases( this._aliases, context, ALIAS_OVERRIDES );
	} else {
		setAliasesGlobal( this._globalVars, this._aliases, context, ALIAS_OVERRIDES ); // eslint-disable-line max-len
	}

	// Get the list of REPL-specific commands:
	cmds = commands( this );

	// Add commands requiring privileged access to internal instance variables...
	if ( this._sandbox ) {
		setCommands( context, cmds );
	} else {
		setCommandsGlobal( this._globalVars, context, cmds );
	}

	// NOTE: the context should not be augmented **after** this point, except as done by the user when declaring variables and functions!

	// Sort the list of global variables:
	if ( this._sandbox === false ) {
		this._globalVars.sort( propertyComparator );
	}
	// Capture a snapshot of the current global workspace:
	append( this._workspace, properties( context ).sort( propertyComparator ) );

	return context;
});

/**
* Resets a REPL's context.
*
* @name resetContext
* @memberof REPL.prototype
* @type {Function}
* @returns {REPL} REPL instance
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
*
* // ...
*
* // Reset the REPL context:
* repl.resetContext();
*
* // ...
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnly( REPL.prototype, 'resetContext', function resetContext() {
	var tmp;
	var key;
	var o;
	var i;
	var j;

	debug( 'Resetting REPL execution context...' );

	// Before creating a new execution context in a non-sandboxed environment, remove current workspace variables in order to allow garbage collection and avoid memory leaks (e.g., variables/functions declared during a REPL session which might remain bound to the environment `global` after clearing a REPL):
	if ( this._sandbox === false ) {
		// WARNING: in a non-sandboxed environment, if a global variable is externally introduced during a REPL session (i.e., introduced via a mechanism outside of the REPL environment), we will delete that global variable, which means the following logic may introduce unintended side-effects for this particular edge case (e.g., application code may expect the presence of the subsequently deleted global variable). While not ideal, (a) user applications should not be introducing globals to begin with and (b) the probability of a user running a REPL session, a user clearing that REPL session, AND a global variable being introduced between starting a REPL and clearing the REPL should be negligible.
		tmp = this._context.vars();
		for ( i = 0; i < tmp.length; i++ ) {
			if ( isConfigurableProperty( this._context, tmp[ i ] ) ) {
				delete this._context[ tmp[ i ] ];
			}
		}

		// Remove REPL globals:
		for ( i = 0; i < this._globalVars.length; i++ ) {
			o = this._context;
			key = this._globalVars[ i ].split( '.' ); // Note: this addresses nested key paths (e.g., `a.b.c`)
			for ( j = 0; j < key.length-1; j++ ) {
				if ( !hasOwnProp( o, key[ j ] ) ) {
					o = null;
					break;
				}
				o = o[ key[ j ] ];
			}
			if ( o && isConfigurableProperty( o, key[ j ] ) ) {
				delete o[ key[ j ] ];
			}
		}
	}
	// Reset internal buffers for storing context data:
	if ( this._sandbox === false ) {
		this._globalVars.length = 0;
	}
	this._aliases.length = 0;
	this._workspace.length = 0;
	this._contextVars.length = 0;

	// Create a new execution context...
	this._context = this.createContext();
	this.emit( 'reset', this._context ); // note: emitting the context allows REPL wrappers to extend the newly created context

	return this;
});

/**
* Clears a REPL's history.
*
* @name clearHistory
* @memberof REPL.prototype
* @type {Function}
* @returns {REPL} REPL instance
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
*
* // ...
*
* // Clear the REPL history:
* repl.clearHistory();
*
* // ...
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnly( REPL.prototype, 'clearHistory', function clearHistory() {
	debug( 'Resetting REPL history...' );
	this._history.length = 0;
	return this;
});

/**
* Clears user-defined documentation.
*
* @name clearUserDocs
* @memberof REPL.prototype
* @type {Function}
* @returns {REPL} REPL instance
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
*
* // ...
*
* // Clear the user defined documentation:
* repl.clearUserDocs();
*
* // ...
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnly( REPL.prototype, 'clearUserDocs', function clearUserDocs() {
	debug( 'Resetting REPL user-defined documentation...' );
	this._userdocs.length = 0;
	return this;
});

/**
* Returns a list of all available themes for syntax highlighting.
*
* @name themes
* @memberof REPL.prototype
* @type {Function}
* @returns {Array<string>} list of all theme names
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
*
* // ...
*
* // Fetch all available themes:
* var theme = repl.themes();
*
* // ...
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnly( REPL.prototype, 'themes', function themes() {
	return this._syntaxHighlighter.getThemes();
});

/**
* Returns a theme's color palette for syntax highlighting.
*
* @name getTheme
* @memberof REPL.prototype
* @type {Function}
* @param {string} theme - theme name
* @throws {TypeError} must provide a string
* @throws {Error} must provide an existing theme name
* @returns {Object} theme object
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
*
* // ...
*
* // Add a user-defined theme:
* repl.addTheme( 'myTheme', {
*     'keyword': 'red'
* });
*
* // Get a theme's color palette:
* var o = repl.getTheme( 'myTheme' );
*
* // ...
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnly( REPL.prototype, 'getTheme', function getTheme( theme ) {
	if ( !isString( theme ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a string. Value: `%s`.', theme ) );
	}
	return this._syntaxHighlighter.getThemeConfig( theme );
});

/**
* Adds a syntax highlighting theme.
*
* @name addTheme
* @memberof REPL.prototype
* @type {Function}
* @param {string} name - theme name
* @param {Object} theme - theme object
* @throws {TypeError} first argument must be a string
* @throws {TypeError} second argument must be an object
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
* // ...
*
* // Add a user-defined theme:
* repl.addTheme( 'myTheme', {
*     'keyword': 'red',
*     'variable': 'green'
*
*     // ...
* });
*
* // ...
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnly( REPL.prototype, 'addTheme', function addTheme( name, theme ) {
	if ( !isString( name ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a string. Value: `%s`.', name ) );
	}
	if ( !isPlainObject( theme ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be an object. Value: `%s`.', theme ) );
	}
	this._syntaxHighlighter.addTheme( name, theme );
});

/**
* Renames a specified syntax highlighting theme.
*
* @name renameTheme
* @memberof REPL.prototype
* @type {Function}
* @param {string} oldName - old theme name
* @param {string} newName - new theme name
* @throws {TypeError} first argument must be a string
* @throws {TypeError} second argument must be a string
* @throws {Error} first argument must be an existing theme name
* @throws {Error} first argument must not be the default theme name
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
* // ...
*
* // Add a user-defined theme:
* repl.addTheme( 'myTheme', {
*     'keyword': 'red',
*     'variable': 'green'
*
*     // ...
* });

* // Rename the added theme:
* repl.renameTheme( 'myTheme', 'yourTheme' );
*
* // ...
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnly( REPL.prototype, 'renameTheme', function renameTheme( oldName, newName ) {
	if ( !isString( oldName ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a string. Value: `%s`.', oldName ) );
	}
	if ( !isString( newName ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a string. Value: `%s`.', newName ) );
	}
	this._syntaxHighlighter.renameTheme( oldName, newName );
});

/**
* Deletes a specified syntax highlighting theme.
*
* @name deleteTheme
* @memberof REPL.prototype
* @type {Function}
* @param {string} name - theme name
* @throws {TypeError} must provide a string
* @throws {Error} must provide an existing theme name
* @throws {Error} must not provide the default theme
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
* // ...
*
* // Add a user-defined theme:
* repl.addTheme( 'myTheme', {
*     'keyword': 'red',
*     'variable': 'green'
*
*     // ...
* });
*
* // Delete the added theme:
* repl.deleteTheme( 'myTheme' );
*
* // ...
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnly( REPL.prototype, 'deleteTheme', function deleteTheme( name ) {
	if ( !isString( name ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a string. Value: `%s`.', name ) );
	}
	this._syntaxHighlighter.deleteTheme( name );
});

/**
* Returns all REPL keybindings.
*
* @name keybindings
* @memberof REPL.prototype
* @type {Function}
* @returns {Object} table mapping action names to a list of keybindings
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
*
* // ...
*
* // Fetch all current keybindings:
* var keybindings = repl.keybindings();
*
* // ...
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnly( REPL.prototype, 'keybindings', function keybindings() {
	return this._keybindings.list();
});

/**
* Sets a keybinding.
*
* @name setKeybinding
* @memberof REPL.prototype
* @type {Function}
* @param {string} action - action name
* @param {Array<Object>} keys - list of keys
* @throws {TypeError} first argument must be a string
* @throws {TypeError} second argument must be an array of valid keys
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
* // ...
*
* // Set a keybinding for the `clearScreen` action:
* repl.setKeybinding( 'clearScreen', [
*     {
*         'name': 'l',
*         'ctrl': true,
*         'shift': false,
*         'meta': false
*     }
* ]);
*
* // ...
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnly( REPL.prototype, 'setKeybinding', function setKeybinding( action, keys ) {
	if ( !isString( action ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a string. Value: `%s`.', action ) );
	}
	this._keybindings.set( action, keys );
});

/**
* Loads and evaluates a JavaScript file line-by-line.
*
* @name load
* @memberof REPL.prototype
* @type {Function}
* @param {string} fpath - file path
* @param {Function} clbk - callback
* @throws {Error} cannot load a file into a closed REPL
* @throws {TypeError} first argument must be a string
* @throws {TypeError} second argument must be a function
* @returns {void}
*
* @example
* // TODO
*/
setNonEnumerableReadOnly( REPL.prototype, 'load', function load( fpath, clbk ) {
	var self;
	var file;
	var len;
	var i;
	if ( this._closed ) {
		throw new Error( 'invalid operation. Cannot load a file into a REPL which has already closed.' );
	}
	if ( !isString( fpath ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a string. Value: `%s`.', fpath ) );
	}
	if ( !isFunction( clbk ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a function. Value: `%s`.', clbk ) );
	}
	// Resolve the provided path to an absolute file path:
	fpath = resolve( cwd(), fpath );
	debug( 'Loading filepath: %s', fpath );

	// Attempt to synchronously read the file:
	file = readFileSync( fpath, 'utf8' );
	if ( file instanceof Error ) {
		debug( 'Error: %s', file.message );
		clbk( file );
		return;
	}
	self = this;

	// Split the file content into individual lines:
	file = file.split( RE_EOL );

	// Forward each line to the REPL readline interface in order to mimic user input...
	len = file.length;
	i = -1;

	nextTick( next );

	/**
	* Callback invoked after draining the command queue.
	*
	* @private
	* @param {string} cmd - command
	* @param {boolean} success - boolean indicating whether the command successfully executed
	*/
	function next() {
		i += 1;
		if ( i < len ) {
			if ( file[ i ] ) {
				self._rli.write( file[ i ]+'\n' );
				self.once( 'drain', next );
			} else {
				nextTick( next );
			}
		} else {
			nextTick( clbk );
		}
	}
});

/**
* Resets a REPL.
*
* @name reset
* @memberof REPL.prototype
* @type {Function}
* @throws {Error} cannot reset a closed REPL
* @returns {REPL} REPL instance
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
*
* // ...
*
* // Reset the REPL:
* repl.reset();
*
* // ...
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnly( REPL.prototype, 'reset', function onReset() {
	if ( this._closed ) {
		throw new Error( 'invalid operation. Cannot reset a REPL which has already closed.' );
	}
	debug( 'Resetting REPL...' );

	// Reset the command queue:
	this._queue.clear();

	// Clear any command which has been buffered but not yet executed:
	this.clearCommand();

	// Clear the command history:
	this.clearHistory();

	// Reset the execution context:
	this.resetContext();

	// Clear an output TTY stream of any previous commands and output:
	this.clear();

	// Display the command prompt:
	displayPrompt( this, false );

	return this;
});

/**
* Clears the entire REPL screen and scrollback history.
*
* ## Notes
*
* -   This method is only applicable for TTY REPLs. In non-TTY REPLs, this method is a non-operation.
*
* @name clear
* @memberof REPL.prototype
* @type {Function}
* @throws {Error} cannot clear a closed REPL
* @returns {REPL} REPL instance
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
*
* // ...
*
* // Clear the REPL:
* repl.clear();
*
* // ...
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnly( REPL.prototype, 'clear', function onClear() {
	if ( this._closed ) {
		throw new Error( 'invalid operation. Cannot clear a REPL which has already closed.' );
	}
	if ( this._isTTY ) {
		/*
		* [ANSI escape sequences][1]:
		*
		* -   `\u001b`: ESC, the escape character
		* -   `[H`: move cursor to upper left corner
		* -   `[2J`: clear the entire screen
		* -   `[3J`: clear the entire screen and delete all lines in the scrollback buffer (note: possible portability issues)
		*
		* [1]: https://en.wikipedia.org/wiki/ANSI_escape_code
		*/
		this._ostream.write( '\u001b[2J\u001b[H\u001b[2J\u001b[3J' );
	}
	return this;
});

/**
* Clears the current line.
*
* ## Notes
*
* -   This method is only applicable for TTY REPLs. In non-TTY REPLs, this method is a non-operation.
*
* @name clearLine
* @memberof REPL.prototype
* @type {Function}
* @throws {Error} cannot clear the current line of a closed REPL
* @returns {REPL} REPL instance
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
*
* // ...
*
* // Clear the current line:
* repl.clearLine();
*
* // ...
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnly( REPL.prototype, 'clearLine', function onClearLine() {
	if ( this._closed ) {
		throw new Error( 'invalid operation. Cannot clear the line of a REPL which has already closed.' );
	}
	if ( this._isTTY ) {
		this._rli.clearLine();
	}
	return this;
});

/**
* Clears the REPL command buffer.
*
* @name clearCommand
* @memberof REPL.prototype
* @type {Function}
* @throws {Error} cannot clear the command buffer of a closed REPL
* @returns {REPL} REPL instance
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
*
* // ...
*
* // Clear the command buffer:
* repl.clearCommand();
*
* // ...
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnly( REPL.prototype, 'clearCommand', function onClearCommand() {
	if ( this._closed ) {
		throw new Error( 'invalid operation. Cannot clear the command buffer of a REPL which has already closed.' );
	}
	// Clear any command which has been buffered but not yet executed:
	this._multilineHandler.resetInput();

	return this;
});

/**
* Closes a REPL.
*
* @name close
* @memberof REPL.prototype
* @type {Function}
* @returns {REPL} REPL instance
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
*
* // ...
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnly( REPL.prototype, 'close', function close() {
	var self;
	if ( this._closed ) {
		debug( 'Attempted to close an already closed REPL.' );
		return this;
	}
	self = this;
	this._closed = true;

	// Clear the command queue:
	this._queue.clear();

	// TODO: ensure REPL history is saved (flushed) to file before closing the REPL (see https://github.com/nodejs/node/blob/b21e7c7bcf23a2715951e4cd96180e4dbf1dcd4d/lib/repl.js#L805)

	// TODO: ensure REPL log is saved (flushed) to file before closing the REPL

	nextTick( onTick );

	return this;

	/**
	* Callback invoked upon the next tick of the event loop.
	*
	* @private
	*/
	function onTick() {
		var tmp;
		var key;
		var o;
		var i;
		var j;

		debug( 'Closing readline interface...' );
		self._rli.close();

		// If this is a non-sandboxed REPL, remove global variables/properties which were introduced during context creation and by a user during a REPL session...
		if ( self._sandbox === false ) {
			// WARNING: in a non-sandboxed environment, if a global variable is externally introduced during a REPL session (i.e., introduced via a mechanism outside of the REPL environment), we will delete that global variable, which means the following logic may introduce unintended side-effects for this particular edge case (e.g., application code may expect the presence of the subsequently deleted global variable). While not ideal, (a) user applications should not be introducing globals to begin with and (b) the probability of a user running a REPL session, a user closing that REPL session, AND a global variable being introduced between starting a REPL and closing the REPL should be negligible.
			tmp = self._context.vars(); // current workspace variables
			for ( i = 0; i < tmp.length; i++ ) {
				if ( isConfigurableProperty( self._context, tmp[ i ] ) ) {
					delete self._context[ tmp[ i ] ];
				}
			}

			// Remove REPL globals:
			for ( i = 0; i < self._globalVars.length; i++ ) {
				o = self._context;
				key = self._globalVars[ i ].split( '.' ); // Note: this addresses nested key paths (e.g., `a.b.c`)
				for ( j = 0; j < key.length-1; j++ ) {
					if ( !hasOwnProp( o, key[ j ] ) ) {
						o = null;
						break;
					}
					o = o[ key[ j ] ];
				}
				if ( o && isConfigurableProperty( o, key[ j ] ) ) {
					delete o[ key[ j ] ];
				}
			}
		}
	}
});

/**
* Gets (and sets) REPL settings.
*
* @name settings
* @memberof REPL.prototype
* @type {Function}
* @param {string} [name] - setting name
* @param {*} [value] - new setting value
* @throws {TypeError} first argument must be a string
* @throws {TypeError} first argument must be a recognized setting
* @throws {TypeError} second argument must be a valid setting value
* @throws {Error} cannot access settings for a closed REPL
* @returns {(*|Object|REPL)} settings or a REPL instance
*
* @example
* var debug = require( '@stdlib/streams/node/debug-sink' );
*
* // Create a new REPL:
* var repl = new REPL({
*     'output': debug()
* });
*
* // ...
*
* // Retrieve the current REPL settings:
* var o = repl.settings();
*
* // ...
*
* // Close the REPL:
* repl.close();
*/
setNonEnumerableReadOnly( REPL.prototype, 'settings', function settings() {
	var nargs;
	var value;
	var name;
	var f;

	if ( this._closed ) {
		throw new Error( 'invalid operation. Cannot access settings for a REPL which has already closed.' );
	}
	nargs = arguments.length;
	if ( nargs === 0 ) {
		return assign( {}, this._settings );
	}
	name = arguments[ 0 ];
	if ( !isString( name ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a string. Value: `%s`.', name ) );
	}
	if ( !isSettingName( name ) ) {
		throw new Error( format( 'invalid argument. First argument must be a recognized setting. Value: `%s`.', name ) );
	}
	if ( nargs === 1 ) {
		return this._settings[ name ]; // TODO: we should consider returning a deep copy if settings are allowed to be objects, not just primitives, in order to avoid unintentional mutation
	}
	value = arguments[ 1 ];
	f = SETTINGS_VALIDATORS[ SETTINGS[ name ].type ];
	if ( !f.assert( value ) ) {
		throw new TypeError( f.msg( name, value ) );
	}
	debug( 'Updating setting `%s` to `%s`...', name, JSON.stringify( value ) );
	this._settings[ name ] = value;
	debug( 'Successfully updated setting: `%s`.', name );

	if ( name === 'completionPreviews' ) {
		if ( value ) {
			this._previewCompleter.enable();
		} else {
			this._previewCompleter.disable();
		}
	} else if ( name === 'autoClosePairs' ) {
		if ( value ) {
			this._autoCloser.enableAutoClose();
		} else {
			this._autoCloser.disableAutoClose();
		}
	} else if ( name === 'autoDeletePairs' ) {
		if ( value ) {
			this._autoCloser.enableAutoDelete();
		} else {
			this._autoCloser.disableAutoDelete();
		}
	} else if ( name === 'autoPage' ) {
		if ( value ) {
			this._ostream.enablePaging();
		} else {
			this._ostream.disablePaging();
		}
	} else if ( name === 'syntaxHighlighting' ) {
		if ( value ) {
			this._syntaxHighlighter.enable();
		} else {
			this._syntaxHighlighter.disable();
		}
	} else if ( name === 'theme' ) {
		this._syntaxHighlighter.setTheme( value );
	} else if ( name === 'bracketedPaste' ) {
		if ( value ) {
			this._multilineHandler.enableBracketedPaste();
		} else {
			this._multilineHandler.disableBracketedPaste();
		}
	}

	return this;
});


// EXPORTS //

module.exports = REPL;
