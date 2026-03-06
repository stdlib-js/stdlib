/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var Complex64Array = require( '@stdlib/array/complex64' );
var Float64Array = require( '@stdlib/array/float64' );
var Float32Array = require( '@stdlib/array/float32' );
var Uint8Array = require( '@stdlib/array/uint8' );
var isFloat32Array = require( '@stdlib/assert/is-float32array' );
var isFloat64Array = require( '@stdlib/assert/is-float64array' );
var isUint8Array = require( '@stdlib/assert/is-uint8array' );
var isComplex64Array = require( '@stdlib/assert/is-complex64array' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var offsetView = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof offsetView, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a typed array view', function test( t ) {
	var x;
	var v;

	x = new Float64Array( 10 );
	v = offsetView( x, 0 );
	t.strictEqual( isFloat64Array( v ), true, 'returns expected value' );
	t.strictEqual( v.buffer, x.buffer, 'returns a view' );
	t.strictEqual( v.length, x.length, 'has expected length' );
	t.strictEqual( v.byteOffset, 0, 'has expected byte offset' );

	x = new Float32Array( 10 );
	v = offsetView( x, 0 );
	t.strictEqual( isFloat32Array( v ), true, 'returns expected value' );
	t.strictEqual( v.buffer, x.buffer, 'returns a view' );
	t.strictEqual( v.length, x.length, 'has expected length' );
	t.strictEqual( v.byteOffset, 0, 'has expected byte offset' );

	x = new Uint8Array( 10 );
	v = offsetView( x, 0 );
	t.strictEqual( isUint8Array( v ), true, 'returns expected value' );
	t.strictEqual( v.buffer, x.buffer, 'returns a view' );
	t.strictEqual( v.length, x.length, 'has expected length' );
	t.strictEqual( v.byteOffset, 0, 'has expected byte offset' );

	x = new Complex64Array( 10 );
	v = offsetView( x, 0 );
	t.strictEqual( isComplex64Array( v ), true, 'returns expected value' );
	t.strictEqual( v.buffer, x.buffer, 'returns a view' );
	t.strictEqual( v.length, x.length, 'has expected length' );
	t.strictEqual( v.byteOffset, 0, 'has expected byte offset' );

	t.end();
});

tape( 'the function returns a typed array view (byte offset)', function test( t ) {
	var buf;
	var x;
	var v;

	buf = new ArrayBuffer( 1000 );

	x = new Float64Array( buf, 64 );
	v = offsetView( x, 0 );
	t.strictEqual( isFloat64Array( v ), true, 'returns expected value' );
	t.strictEqual( v.buffer, buf, 'returns a view' );
	t.strictEqual( v.length, x.length, 'has expected length' );
	t.strictEqual( v.byteOffset, x.byteOffset, 'has expected byte offset' );

	x = new Float32Array( buf, 40 );
	v = offsetView( x, 0 );
	t.strictEqual( isFloat32Array( v ), true, 'returns expected value' );
	t.strictEqual( v.buffer, buf, 'returns a view' );
	t.strictEqual( v.length, x.length, 'has expected length' );
	t.strictEqual( v.byteOffset, x.byteOffset, 'has expected byte offset' );

	x = new Uint8Array( buf, 100 );
	v = offsetView( x, 0 );
	t.strictEqual( isUint8Array( v ), true, 'returns expected value' );
	t.strictEqual( v.buffer, buf, 'returns a view' );
	t.strictEqual( v.length, x.length, 'has expected length' );
	t.strictEqual( v.byteOffset, x.byteOffset, 'has expected byte offset' );

	x = new Complex64Array( buf, 160 );
	v = offsetView( x, 0 );
	t.strictEqual( isComplex64Array( v ), true, 'returns expected value' );
	t.strictEqual( v.buffer, buf, 'returns a view' );
	t.strictEqual( v.length, x.length, 'has expected length' );
	t.strictEqual( v.byteOffset, x.byteOffset, 'has expected byte offset' );

	t.end();
});

tape( 'the function reinterprets a typed array view (index offset)', function test( t ) {
	var x;
	var v;

	x = new Float64Array( 10 );
	v = offsetView( x, 2 );
	t.strictEqual( isFloat64Array( v ), true, 'returns expected value' );
	t.strictEqual( v.buffer, x.buffer, 'returns a view' );
	t.strictEqual( v.length, x.length-2, 'has expected length' );
	t.strictEqual( v.byteOffset, 2*x.BYTES_PER_ELEMENT, 'has expected byte offset' );

	x = new Float32Array( 10 );
	v = offsetView( x, 4 );
	t.strictEqual( isFloat32Array( v ), true, 'returns expected value' );
	t.strictEqual( v.buffer, x.buffer, 'returns a view' );
	t.strictEqual( v.length, x.length-4, 'has expected length' );
	t.strictEqual( v.byteOffset, 4*x.BYTES_PER_ELEMENT, 'has expected byte offset' );

	x = new Uint8Array( 10 );
	v = offsetView( x, 8 );
	t.strictEqual( isUint8Array( v ), true, 'returns expected value' );
	t.strictEqual( v.buffer, x.buffer, 'returns a view' );
	t.strictEqual( v.length, x.length-8, 'has expected length' );
	t.strictEqual( v.byteOffset, 8*x.BYTES_PER_ELEMENT, 'has expected byte offset' );

	x = new Complex64Array( 10 );
	v = offsetView( x, 1 );
	t.strictEqual( isComplex64Array( v ), true, 'returns expected value' );
	t.strictEqual( v.buffer, x.buffer, 'returns a view' );
	t.strictEqual( v.length, x.length-1, 'has expected length' );
	t.strictEqual( v.byteOffset, 1*x.BYTES_PER_ELEMENT, 'has expected byte offset' );

	t.end();
});
