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
var incrsummary = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof incrsummary, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an accumulator function', function test( t ) {
	t.equal( typeof incrsummary(), 'function', 'returns a function' );
	t.end();
});

tape( 'the initial summary is an empty object', function test( t ) {
	var acc = incrsummary();
	t.deepEqual( acc(), {}, 'returns empty object' );
	t.end();
});

tape( 'the accumulator function incrementally computes a summary', function test( t ) {
	var expected;
	var actual;
	var data;
	var acc;
	var N;
	var i;

	data = [ 2.0, 3.0, -2.0, 4.0, 3.0, 4.0 ];
	N = data.length;

	actual = new Array( N );

	acc = incrsummary();
	for ( i = 0; i < N; i++ ) {
		actual[ i ] = acc( data[ i ] );
	}
	expected = {
		'count': 6,
		'min': -2.0,
		'max': 4.0,
		'range': 6.0,
		'midrange': 1.0,
		'sum': 14.0,
		'mean': 14.0/6.0,
		'variance': 5.066666666666666,
		'stdev': 2.250925735484551,
		'skewness': -1.8822664997213263,
		'kurtosis': 3.7967451523545734
	};
	t.deepEqual( actual[ N-1 ], expected, 'returns expected incremental results' );
	t.deepEqual( acc(), expected, 'returns expected incremental results' );
	t.end();
});
