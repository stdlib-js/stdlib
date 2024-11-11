/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var Float64Array = require( '@stdlib/array/float64' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var idamax = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( idamax instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof idamax, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', opts, function test( t ) {
	t.strictEqual( idamax.length, 4, 'returns expected value' );
	t.end();
});

tape( 'the function finds the index of the element with the maximum absolute value', opts, function test( t ) {
	var expected;
	var idx;
	var x;

	x = new Float64Array([
		0.1,  // 1
		-0.3, // 2
		0.5,  // 3
		-0.1, // 4
		6.0,
		6.0,
		6.0
	]);
	expected = 2;

	idx = idamax( 4, x, 1, 0 );
	t.strictEqual( idx, expected, 'returns expected value' );

	x = new Float64Array( [
		0.2,  // 1
		-0.6, // 2
		0.3,  // 3
		5.0,
		5.0
	] );
	expected = 1;

	idx = idamax( 3, x, 1, 0 );
	t.strictEqual( idx, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than `1`, the function returns `-1`', opts, function test( t ) {
	var expected;
	var idx;
	var x;

	x = new Float64Array( [
		1.0,
		2.0,
		3.0
	] );
	expected = -1;

	idx = idamax( 0, x, 1, 0 );
	t.strictEqual( idx, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, the function returns `0`', opts, function test( t ) {
	var expected;
	var idx;
	var x;

	x = new Float64Array( [
		1.0,
		2.0,
		3.0
	] );
	expected = 0;

	idx = idamax( 1, x, 1, 1 );
	t.strictEqual( idx, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports accessing elements in reverse order', opts, function test( t ) {
	var idx;
	var x;

	x = new Float64Array( [ 3.0, -4.0, 1.0, 15.0, 4.0, 3.0 ] );

	idx = idamax( x.length, x, -1, x.length-1 );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = idamax( 3, x, -1, x.length-4 );
	t.strictEqual( idx, 1, 'returns expected value' );

	x = new Float64Array( [ 3.0, 999.9, 999.9, -4.0, 999.9, 999.9, 1.0, 999.9, 999.9, 15.0, 999.9, 999.9, 4.0, 999.9, 999.9, 3.0 ] );
	idx = idamax( 6, x, -3, x.length-1 );
	t.strictEqual( idx, 2, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', opts, function test( t ) {
	var expected;
	var idx;
	var x;

	x = new Float64Array([
		0.1,  // 1
		4.0,
		-0.3, // 2
		6.0,
		-0.5, // 3
		7.0,
		-0.1, // 4
		3.0
	]);
	expected = 2;

	idx = idamax( 4, x, 2, 0 );
	t.strictEqual( idx, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying an `x` offset', opts, function test( t ) {
	var expected;
	var idx;
	var x;

	x = new Float64Array([
		1.0,
		2.0, // 1
		3.0, // 2
		4.0, // 3
		5.0, // 4
		6.0  // 5
	]);
	expected = 4;

	idx = idamax( 5, x, 1, 1 );
	t.strictEqual( idx, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns', opts, function test( t ) {
	var expected;
	var idx;
	var x;

	x = new Float64Array([
		1.0,
		2.0, // 1
		3.0,
		4.0, // 2
		5.0,
		6.0  // 3
	]);
	expected = 2;

	idx = idamax( 3, x, 2, 1 );
	t.strictEqual( idx, expected, 'returns expected value' );
	t.end();
});
