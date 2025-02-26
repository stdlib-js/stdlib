/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var add = require( '@stdlib/number/float64/base/add' );
var uniform = require( '@stdlib/random/base/uniform' ).factory;
var addBy = require( './../lib/ndarray.js' );


// VARIABLES //

var rand = uniform( -10.0, 10.0 );


// FUNCTIONS //

function accessor( values ) {
	if ( values[ 0 ] === void 0 || values[ 1 ] === void 0 ) {
		return;
	}
	return values;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof addBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 12', function test( t ) {
	t.strictEqual( addBy.length, 12, 'arity of 12' );
	t.end();
});

tape( 'the function performs element-wise addition via a callback function', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var i;

	x = [];
	y = [];
	z = [];

	expected = [];
	for ( i = 0; i < 10; i++ ) {
		x.push( rand() );
		y.push( rand() );
		z.push( 0.0 );
		expected.push( add( x[ i ], y[ i ] ) );
	}

	addBy( x.length, x, 1, 0, y, 1, 0, z, 1, 0, accessor );
	t.deepEqual( z, expected, 'deep equal' );

	x = new Array( 5 ); // sparse array
	y = new Array( 5 ); // sparse array
	z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	expected = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	addBy( x.length, x, 1, 0, y, 1, 0, z, 1, 0, accessor );
	t.deepEqual( z, expected, 'deep equal' );

	x = new Array( 5 ); // sparse array
	x[ 2 ] = rand();
	y = new Array( 5 ); // sparse array
	y[ 2 ] = rand();
	z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	expected = z.slice();
	expected[ 2 ] = add( x[ 2 ], y[ 2 ] );

	addBy( x.length, x, 1, 0, y, 1, 0, z, 1, 0, accessor );
	t.deepEqual( z, expected, 'deep equal' );

	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = [
		rand(), // 0
		rand(),
		rand(), // 1
		rand(),
		rand()  // 2
	];
	y = [
		rand(), // 0
		rand(), // 1
		rand(), // 2
		rand(),
		rand()
	];
	z = [
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	];
	N = 3;

	addBy( N, x, 2, 0, y, 1, 0, z, 1, 0, accessor );

	expected = [
		add( x[ 0 ], y[ 0 ] ),
		add( x[ 2 ], y[ 1 ] ),
		add( x[ 4 ], y[ 2 ] ),
		0.0,
		0.0
	];

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports an `x` offset', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = [
		rand(),
		rand(),
		rand(), // 0
		rand(), // 1
		rand()  // 2
	];
	y = [
		rand(), // 0
		rand(), // 1
		rand(), // 2
		rand(),
		rand()
	];
	z = [
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	];
	N = 3;

	addBy( N, x, 1, 2, y, 1, 0, z, 1, 0, accessor );

	expected = [
		add( x[ 2 ], y[ 0 ] ),
		add( x[ 3 ], y[ 1 ] ),
		add( x[ 4 ], y[ 2 ] ),
		0.0,
		0.0
	];

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = [
		rand(), // 0
		rand(), // 1
		rand(), // 2
		rand(),
		rand()
	];
	y = [
		rand(), // 0
		rand(),
		rand(), // 1
		rand(),
		rand()  // 2
	];
	z = [
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	];
	N = 3;

	addBy( N, x, 1, 0, y, 2, 0, z, 1, 0, accessor );

	expected = [
		add( x[ 0 ], y[ 0 ] ),
		add( x[ 1 ], y[ 2 ] ),
		add( x[ 2 ], y[ 4 ] ),
		0.0,
		0.0
	];

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` offset', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = [
		rand(), // 0
		rand(), // 1
		rand(), // 2
		rand(),
		rand()
	];
	y = [
		rand(),
		rand(),
		rand(), // 0
		rand(), // 1
		rand()  // 2
	];
	z = [
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	];
	N = 3;

	addBy( N, x, 1, 0, y, 1, 2, z, 1, 0, accessor );

	expected = [
		add( x[ 0 ], y[ 2 ] ),
		add( x[ 1 ], y[ 3 ] ),
		add( x[ 2 ], y[ 4 ] ),
		0.0,
		0.0
	];

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `z` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = [
		rand(), // 0
		rand(), // 1
		rand(), // 2
		rand(),
		rand()
	];
	y = [
		rand(), // 0
		rand(), // 1
		rand(), // 2
		rand(),
		rand()
	];
	z = [
		0.0, // 0
		0.0,
		0.0, // 1
		0.0,
		0.0  // 2
	];
	N = 3;

	addBy( N, x, 1, 0, y, 1, 0, z, 2, 0, accessor );

	expected = [
		add( x[ 0 ], y[ 0 ] ),
		0.0,
		add( x[ 1 ], y[ 1 ] ),
		0.0,
		add( x[ 2 ], y[ 2 ] )
	];

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `z` offset', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = [
		rand(), // 0
		rand(), // 1
		rand(), // 2
		rand(),
		rand()
	];
	y = [
		rand(), // 0
		rand(), // 1
		rand(), // 2
		rand(),
		rand()
	];
	z = [
		0.0,
		0.0,
		0.0, // 0
		0.0, // 1
		0.0  // 2
	];
	N = 3;

	addBy( N, x, 1, 0, y, 1, 0, z, 1, 2, accessor );

	expected = [
		0.0,
		0.0,
		add( x[ 0 ], y[ 0 ] ),
		add( x[ 1 ], y[ 1 ] ),
		add( x[ 2 ], y[ 2 ] )
	];

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function returns a reference to the destination array', function test( t ) {
	var out;
	var x;
	var y;
	var z;

	x = [ rand(), rand(), rand(), rand(), rand() ];
	y = [ rand(), rand(), rand(), rand(), rand() ];
	z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	out = addBy( x.length, x, 1, 0, y, 1, 0, z, 1, 0, accessor );

	t.strictEqual( out, z, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the destination unchanged', function test( t ) {
	var expected;
	var x;
	var y;
	var z;

	x = [ rand(), rand(), rand(), rand(), rand() ];
	y = [ rand(), rand(), rand(), rand(), rand() ];
	z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	expected = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	addBy( -1, x, 1, 0, y, 1, 0, z, 1, 0, accessor );
	t.deepEqual( z, expected, 'returns expected value' );

	addBy( 0, x, 1, 0, y, 1, 0, z, 1, 0, accessor );
	t.deepEqual( z, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = [
		rand(), // 2
		rand(),
		rand(), // 1
		rand(),
		rand()  // 0
	];
	y = [
		rand(), // 2
		rand(), // 1
		rand(), // 0
		rand(),
		rand()
	];
	z = [
		0.0,
		0.0, // 2
		0.0, // 1
		0.0, // 0
		0.0
	];
	N = 3;

	addBy( N, x, -2, x.length-1, y, -1, 2, z, -1, z.length-2, accessor );

	expected = [
		0.0,
		add( x[ 0 ], y[ 0 ] ),
		add( x[ 2 ], y[ 1 ] ),
		add( x[ 4 ], y[ 2 ] ),
		0.0
	];

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = [
		rand(),
		rand(), // 0
		rand(),
		rand(), // 1
		rand(),
		rand()  // 2
	];
	y = [
		rand(), // 2
		rand(), // 1
		rand(), // 0
		rand(),
		rand(),
		rand()
	];
	z = [
		0.0, // 2
		0.0,
		0.0, // 1
		0.0,
		0.0, // 0
		0.0
	];
	N = 3;

	addBy( N, x, 2, 1, y, -1, 2, z, -2, z.length-2, accessor );

	expected = [
		add( x[ 5 ], y[ 0 ] ),
		0.0,
		add( x[ 3 ], y[ 1 ] ),
		0.0,
		add( x[ 1 ], y[ 2 ] ),
		0.0
	];

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports providing a callback execution context', function test( t ) {
	var ctx;
	var x;
	var y;
	var z;

	x = [ rand(), rand(), rand(), rand(), rand() ];
	y = [ rand(), rand(), rand(), rand(), rand() ];
	z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	ctx = {
		'count': 0
	};
	addBy( x.length, x, 1, 0, y, 1, 0, z, 1, 0, accessor, ctx );

	t.strictEqual( ctx.count, x.length, 'returns expected value' );
	t.end();

	function accessor( v ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return v;
	}
});
