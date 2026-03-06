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

/* eslint-disable array-element-newline */

'use strict';

// MODULES //

var tape = require( 'tape' );
var isFunctionArray = require( '@stdlib/assert/is-function-array' );
var isComplex64 = require( '@stdlib/assert/is-complex64' );
var isComplex128 = require( '@stdlib/assert/is-complex128' );
var add = require( '@stdlib/number/float64/base/add' );
var cadd = require( '@stdlib/complex/float64/base/add' );
var caddf = require( '@stdlib/complex/float32/base/add' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var callbacks = require( './../lib' );


// VARIABLES //

var SIGS = [
	'float64', 'float64', 'float64',

	'float32', 'float32', 'float32',

	'float32', 'float64', 'generic',

	'complex64', 'complex64', 'complex64',
	'float32', 'complex64', 'complex64',
	'complex64', 'float32', 'complex64',
	'complex64', 'complex64', 'complex128',
	'complex64', 'complex64', 'generic',
	'complex64', 'float32', 'generic',

	'complex128', 'complex128', 'complex128',
	'float64', 'complex128', 'complex128',
	'complex128', 'float64', 'complex128',
	'complex128', 'complex128', 'generic',
	'complex128', 'float64', 'generic'
];
var TABLE = {
	'default': add,
	'complex64': caddf,
	'complex128': cadd
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof callbacks, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a list of callbacks', function test( t ) {
	var clbks = callbacks( TABLE, SIGS );
	t.strictEqual( isFunctionArray( clbks ), true, 'returns an array of functions' );
	t.strictEqual( clbks.length, SIGS.length/3, 'has expected length' );
	t.end();
});

tape( 'the function returns the default callback for signatures having numeric dtypes', function test( t ) {
	var sigs;
	var out;

	sigs = [ 'float64', 'float64', 'float64' ];
	out = callbacks( TABLE, sigs );
	t.strictEqual( out[ 0 ], TABLE.default, 'returns expected value' );

	sigs = [ 'float32', 'float32', 'float32' ];
	out = callbacks( TABLE, sigs );
	t.strictEqual( out[ 0 ], TABLE.default, 'returns expected value' );

	sigs = [ 'float32', 'float64', 'generic' ];
	out = callbacks( TABLE, sigs );
	t.strictEqual( out[ 0 ], TABLE.default, 'returns expected value' );

	t.end();
});

tape( 'the function supports interfaces with `complex64` dtypes', function test( t ) {
	var sigs;
	var out;
	var f;
	var x;
	var y;
	var z;

	sigs = [ 'complex64', 'complex64', 'complex64' ];
	out = callbacks( TABLE, sigs );

	f = out[ 0 ];
	x = new Complex64( 1.0, 2.0 );
	y = new Complex64( 3.0, 4.0 );
	z = f( x, y );

	t.strictEqual( isComplex64( z ), true, 'returns expected value' );
	t.strictEqual( real( z ), 4.0, 'returns expected value' );
	t.strictEqual( imag( z ), 6.0, 'returns expected value' );

	sigs = [ 'float32', 'complex64', 'complex64' ];
	out = callbacks( TABLE, sigs );

	f = out[ 0 ];
	x = 1.0;
	y = new Complex64( 3.0, 4.0 );
	z = f( x, y );

	t.strictEqual( isComplex64( z ), true, 'returns expected value' );
	t.strictEqual( real( z ), 4.0, 'returns expected value' );
	t.strictEqual( imag( z ), 4.0, 'returns expected value' );

	sigs = [ 'complex64', 'float32', 'complex64' ];
	out = callbacks( TABLE, sigs );

	f = out[ 0 ];
	x = new Complex64( 1.0, 2.0 );
	y = 3.0;
	z = f( x, y );

	t.strictEqual( isComplex64( z ), true, 'returns expected value' );
	t.strictEqual( real( z ), 4.0, 'returns expected value' );
	t.strictEqual( imag( z ), 2.0, 'returns expected value' );

	sigs = [ 'complex64', 'complex64', 'complex128' ];
	out = callbacks( TABLE, sigs );

	f = out[ 0 ];
	x = new Complex64( 1.0, 2.0 );
	y = new Complex64( 3.0, 4.0 );
	z = f( x, y );

	t.strictEqual( isComplex128( z ), true, 'returns expected value' );
	t.strictEqual( real( z ), 4.0, 'returns expected value' );
	t.strictEqual( imag( z ), 6.0, 'returns expected value' );

	sigs = [ 'complex64', 'complex64', 'generic' ];
	out = callbacks( TABLE, sigs );

	f = out[ 0 ];
	x = new Complex64( 1.0, 2.0 );
	y = new Complex64( 3.0, 4.0 );
	z = f( x, y );

	t.strictEqual( isComplex64( z ), true, 'returns expected value' );
	t.strictEqual( real( z ), 4.0, 'returns expected value' );
	t.strictEqual( imag( z ), 6.0, 'returns expected value' );

	sigs = [ 'complex64', 'float32', 'generic' ];
	out = callbacks( TABLE, sigs );

	f = out[ 0 ];
	x = new Complex64( 1.0, 2.0 );
	y = 3.0;
	z = f( x, y );

	t.strictEqual( isComplex64( z ), true, 'returns expected value' );
	t.strictEqual( real( z ), 4.0, 'returns expected value' );
	t.strictEqual( imag( z ), 2.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports interfaces with `complex128` dtypes', function test( t ) {
	var sigs;
	var out;
	var f;
	var x;
	var y;
	var z;

	sigs = [ 'complex128', 'complex128', 'complex128' ];
	out = callbacks( TABLE, sigs );

	f = out[ 0 ];
	x = new Complex128( 1.0, 2.0 );
	y = new Complex128( 3.0, 4.0 );
	z = f( x, y );

	t.strictEqual( isComplex128( z ), true, 'returns expected value' );
	t.strictEqual( real( z ), 4.0, 'returns expected value' );
	t.strictEqual( imag( z ), 6.0, 'returns expected value' );

	sigs = [ 'float64', 'complex128', 'complex128' ];
	out = callbacks( TABLE, sigs );

	f = out[ 0 ];
	x = 1.0;
	y = new Complex128( 3.0, 4.0 );
	z = f( x, y );

	t.strictEqual( isComplex128( z ), true, 'returns expected value' );
	t.strictEqual( real( z ), 4.0, 'returns expected value' );
	t.strictEqual( imag( z ), 4.0, 'returns expected value' );

	sigs = [ 'complex128', 'float64', 'complex128' ];
	out = callbacks( TABLE, sigs );

	f = out[ 0 ];
	x = new Complex128( 1.0, 2.0 );
	y = 3.0;
	z = f( x, y );

	t.strictEqual( isComplex128( z ), true, 'returns expected value' );
	t.strictEqual( real( z ), 4.0, 'returns expected value' );
	t.strictEqual( imag( z ), 2.0, 'returns expected value' );

	sigs = [ 'complex128', 'complex128', 'generic' ];
	out = callbacks( TABLE, sigs );

	f = out[ 0 ];
	x = new Complex128( 1.0, 2.0 );
	y = new Complex128( 3.0, 4.0 );
	z = f( x, y );

	t.strictEqual( isComplex128( z ), true, 'returns expected value' );
	t.strictEqual( real( z ), 4.0, 'returns expected value' );
	t.strictEqual( imag( z ), 6.0, 'returns expected value' );

	sigs = [ 'complex128', 'float64', 'generic' ];
	out = callbacks( TABLE, sigs );

	f = out[ 0 ];
	x = new Complex128( 1.0, 2.0 );
	y = 3.0;
	z = f( x, y );

	t.strictEqual( isComplex128( z ), true, 'returns expected value' );
	t.strictEqual( real( z ), 4.0, 'returns expected value' );
	t.strictEqual( imag( z ), 2.0, 'returns expected value' );

	t.end();
});
