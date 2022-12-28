/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var tryRequire = require( '@stdlib/utils/try-require' );
var typedarray = require( '@stdlib/array/typed' );


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

tape( 'the function throws an error if provided typed arrays which have different types', opts, function test( t ) {
	var dtypes;
	var i;

	dtypes = [
		[ 'float64', 'float32' ],
		[ 'int32', 'uint32' ],
		[ 'int16', 'float64' ],
		[ 'int8', 'uint32' ]
	];
	for ( i = 0; i < dtypes.length; i++ ) {
		t.throws( badValue( dtypes[ i ] ), Error, 'throws an error when provided ('+dtypes[ i ].join( ',' )+')' );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = typedarray( 10, value[ 0 ] );
			var y = typedarray( x.length, value[ 1 ] );
			addon( x, y );
		};
	}
});

tape( 'the function does not throw an error if provided typed arrays having the same type', opts, function test( t ) {
	var dtypes;
	var x;
	var y;
	var v;
	var i;

	dtypes = [
		[ 'float64', 'float64' ],
		[ 'int32', 'int32' ],
		[ 'int16', 'int16' ],
		[ 'int8', 'int8' ]
	];
	for ( i = 0; i < dtypes.length; i++ ) {
		x = typedarray( 10, dtypes[ i ][ 0 ] );
		y = typedarray( x.length, dtypes[ i ][ 1 ] );
		v = addon( x, y );
		t.strictEqual( v, void 0, 'returns expected value when provided ('+dtypes[ i ].join( ',' )+')' );
	}
	t.end();
});
