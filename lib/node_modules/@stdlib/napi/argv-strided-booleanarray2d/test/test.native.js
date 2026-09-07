/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
var typedarray = require( '@stdlib/array/typed' );
var Uint8Array = require( '@stdlib/array/uint8' );
var BooleanArray = require( '@stdlib/array/bool' );
var reinterpret = require( '@stdlib/strided/base/reinterpret-boolean' );
var filledarray = require( '@stdlib/array/filled' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var addon = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( addon instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof addon, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an argument which is not a Uint8Array', opts, function test( t ) {
	var values;
	var i;

	values = [
		'5',
		true,
		false,
		null,
		void 0,
		[],
		{},
		typedarray( 10, 'int32' ),
		typedarray( 10, 'float64' )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			addon( 1, 1, value, 1, 1 );
		};
	}
});

tape( 'the function throws a range error if provided an array having insufficient elements', opts, function test( t ) {
	var values;
	var i;

	values = [
		[ 5, 5, new BooleanArray( 10 ), 5, 1 ],
		[ 3, 3, new BooleanArray( 5 ), 2, 1 ],
		[ 2, 4, new BooleanArray( 6 ), 4, 1 ],
		[ 3, 2, new BooleanArray( 4 ), -2, 1 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws a range error when provided ('+values[ i ][ 0 ]+','+values[ i ][ 1 ]+','+values[ i ][ 2 ].length+','+values[ i ][ 3 ]+','+values[ i ][ 4 ]+')' );
	}
	t.end();

	function badValue( args ) {
		return function badValue() {
			addon( args[ 0 ], args[ 1 ], args[ 2 ], args[ 3 ], args[ 4 ] );
		};
	}
});

tape( 'the function does not throw an error if provided a BooleanArray having sufficient elements', opts, function test( t ) {
	var expected;
	var values;
	var out;
	var i;

	values = [
		[ 1, 1, new BooleanArray( 1 ), 1, 1 ],
		[ 2, 2, new BooleanArray( 4 ), 2, 1 ],
		[ 3, 3, new BooleanArray( 9 ), 3, 1 ]
	];
	expected = [
		filledarray( 1, 1, 'uint8' ),
		filledarray( 1, 4, 'uint8' ),
		filledarray( 1, 9, 'uint8' )
	];
	for ( i = 0; i < values.length; i++ ) {
		addon( values[ i ][ 0 ], values[ i ][ 1 ], values[ i ][ 2 ], values[ i ][ 3 ], values[ i ][ 4 ] );
		out = reinterpret( values[ i ][ 2 ], 0 );
		t.deepEqual( out, expected[ i ], 'returns expected value when provided an array of length '+values[ i ][ 2 ].length );
	}
	t.end();
});

tape( 'the function does not throw an error if provided a Uint8Array having sufficient elements', opts, function test( t ) {
	var expected;
	var x;

	x = new Uint8Array( 4 );
	expected = new Uint8Array( [ 1, 1, 1, 1 ] );

	addon( 2, 2, x, 2, 1 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports strided access', opts, function test( t ) {
	var expected;
	var x;

	x = new BooleanArray( 8 );

	addon( 2, 2, x, 4, 2 );

	expected = new Uint8Array( [ 1, 0, 1, 0, 1, 0, 1, 0 ] );
	t.deepEqual( reinterpret( x, 0 ), expected, 'returns expected value' );
	t.end();
});
