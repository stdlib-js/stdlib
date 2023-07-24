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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var incrmeanvar = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof incrmeanvar, 'function', 'main export is a function' );
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
			incrmeanvar( value );
		};
	}
});

tape( 'the function returns an accumulator function', function test( t ) {
	t.equal( typeof incrmeanvar(), 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns an accumulator function (output)', function test( t ) {
	t.equal( typeof incrmeanvar( [ 0.0, 0.0 ] ), 'function', 'returns a function' );
	t.end();
});

tape( 'the accumulator function incrementally computes an arithmetic mean and unbiased sample variance', function test( t ) {
	var expected;
	var actual;
	var data;
	var acc;
	var N;
	var i;

	data = [ 2.0, 3.0, 2.0, 4.0, 3.0, 4.0 ];
	N = data.length;

	// Test against Julia:
	expected = [
		[ 2.0, 0.0 ],
		[ 2.5, 0.5 ],
		[ 7.0/3.0, 0.33333333333333337 ],
		[ 11.0/4.0, 0.9166666666666666 ],
		[ 14.0/5.0, 0.7 ],
		[ 18.0/6.0, 0.8 ]
	];

	acc = incrmeanvar();

	for ( i = 0; i < N; i++ ) {
		actual = acc( data[ i ] );
		t.deepEqual( actual, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the accumulator function incrementally computes an arithmetic mean and unbiased sample variance (output)', function test( t ) {
	var expected;
	var actual;
	var data;
	var acc;
	var out;
	var N;
	var i;

	data = [ 2.0, 3.0, 2.0, 4.0, 3.0, 4.0 ];
	N = data.length;

	// Test against Julia:
	expected = [
		[ 2.0, 0.0 ],
		[ 2.5, 0.5 ],
		[ 7.0/3.0, 0.33333333333333337 ],
		[ 11.0/4.0, 0.9166666666666666 ],
		[ 14.0/5.0, 0.7 ],
		[ 18.0/6.0, 0.8 ]
	];
	out = [ 0.0, 0.0 ];
	acc = incrmeanvar( out );

	for ( i = 0; i < N; i++ ) {
		actual = acc( data[ i ] );
		t.equal( actual, out, 'returns output array' );
		t.deepEqual( actual, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'if not provided an input value, the accumulator function returns the current mean and unbiased sample variance', function test( t ) {
	var data;
	var acc;
	var i;

	data = [ 2.0, 3.0, 1.0 ];
	acc = incrmeanvar();
	for ( i = 0; i < data.length; i++ ) {
		acc( data[ i ] );
	}
	t.deepEqual( acc(), [ 2.0, 1.0 ], 'returns expected value' );
	t.end();
});

tape( 'if data has yet to be provided, the accumulator function returns `null`', function test( t ) {
	var acc = incrmeanvar();
	t.equal( acc(), null, 'returns null' );
	t.equal( acc(), null, 'returns null' );
	t.equal( acc(), null, 'returns null' );
	t.end();
});

tape( 'the sample variance is `0` until at least 2 datums have been provided', function test( t ) {
	var acc;
	var mv;

	acc = incrmeanvar();

	mv = acc();
	t.equal( mv, null, 'returns null' );

	mv = acc( 3.0 );
	t.equal( mv[ 1 ], 0.0, 'returns expected value' );

	mv = acc();
	t.equal( mv[ 1 ], 0.0, 'returns expected value' );

	mv = acc( 5.0 );
	t.notEqual( mv[ 1 ], 0.0, 'does not return 0' );

	mv = acc();
	t.notEqual( mv[ 1 ], 0.0, 'does not return 0' );

	t.end();
});

tape( 'if provided `NaN`, the accumulated values are `NaN` for all future invocations', function test( t ) {
	var data;
	var acc;
	var v;
	var i;

	data = [ NaN, 2.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ];
	acc = incrmeanvar();
	for ( i = 0; i < data.length; i++ ) {
		v = acc( data[ i ] );
		t.equal( isnan( v[ 0 ] ), true, 'returns expected value' );
		t.equal( isnan( v[ 1 ] ), true, 'returns expected value' );

		v = acc();
		t.equal( isnan( v[ 0 ] ), true, 'returns expected value' );
		t.equal( isnan( v[ 1 ] ), true, 'returns expected value' );
	}
	t.end();
});
