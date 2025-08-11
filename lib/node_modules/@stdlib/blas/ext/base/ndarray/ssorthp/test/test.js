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
var Float32Array = require( '@stdlib/array/float32' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var getData = require( '@stdlib/ndarray/data-buffer' );
var getDtype = require( '@stdlib/ndarray/dtype' );
var getStrides = require( '@stdlib/ndarray/strides' );
var getOffset = require( '@stdlib/ndarray/offset' );
var getShape = require( '@stdlib/ndarray/shape' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var ssorthp = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ssorthp, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function sorts a one-dimensional ndarray (increasing order)', function test( t ) {
	var actual;
	var order;
	var x;

	x = ndarray( 'float32', new Float32Array( [ 3.0, 1.0, 2.0, 5.0, 4.0 ] ), [ 5 ], [ 1 ], 0, 'row-major' );
	order = scalar2ndarray( 1.0, {
		'dtype': 'generic'
	});

	actual = ssorthp( [ x, order ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( getDtype( actual ), 'float32', 'returns expected value' );
	t.deepEqual( getData( actual ), new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] ), 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 5 ], 'returns expected value' );
	t.deepEqual( getStrides( actual ), [ 1 ], 'return expected value' );
	t.strictEqual( getOffset( actual ), 0, 'returns expected value' );

	t.end();
});

tape( 'the function sorts a one-dimensional ndarray (decreasing order)', function test( t ) {
	var actual;
	var order;
	var x;

	x = ndarray( 'float32', new Float32Array( [ 3.0, 1.0, 2.0, 5.0, 4.0 ] ), [ 5 ], [ 1 ], 0, 'row-major' );
	order = scalar2ndarray( -1.0, {
		'dtype': 'generic'
	});

	actual = ssorthp( [ x, order ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( getDtype( actual ), 'float32', 'returns expected value' );
	t.deepEqual( getData( actual ), new Float32Array( [ 5.0, 4.0, 3.0, 2.0, 1.0 ] ), 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 5 ], 'returns expected value' );
	t.deepEqual( getStrides( actual ), [ 1 ], 'return expected value' );
	t.strictEqual( getOffset( actual ), 0, 'returns expected value' );

	t.end();
});
