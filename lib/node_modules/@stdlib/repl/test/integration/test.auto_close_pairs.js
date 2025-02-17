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

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var DebugStream = require( '@stdlib/streams/node/debug' );
var trim = require( '@stdlib/string/trim' );
var replace = require( '@stdlib/string/replace' );
var readDir = require( '@stdlib/fs/read-dir' ).sync;
var format = require( '@stdlib/string/format' );
var OPEN_SYMBOLS = require( './../../lib/auto_close_pairs_open_symbols.js' );
var repl = require( './fixtures/repl.js' );


// VARIABLES //

var RE_JSON = /\.json$/;

var RE_ANSI = /[\u001B\u009B][[\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\d/#&.:=?%@~_]+)*|[a-zA-Z\d]+(?:;[-a-zA-Z\d/#&.:=?%@~_]*)*)?\u0007)|(?:(?:\d{1,4}(?:;\d{0,4})*)?[\dA-PR-TZcf-nq-uy=><~]))/g; // eslint-disable-line no-control-regex

var POSITIVE_FIXTURES_DIR = resolve( __dirname, 'fixtures', 'auto-close-pairs', 'positive' );
var POSITIVE_FIXTURES_FILES = filter( readDir( POSITIVE_FIXTURES_DIR ) );

var NEGATIVE_FIXTURES_DIR = resolve( __dirname, 'fixtures', 'auto-close-pairs', 'negative' );
var NEGATIVE_FIXTURES_FILES = filter( readDir( NEGATIVE_FIXTURES_DIR ) );


// FUNCTIONS //

/**
* Filters a list of files for those having a `*.json` file extension.
*
* @private
* @param {Array<string>} list - file list
* @returns {Array<string>} filtered list
*/
function filter( list ) {
	var out;
	var i;

	out = [];
	for ( i = 0; i < list.length; i++ ) {
		if ( RE_JSON.test( list[ i ] ) ) {
			out.push( list[ i ] );
		}
	}
	return out;
}

/**
* Splices a string.
*
* @private
* @param {string} str - input string
* @param {NonNegativeInteger} idx - index at which to splice
* @returns {Array} array containing the resulting string and the removed character
*/
function splice( str, idx ) {
	var parts;
	var out;

	parts = [
		str.substring( 0, idx ),
		str.substring( idx+1 )
	];
	out = parts[ 0 ] + parts[ 1 ];
	return [ out, str[ idx ], parts ];
}

/**
* Removes ANSI escape codes from a string.
*
* @private
* @param {string} str - input string
* @returns {string} string with ANSI escape codes removed
*/
function stripANSI( str ) {
	return replace( str, RE_ANSI, '' );
}

/**
* Processes output stream text and returns a string representing what is currently displayed in the REPL.
*
* ## Notes
*
* -   We can rely on simple concatenation when a test expression proceeds from left-to-right (i.e., as if a user normally types); however, when a user backtracks (e.g., by moving the cursor to the left), the REPL needs to refresh the displayed text (in full) in order to shift any text after the cursor to the right to make room for inserted characters.
*
* @private
* @param {Array<string>} raw - unprocessed output data
* @param {boolean} flg - boolean indicating whether to concatenate unprocessed output data
* @returns {string} output string
*/
function processOutput( raw, flg ) {
	var i;
	if ( flg ) {
		return trim( stripANSI( raw.join( '' ) ) );
	}
	for ( i = raw.length-1; i >= 0; i-- ) {
		// Check whether the screen display was erased, as the next element is the refreshed line...
		if ( raw[ i ] === '\u001b[0J' ) {
			return raw[ i+1 ];
		}
	}
}

/**
* Converts splice results to an expected output string.
*
* @private
* @param {Array} s - splice results
* @returns {string} expected output string
*/
function spliced2expected( s ) {
	return s[ 2 ][ 0 ] + s[ 1 ] + OPEN_SYMBOLS[ s[1] ] + s[ 2 ][ 1 ];
}

/**
* Returns default settings.
*
* @private
* @returns {Object} default settings
*/
function defaultSettings() {
	return {
		'autoClosePairs': false,
		'autoDeletePairs': false,
		'autoPage': false,
		'completionPreviews': false,
		'syntaxHighlighting': false,
		'eagerEvaluation': false

	};
}

/**
* Moves a cursor backward a specified number of positions.
*
* @private
* @param {WriteStream} stream - writable stream
* @param {NonNegativeInteger} N - number of positions
*/
function moveBack( stream, N ) {
	var i;
	for ( i = 0; i < N; i++ ) {
		stream.write( '\u001b[1D' );
	}
}

/**
* Asserts that a provided expression triggers expected automatic insertion.
*
* @private
* @param {Object} t - test object
* @param {Object} fixture - fixture object
* @param {string} fixture.expression - incomplete expression string
* @param {NonNegativeInteger} fixture.cursor - cursor position for inserting a character to trigger an insertion
* @param {Function} done - callback to invoke upon completion
*/
function assertAutoClose( t, fixture, done ) {
	var expected;
	var istream;
	var opts;
	var N;
	var r;
	var s;

	istream = new DebugStream({
		'name': 'repl-input-stream'
	});
	opts = {
		'input': istream,
		'inputPrompt': '',
		'quiet': true,
		'settings': defaultSettings()
	};
	r = repl( opts, onClose );

	// Create an incomplete expression:
	s = splice( fixture.expression, fixture.cursor );

	// Construct the expected output:
	expected = spliced2expected( s );

	// Emulate the presence of an existing expression:
	istream.write( s[ 0 ] );

	// Move the cursor to where we want to insert a character to trigger auto-close:
	N = s[ 0 ].length - fixture.cursor;
	moveBack( istream, N );

	// Enable auto-close:
	r.settings( 'autoClosePairs', true );

	// Insert the character in order to trigger auto-close:
	istream.write( s[ 1 ] );

	// Close the input stream:
	istream.end();

	// Close the REPL:
	r.close();

	function onClose( error, data ) {
		var actual;
		if ( error ) {
			t.fail( error.message );
			return;
		}
		actual = processOutput( data, N === 0 );
		t.strictEqual( actual, expected, 'returns expected value' );
		done();
	}
}

/**
* Asserts that a provided expression does not trigger automatic insertion.
*
* @private
* @param {Object} t - test object
* @param {Object} fixture - fixture object
* @param {string} fixture.expression - incomplete expression string
* @param {NonNegativeInteger} fixture.cursor - cursor position for inserting a character to trigger an insertion
* @param {Function} done - callback to invoke upon completion
*/
function assertNoAutoClose( t, fixture, done ) {
	var expected;
	var istream;
	var opts;
	var N;
	var r;

	istream = new DebugStream({
		'name': 'repl-input-stream'
	});
	opts = {
		'input': istream,
		'inputPrompt': '',
		'quiet': true,
		'settings': defaultSettings()
	};
	r = repl( opts, onClose );

	// Construct the expected output:
	expected = fixture.expression;

	// Emulate the presence of an existing expression:
	istream.write( fixture.expression );

	// Move the cursor to where we want to insert a character:
	N = fixture.expression.length - fixture.cursor;
	moveBack( istream, N );

	// Enable auto-close:
	r.settings( 'autoClosePairs', true );

	// Insert the character in order to trigger auto-close:
	istream.write( fixture.expression[ fixture.cursor ] );

	// Close the input stream:
	istream.end();

	// Close the REPL:
	r.close();

	function onClose( error, data ) {
		var actual;
		if ( error ) {
			t.fail( error.message );
			return;
		}
		actual = processOutput( data, N === 0 );
		t.strictEqual( actual, expected, 'returns expected value' );
		done();
	}
}

/**
* Generates a test name from a fixture file name.
*
* @private
* @param {string} msg - test description
* @param {string} filename - file name
* @returns {string} test name
*/
function testName( msg, filename ) {
	var str = replace( filename, RE_JSON, '' );
	str = replace( str, '_', ' ' );
	return format( '%s (%s)', msg, str );
}

/**
* Returns a test function for testing against a specified fixture file.
*
* @private
* @param {string} fpath - fixture file path
* @param {Function} assert - assertion function
* @returns {Function} test function
*/
function testFcn( fpath, assert ) {
	return test;

	function test( t ) {
		var fixture = require( fpath ); // eslint-disable-line stdlib/no-dynamic-require
		assert( t, fixture, done );

		function done() {
			t.end();
		}
	}
}

/**
* Run tests against test fixtures.
*
* @private
* @param {string} msg - test description
* @param {string} dir - fixtures directory
* @param {Array<string>} fixtures - list of fixtures
* @param {Function} assert - assert function
*/
function test( msg, dir, fixtures, assert ) {
	var fpath;
	var f;
	var t;
	var i;

	for ( i = 0; i < fixtures.length; i++ ) {
		f = fixtures[ i ];
		t = testName( msg, f );
		fpath = resolve( dir, f );
		tape( t, testFcn( fpath, assert ) );
	}
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof repl, 'function', 'main export is a function' );
	t.end();
});

test( 'a REPL instance supports automatically closing paired symbols', POSITIVE_FIXTURES_DIR, POSITIVE_FIXTURES_FILES, assertAutoClose );

test( 'a REPL instance avoids unnecessarily inserting closing symbols', NEGATIVE_FIXTURES_DIR, NEGATIVE_FIXTURES_FILES, assertNoAutoClose );
