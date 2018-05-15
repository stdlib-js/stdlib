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
var incrmsummary = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof incrmsummary, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a positive integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		3.14,
		true,
		null,
		void 0,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			incrmsummary( value );
		};
	}
});

tape( 'the function returns an accumulator function', function test( t ) {
	t.equal( typeof incrmsummary( 3 ), 'function', 'returns a function' );
	t.end();
});

tape( 'the initial summary is empty', function test( t ) {
	var acc = incrmsummary( 3 );
	t.deepEqual( acc(), {}, 'returns empty object' );
	t.end();
});

tape( 'the accumulator function incrementally computes a moving summary', function test( t ) {
	var expected;
	var actual;
	var data;
	var acc;
	var N;
	var i;

	data = [ 2.0, 3.0, -2.0, 4.0, 3.0, 4.0 ];
	N = data.length;

	actual = new Array( N );

	acc = incrmsummary( 3 );
	for ( i = 0; i < N; i++ ) {
		actual[ i ] = acc( data[ i ] );
	}
	expected = {
		'window': 3,
		'sum': 11.0,
		'mean': 3.666666666666666666,
		'variance': 0.3333333333333339,
		'stdev': 0.5773502691896263,
		'min': 3.0,
		'max': 4.0,
		'range': 1.0,
		'midrange': 3.5
	};
	t.deepEqual( actual[ N-1 ], expected, 'returns expected incremental results' );
	t.deepEqual( acc(), expected, 'returns expected incremental results' );
	t.end();
});
