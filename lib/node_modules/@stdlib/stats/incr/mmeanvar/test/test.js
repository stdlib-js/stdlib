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
var randu = require( '@stdlib/random/base/randu' );
var abs = require( '@stdlib/math/base/special/abs' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var EPS = require( '@stdlib/constants/float64/eps' );
var incrmmeanvar = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof incrmmeanvar, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a positive integer for the window size', function test( t ) {
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
			incrmmeanvar( value );
		};
	}
});

tape( 'the function throws an error if not provided a positive integer for the window size', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		3.14,
		true,
		false,
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
			incrmmeanvar( value );
		};
	}
});

tape( 'the function throws an error if not provided a positive integer for the window size (output)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		3.14,
		true,
		false,
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
			incrmmeanvar( [ 0.0, 0.0 ], value );
		};
	}
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
			incrmmeanvar( value, 3 );
		};
	}
});

tape( 'the function returns an accumulator function', function test( t ) {
	t.equal( typeof incrmmeanvar( 3 ), 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns an accumulator function (output)', function test( t ) {
	t.equal( typeof incrmmeanvar( [ 0.0, 0.0 ], 3 ), 'function', 'returns a function' );
	t.end();
});

tape( 'the accumulator function computes a moving arithmetic mean and unbiased sample variance incrementally', function test( t ) {
	var expected;
	var actual;
	var data;
	var acc;
	var N;
	var i;

	data = [ 2.0, 3.0, 4.0, -1.0, 3.0, 1.0 ];
	N = data.length;

	acc = incrmmeanvar( 3 );

	expected = [
		[ 2.0, 0.0 ],
		[ 2.5, 0.5 ],
		[ 3.0, 1.0 ],
		[ 2.0, 7.0 ],
		[ 2.0, 7.0 ],
		[ 1.0, 4.0 ]
	];
	for ( i = 0; i < N; i++ ) {
		actual = acc( data[ i ] );
		t.deepEqual( actual, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the accumulator function computes a moving arithmetic mean and unbiased sample variance incrementally (output)', function test( t ) {
	var expected;
	var actual;
	var data;
	var acc;
	var out;
	var N;
	var i;

	data = [ 2.0, 3.0, 4.0, -1.0, 3.0, 1.0 ];
	N = data.length;

	out = [ 0.0, 0.0 ];
	acc = incrmmeanvar( out, 3 );

	expected = [
		[ 2.0, 0.0 ],
		[ 2.5, 0.5 ],
		[ 3.0, 1.0 ],
		[ 2.0, 7.0 ],
		[ 2.0, 7.0 ],
		[ 1.0, 4.0 ]
	];
	for ( i = 0; i < N; i++ ) {
		actual = acc( data[ i ] );
		t.strictEqual( actual, out, 'returns expected value' );
		t.deepEqual( actual, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'if not provided an input value, the accumulator function returns the current arithmetic mean and unbiased sample variance', function test( t ) {
	var expected;
	var actual;
	var delta;
	var data;
	var tol;
	var acc;
	var i;

	data = [ 2.0, 3.0, 10.0 ];
	acc = incrmmeanvar( 3 );
	for ( i = 0; i < data.length-1; i++ ) {
		acc( data[ i ] );
	}
	t.deepEqual( acc(), [ 2.5, 0.5 ], 'returns expected value' );

	acc( data[ data.length-1 ] );

	expected = [ 5.0, 19.0 ];
	actual = acc();

	t.equal( actual[ 0 ], expected[ 0 ], 'returns expected value' );

	delta = abs( actual[ 1 ] - expected[ 1 ] );
	tol = EPS * expected[ 1 ];
	t.equal( delta < tol, true, 'expected: '+expected[ 1 ]+'. actual: '+actual+'. tol: '+tol+'. delta: '+delta+'.' );

	t.end();
});

tape( 'if data has yet to be provided, the accumulator function returns `null`', function test( t ) {
	var acc = incrmmeanvar( 3 );
	t.equal( acc(), null, 'returns null' );
	t.end();
});

tape( 'if only one datum has been provided, the accumulator function returns `0` for the sample variance', function test( t ) {
	var acc = incrmmeanvar( 3 );
	var v = acc( 2.0 );
	t.equal( v[ 0 ], 2.0, 'returns expected value' );
	t.equal( v[ 1 ], 0.0, 'returns expected value' );
	t.end();
});

tape( 'if the window size is `1`, the accumulator functions always returns `0` for the sample variance', function test( t ) {
	var acc;
	var out;
	var v;
	var i;

	acc = incrmmeanvar( 1 );
	for ( i = 0; i < 100; i++ ) {
		v = randu() * 100.0;
		out = acc( v );
		t.equal( out[ 0 ], v, 'returns expected value' );
		t.equal( out[ 1 ], 0.0, 'returns expected value' );
	}
	t.end();
});

tape( 'if provided `NaN`, the accumulated values are both `NaN` for at least `W` invocations', function test( t ) {
	var expected;
	var data;
	var acc;
	var v;
	var i;

	acc = incrmmeanvar( 3 );

	data = [
		NaN,  // NaN
		3.14, // NaN, 3.14
		3.14, // NaN, 3.14, 3.14
		NaN,  // 3.14, 3.14, NaN
		3.14, // 3.14, NaN, 3.14
		3.14, // NaN, 3.14, 3.14
		3.14, // 3.14, 3.14, 3.14
		NaN,  // 3.14, 3.14, NaN
		3.14, // 3.14, NaN, 3.14
		3.14, // NaN, 3.14, 3.14
		3.14, // 3.14, 3.14, 3.14
		NaN,  // 3.14, 3.14, NaN
		3.14, // 3.14, NaN, 3.14
		3.14, // NaN, 3.14, 3.14
		NaN,  // 3.14, 3.14, NaN
		NaN,  // 3.14, NaN, NaN
		NaN,  // NaN, NaN, NaN
		NaN,  // NaN, NaN, NaN
		3.14  // NaN, NaN, 3.14
	];
	expected = [
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ 3.14, 0.0 ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ 3.14, 0.0 ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ]
	];
	for ( i = 0; i < data.length; i++ ) {
		v = acc( data[ i ] );
		if ( isnan( expected[ i ][ 0 ] ) ) {
			t.equal( isnan( v[ 0 ] ), true, 'returns expected value for window '+i );
			t.equal( isnan( v[ 1 ] ), true, 'returns expected value for window '+i );

			v = acc();
			t.equal( isnan( v[ 0 ] ), true, 'returns expected value for window '+i );
			t.equal( isnan( v[ 1 ] ), true, 'returns expected value for window '+i );
		} else {
			t.equal( v[ 0 ], expected[ i ][ 0 ], 'returns expected value for window '+i );
			t.equal( v[ 1 ], expected[ i ][ 1 ], 'returns expected value for window '+i );

			v = acc();
			t.equal( v[ 0 ], expected[ i ][ 0 ], 'returns expected value for window '+i );
			t.equal( v[ 1 ], expected[ i ][ 1 ], 'returns expected value for window '+i );
		}
	}
	t.end();
});

tape( 'if provided `NaN`, the accumulated values are both `NaN` for at least `W` invocations (W=1)', function test( t ) {
	var expected;
	var data;
	var acc;
	var v;
	var i;

	acc = incrmmeanvar( 1 );

	data = [
		NaN,
		3.14,
		3.14,
		NaN,
		3.14,
		3.14,
		3.14,
		NaN,
		3.14,
		3.14,
		3.14,
		NaN,
		3.14,
		3.14,
		NaN,
		NaN,
		NaN,
		NaN,
		3.14
	];
	expected = [
		[ NaN, NaN ],
		[ 3.14, 0.0 ],
		[ 3.14, 0.0 ],
		[ NaN, NaN ],
		[ 3.14, 0.0 ],
		[ 3.14, 0.0 ],
		[ 3.14, 0.0 ],
		[ NaN, NaN ],
		[ 3.14, 0.0 ],
		[ 3.14, 0.0 ],
		[ 3.14, 0.0 ],
		[ NaN, NaN ],
		[ 3.14, 0.0 ],
		[ 3.14, 0.0 ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ 3.14, 0.0 ]
	];
	for ( i = 0; i < data.length; i++ ) {
		v = acc( data[ i ] );
		if ( isnan( expected[ i ][ 0 ] ) ) {
			t.equal( isnan( v[ 0 ] ), true, 'returns expected value for window '+i );
			t.equal( isnan( v[ 1 ] ), true, 'returns expected value for window '+i );

			v = acc();
			t.equal( isnan( v[ 0 ] ), true, 'returns expected value for window '+i );
			t.equal( isnan( v[ 1 ] ), true, 'returns expected value for window '+i );
		} else {
			t.equal( v[ 0 ], expected[ i ][ 0 ], 'returns expected value for window '+i );
			t.equal( v[ 1 ], expected[ i ][ 1 ], 'returns expected value for window '+i );

			v = acc();
			t.equal( v[ 0 ], expected[ i ][ 0 ], 'returns expected value for window '+i );
			t.equal( v[ 1 ], expected[ i ][ 1 ], 'returns expected value for window '+i );
		}
	}
	t.end();
});
