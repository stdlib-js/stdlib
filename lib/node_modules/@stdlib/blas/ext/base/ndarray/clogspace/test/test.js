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
var isSameComplex64Array = require( '@stdlib/assert/is-same-complex64array' );
var isEqualDataType = require( '@stdlib/ndarray/base/assert/is-equal-data-type' );
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var lnf = require( '@stdlib/math/base/special/lnf' );
var cosf = require( '@stdlib/math/base/special/cosf' );
var sinf = require( '@stdlib/math/base/special/sinf' );
var E = require( '@stdlib/constants/float32/e' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var getData = require( '@stdlib/ndarray/data-buffer' );
var getDType = require( '@stdlib/ndarray/dtype' );
var getStrides = require( '@stdlib/ndarray/strides' );
var getOffset = require( '@stdlib/ndarray/offset' );
var getShape = require( '@stdlib/ndarray/shape' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var clogspace = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof clogspace, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function fills a one-dimensional ndarray (endpoint=true)', function test( t ) {
	var endpoint;
	var expected;
	var actual;
	var strt;
	var base;
	var lnb;
	var stp;
	var x;

	lnb = lnf( E );

	x = ndarray( 'complex64', new Complex64Array( [ 0.0, 0.0, 0.0, 0.0 ] ), [ 2 ], [ 1 ], 0, 'row-major' );
	base = scalar2ndarray( E, {
		'dtype': 'float32'
	});
	strt = scalar2ndarray( new Complex64( 0.0, 0.0 ), {
		'dtype': 'complex64'
	});
	stp = scalar2ndarray( new Complex64( 0.0, 1.0 ), {
		'dtype': 'complex64'
	});
	endpoint = scalar2ndarray( true, {
		'dtype': 'bool'
	});

	actual = clogspace( [ x, base, strt, stp, endpoint ] );
	expected = new Complex64Array( [ 1.0, 0.0, cosf( lnb ), sinf( lnb ) ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isEqualDataType( getDType( actual ), 'complex64' ), true, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( getData( actual ), expected ), true, 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.deepEqual( getStrides( actual ), [ 1 ], 'returns expected value' );
	t.strictEqual( getOffset( actual ), 0, 'returns expected value' );

	t.end();
});

tape( 'the function fills a one-dimensional ndarray (endpoint=false)', function test( t ) {
	var endpoint;
	var expected;
	var actual;
	var strt;
	var base;
	var lnb;
	var stp;
	var x;

	lnb = lnf( E );

	x = ndarray( 'complex64', new Complex64Array( [ 0.0, 0.0, 0.0, 0.0 ] ), [ 2 ], [ 1 ], 0, 'row-major' );
	base = scalar2ndarray( E, {
		'dtype': 'float32'
	});
	strt = scalar2ndarray( new Complex64( 0.0, 0.0 ), {
		'dtype': 'complex64'
	});
	stp = scalar2ndarray( new Complex64( 0.0, 2.0 ), {
		'dtype': 'complex64'
	});
	endpoint = scalar2ndarray( false, {
		'dtype': 'bool'
	});

	actual = clogspace( [ x, base, strt, stp, endpoint ] );
	expected = new Complex64Array( [ 1.0, 0.0, cosf( lnb ), sinf( lnb ) ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isEqualDataType( getDType( actual ), 'complex64' ), true, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( getData( actual ), expected ), true, 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2 ], 'returns expected value' );
	t.deepEqual( getStrides( actual ), [ 1 ], 'returns expected value' );
	t.strictEqual( getOffset( actual ), 0, 'returns expected value' );

	t.end();
});
