/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var incrnanstdev = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof incrnanstdev, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an accumulator function', function test( t ) {
	t.strictEqual( typeof incrnanstdev(), 'function', 'returns expected value' );
	t.end();
});

tape( 'the function returns an accumulator function (known mean)', function test( t ) {
	t.strictEqual( typeof incrnanstdev( 3.0 ), 'function', 'returns expected value' );
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
			incrnanstdev( value );
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

	acc = incrnanstdev();

	actual = [];
	for ( i = 0; i < data.length; i++ ) {
		actual.push( acc( data[ i ] ) );
	}
	t.deepEqual( actual, expected, 'returns expected value' );
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

	acc = incrnanstdev( 3.0 );

	actual = [];
	for ( i = 0; i < data.length; i++ ) {
		actual.push( acc( data[ i ] ) );
	}
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'if not provided an input value, the accumulator function returns the current corrected sample deviation', function test( t ) {
	var data;
	var acc;
	var i;

	data = [ 2.0, 3.0, 1.0 ];
	acc = incrnanstdev();
	for ( i = 0; i < data.length; i++ ) {
		acc( data[ i ] );
	}
	t.strictEqual( acc(), 1.0, 'returns expected value' );
	t.end();
});

tape( 'if not provided an input value, the accumulator function returns the current corrected sample deviation (known mean)', function test( t ) {
	var data;
	var acc;
	var i;

	data = [ 2.0, 3.0, 1.0 ];
	acc = incrnanstdev( 2.0 );
	for ( i = 0; i < data.length; i++ ) {
		acc( data[ i ] );
	}
	t.strictEqual( acc(), sqrt( 0.6666666666666666 ), 'returns expected value' );
	t.end();
});

tape( 'the corrected sample standard deviation is `null` until at least 1 datum has been provided (unknown mean)', function test( t ) {
	var acc;
	var s;

	acc = incrnanstdev();

	s = acc();
	t.strictEqual( s, null, 'returns expected value' );

	s = acc( 3.0 );
	t.notEqual( s, null, 'returns expected value' );

	s = acc();
	t.notEqual( s, null, 'returns expected value' );

	t.end();
});

tape( 'the corrected sample standard deviation is `null` until at least 1 datum has been provided (known mean)', function test( t ) {
	var acc;
	var s;

	acc = incrnanstdev( 3.0 );

	s = acc();
	t.strictEqual( s, null, 'returns expected value' );

	s = acc( 3.0 );
	t.notEqual( s, null, 'returns expected value' );

	s = acc();
	t.notEqual( s, null, 'returns expected value' );

	t.end();
});

tape( 'the corrected sample standard deviation is `0` until at least 2 datums have been provided (unknown mean)', function test( t ) {
	var acc;
	var s;

	acc = incrnanstdev();

	s = acc( 2.0 );
	t.strictEqual( s, 0.0, 'returns expected value' );

	s = acc();
	t.strictEqual( s, 0.0, 'returns expected value' );

	s = acc( 3.0 );
	t.notEqual( s, 0.0, 'returns expected value' );

	s = acc();
	t.notEqual( s, 0.0, 'returns expected value' );

	t.end();
});

tape( 'if provided a `NaN`, the accumulator function returns the current corrected sample standard deviation (unknown mean)', function test( t ) {
	var expected;
	var actual;
	var data;
	var acc;
	var i;

	data = [ 2.0, 3.0, NaN, 2.0, 4.0, 3.0, 4.0 ];

	// Check against Julia:
	expected = [
		0.0,
		sqrt( 0.5 ),
		sqrt( 0.5 ),
		sqrt( 0.33333333333333337 ),
		sqrt( 0.9166666666666666 ),
		sqrt( 0.7 ),
		sqrt( 0.8 )
	];

	acc = incrnanstdev();

	actual = [];
	for ( i = 0; i < data.length; i++ ) {
		actual.push( acc( data[ i ] ) );
	}
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'if provided a `NaN`, the accumulator function returns the current corrected sample standard deviation (known mean)', function test( t ) {
	var expected;
	var actual;
	var data;
	var acc;
	var i;

	data = [ 2.0, 3.0, NaN, 2.0, 4.0, 3.0, 4.0 ];

	// Test against Julia:
	expected =[
		sqrt( 1.0 ),
		sqrt( 0.5 ),
		sqrt( 0.5 ),
		sqrt( 0.6666666666666666 ),
		sqrt( 0.75 ),
		sqrt( 0.6 ),
		sqrt( 0.6666666666666666 )
	];

	acc = incrnanstdev( 3.0 );

	actual = [];
	for ( i = 0; i < data.length; i++ ) {
		actual.push( acc( data[ i ] ) );
	}
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});
