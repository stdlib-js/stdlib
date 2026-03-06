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
var Float64Array = require( '@stdlib/array/float64' );
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var reinterpret128 = require( '@stdlib/strided/base/reinterpret-complex128' );
var gfillBy = require( './../lib' );


// FUNCTIONS //

function fill() {
	return 5.0;
}

function cfill() {
	return new Complex128( 5.0, 5.0 );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gfillBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', function test( t ) {
	t.strictEqual( gfillBy.length, 5, 'has expected arity' );
	t.end();
});

tape( 'the function fills a strided array', function test( t ) {
	var expected;
	var x;

	x = [
		4.0,
		2.0,
		-3.0,
		5.0,
		-1.0,
		2.0,
		-5.0,
		6.0
	];
	expected = [
		5.0,
		5.0,
		5.0,
		5.0,
		5.0,
		5.0,
		5.0,
		5.0
	];

	gfillBy( x.length, x, 1, fill );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1.0, 2.0 ];
	expected = [ 5.0, 5.0 ];

	gfillBy( x.length, x, 1, fill );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function fills a strided array (accessors)', function test( t ) {
	var expected;
	var x;

	x = new Complex128Array([
		4.0,
		2.0,
		-3.0,
		5.0,
		-1.0,
		2.0,
		-5.0,
		6.0
	]);
	expected = new Float64Array([
		5.0,
		5.0,
		5.0,
		5.0,
		5.0,
		5.0,
		5.0,
		5.0
	]);

	gfillBy( x.length, x, 1, cfill );
	t.deepEqual( reinterpret128( x, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the input array', function test( t ) {
	var out;
	var x;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	out = gfillBy( x.length, x, 1, fill );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `x` unchanged', function test( t ) {
	var expected;
	var x;

	x = [ 3.0, -4.0, 1.0 ];
	expected = [ 3.0, -4.0, 1.0 ];

	gfillBy( 0, x, 1, fill );
	t.deepEqual( x, expected, 'returns expected value' );

	gfillBy( -4, x, 1, fill );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', function test( t ) {
	var expected;
	var x;

	x = [
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	];
	expected = [
		5.0,  // 0
		-3.0,
		5.0,  // 1
		7.0,
		5.0   // 2
	];

	gfillBy( 3, x, 2, fill );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a stride (accessors)', function test( t ) {
	var expected;
	var x;

	x = new Complex128Array([
		4.0, // 0
		2.0, // 0
		-3.0,
		5.0,
		-1.0, // 1
		2.0,  // 1
		-5.0,
		6.0
	]);
	expected = new Float64Array([
		5.0, // 0
		5.0, // 0
		-3.0,
		5.0,
		5.0, // 1
		5.0, // 1
		-5.0,
		6.0
	]);

	gfillBy( 2, x, 2, cfill );
	t.deepEqual( reinterpret128( x, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride', function test( t ) {
	var expected;
	var x;

	x = [
		2.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 0
	];
	expected = [
		5.0,  // 2
		-3.0,
		5.0,  // 1
		7.0,
		5.0   // 0
	];

	gfillBy( 3, x, -2, fill );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative stride (accessors)', function test( t ) {
	var expected;
	var x;

	x = new Complex128Array([
		4.0, // 1
		2.0, // 1
		-3.0,
		5.0,
		-1.0, // 0
		2.0,  // 0
		-5.0,
		6.0
	]);
	expected = new Float64Array([
		5.0, // 1
		5.0, // 1
		-3.0,
		5.0,
		5.0, // 0
		5.0, // 0
		-5.0,
		6.0
	]);

	gfillBy( 2, x, -2, cfill );
	t.deepEqual( reinterpret128( x, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var expected;
	var x0;
	var x1;

	x0 = new Float64Array([
		1.0,
		2.0, // 0
		3.0,
		4.0, // 1
		5.0,
		6.0  // 2
	]);
	expected = new Float64Array([
		1.0,
		5.0, // 0
		3.0,
		5.0, // 1
		5.0,
		5.0  // 2
	]);

	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );

	gfillBy( 3, x1, 2, fill );
	t.deepEqual( x0, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports providing a callback execution context', function test( t ) {
	var ctx;
	var x;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	ctx = {
		'count': 0
	};
	gfillBy( x.length, x, 1, fill, ctx );

	t.strictEqual( ctx.count, x.length, 'returns expected value' );
	t.end();

	function fill() {
		this.count += 1; // eslint-disable-line no-invalid-this
		return 5.0;
	}
});

tape( 'the function supports providing a callback execution context (accessors)', function test( t ) {
	var ctx;
	var x;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	ctx = {
		'count': 0
	};
	gfillBy( x.length, x, 1, fill, ctx );

	t.strictEqual( ctx.count, x.length, 'returns expected value' );
	t.end();

	function fill() {
		this.count += 1; // eslint-disable-line no-invalid-this
		return new Complex128( 5.0, 5.0 );
	}
});
