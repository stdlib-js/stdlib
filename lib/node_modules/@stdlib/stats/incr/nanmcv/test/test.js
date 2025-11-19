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
var randu = require( '@stdlib/random/base/randu' );
var abs = require( '@stdlib/math/base/special/abs' );
var EPS = require( '@stdlib/constants/float64/eps' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var zeros = require( '@stdlib/array/base/zeros' );
var incrnanmcv = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof incrnanmcv, 'function', 'main export is a function' );
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
			incrnanmcv( value );
		};
	}
});

tape( 'the function throws an error if not provided a positive integer for the window size (known mean)', function test( t ) {
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
			incrnanmcv( value, 3.0 );
		};
	}
});

tape( 'the function throws an error if not provided a number as the mean value', function test( t ) {
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
			incrnanmcv( 3, value );
		};
	}
});

tape( 'the function returns an accumulator function', function test( t ) {
	t.strictEqual( typeof incrnanmcv( 3 ), 'function', 'returns expected value' );
	t.end();
});

tape( 'the function returns an accumulator function (known mean)', function test( t ) {
	t.strictEqual( typeof incrnanmcv( 3, 3.0 ), 'function', 'returns expected value' );
	t.end();
});

tape( 'the accumulator function computes a moving coefficient of variation incrementally', function test( t ) {
	var expected;
	var actual;
	var data;
	var acc;
	var N;
	var i;

	data = [ 2.0, 3.0, 4.0, -1.0, 3.0, 1.0 ];
	N = data.length;

	expected = [
		0.0/2.0,
		sqrt( 0.5 )/2.5,
		sqrt( 1.0 )/3.0,
		sqrt( 7.0 )/2.0,
		sqrt( 7.0 )/2.0,
		sqrt( 4.0 )/1.0
	];

	acc = incrnanmcv( 3 );

	actual = zeros( N );
	for ( i = 0; i < N; i++ ) {
		actual[ i ] = acc( data[ i ] );
	}
	t.deepEqual( actual, expected, 'returns expected results' );
	t.end();
});

tape( 'the accumulator function computes a moving coefficient of variation incrementally (known mean)', function test( t ) {
	var expected;
	var actual;
	var data;
	var acc;
	var N;
	var i;

	data = [ 2.0, 3.0, 4.0, -1.0, 3.0, 1.0 ];
	N = data.length;

	acc = incrnanmcv( 3, 2.0 );

	actual = zeros( N );
	for ( i = 0; i < N; i++ ) {
		actual[ i ] = acc( data[ i ] );
	}
	expected = [
		0.0/2.0,
		sqrt( 0.5 )/2.0,
		sqrt( 1.6666666666666667 )/2.0,
		sqrt( 4.666666666666667 )/2.0,
		sqrt( 4.666666666666667 )/2.0,
		sqrt( 3.6666666666666665 )/2.0
	];
	t.deepEqual( actual, expected, 'returns expected results' );
	t.end();
});

tape( 'if not provided an input value, the accumulator function returns the current accumulated value', function test( t ) {
	var expected;
	var actual;
	var delta;
	var data;
	var tol;
	var acc;
	var i;

	data = [ 2.0, 3.0, 10.0 ];
	acc = incrnanmcv( 3 );
	for ( i = 0; i < data.length-1; i++ ) {
		acc( data[ i ] );
	}
	t.strictEqual( acc(), sqrt( 0.5 )/2.5, 'returns expected value' );

	acc( data[ data.length-1 ] );

	expected = sqrt( 19.0 )/5.0;
	actual = acc();
	delta = abs( actual - expected );
	tol = EPS * expected;

	t.strictEqual( delta < tol, true, 'expected: '+expected+'. actual: '+actual+'. tol: '+tol+'. delta: '+delta+'.' );
	t.end();
});

tape( 'if not provided an input value, the accumulator function returns the current accumulated value (known mean)', function test( t ) {
	var expected;
	var actual;
	var delta;
	var data;
	var tol;
	var acc;
	var i;

	data = [ 2.0, 3.0, 10.0 ];
	acc = incrnanmcv( 3, 5.0 );
	for ( i = 0; i < data.length-1; i++ ) {
		acc( data[ i ] );
	}
	t.strictEqual( acc(), sqrt( 6.5 )/5.0, 'returns expected value' );

	acc( data[ data.length-1 ] );

	expected = sqrt( 12.666666666666666 )/5.0;
	actual = acc();
	delta = abs( actual - expected );
	tol = EPS * expected;

	t.strictEqual( delta < tol, true, 'expected: '+expected+'. actual: '+actual+'. tol: '+tol+'. delta: '+delta+'.' );
	t.end();
});

tape( 'if data has yet to be provided, the accumulator function returns `null`', function test( t ) {
	var acc = incrnanmcv( 3 );
	t.strictEqual( acc(), null, 'returns expected value' );
	t.end();
});

tape( 'if data has yet to be provided, the accumulator function returns `null` (known mean)', function test( t ) {
	var acc = incrnanmcv( 3, 3.0 );
	t.strictEqual( acc(), null, 'returns expected value' );
	t.end();
});

tape( 'if only one datum has been provided and the mean is unknown, the accumulator function returns `0`', function test( t ) {
	var acc = incrnanmcv( 3 );
	acc( 2.0 );
	t.strictEqual( acc(), 0.0, 'returns expected value' );
	t.end();
});

tape( 'if only one datum has been provided and the mean is known, the accumulator function may not return `0`', function test( t ) {
	var acc = incrnanmcv( 3, 30 );
	acc( 2.0 );
	t.notEqual( acc(), 0.0, 'returns expected value' );
	t.end();
});

tape( 'if the window size is `1` and the mean is unknown, the accumulator function always returns `0`', function test( t ) {
	var acc;
	var cv;
	var i;

	acc = incrnanmcv( 1 );
	for ( i = 0; i < 100; i++ ) {
		cv = acc( randu() * 100.0 );
		t.strictEqual( cv, 0.0, 'returns expected value' );
	}
	t.end();
});

tape( 'if the window size is `1` and the mean is known, the accumulator function may not always return `0`', function test( t ) {
	var acc;
	var cv;
	var i;

	acc = incrnanmcv( 1, 500.0 ); // mean is outside the range of simulated values so the variance should never be zero
	for ( i = 0; i < 100; i++ ) {
		cv = acc( randu() * 100.0 );
		t.notEqual( cv, 0.0, 'returns expected value' );
	}
	t.end();
});

tape( 'if provided `NaN`, the value is ignored (unknown mean)', function test( t ) {
	var expected;
	var actual;
	var delta;
	var data;
	var acc;
	var tol;
	var i;

	acc = incrnanmcv( 3 );

	data = [
		NaN,
		3.2,
		3.0,
		NaN,
		1.66,
		2.72,
		1.41,
		NaN,
		3.8,
		10.0,
		1.5,
		NaN,
		1.71,
		3.66,
		NaN,
		NaN,
		NaN,
		NaN,
		3.0
	];

	expected = [
		null,                 // []                 (NaN ignored)
		0.0,                  // [3.2]
		0.045619792334616015, // [3.2, 3.0]
		0.045619792334616015, // [3.2, 3.0]         (NaN ignored)
		0.31960948725890576,  // [3.2, 3.0, 1.66]
		0.28732678125320804,  // [3.0, 1.66, 2.72]
		0.360355151282696,    // [1.66, 2.72, 1.41]
		0.360355151282696,    // [1.66, 2.72, 1.41] (NaN ignored)
		0.4527779582477939,   // [2.72, 1.41, 3.8]
		0.8744748938856596,   // [1.41, 3.8, 10.0]
		0.8620763896855141,   // [3.8, 10.0, 1.5]
		0.8620763896855141,   // [3.8, 10.0, 1.5]   (NaN ignored)
		1.1009824477893335,   // [10.0, 1.5, 1.71]
		0.5201274829686575,   // [1.5, 1.71, 3.66]
		0.5201274829686575,   // [1.5, 1.71, 3.66]  (NaN ignored)
		0.5201274829686575,   // [1.5, 1.71, 3.66]  (NaN ignored)
		0.5201274829686575,   // [1.5, 1.71, 3.66]  (NaN ignored)
		0.5201274829686575,   // [1.5, 1.71, 3.66]  (NaN ignored)
		0.35548979042616236   // [1.71, 3.66, 3.0]
	];

	for ( i = 0; i < data.length; i++ ) {
		actual = acc( data[ i ] );
		if ( expected[ i ] === null ) {
			t.strictEqual( actual, null, 'returns expected value for window '+i );
			t.strictEqual( acc(), null, 'returns expected value for window '+i );
		} else {
			delta = abs( actual - expected[ i ] );
			tol = EPS * expected[ i ];
			t.strictEqual( delta <= tol, true, 'expected: '+expected[i]+'. actual: '+actual+'. tol: '+tol+'. delta: '+delta+'.' );
			t.strictEqual( acc(), actual, 'returns expected value for window '+i );
		}
	}
	t.end();
});

tape( 'if provided `NaN`, the value is ignored (known mean)', function test( t ) {
	var expected;
	var actual;
	var delta;
	var data;
	var acc;
	var tol;
	var i;

	acc = incrnanmcv( 3, 3.14 );

	data = [
		NaN,
		3.14,
		2.5,
		NaN,
		4.0,
		5.5,
		3.0,
		NaN,
		2.2,
		7.7,
		4.4,
		NaN,
		3.3,
		6.6,
		NaN,
		NaN,
		NaN,
		NaN,
		3.9
	];

	expected = [
		null,                // []                (NaN ignored)
		0.0,                 // [3.14]
		0.1441236751463027,  // [3.14, 2.5]
		0.1441236751463027,  // [3.14, 2.5]       (NaN ignored)
		0.19710948953515298, // [3.14, 2.5, 4.0]
		0.47660169366956523, // [2.5, 4.0, 5.5]
		0.4625624880347849,  // [4.0, 5.5, 3.0]
		0.4625624880347849,  // [4.0, 5.5, 3.0]   (NaN ignored)
		0.4677952618338482,  // [5.5, 3.0, 2.2]
		0.856460952268003,   // [3.0, 2.2, 7.7]
		0.8868688195149519,  // [2.2, 7.7, 4.4]
		0.8868688195149519,  // [2.2, 7.7, 4.4]   (NaN ignored)
		0.8703614427753308,  // [7.7, 4.4, 3.3]
		0.6776982264009902,  // [4.4, 3.3, 6.6]
		0.6776982264009902,  // [4.4, 3.3, 6.6]   (NaN ignored)
		0.6776982264009902,  // [4.4, 3.3, 6.6]   (NaN ignored)
		0.6776982264009902,  // [4.4, 3.3, 6.6]   (NaN ignored)
		0.6776982264009902,  // [4.4, 3.3, 6.6]   (NaN ignored)
		0.6520190246234627   // [3.3, 6.6, 3.9]
	];

	for ( i = 0; i < data.length; i++ ) {
		actual = acc( data[ i ] );
		if ( expected[ i ] === null ) {
			t.strictEqual( actual, null, 'returns expected value for window '+i );
			t.strictEqual( acc(), null, 'returns expected value for window '+i );
		} else {
			delta = abs( actual - expected[ i ] );
			tol = EPS * expected[ i ];
			t.strictEqual( delta <= tol, true, 'expected: '+expected[i]+'. actual: '+actual+'. tol: '+tol+'. delta: '+delta+'.' );
			t.strictEqual( acc(), actual, 'returns expected value for window '+i );
		}
	}
	t.end();
});

tape( 'if provided `NaN`, the value is ignored (unknown mean, W=1)', function test( t ) {
	var expected;
	var actual;
	var data;
	var acc;
	var i;

	acc = incrnanmcv( 1 );

	data = [
		NaN,
		2.0,
		3.5,
		NaN,
		4.2,
		3.3,
		5.5,
		NaN,
		1.1,
		2.2,
		6.6,
		NaN,
		7.7,
		8.8,
		NaN,
		NaN,
		NaN,
		NaN,
		9.9
	];

	expected = [
		null, // []      (NaN ignored)
		0.0,  // [2.0]
		0.0,  // [3.5]
		0.0,  // [3.5]   (NaN ignored)
		0.0,  // [4.2]
		0.0,  // [3.3]
		0.0,  // [5.5]
		0.0,  // [5.5]   (NaN ignored)
		0.0,  // [1.1]
		0.0,  // [2.2]
		0.0,  // [6.6]
		0.0,  // [6.6]   (NaN ignored)
		0.0,  // [7.7]
		0.0,  // [8.8]
		0.0,  // [8.8]   (NaN ignored)
		0.0,  // [8.8]   (NaN ignored)
		0.0,  // [8.8]   (NaN ignored)
		0.0,  // [8.8]   (NaN ignored)
		0.0   // [9.9]
	];

	for ( i = 0; i < data.length; i++ ) {
		actual = acc( data[ i ] );
		if ( expected[ i ] === null ) {
			t.strictEqual( actual, null, 'returns expected value for window '+i );
			t.strictEqual( acc(), null, 'returns expected value for window '+i );
		} else {
			t.strictEqual( actual, expected[ i ], 'returns expected value for window '+i );
			t.strictEqual( acc(), expected[ i ], 'returns expected value for window '+i );
		}
	}
	t.end();
});

tape( 'if provided `NaN`, the value is ignored (known mean, W=1)', function test( t ) {
	var expected;
	var actual;
	var delta;
	var data;
	var acc;
	var tol;
	var i;

	acc = incrnanmcv( 1, 3.14 );

	data = [
		NaN,
		3.14,
		4.0,
		NaN,
		2.0,
		5.0,
		6.0,
		NaN,
		3.5,
		2.5,
		1.5,
		NaN,
		4.5,
		5.5,
		NaN,
		NaN,
		NaN,
		NaN,
		2.2
	];

	expected = [
		null,                // []      (NaN ignored)
		0.0,                 // [3.14]
		0.2738853503184713,  // [4.0]
		0.2738853503184713,  // [4.0]   (NaN ignored)
		0.36305732484076436, // [2.0]
		0.5923566878980892,  // [5.0]
		0.9108280254777069,  // [6.0]
		0.9108280254777069,  // [6.0]   (NaN ignored)
		0.1146496815286624,  // [3.5]
		0.20382165605095545, // [2.5]
		0.5222929936305732,  // [1.5]
		0.5222929936305732,  // [1.5]   (NaN ignored)
		0.4331210191082802,  // [4.5]
		0.751592356687898,   // [5.5]
		0.751592356687898,   // [5.5]   (NaN ignored)
		0.751592356687898,   // [5.5]   (NaN ignored)
		0.751592356687898,   // [5.5]   (NaN ignored)
		0.751592356687898,   // [5.5]   (NaN ignored)
		0.29936305732484053  // [2.2]
	];

	for ( i = 0; i < data.length; i++ ) {
		actual = acc( data[ i ] );
		if ( expected[ i ] === null ) {
			t.strictEqual( actual, null, 'returns expected value for window '+i );
			t.strictEqual( acc(), null, 'returns expected value for window '+i );
		} else {
			delta = abs( actual - expected[ i ] );
			tol = EPS * expected[ i ];
			t.strictEqual( delta <= tol, true, 'expected: '+expected[i]+'. actual: '+actual+'. tol: '+tol+'. delta: '+delta+'.' );
			t.strictEqual( acc(), actual, 'returns expected value for window '+i );
		}
	}
	t.end();
});
