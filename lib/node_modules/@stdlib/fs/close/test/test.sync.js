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

'use strict';

// MODULES //

var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var openSync = require( '@stdlib/fs/open' ).sync;
var close = require( './../lib/sync.js' ); // eslint-disable-line stdlib/no-redeclare


// VARIABLES //

// Don't run tests in the browser...for now...
var opts = {
	'skip': IS_BROWSER // FIXME
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof close, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an invalid file descriptor', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		-1,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			close( value );
		};
	}
});

tape( 'the function closes a file descriptor', opts, function test( t ) {
	var err;
	var fd;

	fd = openSync( __filename, 'r+' );
	err = close( fd );

	t.strictEqual( err, void 0, 'returns expected value' );
	t.end();
});

tape( 'if the function encounters an error, the function returns the error', opts, function test( t ) {
	var close;
	var err;

	close = proxyquire( './../lib/sync.js', {
		'fs': {
			'closeSync': mock
		}
	});
	err = close( 9999999999999999999 );
	t.strictEqual( err instanceof Error, true, 'returns an error' );
	t.end();

	function mock() {
		throw new Error( 'beep boop' );
	}
});
