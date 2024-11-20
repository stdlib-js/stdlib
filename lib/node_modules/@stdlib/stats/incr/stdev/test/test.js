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
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var incrstdev = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof incrstdev, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an accumulator function', function test( t ) {
	t.equal( typeof incrstdev(), 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns an accumulator function (known mean)', function test( t ) {
	t.equal( typeof incrstdev( 3.0 ), 'function', 'returns a function' );
	t.end();
});

tape( 'the function throws an error if provided a non-numeric value', function test( t ) {
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
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			incrstdev( value );
		};
	}
});

tape( 'the accumulator function incrementally computes a corrected sample standard deviation', function test( t ) {
	var expected;
	var actual;
	var data;
	var acc;
	var i;

	data = [ 2.0, 3.0, 2.0, 4.0, 3.0, 4.0 ];

	// Check against Julia:
	expected = [
		0.0,
		sqrt( 0.5 ),
		sqrt( 0.33333333333333337 ),
		sqrt( 0.9166666666666666 ),
		sqrt( 0.7 ),
		sqrt( 0.8 )
	];

	acc = incrstdev();

	actual = new Array( data.length );
	for ( i = 0; i < data.length; i++ ) {
		actual[ i ] = acc( data[ i ] );
	}
	t.deepEqual( actual, expected, 'returns expected incremental results' );
	t.end();
});

tape( 'the accumulator function incrementally computes a corrected sample standard deviation (known mean)', function test( t ) {
	var expected;
	var actual;
	var data;
	var acc;
	var i;

	data = [ 2.0, 3.0, 2.0, 4.0, 3.0, 4.0 ];

	// Test against Julia:
	expected =[
		sqrt( 1.0 ),
		sqrt( 0.5 ),
		sqrt( 0.6666666666666666 ),
		sqrt( 0.75 ),
		sqrt( 0.6 ),
		sqrt( 0.6666666666666666 )
	];

	acc = incrstdev( 3.0 );

	actual = new Array( data.length );
	for ( i = 0; i < data.length; i++ ) {
		actual[ i ] = acc( data[ i ] );
	}
	t.deepEqual( actual, expected, 'returns expected incremental results' );
	t.end();
});

tape( 'if not provided an input value, the accumulator function returns the current corrected sample sample deviation', function test( t ) {
	var data;
	var acc;
	var i;

	data = [ 2.0, 3.0, 1.0 ];
	acc = incrstdev();
	for ( i = 0; i < data.length; i++ ) {
		acc( data[ i ] );
	}
	t.equal( acc(), 1.0, 'returns the current accumulated corrected sample standard deviation' );
	t.end();
});

tape( 'if not provided an input value, the accumulator function returns the current corrected sample sample deviation (known mean)', function test( t ) {
	var data;
	var acc;
	var i;

	data = [ 2.0, 3.0, 1.0 ];
	acc = incrstdev( 2.0 );
	for ( i = 0; i < data.length; i++ ) {
		acc( data[ i ] );
	}
	t.equal( acc(), sqrt( 0.6666666666666666 ), 'returns the current accumulated corrected sample standard deviation' );
	t.end();
});

tape( 'the corrected sample standard deviation is `null` until at least 1 datum has been provided (unknown mean)', function test( t ) {
	var acc;
	var s;

	acc = incrstdev();

	s = acc();
	t.equal( s, null, 'returns null' );

	s = acc( 3.0 );
	t.notEqual( s, null, 'does not return null' );

	s = acc();
	t.notEqual( s, null, 'does not return null' );

	t.end();
});

tape( 'the corrected sample standard deviation is `null` until at least 1 datum has been provided (known mean)', function test( t ) {
	var acc;
	var s;

	acc = incrstdev( 3.0 );

	s = acc();
	t.equal( s, null, 'returns null' );

	s = acc( 3.0 );
	t.notEqual( s, null, 'does not return null' );

	s = acc();
	t.notEqual( s, null, 'does not return null' );

	t.end();
});

tape( 'the corrected sample standard deviation is `0` until at least 2 datums have been provided (unknown mean)', function test( t ) {
	var acc;
	var s;

	acc = incrstdev();

	s = acc( 2.0 );
	t.equal( s, 0.0, 'returns 0' );

	s = acc();
	t.equal( s, 0.0, 'returns 0' );

	s = acc( 3.0 );
	t.notEqual( s, 0.0, 'does not return 0' );

	s = acc();
	t.notEqual( s, 0.0, 'does not return 0' );

	t.end();
});

tape( 'if provided a `NaN`, the accumulator function returns `NaN` for all future invocations (unknown mean)', function test( t ) {
	var data;
	var acc;
	var v;
	var i;

	data = [ NaN, 2.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ];
	acc = incrstdev();
	for ( i = 0; i < data.length; i++ ) {
		v = acc( data[ i ] );
		t.equal( isnan( v ), true, 'returns expected value' );
		t.equal( isnan( acc() ), true, 'returns expected value' );
	}
	t.equal( isnan( acc() ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided a `NaN`, the accumulator function returns `NaN` for all future invocations (unknown mean)', function test( t ) {
	var data;
	var acc;
	var v;
	var i;

	data = [ NaN, 2.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ];
	acc = incrstdev( 3.14 );
	for ( i = 0; i < data.length; i++ ) {
		v = acc( data[ i ] );
		t.equal( isnan( v ), true, 'returns expected value' );
		t.equal( isnan( acc() ), true, 'returns expected value' );
	}
	t.equal( isnan( acc() ), true, 'returns expected value' );
	t.end();
});
