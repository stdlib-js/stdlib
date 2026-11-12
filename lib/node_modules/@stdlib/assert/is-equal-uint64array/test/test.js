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

var tape = require( 'tape' );
var Int64Array = require( '@stdlib/array/int64' );
var typedarray = require( '@stdlib/array/typed' );
var Uint64Array = require( '@stdlib/array/uint64' );
var Uint64 = require( '@stdlib/number/uint64/ctor' );
var isEqualUint64Array = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isEqualUint64Array, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided two Uint64Arrays having equal values', function test( t ) {
	var x;
	var y;

	x = new Uint64Array( [ 1, 2, 3 ] );
	t.strictEqual( isEqualUint64Array( x, x ), true, 'returns expected value' );

	x = new Uint64Array( [ 1, 2, 3 ] );
	y = new Uint64Array( [ 1, 2, 3 ] );
	t.strictEqual( isEqualUint64Array( x, y ), true, 'returns expected value' );

	x = new Uint64Array( [ 0, 0, 0 ] );
	y = new Uint64Array( [ 0, 0, 0 ] );
	t.strictEqual( isEqualUint64Array( x, y ), true, 'returns expected value' );

	// Values exceeding the maximum safe integer (2^60 and 2^64-1):
	x = new Uint64Array( [ Uint64.of( 268435456, 0 ), Uint64.of( 4294967295, 4294967295 ) ] ); // eslint-disable-line max-len
	y = new Uint64Array( [ Uint64.of( 268435456, 0 ), Uint64.of( 4294967295, 4294967295 ) ] ); // eslint-disable-line max-len
	t.strictEqual( isEqualUint64Array( x, y ), true, 'returns expected value' );

	x = new Uint64Array( 0 );
	y = new Uint64Array( 0 );
	t.strictEqual( isEqualUint64Array( x, y ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if not provided two Uint64Arrays having equal values', function test( t ) {
	var x;
	var y;
	var i;

	x = [
		'',
		'beep',
		5,
		3.14,
		-3.14,
		0.0,
		-0.0,
		true,
		false,
		null,
		void 0,
		[ 1.0 ],
		{},
		function noop() {},
		typedarray( 10, 'float64' ),
		typedarray( 10, 'int32' ),
		typedarray( 10, 'uint32' ),
		[ 1.0, 2.0, 3.0 ],
		[ NaN, NaN, NaN ],
		new Uint64Array( [ 1, 2, 3 ] ),
		new Uint64Array( [ 1, 2, 3 ] ),
		new Uint64Array( [ 1, 2, 3 ] ),
		new Uint64Array( [ 1, 2, 3 ] ),
		new Uint64Array( [ Uint64.of( 268435456, 0 ) ] ),
		new Uint64Array( [ Uint64.of( 4294967295, 4294967295 ) ] )
	];
	y = [
		'abc',
		'boop',
		-5,
		-3.14,
		3.14,
		-0.0,
		0.0,
		false,
		true,
		void 0,
		null,
		[ -1.0 ],
		{},
		function noop() {},
		typedarray( 10, 'float64' ),
		typedarray( 10, 'uint32' ),
		new Uint64Array( 10 ),
		[ 2.0, 4.0, 6.0 ],
		[ NaN, NaN, NaN ],
		new Uint64Array( [ 2, 4, 6 ] ),
		new Uint64Array( [ 1, 2 ] ),
		new Int64Array( [ 1, 2, 3 ] ),
		typedarray( [ 1.0, 2.0, 3.0 ], 'float64' ),
		new Uint64Array( [ Uint64.of( 268435456, 1 ) ] ),
		new Int64Array( [ -1 ] )
	];
	for ( i = 0; i < x.length; i++ ) {
		t.strictEqual( isEqualUint64Array( x[ i ], y[ i ] ), false, 'returns expected value when provided '+x[ i ]+' and '+y[ i ] );
	}
	t.end();
});
