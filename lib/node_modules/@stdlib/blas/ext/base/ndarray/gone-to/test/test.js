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
var getData = require( '@stdlib/ndarray/data-buffer' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var goneTo = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof goneTo, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', function test( t ) {
	t.strictEqual( goneTo.length, 1, 'has expected arity' );
	t.end();
});

tape( 'the function fills a one-dimensional ndarray with linearly spaced numeric elements which increment by 1 starting from one', function test( t ) {
	var actual;
	var x;

	x = ndarray( 'generic', [ 0.0, 0.0, 0.0, 0.0 ], [ 4 ], [ 1 ], 0, 'row-major' );

	actual = goneTo( [ x ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( getData( actual ), [ 1.0, 2.0, 3.0, 4.0 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns the input ndarray unchanged when the input ndarray is empty', function test( t ) {
	var actual;
	var x;

	x = ndarray( 'generic', [], [ 0 ], [ 1 ], 0, 'row-major' );

	actual = goneTo( [ x ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( getData( actual ), [], 'returns expected value' );

	t.end();
});

tape( 'the function fills a one-dimensional ndarray containing a single element', function test( t ) {
	var actual;
	var x;

	x = ndarray( 'generic', [ 5.0 ], [ 1 ], [ 1 ], 0, 'row-major' );

	actual = goneTo( [ x ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( getData( actual ), [ 1.0 ], 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a non-unit stride', function test( t ) {
	var actual;
	var xbuf;
	var x;

	xbuf = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	x = ndarray( 'generic', xbuf, [ 4 ], [ 2 ], 0, 'row-major' );

	actual = goneTo( [ x ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( getData( actual ), [ 1.0, 0.0, 2.0, 0.0, 3.0, 0.0, 4.0, 0.0 ], 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a negative stride', function test( t ) {
	var actual;
	var xbuf;
	var x;

	xbuf = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	x = ndarray( 'generic', xbuf, [ 5 ], [ -1 ], 4, 'row-major' );

	actual = goneTo( [ x ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( getData( actual ), [ 5.0, 4.0, 3.0, 2.0, 1.0 ], 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a non-zero offset', function test( t ) {
	var actual;
	var xbuf;
	var x;

	xbuf = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	x = ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 2, 'row-major' );

	actual = goneTo( [ x ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( getData( actual ), [ 0.0, 0.0, 1.0, 2.0, 3.0, 4.0 ], 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a negative stride and non-zero offset', function test( t ) {
	var actual;
	var xbuf;
	var x;

	xbuf = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	x = ndarray( 'generic', xbuf, [ 5 ], [ -2 ], 9, 'row-major' );

	actual = goneTo( [ x ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( getData( actual ), [ 0.0, 5.0, 0.0, 4.0, 0.0, 3.0, 0.0, 2.0, 0.0, 1.0 ], 'returns expected value' );

	t.end();
});
