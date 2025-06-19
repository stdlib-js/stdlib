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
var Float64Array = require( '@stdlib/array/float64' );
var Int32Array = require( '@stdlib/array/int32' );
var dgttrf = require( './../lib/ndarray.js' );


// FIXTURES //

var POSITIVE_STRIDES_NO_OFFSET_1 = require( './fixtures/positive_stride_no_offset_1.json' ); // eslint-disable-line id-length
var POSITIVE_STRIDES_NO_OFFSET_2 = require( './fixtures/positive_stride_no_offset_2.json' ); // eslint-disable-line id-length
var LARGE_POSITIVE_STRIDE_1 = require( './fixtures/large_positive_stride_1.json' );
var LARGE_POSITIVE_STRIDE_2 = require( './fixtures/large_positive_stride_2.json' );
var NEGATIVE_STRIDES = require( './fixtures/negative_strides.json' );
var MIXED_STRIDES = require( './fixtures/mixed_strides.json' );
var POSITIVE_STRIDES_OFFSET_1 = require( './fixtures/positive_stride_offset_1.json' );
var POSITIVE_STRIDES_OFFSET_2 = require( './fixtures/positive_stride_offset_2.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dgttrf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 16', function test( t ) {
	t.strictEqual( dgttrf.length, 16, 'returns expected value' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is less than zero', function test( t ) {
	var values;
	var data;
	var IPIV;
	var DU2;
	var DU;
	var DL;
	var D;
	var i;

	data = POSITIVE_STRIDES_NO_OFFSET_1;

	DL = new Float64Array( data.DL );
	D = new Float64Array( data.D );
	DU = new Float64Array( data.DU );
	DU2 = new Float64Array( data.DU2 );
	IPIV = new Int32Array( data.IPIV );

	values = [
		-1,
		-2,
		-3
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dgttrf( value, DL, data.sdl, data.odl, D, data.sd, data.od, DU, data.sdu, data.odu, DU2, data.sdu2, data.odu2, IPIV, data.si, data.oi ); // eslint-disable-line max-len
		};
	}
});

tape( 'the function performs the `LU` factorization of a real tridiagonal matrix `A` using elimination with partial pivoting and row interchanges', function test( t ) {
	var expectedIPIV;
	var expectedDU2;
	var expectedDU;
	var expectedDL;
	var expectedD;
	var data;
	var info;
	var IPIV;
	var DU2;
	var DU;
	var DL;
	var D;
	var N;

	data = POSITIVE_STRIDES_NO_OFFSET_1;

	N = data.N;

	DL = new Float64Array( data.DL );
	D = new Float64Array( data.D );
	DU = new Float64Array( data.DU );
	DU2 = new Float64Array( data.DU2 );
	IPIV = new Int32Array( data.IPIV );

	expectedDL = new Float64Array( data.expectedDL );
	expectedD = new Float64Array( data.expectedD );
	expectedDU = new Float64Array( data.expectedDU );
	expectedDU2 = new Float64Array( data.expectedDU2 );
	expectedIPIV = new Int32Array( data.expectedIPIV );

	info = dgttrf( N, DL, data.sdl, data.odl, D, data.sd, data.od, DU, data.sdu, data.odu, DU2, data.sdu2, data.odu2, IPIV, data.si, data.oi ); // eslint-disable-line max-len
	t.strictEqual( info, data.expectedInfo, 'returns expected value' );
	t.deepEqual( IPIV, expectedIPIV, 'returns expected value' );
	t.deepEqual( D, expectedD, 'returns expected value' );
	t.deepEqual( DU, expectedDU, 'returns expected value' );
	t.deepEqual( DU2, expectedDU2, 'returns expected value' );
	t.deepEqual( DL, expectedDL, 'returns expected value' );

	data = POSITIVE_STRIDES_NO_OFFSET_2;

	N = data.N;

	DL = new Float64Array( data.DL );
	D = new Float64Array( data.D );
	DU = new Float64Array( data.DU );
	DU2 = new Float64Array( data.DU2 );
	IPIV = new Int32Array( data.IPIV );

	expectedDL = new Float64Array( data.expectedDL );
	expectedD = new Float64Array( data.expectedD );
	expectedDU = new Float64Array( data.expectedDU );
	expectedDU2 = new Float64Array( data.expectedDU2 );
	expectedIPIV = new Int32Array( data.expectedIPIV );

	info = dgttrf( N, DL, data.sdl, data.odl, D, data.sd, data.od, DU, data.sdu, data.odu, DU2, data.sdu2, data.odu2, IPIV, data.si, data.oi ); // eslint-disable-line max-len
	t.strictEqual( info, data.expectedInfo, 'returns expected value' );
	t.deepEqual( IPIV, expectedIPIV, 'returns expected value' );
	t.deepEqual( D, expectedD, 'returns expected value' );
	t.deepEqual( DU, expectedDU, 'returns expected value' );
	t.deepEqual( DU2, expectedDU2, 'returns expected value' );
	t.deepEqual( DL, expectedDL, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing positive strides', function test( t ) {
	var expectedIPIV;
	var expectedDU2;
	var expectedDU;
	var expectedDL;
	var expectedD;
	var data;
	var info;
	var IPIV;
	var DU2;
	var DU;
	var DL;
	var D;
	var N;

	data = LARGE_POSITIVE_STRIDE_1;

	N = data.N;

	DL = new Float64Array( data.DL );
	D = new Float64Array( data.D );
	DU = new Float64Array( data.DU );
	DU2 = new Float64Array( data.DU2 );
	IPIV = new Int32Array( data.IPIV );

	expectedDL = new Float64Array( data.expectedDL );
	expectedD = new Float64Array( data.expectedD );
	expectedDU = new Float64Array( data.expectedDU );
	expectedDU2 = new Float64Array( data.expectedDU2 );
	expectedIPIV = new Int32Array( data.expectedIPIV );

	info = dgttrf( N, DL, data.sdl, data.odl, D, data.sd, data.od, DU, data.sdu, data.odu, DU2, data.sdu2, data.odu2, IPIV, data.si, data.oi ); // eslint-disable-line max-len
	t.strictEqual( info, data.expectedInfo, 'returns expected value' );
	t.deepEqual( IPIV, expectedIPIV, 'returns expected value' );
	t.deepEqual( D, expectedD, 'returns expected value' );
	t.deepEqual( DU, expectedDU, 'returns expected value' );
	t.deepEqual( DU2, expectedDU2, 'returns expected value' );
	t.deepEqual( DL, expectedDL, 'returns expected value' );

	data = LARGE_POSITIVE_STRIDE_2;

	N = data.N;

	DL = new Float64Array( data.DL );
	D = new Float64Array( data.D );
	DU = new Float64Array( data.DU );
	DU2 = new Float64Array( data.DU2 );
	IPIV = new Int32Array( data.IPIV );

	expectedDL = new Float64Array( data.expectedDL );
	expectedD = new Float64Array( data.expectedD );
	expectedDU = new Float64Array( data.expectedDU );
	expectedDU2 = new Float64Array( data.expectedDU2 );
	expectedIPIV = new Int32Array( data.expectedIPIV );

	info = dgttrf( N, DL, data.sdl, data.odl, D, data.sd, data.od, DU, data.sdu, data.odu, DU2, data.sdu2, data.odu2, IPIV, data.si, data.oi ); // eslint-disable-line max-len
	t.strictEqual( info, data.expectedInfo, 'returns expected value' );
	t.deepEqual( IPIV, expectedIPIV, 'returns expected value' );
	t.deepEqual( D, expectedD, 'returns expected value' );
	t.deepEqual( DU, expectedDU, 'returns expected value' );
	t.deepEqual( DU2, expectedDU2, 'returns expected value' );
	t.deepEqual( DL, expectedDL, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing negative strides', function test( t ) {
	var expectedIPIV;
	var expectedDU2;
	var expectedDU;
	var expectedDL;
	var expectedD;
	var data;
	var info;
	var IPIV;
	var DU2;
	var DU;
	var DL;
	var D;
	var N;

	data = NEGATIVE_STRIDES;

	N = data.N;

	DL = new Float64Array( data.DL );
	D = new Float64Array( data.D );
	DU = new Float64Array( data.DU );
	DU2 = new Float64Array( data.DU2 );
	IPIV = new Int32Array( data.IPIV );

	expectedDL = new Float64Array( data.expectedDL );
	expectedD = new Float64Array( data.expectedD );
	expectedDU = new Float64Array( data.expectedDU );
	expectedDU2 = new Float64Array( data.expectedDU2 );
	expectedIPIV = new Int32Array( data.expectedIPIV );

	info = dgttrf( N, DL, data.sdl, data.odl, D, data.sd, data.od, DU, data.sdu, data.odu, DU2, data.sdu2, data.odu2, IPIV, data.si, data.oi ); // eslint-disable-line max-len
	t.strictEqual( info, data.expectedInfo, 'returns expected value' );
	t.deepEqual( IPIV, expectedIPIV, 'returns expected value' );
	t.deepEqual( D, expectedD, 'returns expected value' );
	t.deepEqual( DU, expectedDU, 'returns expected value' );
	t.deepEqual( DU2, expectedDU2, 'returns expected value' );
	t.deepEqual( DL, expectedDL, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing mixed strides', function test( t ) {
	var expectedIPIV;
	var expectedDU2;
	var expectedDU;
	var expectedDL;
	var expectedD;
	var info;
	var data;
	var IPIV;
	var DU2;
	var DU;
	var DL;
	var D;
	var N;

	data = MIXED_STRIDES;

	N = data.N;

	DL = new Float64Array( data.DL );
	D = new Float64Array( data.D );
	DU = new Float64Array( data.DU );
	DU2 = new Float64Array( data.DU2 );
	IPIV = new Int32Array( data.IPIV );

	expectedDL = new Float64Array( data.expectedDL );
	expectedD = new Float64Array( data.expectedD );
	expectedDU = new Float64Array( data.expectedDU );
	expectedDU2 = new Float64Array( data.expectedDU2 );
	expectedIPIV = new Int32Array( data.expectedIPIV );

	info = dgttrf( N, DL, data.sdl, data.odl, D, data.sd, data.od, DU, data.sdu, data.odu, DU2, data.sdu2, data.odu2, IPIV, data.si, data.oi ); // eslint-disable-line max-len
	t.strictEqual( info, data.expectedInfo, 'returns expected value' );
	t.deepEqual( IPIV, expectedIPIV, 'returns expected value' );
	t.deepEqual( D, expectedD, 'returns expected value' );
	t.deepEqual( DU, expectedDU, 'returns expected value' );
	t.deepEqual( DU2, expectedDU2, 'returns expected value' );
	t.deepEqual( DL, expectedDL, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing index offsets', function test( t ) {
	var expectedIPIV;
	var expectedDU2;
	var expectedDU;
	var expectedDL;
	var expectedD;
	var data;
	var info;
	var IPIV;
	var DU2;
	var DU;
	var DL;
	var D;
	var N;

	data = POSITIVE_STRIDES_OFFSET_1;

	N = data.N;

	DL = new Float64Array( data.DL );
	D = new Float64Array( data.D );
	DU = new Float64Array( data.DU );
	DU2 = new Float64Array( data.DU2 );
	IPIV = new Int32Array( data.IPIV );

	expectedDL = new Float64Array( data.expectedDL );
	expectedD = new Float64Array( data.expectedD );
	expectedDU = new Float64Array( data.expectedDU );
	expectedDU2 = new Float64Array( data.expectedDU2 );
	expectedIPIV = new Int32Array( data.expectedIPIV );

	info = dgttrf( N, DL, data.sdl, data.odl, D, data.sd, data.od, DU, data.sdu, data.odu, DU2, data.sdu2, data.odu2, IPIV, data.si, data.oi ); // eslint-disable-line max-len
	t.strictEqual( info, data.expectedInfo, 'returns expected value' );
	t.deepEqual( IPIV, expectedIPIV, 'returns expected value' );
	t.deepEqual( D, expectedD, 'returns expected value' );
	t.deepEqual( DU, expectedDU, 'returns expected value' );
	t.deepEqual( DU2, expectedDU2, 'returns expected value' );
	t.deepEqual( DL, expectedDL, 'returns expected value' );

	data = POSITIVE_STRIDES_OFFSET_2;

	N = data.N;

	DL = new Float64Array( data.DL );
	D = new Float64Array( data.D );
	DU = new Float64Array( data.DU );
	DU2 = new Float64Array( data.DU2 );
	IPIV = new Int32Array( data.IPIV );

	expectedDL = new Float64Array( data.expectedDL );
	expectedD = new Float64Array( data.expectedD );
	expectedDU = new Float64Array( data.expectedDU );
	expectedDU2 = new Float64Array( data.expectedDU2 );
	expectedIPIV = new Int32Array( data.expectedIPIV );

	info = dgttrf( N, DL, data.sdl, data.odl, D, data.sd, data.od, DU, data.sdu, data.odu, DU2, data.sdu2, data.odu2, IPIV, data.si, data.oi ); // eslint-disable-line max-len
	t.strictEqual( info, data.expectedInfo, 'returns expected value' );
	t.deepEqual( IPIV, expectedIPIV, 'returns expected value' );
	t.deepEqual( D, expectedD, 'returns expected value' );
	t.deepEqual( DU, expectedDU, 'returns expected value' );
	t.deepEqual( DU2, expectedDU2, 'returns expected value' );
	t.deepEqual( DL, expectedDL, 'returns expected value' );

	t.end();
});

tape( 'the function leaves the input arrays unchanged when `N` is equal to zero', function test( t ) {
	var expectedIPIV;
	var expectedDU2;
	var expectedDU;
	var expectedDL;
	var expectedD;
	var data;
	var info;
	var IPIV;
	var DU2;
	var DU;
	var DL;
	var D;
	var N;

	data = POSITIVE_STRIDES_NO_OFFSET_1;

	N = 0;

	DL = new Float64Array( data.DL );
	D = new Float64Array( data.D );
	DU = new Float64Array( data.DU );
	DU2 = new Float64Array( data.DU2 );
	IPIV = new Int32Array( data.IPIV );

	expectedDL = new Float64Array( data.DL );
	expectedD = new Float64Array( data.D );
	expectedDU = new Float64Array( data.DU );
	expectedDU2 = new Float64Array( data.DU2 );
	expectedIPIV = new Int32Array( data.IPIV );

	info = dgttrf( N, DL, data.sdl, data.odl, D, data.sd, data.od, DU, data.sdu, data.odu, DU2, data.sdu2, data.odu2, IPIV, data.si, data.oi ); // eslint-disable-line max-len
	t.strictEqual( info, data.expectedInfo, 'returns expected value' );
	t.deepEqual( IPIV, expectedIPIV, 'returns expected value' );
	t.deepEqual( D, expectedD, 'returns expected value' );
	t.deepEqual( DU, expectedDU, 'returns expected value' );
	t.deepEqual( DU2, expectedDU2, 'returns expected value' );
	t.deepEqual( DL, expectedDL, 'returns expected value' );

	t.end();
});

tape( 'the function returns a non-zero status code when a diagonal element is equal to zero', function test( t ) {
	var info;
	var IPIV;
	var DU2;
	var DU;
	var DL;
	var D;
	var N;

	N = 3;

	DL = new Float64Array( [ 0.0, 0.0 ] );
	D = new Float64Array( [ 1.0, 1.0, 0.0 ] );
	DU = new Float64Array( [ 2.0, 3.0 ] );
	DU2 = new Float64Array( 1 );
	IPIV = new Int32Array( 3 );

	info = dgttrf( N, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 );
	t.strictEqual( info, 2, 'returns expected value' );

	t.end();
});
