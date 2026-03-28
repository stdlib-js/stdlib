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

var tape = require( 'tape' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var getData = require( '@stdlib/ndarray/data-buffer' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var gcircshift = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gcircshift, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', function test( t ) {
	t.strictEqual( gcircshift.length, 1, 'has expected arity' );
	t.end();
});

tape( 'the function circularly shifts elements of a one-dimensional ndarray (right shift)', function test( t ) {
	var actual;
	var x;
	var k;

	x = ndarray( 'generic', [ 1.0, 2.0, 3.0, 4.0, 5.0 ], [ 5 ], [ 1 ], 0, 'row-major' );
	k = scalar2ndarray( 2, {
		'dtype': 'generic'
	});

	actual = gcircshift( [ x, k ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( getData( actual ), [ 4.0, 5.0, 1.0, 2.0, 3.0 ], 'returns expected value' );

	t.end();
});

tape( 'the function circularly shifts elements of a one-dimensional ndarray (left shift)', function test( t ) {
	var actual;
	var x;
	var k;

	x = ndarray( 'generic', [ 1.0, 2.0, 3.0, 4.0, 5.0 ], [ 5 ], [ 1 ], 0, 'row-major' );
	k = scalar2ndarray( -2, {
		'dtype': 'generic'
	});

	actual = gcircshift( [ x, k ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( getData( actual ), [ 3.0, 4.0, 5.0, 1.0, 2.0 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns the input ndarray unchanged when the number of elements to shift is zero', function test( t ) {
	var actual;
	var x;
	var k;

	x = ndarray( 'generic', [ 1.0, 2.0, 3.0, 4.0, 5.0 ], [ 5 ], [ 1 ], 0, 'row-major' );
	k = scalar2ndarray( 0, {
		'dtype': 'generic'
	});

	actual = gcircshift( [ x, k ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( getData( actual ), [ 1.0, 2.0, 3.0, 4.0, 5.0 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns the input ndarray unchanged when the input ndarray is empty', function test( t ) {
	var actual;
	var x;
	var k;

	x = ndarray( 'generic', [], [ 0 ], [ 1 ], 0, 'row-major' );
	k = scalar2ndarray( 2, {
		'dtype': 'generic'
	});

	actual = gcircshift( [ x, k ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( getData( actual ), [], 'returns expected value' );

	t.end();
});

tape( 'the function returns the input ndarray unchanged when the input ndarray contains a single element', function test( t ) {
	var actual;
	var x;
	var k;

	x = ndarray( 'generic', [ 7.0 ], [ 1 ], [ 1 ], 0, 'row-major' );
	k = scalar2ndarray( 3, {
		'dtype': 'generic'
	});

	actual = gcircshift( [ x, k ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( getData( actual ), [ 7.0 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns the input ndarray unchanged when the number of positions to shift equals the number of elements in the input ndarray (right shift)', function test( t ) {
	var actual;
	var x;
	var k;

	x = ndarray( 'generic', [ 1.0, 2.0, 3.0, 4.0, 5.0 ], [ 5 ], [ 1 ], 0, 'row-major' );
	k = scalar2ndarray( 5, {
		'dtype': 'generic'
	});

	actual = gcircshift( [ x, k ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( getData( actual ), [ 1.0, 2.0, 3.0, 4.0, 5.0 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns the input ndarray unchanged when the number of positions to shift equals the number of elements in the input ndarray (left shift)', function test( t ) {
	var actual;
	var x;
	var k;

	x = ndarray( 'generic', [ 1.0, 2.0, 3.0, 4.0, 5.0 ], [ 5 ], [ 1 ], 0, 'row-major' );
	k = scalar2ndarray( -5, {
		'dtype': 'generic'
	});

	actual = gcircshift( [ x, k ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( getData( actual ), [ 1.0, 2.0, 3.0, 4.0, 5.0 ], 'returns expected value' );

	t.end();
});

tape( 'the function supports shifting elements in multiple cycles (right shift)', function test( t ) {
	var actual;
	var x;
	var k;

	x = ndarray( 'generic', [ 1.0, 2.0, 3.0, 4.0, 5.0 ], [ 5 ], [ 1 ], 0, 'row-major' );
	k = scalar2ndarray( 7, {
		'dtype': 'generic'
	});

	actual = gcircshift( [ x, k ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( getData( actual ), [ 4.0, 5.0, 1.0, 2.0, 3.0 ], 'returns expected value' );

	t.end();
});

tape( 'the function supports shifting elements in multiple cycles (left shift)', function test( t ) {
	var actual;
	var x;
	var k;

	x = ndarray( 'generic', [ 1.0, 2.0, 3.0, 4.0, 5.0 ], [ 5 ], [ 1 ], 0, 'row-major' );
	k = scalar2ndarray( -7, {
		'dtype': 'generic'
	});

	actual = gcircshift( [ x, k ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( getData( actual ), [ 3.0, 4.0, 5.0, 1.0, 2.0 ], 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a negative stride', function test( t ) {
	var actual;
	var xbuf;
	var x;
	var k;

	xbuf = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	x = ndarray( 'generic', xbuf, [ 5 ], [ -1 ], 4, 'row-major' );
	k = scalar2ndarray( 2, {
		'dtype': 'generic'
	});

	actual = gcircshift( [ x, k ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( getData( actual ), [ 3.0, 4.0, 5.0, 1.0, 2.0 ], 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a non-zero offset', function test( t ) {
	var actual;
	var xbuf;
	var x;
	var k;

	xbuf = [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0 ];
	x = ndarray( 'generic', xbuf, [ 5 ], [ 1 ], 1, 'row-major' );
	k = scalar2ndarray( 2, {
		'dtype': 'generic'
	});

	actual = gcircshift( [ x, k ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( getData( actual ), [ 0.0, 4.0, 5.0, 1.0, 2.0, 3.0 ], 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a negative stride and non-zero offset', function test( t ) {
	var actual;
	var xbuf;
	var x;
	var k;

	xbuf = [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 ];
	x = ndarray( 'generic', xbuf, [ 5 ], [ -2 ], 9, 'row-major' );
	k = scalar2ndarray( 2, {
		'dtype': 'generic'
	});

	actual = gcircshift( [ x, k ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( getData( actual ), [ 0.0, 5.0, 2.0, 7.0, 4.0, 9.0, 6.0, 1.0, 8.0, 3.0 ], 'returns expected value' );

	t.end();
});
