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

var tape = require( 'tape' );
var zeros = require( '@stdlib/array/base/zeros' );
var incrsumprod = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof incrsumprod, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an accumulator function', function test( t ) {
	t.strictEqual( typeof incrsumprod(), 'function', 'returns expected value' );
	t.end();
});

tape( 'the initial accumulated value is `null`', function test( t ) {
	var acc = incrsumprod();
	t.strictEqual( acc(), null, 'returns expected value' );
	t.end();
});

tape( 'the accumulator function incrementally computes a sum of products (aka dot product)', function test( t ) {
	var expected;
	var actual;
	var data;
	var acc;
	var sum;
	var N;
	var x;
	var y;
	var i;

	data = [
		[ 2.0, 3.0 ],
		[ 3.0, -1.0 ],
		[ 2.0, 5.0 ],
		[ 4.0, -4.0 ],
		[ 3.0, 0.0 ],
		[ -4.0, 5.0 ]
	];
	N = data.length;

	expected = zeros( N );
	actual = zeros( N );

	acc = incrsumprod();

	sum = 0;
	for ( i = 0; i < N; i++ ) {
		x = data[ i ][ 0 ];
		y = data[ i ][ 1 ];
		sum += x * y;
		expected[ i ] = sum;
		actual[ i ] = acc( x, y );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'if not provided an input value, the accumulator function returns the current sum of products', function test( t ) {
	var data;
	var acc;
	var i;

	data = [
		[ 2.0, 3.0 ],
		[ 3.0, -5.0 ],
		[ 1.0, 10.0 ]
	];
	acc = incrsumprod();
	for ( i = 0; i < data.length; i++ ) {
		acc( data[ i ][ 0 ], data[ i ][ 1 ] );
	}
	t.strictEqual( acc(), 1.0, 'returns expected value' );
	t.end();
});
