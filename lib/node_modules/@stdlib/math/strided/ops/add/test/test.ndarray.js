/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var uniform = require( '@stdlib/random/base/uniform' ).factory;
var add = require( '@stdlib/number/float64/base/add' );
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );
var resolveStr = require( '@stdlib/strided/base/dtype-resolve-str' );
var toFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var types = require( './../lib/types.js' );
var data = require( './../lib/data.js' );
var strided = require( './../lib/ndarray.js' );
var filledBy = require( './fixtures/filled_by.js' );
var filled = require( './fixtures/filled.js' );
var get = require( './fixtures/getter.js' );


// VARIABLES //

var rand = uniform( 0.0, 10.0 );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof strided, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 13', function test( t ) {
	t.strictEqual( strided.length, 13, 'arity of 13' );
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
			var z = new Float64Array( x.length );
			strided( value, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a supported dtype', function test( t ) {
	var values;
	var i;

	values = [
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
			var z = new Float64Array( x.length );
			strided( x.length, value, x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not an array-like object', function test( t ) {
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
			var z = new Float64Array( x.length );
			strided( x.length, 'float64', value, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 );
		};
	}
});

tape( 'the function throws an error if provided a fourth argument which is not an integer', function test( t ) {
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
			var z = new Float64Array( x.length );
			strided( x.length, 'float64', x, value, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 );
		};
	}
});

tape( 'the function throws an error if provided a fifth argument which is not a nonnegative integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-1,
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
			var z = new Float64Array( x.length );
			strided( x.length, 'float64', x, 1, value, 'float64', y, 1, 0, 'float64', z, 1, 0 );
		};
	}
});

tape( 'the function throws an error if provided a sixth argument which is not a supported dtype', function test( t ) {
	var values;
	var i;

	values = [
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
			var z = new Float64Array( x.length );
			strided( x.length, 'float64', x, 1, 0, value, y, 1, 0, 'float64', z, 1, 0 );
		};
	}
});

tape( 'the function throws an error if provided a seventh argument which is not an array-like object', function test( t ) {
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
			var z = new Float64Array( x.length );
			strided( y.length, 'float64', x, 1, 0, 'float64', value, 1, 0, 'float64', z, 1, 0 );
		};
	}
});

tape( 'the function throws an error if provided an eighth argument which is not an integer', function test( t ) {
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
			var z = new Float64Array( x.length );
			strided( x.length, 'float64', x, 1, 0, 'float64', y, value, 0, 'float64', z, 1, 0 );
		};
	}
});

tape( 'the function throws an error if provided a ninth argument which is not a nonnegative integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-1,
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
			var z = new Float64Array( x.length );
			strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, value, 'float64', z, 1, 0 );
		};
	}
});

tape( 'the function throws an error if provided a tenth argument which is not a supported dtype', function test( t ) {
	var values;
	var i;

	values = [
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
			var z = new Float64Array( x.length );
			strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, value, z, 1, 0 );
		};
	}
});

tape( 'the function throws an error if provided an eleventh argument which is not an array-like object', function test( t ) {
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
			var z = new Float64Array( x.length );
			strided( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', value, 1, 0 );
		};
	}
});

tape( 'the function throws an error if provided a twelfth argument which is not an integer', function test( t ) {
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
			var z = new Float64Array( x.length );
			strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, value, 0 );
		};
	}
});

tape( 'the function throws an error if provided a thirteenth argument which is not a nonnegative integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-1,
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
			var z = new Float64Array( x.length );
			strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, value );
		};
	}
});

tape( 'the function throws an error if provided a third argument which has insufficient elements', function test( t ) {
	var values;
	var i;

	values = [
		new Float64Array( [] ),
		new Float64Array( [ rand() ] ),
		new Float64Array( [ rand(), rand() ] ),
		new Float64Array( [ rand(), rand(), rand() ] )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var y = new Float64Array( 10 );
			var z = new Float64Array( 10 );
			strided( y.length, 'float64', value, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 );
		};
	}
});

tape( 'the function throws an error if provided a seventh argument which has insufficient elements', function test( t ) {
	var values;
	var i;

	values = [
		new Float64Array( [] ),
		new Float64Array( [ rand() ] ),
		new Float64Array( [ rand(), rand() ] ),
		new Float64Array( [ rand(), rand(), rand() ] )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var z = new Float64Array( 10 );
			strided( x.length, 'float64', x, 1, 0, 'float64', value, 1, 0, 'float64', z, 1, 0 );
		};
	}
});

tape( 'the function throws an error if provided an eleventh argument which has insufficient elements', function test( t ) {
	var values;
	var i;

	values = [
		new Float64Array( [] ),
		new Float64Array( [ rand() ] ),
		new Float64Array( [ rand(), rand() ] ),
		new Float64Array( [ rand(), rand(), rand() ] )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( 10 );
			strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', value, 1, 0 );
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
		var z = new Float64Array( x.length );
		strided( x.length, 'float64', x, 1, 0, 1, 'float64', y, 1, 0, 'float64', z, 1, 0, 1 );
	}
});

tape( 'the function throws an error if provided unsupported array data types', function test( t ) {
	t.throws( foo, TypeError, 'throws an error' );
	t.end();

	function foo() {
		var x = new Float64Array( 10 );
		var y = new Uint8Array( x.length );
		var z = new Uint8Array( x.length );
		strided( x.length, 'float64', x, 1, 0, 'uint8', y, 1, 0, 'uint8', z, 1, 0 );
	}
});

tape( 'the function adds strided array elements', function test( t ) {
	var expected;
	var len;
	var re;
	var t1;
	var t2;
	var t3;
	var x;
	var y;
	var z;
	var v;
	var i;
	var j;

	re = /^complex/;

	len = 10;
	for ( i = 0; i < types.length; i += 3 ) {
		t1 = resolveStr( types[ i ] );
		t2 = resolveStr( types[ i+1 ] );
		t3 = resolveStr( types[ i+2 ] );

		x = filledBy( len, t1, rand );
		y = filledBy( len, t2, rand );
		z = filled( len, t3, 0.0 );

		strided( len, t1, x, 1, 0, t2, y, 1, 0, t3, z, 1, 0 );
		for ( j = 0; j < len; j++ ) {
			if ( t3 === 'float32' ) {
				expected = toFloat32( data[ i/3 ]( x[ j ], y[ j ] ) );
				t.strictEqual( z[ j ], expected, 'returns expected value. x: '+x[j]+'. y: '+y[j]+'. expected: '+expected+'. actual: '+z[j]+'. dtypes: '+t1+','+t2+','+t3+'.' );
			} else if ( re.test( t1 ) || re.test( t2 ) || re.test( t3 ) ) {
				expected = data[ i/3 ]( get( x, j ), get( y, j ) );
				expected = expected.toString();
				v = get( z, j ).toString();
				t.strictEqual( v, expected, 'returns expected value. x: '+get( x, j ).toString()+'. y: '+get( y, j ).toString()+'. expected: '+expected+'. actual: '+v+'. dtypes: '+t1+','+t2+','+t3+'.' );
			} else {
				expected = data[ i/3 ]( x[ j ], y[ j ] );
				t.strictEqual( z[ j ], expected, 'returns expected value. x: '+x[j]+'. y: '+y[j]+'. expected: '+expected+'. actual: '+z[j]+'. dtypes: '+t1+','+t2+','+t3+'.' );
			}
		}
	}
	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = new Float64Array([
		rand(), // 0
		rand(),
		rand(), // 1
		rand(),
		rand()  // 2
	]);
	y = new Float64Array([
		rand(), // 0
		rand(), // 1
		rand(), // 2
		rand(),
		rand()
	]);
	z = new Float64Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	strided( N, 'float64', x, 2, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 );

	expected = new Float64Array([
		add( x[ 0 ], y[ 0 ] ),
		add( x[ 2 ], y[ 1 ] ),
		add( x[ 4 ], y[ 2 ] ),
		0.0,
		0.0
	]);

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports an `x` offset', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = new Float64Array([
		rand(),
		rand(),
		rand(), // 0
		rand(), // 1
		rand()  // 2
	]);
	y = new Float64Array([
		rand(), // 0
		rand(), // 1
		rand(), // 2
		rand(),
		rand()
	]);
	z = new Float64Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	strided( N, 'float64', x, 1, 2, 'float64', y, 1, 0, 'float64', z, 1, 0 );

	expected = new Float64Array([
		add( x[ 2 ], y[ 0 ] ),
		add( x[ 3 ], y[ 1 ] ),
		add( x[ 4 ], y[ 2 ] ),
		0.0,
		0.0
	]);

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = new Float64Array([
		rand(), // 0
		rand(), // 1
		rand(), // 2
		rand(),
		rand()
	]);
	y = new Float64Array([
		rand(), // 0
		rand(),
		rand(), // 1
		rand(),
		rand()  // 2
	]);
	z = new Float64Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	strided( N, 'float64', x, 1, 0, 'float64', y, 2, 0, 'float64', z, 1, 0 );

	expected = new Float64Array([
		add( x[ 0 ], y[ 0 ] ),
		add( x[ 1 ], y[ 2 ] ),
		add( x[ 2 ], y[ 4 ] ),
		0.0,
		0.0
	]);

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` offset', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = new Float64Array([
		rand(), // 0
		rand(), // 1
		rand(), // 2
		rand(),
		rand()
	]);
	y = new Float64Array([
		rand(),
		rand(),
		rand(), // 0
		rand(), // 1
		rand()  // 2
	]);
	z = new Float64Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	strided( N, 'float64', x, 1, 0, 'float64', y, 1, 2, 'float64', z, 1, 0 );

	expected = new Float64Array([
		add( x[ 0 ], y[ 2 ] ),
		add( x[ 1 ], y[ 3 ] ),
		add( x[ 2 ], y[ 4 ] ),
		0.0,
		0.0
	]);

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `z` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = new Float64Array([
		rand(), // 0
		rand(), // 1
		rand(), // 2
		rand(),
		rand()
	]);
	y = new Float64Array([
		rand(), // 0
		rand(), // 1
		rand(), // 2
		rand(),
		rand()
	]);
	z = new Float64Array([
		0.0, // 0
		0.0,
		0.0, // 1
		0.0,
		0.0  // 2
	]);
	N = 3;

	strided( N, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 2, 0 );

	expected = new Float64Array([
		add( x[ 0 ], y[ 0 ] ),
		0.0,
		add( x[ 1 ], y[ 1 ] ),
		0.0,
		add( x[ 2 ], y[ 2 ] )
	]);

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `z` offset', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = new Float64Array([
		rand(), // 0
		rand(), // 1
		rand(), // 2
		rand(),
		rand()
	]);
	y = new Float64Array([
		rand(), // 0
		rand(), // 1
		rand(), // 2
		rand(),
		rand()
	]);
	z = new Float64Array([
		0.0,
		0.0,
		0.0, // 0
		0.0, // 1
		0.0  // 2
	]);
	N = 3;

	strided( N, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 2 );

	expected = new Float64Array([
		0.0,
		0.0,
		add( x[ 0 ], y[ 0 ] ),
		add( x[ 1 ], y[ 1 ] ),
		add( x[ 2 ], y[ 2 ] )
	]);

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function returns a reference to the destination array', function test( t ) {
	var out;
	var x;
	var y;
	var z;

	x = new Float64Array( 5 );
	y = new Float64Array( x.length );
	z = new Float64Array( x.length );

	out = strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 );

	t.strictEqual( out, z, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the destination array unchanged', function test( t ) {
	var expected;
	var x;
	var y;
	var z;

	x = new Float64Array( [ rand(), rand(), rand(), rand(), rand() ] );
	y = new Float64Array( [ rand(), rand(), rand(), rand(), rand() ] );
	z = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	expected = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	strided( -1, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 );
	t.deepEqual( z, expected, 'returns expected value' );

	strided( 0, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 );
	t.deepEqual( z, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = new Float64Array([
		rand(), // 2
		rand(),
		rand(), // 1
		rand(),
		rand()  // 0
	]);
	y = new Float64Array([
		rand(),
		rand(), // 2
		rand(), // 1
		rand(), // 0
		rand()
	]);
	z = new Float64Array([
		0.0, // 2
		0.0, // 1
		0.0, // 0
		0.0,
		0.0
	]);
	N = 3;

	strided( N, 'float64', x, -2, x.length-1, 'float64', y, -1, y.length-2, 'float64', z, -1, 2 );

	expected = new Float64Array([
		add( x[ 0 ], y[ 1 ] ),
		add( x[ 2 ], y[ 2 ] ),
		add( x[ 4 ], y[ 3 ] ),
		0.0,
		0.0
	]);

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = new Float64Array([
		rand(),
		rand(), // 0
		rand(),
		rand(), // 1
		rand(),
		rand()  // 2
	]);
	y = new Float64Array([
		rand(), // 2
		rand(),
		rand(), // 1
		rand(),
		rand(), // 0
		rand()
	]);
	z = new Float64Array([
		0.0,
		0.0,
		0.0,
		0.0, // 2
		0.0, // 1
		0.0  // 0
	]);
	N = 3;

	strided( N, 'float64', x, 2, 1, 'float64', y, -2, y.length-2, 'float64', z, -1, z.length-1 );

	expected = new Float64Array([
		0.0,
		0.0,
		0.0,
		add( x[ 5 ], y[ 0 ] ),
		add( x[ 3 ], y[ 2 ] ),
		add( x[ 1 ], y[ 4 ] )
	]);

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports array-like objects', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = {
		'length': 5,
		'0': rand(), // 0
		'1': rand(),
		'2': rand(), // 1
		'3': rand(),
		'4': rand()  // 2
	};
	y = {
		'length': 5,
		'0': rand(), // 0
		'1': rand(), // 1
		'2': rand(), // 2
		'3': rand(),
		'4': rand()
	};
	z = {
		'length': 5,
		'0': 0.0, // 0
		'1': 0.0, // 1
		'2': 0.0, // 2
		'3': 0.0,
		'4': 0.0
	};
	N = 3;

	strided( N, 'generic', x, 2, 0, 'generic', y, 1, 0, 'generic', z, 1, 0 );

	expected = {
		'length': 5,
		'0': add( x[ 0 ], y[ 0 ] ),
		'1': add( x[ 2 ], y[ 1 ] ),
		'2': add( x[ 4 ], y[ 2 ] ),
		'3': 0.0,
		'4': 0.0
	};

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});
