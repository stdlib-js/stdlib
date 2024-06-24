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
var replace = require( '@stdlib/string/replace' );
var readDir = require( '@stdlib/fs/read-dir' ).sync;
var format = require( '@stdlib/string/format' );
var repl = require( './fixtures/repl.js' );


// VARIABLES //

var RE_JSON = /\.json$/;

var FIXTURES_DIR = resolve( __dirname, 'fixtures', 'syntax-highlighting' );
var FIXTURES_FILES = filter( readDir( FIXTURES_DIR ) );


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
		'syntaxHighlighting': true
	};
}

/**
* Asserts that a provided expression triggers expected syntax highlighting.
*
* @private
* @param {Object} t - test object
* @param {Object} fixture - fixture object
* @param {string} fixture.expression - expression string
* @param {string} fixture.expected - expected/highlighted string
* @param {Object} fixture.theme - test theme
* @param {Function} done - callback to invoke upon completion
*/
function assert( t, fixture, done ) {
	var expression;
	var expected;
	var istream;
	var opts;
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

	// Load test theme:
	r.addTheme( 'test', fixture.theme );
	r.settings( 'theme', 'test' );

	// Get expression and expected strings:
	expression = fixture.expression;
	expected = fixture.expected;

	// Emulate the presence of an existing expression:
	istream.write( expression );

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
		actual = data[ data.length - 1 ];
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

test( 'a REPL instance supports syntax highlighting of the input', FIXTURES_DIR, FIXTURES_FILES, assert );
