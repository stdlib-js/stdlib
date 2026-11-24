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
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var Float64Array = require( '@stdlib/array/float64' );
var minBy = require( './../lib/main.js' );


// FUNCTIONS //

function accessor( v ) {
	if ( v === void 0 ) {
		return;
	}
	return v * 2.0;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof minBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', function test( t ) {
	t.strictEqual( minBy.length, 5, 'has expected arity' );
	t.end();
});

tape( 'the function calculates the minimum value of a strided array via a callback function', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ];
	v = minBy( x.length, x, 1, accessor );
	t.strictEqual( v, -8.0, 'returns expected value' );

	x = [ -4.0, -5.0 ];
	v = minBy( x.length, x, 1, accessor );
	t.strictEqual( v, -10.0, 'returns expected value' );

	x = [ 0.0, -0.0, 0.0 ];
	v = minBy( x.length, x, 1, accessor );
	t.strictEqual( isNegativeZero( v ), true, 'returns expected value' );

	x = [ NaN ];
	v = minBy( x.length, x, 1, accessor );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = [ NaN, NaN ];
	v = minBy( x.length, x, 1, accessor );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = new Array( 5 ); // eslint-disable-line stdlib/no-new-array
	v = minBy( x.length, x, 1, accessor );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = new Array( 5 ); // eslint-disable-line stdlib/no-new-array
	x[ 2 ] = 1.0;
	v = minBy( x.length, x, 1, accessor );
	t.strictEqual( v, 2.0, 'returns expected value' );

	t.end();
});

tape( 'the function calculates the minimum value of a strided array via a callback function (accessors)', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ];
	v = minBy( x.length, toAccessorArray( x ), 1, accessor );
	t.strictEqual( v, -8.0, 'returns expected value' );

	x = [ -4.0, -5.0 ];
	v = minBy( x.length, toAccessorArray( x ), 1, accessor );
	t.strictEqual( v, -10.0, 'returns expected value' );

	x = [ 0.0, -0.0, 0.0 ];
	v = minBy( x.length, toAccessorArray( x ), 1, accessor );
	t.strictEqual( isNegativeZero( v ), true, 'returns expected value' );

	x = [ NaN ];
	v = minBy( x.length, toAccessorArray( x ), 1, accessor );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = [ NaN, NaN ];
	v = minBy( x.length, toAccessorArray( x ), 1, accessor );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = new Array( 5 ); // eslint-disable-line stdlib/no-new-array
	v = minBy( x.length, toAccessorArray( x ), 1, accessor );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = new Array( 5 ); // eslint-disable-line stdlib/no-new-array
	x[ 2 ] = 1.0;
	v = minBy( x.length, toAccessorArray( x ), 1, accessor );
	t.strictEqual( v, 2.0, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `NaN`', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];

	v = minBy( 0, x, 1, accessor );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = minBy( -1, x, 1, accessor );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `NaN` (accessors)', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];

	v = minBy( 0, toAccessorArray( x ), 1, accessor );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = minBy( -1, toAccessorArray( x ), 1, accessor );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, the function returns the first accessed element', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];

	v = minBy( 1, x, 1, accessor );
	t.strictEqual( v, 2.0, 'returns expected value' );

	x = new Array( 1 ); // eslint-disable-line stdlib/no-new-array

	v = minBy( 1, x, 1, accessor );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, the function returns the first accessed element (accessors)', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];

	v = minBy( 1, toAccessorArray( x ), 1, accessor );
	t.strictEqual( v, 2.0, 'returns expected value' );

	x = new Array( 1 ); // eslint-disable-line stdlib/no-new-array

	v = minBy( 1, toAccessorArray( x ), 1, accessor );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `stride` parameter', function test( t ) {
	var x;
	var v;

	x = [
		1.0,  // 0
		2.0,
		2.0,  // 1
		-7.0,
		-2.0, // 2
		3.0,
		4.0,  // 3
		2.0
	];

	v = minBy( 4, x, 2, accessor );

	t.strictEqual( v, -4.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `stride` parameter (accessors)', function test( t ) {
	var x;
	var v;

	x = [
		1.0,  // 0
		2.0,
		2.0,  // 1
		-7.0,
		-2.0, // 2
		3.0,
		4.0,  // 3
		2.0
	];

	v = minBy( 4, toAccessorArray( x ), 2, accessor );

	t.strictEqual( v, -4.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative `stride` parameter', function test( t ) {
	var x;
	var v;

	x = [
		1.0,  // 3
		2.0,
		2.0,  // 2
		-7.0,
		-2.0, // 1
		3.0,
		4.0,  // 0
		2.0
	];

	v = minBy( 4, x, -2, accessor );

	t.strictEqual( v, -4.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative `stride` parameter (accessors)', function test( t ) {
	var x;
	var v;

	x = [
		1.0,  // 3
		2.0,
		2.0,  // 2
		-7.0,
		-2.0, // 1
		3.0,
		4.0,  // 0
		2.0
	];

	v = minBy( 4, toAccessorArray( x ), -2, accessor );

	t.strictEqual( v, -4.0, 'returns expected value' );
	t.end();
});

tape( 'if provided a `stride` parameter equal to `0`, the function returns the first accessed element', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];

	v = minBy( x.length, x, 0, accessor );
	t.strictEqual( v, 2.0, 'returns expected value' );

	x = new Array( 1 ); // eslint-disable-line stdlib/no-new-array

	v = minBy( 1, x, 0, accessor );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a `stride` parameter equal to `0`, the function returns the first accessed element (accessors)', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];

	v = minBy( x.length, toAccessorArray( x ), 0, accessor );
	t.strictEqual( v, 2.0, 'returns expected value' );

	x = new Array( 1 ); // eslint-disable-line stdlib/no-new-array

	v = minBy( 1, toAccessorArray( x ), 0, accessor );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var x0;
	var x1;
	var v;

	x0 = new Float64Array([
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0,  // 3
		6.0
	]);

	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

	v = minBy( 4, x1, 2, accessor );
	t.strictEqual( v, -4.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports view offsets (accessors)', function test( t ) {
	var x0;
	var x1;
	var v;

	x0 = new Float64Array([
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0,  // 3
		6.0
	]);

	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

	v = minBy( 4, toAccessorArray( x1 ), 2, accessor );
	t.strictEqual( v, -4.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a callback execution context', function test( t ) {
	var ctx;
	var x;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	ctx = {
		'count': 0
	};
	minBy( x.length, x, 1, accessor, ctx );

	t.strictEqual( ctx.count, x.length, 'returns expected value' );
	t.end();

	function accessor( v ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return v * 2.0;
	}
});

tape( 'the function supports providing a callback execution context (accessors)', function test( t ) {
	var ctx;
	var x;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	ctx = {
		'count': 0
	};
	minBy( x.length, toAccessorArray( x ), 1, accessor, ctx );

	t.strictEqual( ctx.count, x.length, 'returns expected value' );
	t.end();

	function accessor( v ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return v * 2.0;
	}
});
