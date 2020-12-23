/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var floor = require( '@stdlib/math/base/special/floor' );
var round = require( '@stdlib/math/base/special/round' );
var randu = require( '@stdlib/random/base/randu' );
var abs = require( '@stdlib/math/base/special/abs' );
var filledarray = require( '@stdlib/array/filled' );
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );
var types = require( './../lib/types.json' );
var strided = require( './../lib/abs.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof strided, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', function test( t ) {
	t.strictEqual( strided.length, 5, 'arity of 5' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not an integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			strided( value, x, 1, y, 1 );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an array-like object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			strided( x.length, value, 1, y, 1 );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not an integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			strided( x.length, x, value, y, 1 );
		};
	}
});

tape( 'the function throws an error if provided a fourth argument which is not an array-like object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			strided( y.length, x, 1, value, 1 );
		};
	}
});

tape( 'the function throws an error if provided a fifth argument which is not an integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			strided( x.length, x, 1, y, value );
		};
	}
});

tape( 'the function throws an error if provided a second argument which has insufficient elements', function test( t ) {
	var values;
	var i;

	values = [
		new Float64Array( [] ),
		new Float64Array( [ 1.0 ] ),
		new Float64Array( [ 1.0, 2.0 ] ),
		new Float64Array( [ 1.0, 2.0, 3.0 ] )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var y = new Float64Array( 10 );
			strided( y.length, value, 1, y, 1 );
		};
	}
});

tape( 'the function throws an error if provided a fourth argument which has insufficient elements', function test( t ) {
	var values;
	var i;

	values = [
		new Float64Array( [] ),
		new Float64Array( [ 1.0 ] ),
		new Float64Array( [ 1.0, 2.0 ] ),
		new Float64Array( [ 1.0, 2.0, 3.0 ] )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			strided( x.length, x, 1, value, 1 );
		};
	}
});

tape( 'the function throws an error if provided insufficient arguments', function test( t ) {
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		strided();
	}
});

tape( 'the function throws an error if provided too many arguments', function test( t ) {
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		var x = new Float64Array( 10 );
		var y = new Float64Array( x.length );
		strided( x.length, x, 1, 0, y, 1, 0 );
	}
});

tape( 'the function throws an error if provided unsupported array data types', function test( t ) {
	t.throws( foo, TypeError, 'throws an error' );
	t.end();

	function foo() {
		var x = new Float64Array( 10 );
		var y = new Uint8Array( x.length );
		strided( x.length, x, 1, y, 1 );
	}
});

tape( 'the function computes the absolute value', function test( t ) {
	var expected;
	var len;
	var t1;
	var t2;
	var x;
	var y;
	var i;
	var j;

	len = 10;
	for ( i = 0; i < types.length; i += 2 ) {
		t1 = types[ i ];
		t2 = types[ i+1 ];
		x = filledarray( 0.0, len, t1 );
		y = filledarray( 0.0, len, t2 );
		for ( j = 0; j < len; j++ ) {
			x[ j ] = round( (randu()*200.0) - 100.0 );
		}
		strided( len, x, 1, y, 1 );
		for ( j = 0; j < len; j++ ) {
			expected = abs( x[ j ] );
			t.strictEqual( y[ j ], expected, 'returns expected value. x: '+x[j]+'. expected: '+expected+'. actual: '+y[j]+'. dtypes: '+t1+','+t2+'.' );
		}
	}
	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Float64Array([
		-1.0, // 0
		-2.0,
		-3.0, // 1
		-4.0,
		-5.0  // 2
	]);
	y = new Float64Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	strided( N, x, 2, y, 1 );

	expected = new Float64Array([
		abs( x[ 0 ] ),
		abs( x[ 2 ] ),
		abs( x[ 4 ] ),
		0.0,
		0.0
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Float64Array([
		-1.0, // 0
		-2.0, // 1
		-3.0, // 2
		-4.0,
		-5.0
	]);
	y = new Float64Array([
		0.0, // 0
		0.0,
		0.0, // 1
		0.0,
		0.0  // 2
	]);
	N = 3;

	strided( N, x, 1, y, 2 );

	expected = new Float64Array([
		abs( x[ 0 ] ),
		0.0,
		abs( x[ 1 ] ),
		0.0,
		abs( x[ 2 ] )
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function returns a reference to the destination array', function test( t ) {
	var out;
	var x;
	var y;

	x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
	y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	out = strided( x.length, x, 1, y, 1 );

	t.strictEqual( out, y, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `y` unchanged', function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
	y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	expected = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	strided( -1, x, 1, y, 1 );
	t.deepEqual( y, expected, 'returns `y` unchanged' );

	strided( 0, x, 1, y, 1 );
	t.deepEqual( y, expected, 'returns `y` unchanged' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Float64Array([
		-1.0, // 2
		-2.0,
		-3.0, // 1
		-4.0,
		-5.0  // 0
	]);
	y = new Float64Array([
		0.0, // 2
		0.0, // 1
		0.0, // 0
		0.0,
		0.0
	]);
	N = 3;

	strided( N, x, -2, y, -1 );

	expected = new Float64Array([
		abs( x[ 0 ] ),
		abs( x[ 2 ] ),
		abs( x[ 4 ] ),
		0.0,
		0.0
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Float64Array([
		-1.0, // 0
		-2.0,
		-3.0, // 1
		-4.0,
		-5.0, // 2
		-6.0
	]);
	y = new Float64Array([
		0.0,  // 2
		0.0,  // 1
		0.0,  // 0
		0.0,
		0.0,
		0.0
	]);
	N = 3;

	strided( N, x, 2, y, -1 );

	expected = new Float64Array([
		abs( x[ 4 ] ),
		abs( x[ 2 ] ),
		abs( x[ 0 ] ),
		0.0,
		0.0,
		0.0
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var expected;
	var x0;
	var y0;
	var x1;
	var y1;
	var N;

	// Initial arrays...
	x0 = new Float64Array([
		-1.0,
		-2.0, // 2
		-3.0,
		-4.0, // 1
		-5.0,
		-6.0  // 0
	]);
	y0 = new Float64Array([
		0.0,
		0.0,
		0.0,
		0.0, // 0
		0.0, // 1
		0.0  // 2
	]);

	// Create offset views...
	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // begin at 2nd element
	y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // begin at the 4th element

	N = floor( x0.length / 2 );

	strided( N, x1, -2, y1, 1 );
	expected = new Float64Array([
		0.0,
		0.0,
		0.0,
		abs( x0[ 5 ] ),
		abs( x0[ 3 ] ),
		abs( x0[ 1 ] )
	]);

	t.deepEqual( y0, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports array-like objects', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = {
		'length': 5,
		'0': -1.0, // 0
		'1': -2.0,
		'2': -3.0, // 1
		'3': -4.0,
		'4': -5.0  // 2
	};
	y = {
		'length': 5,
		'0': 0.0, // 0
		'1': 0.0, // 1
		'2': 0.0, // 2
		'3': 0.0,
		'4': 0.0
	};
	N = 3;

	strided( N, x, 2, y, 1 );

	expected = {
		'length': 5,
		'0': abs( x[ 0 ] ),
		'1': abs( x[ 2 ] ),
		'2': abs( x[ 4 ] ),
		'3': 0.0,
		'4': 0.0
	};

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});
