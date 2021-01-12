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
var acoth = require( '@stdlib/math/base/special/acoth' );
var uniform = require( '@stdlib/random/base/uniform' ).factory;
var Float64Array = require( '@stdlib/array/float64' );
var acothBy = require( './../lib/main.js' );


// VARIABLES //

var rand = uniform( 1.0, 5.0 );


// FUNCTIONS //

function accessor( v ) {
	if ( v === void 0 ) {
		return;
	}
	return v;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof acothBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 7', function test( t ) {
	t.strictEqual( acothBy.length, 7, 'arity of 7' );
	t.end();
});

tape( 'the function computes the inverse hyperbolic cotangent via a callback function', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = [];
	y = [];

	expected = [];
	for ( i = 0; i < 10; i++ ) {
		x.push( rand() );
		y.push( 0.0 );
		expected.push( acoth( x[ i ] ) );
	}

	acothBy( x.length, x, 1, y, 1, accessor );
	t.deepEqual( y, expected, 'deep equal' );

	x = new Array( 5 ); // sparse array
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	expected = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	acothBy( x.length, x, 1, y, 1, accessor );
	t.deepEqual( y, expected, 'deep equal' );

	x = new Array( 5 ); // sparse array
	x[ 2 ] = rand();
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	expected = y.slice();
	expected[ 2 ] = acoth( x[ 2 ] );

	acothBy( x.length, x, 1, y, 1, accessor );
	t.deepEqual( y, expected, 'deep equal' );

	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = [
		rand(), // 0
		rand(),
		rand(), // 1
		rand(),
		rand()  // 2
	];
	y = [
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	];
	N = 3;

	acothBy( N, x, 2, y, 1, accessor );

	expected = [
		acoth( x[ 0 ] ),
		acoth( x[ 2 ] ),
		acoth( x[ 4 ] ),
		0.0,
		0.0
	];

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = [
		rand(), // 0
		rand(), // 1
		rand(), // 2
		rand(),
		rand()
	];
	y = [
		0.0, // 0
		0.0,
		0.0, // 1
		0.0,
		0.0  // 2
	];
	N = 3;

	acothBy( N, x, 1, y, 2, accessor );

	expected = [
		acoth( x[ 0 ] ),
		0.0,
		acoth( x[ 1 ] ),
		0.0,
		acoth( x[ 2 ] )
	];

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function returns a reference to the destination array', function test( t ) {
	var out;
	var x;
	var y;

	x = [ rand(), rand(), rand(), rand(), rand() ];
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	out = acothBy( x.length, x, 1, y, 1, accessor );

	t.strictEqual( out, y, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `y` unchanged', function test( t ) {
	var expected;
	var x;
	var y;

	x = [ rand(), rand(), rand(), rand(), rand() ];
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	expected = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	acothBy( -1, x, 1, y, 1, accessor );
	t.deepEqual( y, expected, 'returns `y` unchanged' );

	acothBy( 0, x, 1, y, 1, accessor );
	t.deepEqual( y, expected, 'returns `y` unchanged' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = [
		rand(), // 2
		rand(),
		rand(), // 1
		rand(),
		rand()  // 0
	];
	y = [
		0.0, // 2
		0.0, // 1
		0.0, // 0
		0.0,
		0.0
	];
	N = 3;

	acothBy( N, x, -2, y, -1, accessor );

	expected = [
		acoth( x[ 0 ] ),
		acoth( x[ 2 ] ),
		acoth( x[ 4 ] ),
		0.0,
		0.0
	];

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = [
		rand(), // 0
		rand(),
		rand(), // 1
		rand(),
		rand(), // 2
		rand()
	];
	y = [
		0.0,  // 2
		0.0,  // 1
		0.0,  // 0
		0.0,
		0.0,
		0.0
	];
	N = 3;

	acothBy( N, x, 2, y, -1, accessor );

	expected = [
		acoth( x[ 4 ] ),
		acoth( x[ 2 ] ),
		acoth( x[ 0 ] ),
		0.0,
		0.0,
		0.0
	];

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
		rand(),
		rand(), // 2
		rand(),
		rand(), // 1
		rand(),
		rand()  // 0
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

	N = 3;

	acothBy( N, x1, -2, y1, 1, accessor );
	expected = new Float64Array([
		0.0,
		0.0,
		0.0,
		acoth( x0[ 5 ] ),
		acoth( x0[ 3 ] ),
		acoth( x0[ 1 ] )
	]);

	t.deepEqual( y0, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports providing a callback execution context', function test( t ) {
	var ctx;
	var x;
	var y;

	x = [ rand(), rand(), rand(), rand(), rand() ];
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	ctx = {
		'count': 0
	};
	acothBy( x.length, x, 1, y, 1, accessor, ctx );

	t.strictEqual( ctx.count, x.length, 'returns expected value' );
	t.end();

	function accessor( v ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return v;
	}
});
