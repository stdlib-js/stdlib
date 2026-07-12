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
var isEqualDataType = require( '@stdlib/ndarray/base/assert/is-equal-data-type' );
var Float64Array = require( '@stdlib/array/float64' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var getData = require( '@stdlib/ndarray/data-buffer' );
var getDType = require( '@stdlib/ndarray/dtype' );
var getStrides = require( '@stdlib/ndarray/strides' );
var getOffset = require( '@stdlib/ndarray/offset' );
var getShape = require( '@stdlib/ndarray/shape' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var dlinspace = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dlinspace, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function fills a one-dimensional ndarray (endpoint=true)', function test( t ) {
	var endpoint;
	var actual;
	var start;
	var stop;
	var x;

	x = ndarray( 'float64', new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] ), [ 4 ], [ 1 ], 0, 'row-major' );
	start = scalar2ndarray( 0.0, {
		'dtype': 'float64'
	});
	stop = scalar2ndarray( 3.0, {
		'dtype': 'float64'
	});
	endpoint = scalar2ndarray( true, {
		'dtype': 'bool'
	});

	actual = dlinspace( [ x, start, stop, endpoint ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isEqualDataType( getDType( actual ), 'float64' ), true, 'returns expected value' );
	t.deepEqual( getData( actual ), new Float64Array( [ 0.0, 1.0, 2.0, 3.0 ] ), 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 4 ], 'returns expected value' );
	t.deepEqual( getStrides( actual ), [ 1 ], 'returns expected value' );
	t.strictEqual( getOffset( actual ), 0, 'returns expected value' );

	t.end();
});

tape( 'the function fills a one-dimensional ndarray (endpoint=false)', function test( t ) {
	var endpoint;
	var actual;
	var start;
	var stop;
	var x;

	x = ndarray( 'float64', new Float64Array( [ 0.0, 0.0, 0.0 ] ), [ 3 ], [ 1 ], 0, 'row-major' );
	start = scalar2ndarray( 3.0, {
		'dtype': 'float64'
	});
	stop = scalar2ndarray( 0.0, {
		'dtype': 'float64'
	});
	endpoint = scalar2ndarray( false, {
		'dtype': 'bool'
	});

	actual = dlinspace( [ x, start, stop, endpoint ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isEqualDataType( getDType( actual ), 'float64' ), true, 'returns expected value' );
	t.deepEqual( getData( actual ), new Float64Array( [ 3.0, 2.0, 1.0 ] ), 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 3 ], 'returns expected value' );
	t.deepEqual( getStrides( actual ), [ 1 ], 'returns expected value' );
	t.strictEqual( getOffset( actual ), 0, 'returns expected value' );

	t.end();
});
