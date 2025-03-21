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

var join = require( 'path' ).join;
var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var instanceOf = require( '@stdlib/assert/instance-of' );
var isUint8Array = require( '@stdlib/assert/is-uint8array' );
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var Uint8Array = require( '@stdlib/array/uint8' );
var readWASM = require( './../lib/sync.js' );


// VARIABLES //

// Don't run tests in the browser...for now...
var opts = {
	'skip': IS_BROWSER // FIXME
};


// FIXTURES //

var WASM = join( __dirname, 'fixtures', 'file.wasm' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof readWASM, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			readWASM( WASM, value );
		};
	}
});

tape( 'if the function encounters an error when attempting to read a file, the function returns the error', opts, function test( t ) {
	var out = readWASM( 'beepboopbapbop' );
	t.strictEqual( instanceOf( out, Error ), true, 'returns an error' );
	t.end();
});

tape( 'if the function encounters an error when attempting to read a file, the function returns the error (options)', opts, function test( t ) {
	var out = readWASM( 'beepboopbapbop', {
		'flag': 'r'
	});
	t.strictEqual( instanceOf( out, Error ), true, 'returns an error' );

	t.end();
});

tape( 'the function reads a file as WebAssembly, returning file contents as a Uint8Array', opts, function test( t ) {
	var expected;
	var actual;
	var tmp;
	var i;

	tmp = readFileSync( WASM );
	expected = new Uint8Array( tmp.length );
	for ( i = 0; i < tmp.length; i++ ) {
		expected[ i ] = tmp[ i ];
	}
	actual = readWASM( WASM );

	t.strictEqual( isUint8Array( actual ), true, 'returns Uint8Array' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( actual[ i ], expected[ i ], 'returns expected file contents' );
	}
	t.end();
});

tape( 'the function reads a file as WebAssembly using provided options (object)', opts, function test( t ) {
	var expected;
	var actual;
	var tmp;
	var i;

	tmp = readFileSync( WASM );
	expected = new Uint8Array( tmp.length );
	for ( i = 0; i < tmp.length; i++ ) {
		expected[ i ] = tmp[ i ];
	}

	actual = readWASM( WASM, {
		'flag': 'r',
		'encoding': 'utf8' // overridden
	});

	t.strictEqual( isUint8Array( actual ), true, 'returns Uint8Array' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( actual[ i ], expected[ i ], 'returns expected file contents' );
	}
	t.end();
});

tape( 'the function accommodates older Node.js environments', opts, function test( t ) {
	var readWASM;
	var expected;
	var actual;
	var tmp;
	var i;

	tmp = readFileSync( WASM );
	expected = new Uint8Array( tmp.length );
	for ( i = 0; i < tmp.length; i++ ) {
		expected[ i ] = tmp[ i ];
	}

	readWASM = proxyquire( './../lib/sync.js', {
		'@stdlib/fs/read-file': {
			'sync': readFile
		}
	});
	actual = readWASM( WASM );

	t.strictEqual( isUint8Array( actual ), true, 'returns Uint8Array' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( actual[ i ], expected[ i ], 'returns expected file contents' );
	}
	t.end();

	function readFile( file ) {
		var out;
		var tmp;
		var i;

		tmp = readFileSync( file );

		// Return a non-Uint8Array...
		out = {};
		out.length = tmp.length;
		for ( i = 0; i < tmp.length; i++ ) {
			out[ i ] = tmp[ i ];
		}
		return out;
	}
});

tape( 'the function supports newer Node.js environments', opts, function test( t ) {
	var readWASM;
	var expected;
	var actual;
	var tmp;
	var i;

	tmp = readFileSync( WASM );
	expected = new Uint8Array( tmp.length );
	for ( i = 0; i < tmp.length; i++ ) {
		expected[ i ] = tmp[ i ];
	}

	readWASM = proxyquire( './../lib/sync.js', {
		'@stdlib/fs/read-file': {
			'sync': readFile
		}
	});
	actual = readWASM( WASM );

	t.strictEqual( isUint8Array( actual ), true, 'returns Uint8Array' );
	for ( i = 0; i < expected.length; i++ ) {
		t.strictEqual( actual[ i ], expected[ i ], 'returns expected file contents' );
	}
	t.end();

	function readFile( file ) {
		var out;
		var tmp;
		var i;

		tmp = readFileSync( file );

		// Return a Uint8Array...
		out = new Uint8Array( tmp.length );
		for ( i = 0; i < tmp.length; i++ ) {
			out[ i ] = tmp[ i ];
		}
		return out;
	}
});
