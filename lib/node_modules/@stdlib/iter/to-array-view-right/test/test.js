/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
var noop = require( '@stdlib/utils/noop' );
var randu = require( '@stdlib/random/iter/randu' );
var Float64Array = require( '@stdlib/array/float64' );
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var reinterpret128 = require( '@stdlib/strided/base/reinterpret-complex128' );
var array2iterator = require( '@stdlib/array/to-iterator' );
var iterator2arrayviewRight = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof iterator2arrayviewRight, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not an iterator', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterator2arrayviewRight( value, new Float64Array( 10 ) );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an iterator (begin)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterator2arrayviewRight( value, new Float64Array( 10 ), 1 );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an iterator (begin + end)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterator2arrayviewRight( value, new Float64Array( 10 ), 1, 5 );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an iterator (callback)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterator2arrayviewRight( value, new Float64Array( 10 ), noop );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an iterator (begin + callback)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterator2arrayviewRight( value, new Float64Array( 10 ), 1, noop );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an iterator (begin + end + callback)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var out = new Float64Array( 10 );
			iterator2arrayviewRight( value, out, 1, 5, noop );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an array-like object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterator2arrayviewRight( randu(), value );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an array-like object (begin)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterator2arrayviewRight( randu(), value, 1 );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an array-like object (begin + end)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterator2arrayviewRight( randu(), value, 1, 5 );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an array-like object (begin + end + callback)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterator2arrayviewRight( randu(), value, 1, 5, noop );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an array-like object (callback)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterator2arrayviewRight( randu(), value, noop );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an array-like object (begin + callback)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterator2arrayviewRight( randu(), value, 1, noop );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is neither an integer nor a callback function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterator2arrayviewRight( randu(), new Float64Array( 10 ), value );
		};
	}
});

tape( 'the function throws an error if provided a fourth argument which is neither an integer nor a callback function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var out = new Float64Array( 10 );
			iterator2arrayviewRight( randu(), out, 1, value );
		};
	}
});

tape( 'the function throws an error if provided a fifth argument which is not a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var out = new Float64Array( 10 );
			iterator2arrayviewRight( randu(), out, 1, 5, value );
		};
	}
});

tape( 'the function throws an error if provided a fifth argument which is not a function (context)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterator2arrayviewRight( randu(), new Float64Array( 10 ), 1, 5, value, {} ); // eslint-disable-line max-len
		};
	}
});

tape( 'the function fills an array-like object with values returned from an iterator', function test( t ) {
	var expected;
	var values;
	var actual;
	var out;
	var it;

	values = [ 1, 2, 3, 4 ];
	it = array2iterator( values );

	out = new Float64Array( values.length );
	actual = iterator2arrayviewRight( it, out );
	expected = new Float64Array( [ 4, 3, 2, 1 ] );

	t.equal( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function fills an array-like object with values returned from an iterator (accessors)', function test( t ) {
	var expected;
	var values;
	var actual;
	var out;
	var it;

	values = [
		new Complex128( 1.0, 2.0 ),
		new Complex128( 3.0, 4.0 ),
		new Complex128( 5.0, 6.0 ),
		new Complex128( 7.0, 8.0 )
	];
	it = array2iterator( values );

	out = new Complex128Array( values.length );
	actual = iterator2arrayviewRight( it, out );
	expected = new Float64Array( [ 7.0, 8.0, 5.0, 6.0, 3.0, 4.0, 1.0, 2.0 ] );

	t.equal( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'the function fills an array-like object view with values returned from an iterator (begin)', function test( t ) {
	var expected;
	var values;
	var actual;
	var out;
	var it;

	values = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
	it = array2iterator( values );

	out = new Float64Array( 8 );
	actual = iterator2arrayviewRight( it, out, 2 );
	expected = new Float64Array( [ 0, 0, 6, 5, 4, 3, 2, 1 ] );

	t.equal( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function fills an array-like object view with values returned from an iterator (begin)', function test( t ) {
	var expected;
	var values;
	var actual;
	var out;
	var it;

	values = [ 1, 2, 3, 4 ];
	it = array2iterator( values );

	out = new Float64Array( 8 );
	actual = iterator2arrayviewRight( it, out, 6 );
	expected = new Float64Array( [ 0, 0, 0, 0, 0, 0, 2, 1 ] );

	t.equal( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function fills an array-like object view with values returned from an iterator (begin < 0)', function test( t ) {
	var expected;
	var values;
	var actual;
	var out;
	var it;

	values = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
	it = array2iterator( values );

	out = new Float64Array( 8 );
	actual = iterator2arrayviewRight( it, out, -6 );
	expected = new Float64Array( [ 0, 0, 6, 5, 4, 3, 2, 1 ] );

	t.equal( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function fills an array-like object view with values returned from an iterator (begin + end)', function test( t ) {
	var expected;
	var values;
	var actual;
	var out;
	var it;

	values = [ 1, 2, 3, 4 ];
	it = array2iterator( values );

	out = new Float64Array( 8 );
	actual = iterator2arrayviewRight( it, out, 2, 4 );
	expected = new Float64Array( [ 0, 0, 2, 1, 0, 0, 0, 0 ] );

	t.equal( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function fills an array-like object view with values returned from an iterator (begin + end)', function test( t ) {
	var expected;
	var values;
	var actual;
	var out;
	var it;

	values = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
	it = array2iterator( values );

	out = new Float64Array( 8 );
	actual = iterator2arrayviewRight( it, out, 2, 4000 );
	expected = new Float64Array( [ 0, 0, 6, 5, 4, 3, 2, 1 ] );

	t.equal( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function fills an array-like object view with values returned from an iterator (begin<0 + end)', function test( t ) {
	var expected;
	var values;
	var actual;
	var out;
	var it;

	values = [ 1, 2, 3, 4 ];
	it = array2iterator( values );

	out = new Float64Array( 8 );
	actual = iterator2arrayviewRight( it, out, -6, 4 );
	expected = new Float64Array( [ 0, 0, 2, 1, 0, 0, 0, 0 ] );

	t.equal( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function fills an array-like object view with values returned from an iterator (begin + end<0)', function test( t ) {
	var expected;
	var values;
	var actual;
	var out;
	var it;

	values = [ 1, 2, 3, 4 ];
	it = array2iterator( values );

	out = new Float64Array( 8 );
	actual = iterator2arrayviewRight( it, out, 2, -4 );
	expected = new Float64Array( [ 0, 0, 2, 1, 0, 0, 0, 0 ] );

	t.equal( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function fills an array-like object view with values returned from an iterator (begin<0 + end<0)', function test( t ) {
	var expected;
	var values;
	var actual;
	var out;
	var it;

	values = [ 1, 2, 3, 4 ];
	it = array2iterator( values );

	out = new Float64Array( 8 );
	actual = iterator2arrayviewRight( it, out, -6, -4 );
	expected = new Float64Array( [ 0, 0, 2, 1, 0, 0, 0, 0 ] );

	t.equal( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function fills an array-like object view with values returned from an iterator (begin<0)', function test( t ) {
	var expected;
	var values;
	var actual;
	var out;
	var it;

	values = [ 1, 2, 3, 4 ];
	it = array2iterator( values );

	out = new Float64Array( 8 );
	actual = iterator2arrayviewRight( it, out, -1000 );
	expected = new Float64Array( [ 0, 0, 0, 0, 4, 3, 2, 1 ] );

	t.equal( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function fills an array-like object view with values returned from an iterator (begin + end<0)', function test( t ) {
	var expected;
	var values;
	var actual;
	var out;
	var it;

	values = [ 1, 2, 3, 4 ];
	it = array2iterator( values );

	out = new Float64Array( 8 );
	actual = iterator2arrayviewRight( it, out, 0, -100 );
	expected = new Float64Array( [ 0, 0, 0, 0, 0, 0, 0, 0 ] );

	t.equal( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports providing a callback to be invoked for each iterated value', function test( t ) {
	var expected;
	var values;
	var actual;
	var out;
	var it;

	values = [ 1, 2, 3, 4 ];
	it = array2iterator( values );

	out = new Float64Array( values.length );
	actual = iterator2arrayviewRight( it, out, scale );
	expected = new Float64Array( [ 4, 6, 6, 4 ] );

	t.equal( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function scale( v, i ) {
		return v * (i+1);
	}
});

tape( 'the function supports providing a callback to be invoked for each iterated value (accessors)', function test( t ) {
	var expected;
	var values;
	var actual;
	var out;
	var it;

	values = [ 1, 2, 3, 4 ];
	it = array2iterator( values );

	out = new Complex128Array( values.length );
	actual = iterator2arrayviewRight( it, out, clbk );
	expected = new Float64Array( [ 4, 0, 3, 1, 2, 2, 1, 3 ] );

	t.equal( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );
	t.end();

	function clbk( v, i ) {
		return new Complex128( v, i );
	}
});

tape( 'the function supports providing a callback to be invoked for each iterated value (begin)', function test( t ) {
	var expected;
	var values;
	var actual;
	var out;
	var it;

	values = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
	it = array2iterator( values );

	out = new Float64Array( 8 );
	actual = iterator2arrayviewRight( it, out, 2, scale );
	expected = new Float64Array( [ 0, 0, 36, 25, 16, 9, 4, 1 ] );

	t.equal( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function scale( v, i, n ) {
		return v * (n+1);
	}
});

tape( 'the function supports providing a callback to be invoked for each iterated value (begin<0)', function test( t ) {
	var expected;
	var values;
	var actual;
	var out;
	var it;

	values = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
	it = array2iterator( values );

	out = new Float64Array( 8 );
	actual = iterator2arrayviewRight( it, out, -6, scale );
	expected = new Float64Array( [ 0, 0, 36, 25, 16, 9, 4, 1 ] );

	t.equal( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function scale( v, i, n ) {
		return v * (n+1);
	}
});

tape( 'the function supports providing a callback to be invoked for each iterated value (begin + end)', function test( t ) {
	var expected;
	var values;
	var actual;
	var out;
	var it;

	values = [ 1, 2, 3, 4 ];
	it = array2iterator( values );

	out = new Float64Array( 8 );
	actual = iterator2arrayviewRight( it, out, 2, 4, scale );
	expected = new Float64Array( [ 0, 0, 4, 1, 0, 0, 0, 0 ] );

	t.equal( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function scale( v, i, n ) {
		return v * (n+1);
	}
});

tape( 'the function supports providing a callback to be invoked for each iterated value (begin + end)', function test( t ) {
	var expected;
	var values;
	var actual;
	var out;
	var it;

	values = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
	it = array2iterator( values );

	out = new Float64Array( 8 );
	actual = iterator2arrayviewRight( it, out, 2, 4000, scale );
	expected = new Float64Array( [ 0, 0, 36, 25, 16, 9, 4, 1 ] );

	t.equal( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function scale( v, i, n ) {
		return v * (n+1);
	}
});

tape( 'the function supports providing a callback to be invoked for each iterated value (begin<0 + end)', function test( t ) {
	var expected;
	var values;
	var actual;
	var out;
	var it;

	values = [ 1, 2, 3, 4 ];
	it = array2iterator( values );

	out = new Float64Array( 8 );
	actual = iterator2arrayviewRight( it, out, -6, 4, scale );
	expected = new Float64Array( [ 0, 0, 4, 1, 0, 0, 0, 0 ] );

	t.equal( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function scale( v, i, n ) {
		return v * (n+1);
	}
});

tape( 'the function supports providing a callback to be invoked for each iterated value (begin + end<0)', function test( t ) {
	var expected;
	var values;
	var actual;
	var out;
	var it;

	values = [ 1, 2, 3, 4 ];
	it = array2iterator( values );

	out = new Float64Array( 8 );
	actual = iterator2arrayviewRight( it, out, 2, -4, scale );
	expected = new Float64Array( [ 0, 0, 4, 1, 0, 0, 0, 0 ] );

	t.equal( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function scale( v, i, n ) {
		return v * (n+1);
	}
});

tape( 'the function supports providing a callback to be invoked for each iterated value (begin<0 + end<0)', function test( t ) {
	var expected;
	var values;
	var actual;
	var out;
	var it;

	values = [ 1, 2, 3, 4 ];
	it = array2iterator( values );

	out = new Float64Array( 8 );
	actual = iterator2arrayviewRight( it, out, -6, -4, scale );
	expected = new Float64Array( [ 0, 0, 4, 1, 0, 0, 0, 0 ] );

	t.equal( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function scale( v, i, n ) {
		return v * (n+1);
	}
});

tape( 'the function stops filling an array-like object once an iterator ends', function test( t ) {
	var expected;
	var values;
	var actual;
	var out;
	var it;

	values = [ 1, 2 ];
	it = array2iterator( values );

	out = new Float64Array( 4 );
	actual = iterator2arrayviewRight( it, out );
	expected = new Float64Array( [ 0, 0, 2, 1 ] );

	t.equal( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function stops filling an array-like object once an iterator ends (callback)', function test( t ) {
	var expected;
	var values;
	var actual;
	var out;
	var it;

	values = [ 1, 2 ];
	it = array2iterator( values );

	out = new Float64Array( 4 );
	actual = iterator2arrayviewRight( it, out, scale );
	expected = new Float64Array( [ 0, 0, 4, 1 ] );

	t.equal( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function scale( v, i, n ) {
		return v * (n+1);
	}
});

tape( 'the function supports specifying the evaluation context of a provided callback', function test( t ) {
	var expected;
	var actual;
	var values;
	var out;
	var ctx;
	var it;

	values = [ 1, 2, 3, 4 ];
	it = array2iterator( values );

	ctx = {
		'count': 0
	};
	out = new Float64Array( values.length );
	actual = iterator2arrayviewRight( it, out, scale, ctx );
	expected = new Float64Array( [ 16, 9, 4, 1 ] );

	t.equal( ctx.count, 4, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function scale( v, i, n ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return v * (n+1);
	}
});

tape( 'the function supports specifying the evaluation context of a provided callback (begin)', function test( t ) {
	var expected;
	var actual;
	var values;
	var out;
	var ctx;
	var it;

	values = [ 1, 2, 3, 4 ];
	it = array2iterator( values );

	ctx = {
		'count': 0
	};
	out = new Float64Array( 8 );
	actual = iterator2arrayviewRight( it, out, 2, scale, ctx );
	expected = new Float64Array( [ 0, 0, 0, 0, 16, 9, 4, 1 ] );

	t.equal( ctx.count, 4, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function scale( v, i, n ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return v * (n+1);
	}
});

tape( 'the function supports specifying the evaluation context of a provided callback (begin + end)', function test( t ) {
	var expected;
	var actual;
	var values;
	var out;
	var ctx;
	var it;

	values = [ 1, 2, 3, 4 ];
	it = array2iterator( values );

	ctx = {
		'count': 0
	};
	out = new Float64Array( 8 );
	actual = iterator2arrayviewRight( it, out, 2, 4, scale, ctx );
	expected = new Float64Array( [ 0, 0, 4, 1, 0, 0, 0, 0 ] );

	t.equal( ctx.count, 2, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function scale( v, i, n ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return v * (n+1);
	}
});

tape( 'the function supports infinite iterators', function test( t ) {
	var out = iterator2arrayviewRight( randu(), new Float64Array( 10 ) );
	t.equal( out.length, 10, 'has expected length' );
	t.end();
});

tape( 'the function supports infinite iterators (begin)', function test( t ) {
	var out = iterator2arrayviewRight( randu(), new Float64Array( 10 ), 5 );
	t.equal( out.length, 10, 'has expected length' );
	t.end();
});

tape( 'the function supports infinite iterators (begin + end)', function test( t ) {
	var out = iterator2arrayviewRight( randu(), new Float64Array( 10 ), 2, 6 );
	t.equal( out.length, 10, 'has expected length' );
	t.end();
});

tape( 'the function supports infinite iterators (callback)', function test( t ) {
	var out = iterator2arrayviewRight( randu(), new Float64Array( 10 ), scale );
	t.equal( out.length, 10, 'has expected length' );
	t.end();

	function scale( v, i ) {
		return v * (i+1);
	}
});

tape( 'the function supports infinite iterators (begin + callback)', function test( t ) {
	var out = iterator2arrayviewRight( randu(), new Float64Array( 10 ), 5, scale ); // eslint-disable-line max-len
	t.equal( out.length, 10, 'has expected length' );
	t.end();

	function scale( v, i ) {
		return v * (i+1);
	}
});

tape( 'the function supports infinite iterators (begin + end + callback)', function test( t ) {
	var out = iterator2arrayviewRight( randu(), new Float64Array( 10 ), 2, 6, scale ); // eslint-disable-line max-len
	t.equal( out.length, 10, 'has expected length' );
	t.end();

	function scale( v, i ) {
		return v * (i+1);
	}
});
