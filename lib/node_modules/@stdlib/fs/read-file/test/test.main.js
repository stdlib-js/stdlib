/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var fs = require( 'fs' );
var tape = require( 'tape' );
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var readFile = require( './../lib/main.js' );


// VARIABLES //

// Don't run tests in the browser...for now...
var opts = {
	'skip': IS_BROWSER // FIXME
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof readFile, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function reads the entire contents of a file', opts, function test( t ) {
	var expected = fs.readFileSync( __filename ); // eslint-disable-line node/no-sync
	readFile( __filename, onFile );

	function onFile( error, actual ) {
		if ( error ) {
			t.fail( error.message );
		}
		t.deepEqual( actual, expected, 'returns file contents' );

		t.end();
	}
});

tape( 'the function reads the contents of a file using provided options (option string)', opts, function test( t ) {
	var expected = fs.readFileSync( __filename, 'utf8' ); // eslint-disable-line node/no-sync
	readFile( __filename, 'utf8', onFile );

	function onFile( error, actual ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.strictEqual( actual, expected, 'returns file contents' );
		t.end();
	}
});

tape( 'the function reads the contents of a file using provided options (option object)', opts, function test( t ) {
	var expected;
	var opts;

	opts = {
		'encoding': 'utf8'
	};

	expected = fs.readFileSync( __filename, opts ); // eslint-disable-line node/no-sync
	readFile( __filename, opts, onFile );

	function onFile( error, actual ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.strictEqual( actual, expected, 'returns file contents' );
		t.end();
	}
});

tape( 'if the function encounters an error, the function returns the error', opts, function test( t ) {
	readFile( 'beepboopbapbop', onFile );

	function onFile( error ) {
		t.equal( error instanceof Error, true, error.message );
		t.end();
	}
});

tape( 'if the function encounters an error, the function returns the error (option string)', opts, function test( t ) {
	readFile( 'beepboopbapbop', 'utf8', onFile );

	function onFile( error ) {
		t.equal( error instanceof Error, true, error.message );
		t.end();
	}
});

tape( 'if the function encounters an error, the function returns the error (option object)', opts, function test( t ) {
	var opts = {
		'encoding': 'utf8'
	};
	readFile( 'beepboopbapbop', opts, onFile );

	function onFile( error ) {
		t.equal( error instanceof Error, true, error.message );
		t.end();
	}
});
