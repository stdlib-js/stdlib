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
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var incrminmaxabs = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof incrminmaxabs, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided an array-like object for an output argument', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		true,
		false,
		null,
		void 0,
		NaN,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			incrminmaxabs( value );
		};
	}
});

tape( 'the function returns an accumulator function', function test( t ) {
	t.equal( typeof incrminmaxabs(), 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns an accumulator function (output)', function test( t ) {
	t.equal( typeof incrminmaxabs( [ 0.0, 0.0 ] ), 'function', 'returns a function' );
	t.end();
});

tape( 'the accumulator function computes a minimum and maximum absolute value incrementally', function test( t ) {
	var expected;
	var actual;
	var data;
	var acc;
	var N;
	var i;

	data = [
		2.0,
		-3.0,
		-2.0,
		4.0,
		-3.0,
		-4.0,
		-2.0,
		2.0,
		-2.0,
		1.0,
		-0.0,
		4.0,
		-1.0
	];
	N = data.length;

	acc = incrminmaxabs();

	actual = [];
	for ( i = 0; i < N; i++ ) {
		actual.push( ( acc( data[ i ] ) ).slice() );
	}
	expected = [
		[ 2.0, 2.0 ],
		[ 2.0, 3.0 ],
		[ 2.0, 3.0 ],
		[ 2.0, 4.0 ],
		[ 2.0, 4.0 ],
		[ 2.0, 4.0 ],
		[ 2.0, 4.0 ],
		[ 2.0, 4.0 ],
		[ 2.0, 4.0 ],
		[ 1.0, 4.0 ],
		[ 0.0, 4.0 ],
		[ 0.0, 4.0 ],
		[ 0.0, 4.0 ]
	];

	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the accumulator function computes a minimum and maximum absolute value incrementally (output)', function test( t ) {
	var expected;
	var actual;
	var data;
	var acc;
	var out;
	var N;
	var i;

	data = [
		2.0,
		-3.0,
		-2.0,
		4.0,
		-3.0,
		-4.0,
		-2.0,
		2.0,
		-2.0,
		1.0,
		-0.0,
		4.0,
		-1.0
	];
	N = data.length;

	out = [ 0.0, 0.0 ];
	acc = incrminmaxabs( out );

	actual = [];
	for ( i = 0; i < N; i++ ) {
		actual.push( acc( data[ i ] ) );
		t.equal( actual[ i ], out, 'returns output array' );
		actual[ i ] = actual[ i ].slice();
	}
	expected = [
		[ 2.0, 2.0 ],
		[ 2.0, 3.0 ],
		[ 2.0, 3.0 ],
		[ 2.0, 4.0 ],
		[ 2.0, 4.0 ],
		[ 2.0, 4.0 ],
		[ 2.0, 4.0 ],
		[ 2.0, 4.0 ],
		[ 2.0, 4.0 ],
		[ 1.0, 4.0 ],
		[ 0.0, 4.0 ],
		[ 0.0, 4.0 ],
		[ 0.0, 4.0 ]
	];

	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'if not provided an input value, the accumulator function returns the current minimum and maximum absolute values', function test( t ) {
	var data;
	var acc;
	var i;

	data = [ 2.0, -3.0, -5.0, 4.0 ];
	acc = incrminmaxabs();
	for ( i = 0; i < data.length; i++ ) {
		acc( data[ i ] );
	}
	t.deepEqual( acc(), [ 2.0, 5.0 ], 'returns expected value' );
	t.end();
});

tape( 'if data has yet to be provided, the accumulator function returns `null`', function test( t ) {
	var acc = incrminmaxabs();
	t.equal( acc(), null, 'returns null' );
	t.end();
});

tape( 'the accumulator function correctly handles signed zeros', function test( t ) {
	var acc;
	var v;

	acc = incrminmaxabs();

	v = acc( 0.0 );
	t.equal( isPositiveZero( v[ 0 ] ), true, 'returns expected value' );
	t.equal( isPositiveZero( v[ 1 ] ), true, 'returns expected value' );

	v = acc( -0.0 );
	t.equal( isPositiveZero( v[ 0 ] ), true, 'returns expected value' );
	t.equal( isPositiveZero( v[ 1 ] ), true, 'returns expected value' );

	v = acc( 0.0 );
	t.equal( isPositiveZero( v[ 0 ] ), true, 'returns expected value' );
	t.equal( isPositiveZero( v[ 1 ] ), true, 'returns expected value' );

	acc = incrminmaxabs();

	v = acc( -0.0 );
	t.equal( isPositiveZero( v[ 0 ] ), true, 'returns expected value' );
	t.equal( isPositiveZero( v[ 1 ] ), true, 'returns expected value' );

	v = acc( 0.0 );
	t.equal( isPositiveZero( v[ 0 ] ), true, 'returns expected value' );
	t.equal( isPositiveZero( v[ 1 ] ), true, 'returns expected value' );

	v = acc( -0.0 );
	t.equal( isPositiveZero( v[ 0 ] ), true, 'returns expected value' );
	t.equal( isPositiveZero( v[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided `NaN`, the accumulated minimum and maximum values are `NaN` for all future invocations', function test( t ) {
	var data;
	var acc;
	var v;
	var i;

	data = [ 2.0, NaN, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ];
	acc = incrminmaxabs();
	for ( i = 0; i < data.length; i++ ) {
		acc( data[ i ] );
	}
	v = acc();
	t.equal( isnan( v[ 0 ] ), true, 'returns expected value' );
	t.equal( isnan( v[ 1 ] ), true, 'returns expected value' );
	t.end();
});
