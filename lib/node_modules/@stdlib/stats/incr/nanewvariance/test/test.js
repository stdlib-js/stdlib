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
var incrnanewvariance = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.end();
});

tape( 'the initial accumulated value is `null`', function test( t ) {
	var acc = incrnanewvariance( 0.5 );
	t.strictEqual( acc(), null, 'returns null initially' );
	t.end();
});

tape( 'the accumulator function incrementally computes an exponentially weighted variance', function test( t ) {
	var expected;
	var actual;
	var data;
	var acc;
	var i;

	data = [ 2.0, 3.0, 2.0, 4.0, 3.0, 4.0 ];
	expected = [
		0.0,        // after 1st input
		0.25,       // after 2nd input
		0.1875,     // after 3rd input
		0.859375,   // after 4th input
		0.43359375, // after 5th input
		0.4365234375 // after 6th input
	];

	actual = [];
	acc = incrnanewvariance( 0.5 );
	for ( i = 0; i < data.length; i++ ) {
		actual.push( acc( data[ i ] ) );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'if not provided an input value, accumulator returns current variance', function test( t ) {
	var data;
	var acc;
	var i;

	data = [ 2.0, 3.0, 1.0 ];
	acc = incrnanewvariance( 0.5 );
	for ( i = 0; i < data.length; i++ ) {
		acc( data[ i ] );
	}
	t.strictEqual( acc(), 0.6875, 'returns expected variance' );
	t.end();
});

tape( 'the accumulator function skips NaN inputs', function test( t ) {
	var acc = incrnanewvariance( 0.5 );
	var v;

	v = acc( 2.0 );
	t.strictEqual( v, 0.0, 'returns 0.0 with one valid value' );

	v = acc( NaN );
	t.strictEqual( v, 0.0, 'still returns 0.0 after NaN input' );

	v = acc( 4.0 );
	t.strictEqual( v, 1.0, 'returns correct variance after second valid input' );

	t.end();
});
