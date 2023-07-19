/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var Float64Array = require( '@stdlib/array/float64' );
var Float32Array = require( '@stdlib/array/float32' );
var random = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof random, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not a nonnegative integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		null,
		true,
		false,
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
			random( value, 2.0 );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a nonnegative integer (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		null,
		true,
		false,
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
			random( value, 2.0, {} );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		null,
		true,
		false,
		void 0,
		NaN,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			random( 10, 2.0, value );
		};
	}
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		null,
		true,
		false,
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
			random( 10, 2.0, {
				'dtype': value
			});
		};
	}
});

tape( 'the function returns an array containing pseudorandom numbers (default)', function test( t ) {
	var actual;
	var i;

	actual = random( 10, 2.0 );

	t.strictEqual( actual instanceof Float64Array, true, 'returns expected value' );
	t.strictEqual( actual.length, 10, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( typeof actual[ i ], 'number', 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the function supports specifying the output array data type (dtype=float64)', function test( t ) {
	var actual;
	var i;

	actual = random( 10, 2.0, {
		'dtype': 'float64'
	});

	t.strictEqual( actual instanceof Float64Array, true, 'returns expected value' );
	t.strictEqual( actual.length, 10, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( typeof actual[ i ], 'number', 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the function supports specifying the output array data type (dtype=float32)', function test( t ) {
	var actual;
	var i;

	actual = random( 10, 2.0, {
		'dtype': 'float32'
	});

	t.strictEqual( actual instanceof Float32Array, true, 'returns expected value' );
	t.strictEqual( actual.length, 10, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( typeof actual[ i ], 'number', 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the function supports specifying the output array data type (dtype=generic)', function test( t ) {
	var actual;
	var i;

	actual = random( 10, 2.0, {
		'dtype': 'generic'
	});

	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.strictEqual( actual.length, 10, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( typeof actual[ i ], 'number', 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the function supports setting the generator state', function test( t ) {
	var state;
	var arr;
	var i;

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		random( 2, 2.0 );
	}
	// Capture the current state:
	state = random.state;

	// Move to a future state...
	arr = random( 10, 2.0 );
	for ( i = 0; i < 100; i++ ) {
		random( 2, 2.0 );
	}
	// Set the state:
	random.state = state;

	// Replay previously generated values:
	t.deepEqual( random( 10, 2.0 ), arr, 'returns expected value' );

	t.end();
});
