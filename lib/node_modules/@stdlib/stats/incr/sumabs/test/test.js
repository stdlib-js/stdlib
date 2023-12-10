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
var incrsumabs = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof incrsumabs, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an accumulator function', function test( t ) {
	t.equal( typeof incrsumabs(), 'function', 'returns a function' );
	t.end();
});

tape( 'the initial accumulated value is `null`', function test( t ) {
	var acc = incrsumabs();
	t.equal( acc(), null, 'returns expected value' );
	t.end();
});

tape( 'the accumulator function incrementally computes a sum of absolute values', function test( t ) {
	var expected;
	var actual;
	var data;
	var acc;
	var sum;
	var N;
	var d;
	var i;

	data = [ 2.0, -3.0, 2.0, -4.0, 3.0, -4.0 ];
	N = data.length;

	expected = new Array( N );
	actual = new Array( N );

	acc = incrsumabs();

	sum = 0;
	for ( i = 0; i < N; i++ ) {
		d = data[ i ];
		sum += ( d < 0 ) ? -d : d;
		expected[ i ] = sum;
		actual[ i ] = acc( d );
	}
	t.deepEqual( actual, expected, 'returns expected incremental results' );
	t.end();
});

tape( 'if not provided an input value, the accumulator function returns the current sum of absolute values', function test( t ) {
	var data;
	var acc;
	var i;

	data = [ 2.0, -3.0, 1.0 ];
	acc = incrsumabs();
	for ( i = 0; i < data.length; i++ ) {
		acc( data[ i ] );
	}
	t.equal( acc(), 6.0, 'returns expected value' );
	t.end();
});
