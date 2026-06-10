/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var tryRequire = require( '@stdlib/utils/try-require' );
var Float64Array = require( '@stdlib/array/float64' );
var BooleanArray = require( '@stdlib/array/bool' );
var isEqualBooleanArray = require( '@stdlib/assert/is-equal-booleanarray' );


// VARIABLES //

var dcusome = tryRequire( resolve( __dirname, './../lib/dcusome.native.js' ) );
var opts = {
	'skip': ( dcusome instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dcusome, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 6', opts, function test( t ) {
	t.strictEqual( dcusome.length, 6, 'has expected arity' );
	t.end();
});

tape( 'the function returns a reference to the output array', opts, function test( t ) {
	var out;
	var x;
	var y;

	x = new Float64Array( [ 0.0, 0.0, 1.0, 1.0, 1.0 ] );
	y = new BooleanArray( 5 );

	out = dcusome( x.length, 2, x, 1, y, 1 );

	t.strictEqual( out, y, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the output array unchanged', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = new Float64Array( [ 0.0, 0.0, 1.0, 1.0 ] );
	y = new BooleanArray( [ false, false, false, false ] );
	expected = new BooleanArray( [ false, false, false, false ] );

	out = dcusome( 0, 2, x, 1, y, 1 );
	t.ok( isEqualBooleanArray( out, expected ), 'returns expected value' );

	out = dcusome( -4, 2, x, 1, y, 1 );
	t.ok( isEqualBooleanArray( out, expected ), 'returns expected value' );

	t.end();
});

tape( 'the function cumulatively tests whether at least k elements are truthy', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float64Array( [ 0.0, 0.0, 1.0, 1.0, 1.0 ] );
	out = new BooleanArray( 5 );
	expected = new BooleanArray( [ false, false, false, true, true ] );

	dcusome( x.length, 2, x, 1, out, 1 );
	t.ok( isEqualBooleanArray( out, expected ), 'returns expected value' );

	x = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	out = new BooleanArray( 5 );
	expected = new BooleanArray( [ false, false, false, false, false ] );

	dcusome( x.length, 1, x, 1, out, 1 );
	t.ok( isEqualBooleanArray( out, expected ), 'returns expected value' );

	x = new Float64Array( [ 1.0, 0.0, 0.0 ] );
	out = new BooleanArray( 3 );
	expected = new BooleanArray( [ true, true, true ] );

	dcusome( x.length, 1, x, 1, out, 1 );
	t.ok( isEqualBooleanArray( out, expected ), 'returns expected value' );

	x = new Float64Array( [ 0.0, 1.0, 0.0, 1.0 ] );
	out = new BooleanArray( 4 );
	expected = new BooleanArray( [ false, true, true, true ] );

	dcusome( x.length, 1, x, 1, out, 1 );
	t.ok( isEqualBooleanArray( out, expected ), 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float64Array( [ 0.0, 999.0, 0.0, 999.0, 1.0, 999.0, 1.0 ] );
	out = new BooleanArray( 4 );
	expected = new BooleanArray( [ false, false, false, true ] );

	dcusome( 4, 2, x, 2, out, 1 );
	t.ok( isEqualBooleanArray( out, expected ), 'returns expected value' );

	t.end();
});

tape( 'the function supports an `out` stride', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float64Array( [ 0.0, 0.0, 1.0, 1.0 ] );
	out = new BooleanArray( [ false, false, false, false, false, false, false, false ] );
	expected = new BooleanArray( [ false, false, false, false, false, false, true, false ] );

	dcusome( 4, 2, x, 1, out, 2 );
	t.ok( isEqualBooleanArray( out, expected ), 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative `x` stride', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float64Array( [ 1.0, 1.0, 0.0, 0.0 ] );
	out = new BooleanArray( 4 );
	expected = new BooleanArray( [ false, false, true, true ] );

	dcusome( 4, 1, x, -1, out, 1 );
	t.ok( isEqualBooleanArray( out, expected ), 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative `out` stride', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float64Array( [ 0.0, 0.0, 1.0, 1.0 ] );
	out = new BooleanArray( [ false, false, false, false ] );
	expected = new BooleanArray( [ true, false, false, false ] );

	dcusome( 4, 2, x, 1, out, -1 );
	t.ok( isEqualBooleanArray( out, expected ), 'returns expected value' );

	t.end();
});
