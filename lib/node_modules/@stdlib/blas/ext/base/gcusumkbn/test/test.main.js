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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var Float64Array = require( '@stdlib/array/float64' );
var gcusumkbn = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gcusumkbn, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 6', function test( t ) {
	t.strictEqual( gcusumkbn.length, 6, 'has expected arity' );
	t.end();
});

tape( 'the function computes the cumulative sum', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gcusumkbn( x.length, 0.0, x, 1, y, 1 );
	expected = [
		1.0,
		3.0,
		6.0,
		10.0,
		15.0
	];
	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gcusumkbn( x.length, 10.0, x, 1, y, 1 );
	expected = [
		11.0,
		13.0,
		16.0,
		20.0,
		25.0
	];
	t.deepEqual( y, expected, 'returns expected value' );

	x = [ NaN, NaN ];
	y = [ 0.0, 0.0 ];
	gcusumkbn( x.length, 0.0, x, 1, y, 1 );

	for ( i = 0; i < y.length; i++ ) {
		t.strictEqual( isnan( y[ i ] ), true, 'returns expected value. i: ' + i );
	}

	x = [ 1.0, NaN, 3.0, NaN ];
	y = [ 0.0, 0.0, 0.0, 0.0 ];
	gcusumkbn( x.length, 0.0, x, 1, y, 1 );

	expected = [
		1.0,
		NaN,
		NaN,
		NaN
	];
	for ( i = 0; i < y.length; i++ ) {
		if ( isnan( expected[ i ] ) ) {
			t.strictEqual( isnan( y[ i ] ), true, 'returns expected value. i: ' + i );
		} else {
			t.strictEqual( y[ i ], expected[ i ], true, 'returns expected value. i: ' + i );
		}
	}

	x = [ 1.0, 1.0e100, 1.0, -1.0e100 ];
	y = [ 0.0, 0.0, 0.0, 0.0 ];
	gcusumkbn( x.length, 0.0, x, 1, y, 1 );

	expected = [
		1.0,
		1.0e100,
		1.0e100,
		2.0
	];
	t.deepEqual( y, expected, 'returns expected value' );

	x = [];
	y = [];
	expected = [];
	for ( i = 0; i < 1e3; i++ ) {
		x.push( i+1 );
		y.push( 0.0 );
		if ( i === 0 ) {
			expected.push( x[ i ] );
		} else {
			expected.push( expected[ i-1 ] + x[ i ] );
		}
	}
	gcusumkbn( x.length, 0.0, x, 1, y, 1 );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function computes the cumulative sum (accessors)', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gcusumkbn( x.length, 0.0, toAccessorArray( x ), 1, toAccessorArray( y ), 1 );
	expected = [
		1.0,
		3.0,
		6.0,
		10.0,
		15.0
	];
	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gcusumkbn( x.length, 10.0, toAccessorArray( x ), 1, toAccessorArray( y ), 1 );
	expected = [
		11.0,
		13.0,
		16.0,
		20.0,
		25.0
	];
	t.deepEqual( y, expected, 'returns expected value' );

	x = [ NaN, NaN ];
	y = [ 0.0, 0.0 ];
	gcusumkbn( x.length, 0.0, toAccessorArray( x ), 1, toAccessorArray( y ), 1 );

	for ( i = 0; i < y.length; i++ ) {
		t.strictEqual( isnan( y[ i ] ), true, 'returns expected value. i: ' + i );
	}

	x = [ 1.0, NaN, 3.0, NaN ];
	y = [ 0.0, 0.0, 0.0, 0.0 ];
	gcusumkbn( x.length, 0.0, toAccessorArray( x ), 1, toAccessorArray( y ), 1 );

	expected = [
		1.0,
		NaN,
		NaN,
		NaN
	];
	for ( i = 0; i < y.length; i++ ) {
		if ( isnan( expected[ i ] ) ) {
			t.strictEqual( isnan( y[ i ] ), true, 'returns expected value. i: ' + i );
		} else {
			t.strictEqual( y[ i ], expected[ i ], true, 'returns expected value. i: ' + i );
		}
	}

	x = [ 1.0, 1.0e100, 1.0, -1.0e100 ];
	y = [ 0.0, 0.0, 0.0, 0.0 ];
	gcusumkbn( x.length, 0.0, toAccessorArray( x ), 1, toAccessorArray( y ), 1 );

	expected = [
		1.0,
		1.0e100,
		1.0e100,
		2.0
	];
	t.deepEqual( y, expected, 'returns expected value' );

	x = [];
	y = [];
	expected = [];
	for ( i = 0; i < 1e3; i++ ) {
		x.push( i+1 );
		y.push( 0.0 );
		if ( i === 0 ) {
			expected.push( x[ i ] );
		} else {
			expected.push( expected[ i-1 ] + x[ i ] );
		}
	}
	gcusumkbn( x.length, 0.0, toAccessorArray( x ), 1, toAccessorArray( y ), 1 );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output array', function test( t ) {
	var out;
	var x;
	var y;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	out = gcusumkbn( x.length, 0.0, x, 1, y, 1 );

	t.strictEqual( out, y, 'same reference' );
	t.end();
});

tape( 'the function returns a reference to the output array (accessors)', function test( t ) {
	var out;
	var x;
	var y;

	x = toAccessorArray( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = toAccessorArray( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	out = gcusumkbn( x.length, 0.0, x, 1, y, 1 );

	t.strictEqual( out, y, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `y` unchanged', function test( t ) {
	var expected;
	var x;
	var y;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	y = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];

	expected = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];

	gcusumkbn( -1, 0.0, x, 1, y, 1 );
	t.deepEqual( y, expected, 'returns `y` unchanged' );

	gcusumkbn( 0, 0.0, x, 1, y, 1 );
	t.deepEqual( y, expected, 'returns `y` unchanged' );

	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var expected;
	var x;
	var y;

	x = [
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	];
	y = [
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	];

	gcusumkbn( 3, 0.0, x, 2, y, 1 );

	expected = [ 1.0, 4.0, 9.0, 0.0, 0.0 ];

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports an `x` stride (accessors)', function test( t ) {
	var expected;
	var x;
	var y;

	x = [
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	];
	y = [
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	];

	gcusumkbn( 3, 0.0, toAccessorArray( x ), 2, toAccessorArray( y ), 1 );

	expected = [ 1.0, 4.0, 9.0, 0.0, 0.0 ];

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
	var expected;
	var x;
	var y;

	x = [
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	];
	y = [
		0.0, // 0
		0.0,
		0.0, // 1
		0.0,
		0.0  // 2
	];

	gcusumkbn( 3, 0.0, x, 1, y, 2 );

	expected = [ 1.0, 0.0, 3.0, 0.0, 6.0 ];

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` stride (accessors)', function test( t ) {
	var expected;
	var x;
	var y;

	x = [
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	];
	y = [
		0.0, // 0
		0.0,
		0.0, // 1
		0.0,
		0.0  // 2
	];

	gcusumkbn( 3, 0.0, toAccessorArray( x ), 1, toAccessorArray( y ), 2 );

	expected = [ 1.0, 0.0, 3.0, 0.0, 6.0 ];

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var x;
	var y;

	x = [
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	];
	y = [
		0.0, // 2
		0.0, // 1
		0.0, // 0
		0.0,
		0.0
	];

	gcusumkbn( 3, 0.0, x, -2, y, -1 );

	expected = [ 9.0, 8.0, 5.0, 0.0, 0.0 ];

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports negative strides (accessors)', function test( t ) {
	var expected;
	var x;
	var y;

	x = [
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	];
	y = [
		0.0, // 2
		0.0, // 1
		0.0, // 0
		0.0,
		0.0
	];

	gcusumkbn( 3, 0.0, toAccessorArray( x ), -2, toAccessorArray( y ), -1 );

	expected = [ 9.0, 8.0, 5.0, 0.0, 0.0 ];

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var expected;
	var x;
	var y;

	x = [
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0, // 2
		6.0
	];
	y = [
		0.0,  // 2
		0.0,  // 1
		0.0,  // 0
		0.0,
		0.0,
		0.0
	];

	gcusumkbn( 3, 0.0, x, 2, y, -1 );

	expected = [ 9.0, 4.0, 1.0, 0.0, 0.0, 0.0 ];

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var expected;
	var x0;
	var y0;
	var x1;
	var y1;

	// Initial arrays...
	x0 = new Float64Array([
		1.0,
		2.0, // 2
		3.0,
		4.0, // 1
		5.0,
		6.0  // 0
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

	gcusumkbn( 3, 0.0, x1, -2, y1, 1 );
	expected = new Float64Array( [ 0.0, 0.0, 0.0, 6.0, 10.0, 12.0 ] );

	t.deepEqual( y0, expected, 'deep equal' );
	t.end();
});
