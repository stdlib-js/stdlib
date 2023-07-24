/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var isNaNArray = require( '@stdlib/assert/is-nan-array' );
var isArray = require( '@stdlib/assert/is-array' );
var kernelBetainc = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof kernelBetainc, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `[ NaN, NaN ]` if `x` is outside `[0,1]`', function test( t ) {
	var val = kernelBetainc( -0.2, 1.0, 1.0, true, true );
	t.equal( isNaNArray( val ), true, 'returns array of NaNs' );

	val = kernelBetainc( -0.2, 1.0, 1.0, false, false );
	t.equal( isNaNArray( val ), true, 'returns array of NaNs' );

	val = kernelBetainc( -0.2, 1.0, 1.0, true, false );
	t.equal( isNaNArray( val ), true, 'returns array of NaNs' );

	val = kernelBetainc( -0.2, 1.0, 1.0, false, true );
	t.equal( isNaNArray( val ), true, 'returns array of NaNs' );

	val = kernelBetainc( 1.1, 1.0, 1.0, true, true );
	t.equal( isNaNArray( val ), true, 'returns array of NaNs' );

	val = kernelBetainc( 1.1, 1.0, 1.0, false, false );
	t.equal( isNaNArray( val ), true, 'returns array of NaNs' );

	val = kernelBetainc( 1.1, 1.0, 1.0, false, true );
	t.equal( isNaNArray( val ), true, 'returns array of NaNs' );

	val = kernelBetainc( 1.1, 1.0, 1.0, true, false );
	t.equal( isNaNArray( val ), true, 'returns array of NaNs' );

	t.end();
});

tape( 'the function returns `[ NaN, NaN ]` if `x` is `NaN`', function test( t ) {
	var val = kernelBetainc( NaN, 1.0, 1.0, true, true );
	t.equal( isNaNArray( val ), true, 'returns array of NaNs' );
	t.end();
});

tape( 'the function returns `[ NaN, NaN ]` if negative `a` or `b`', function test( t ) {
	var val = kernelBetainc( 0.5, -1.0, 1.0, true, true );
	t.equal( isNaNArray( val ), true, 'returns array of NaNs' );

	val = kernelBetainc( 0.5, -1.0, 1.0, false, false );
	t.equal( isNaNArray( val ), true, 'returns array of NaNs' );

	val = kernelBetainc( 0.5, -1.0, 1.0, true, false );
	t.equal( isNaNArray( val ), true, 'returns array of NaNs' );

	val = kernelBetainc( 0.5, -1.0, 1.0, false, true );
	t.equal( isNaNArray( val ), true, 'returns array of NaNs' );

	val = kernelBetainc( 0.5, 1.0, -1.0, true, true );
	t.equal( isNaNArray( val ), true, 'returns array of NaNs' );

	val = kernelBetainc( 0.5, 1.0, -1.0, false, false );
	t.equal( isNaNArray( val ), true, 'returns array of NaNs' );

	val = kernelBetainc( 0.5, 1.0, -1.0, true, false );
	t.equal( isNaNArray( val ), true, 'returns array of NaNs' );

	val = kernelBetainc( 0.5, 1.0, -1.0, false, true );
	t.equal( isNaNArray( val ), true, 'returns array of NaNs' );

	val = kernelBetainc( 0.5, -1.0, -1.0, true, true );
	t.equal( isNaNArray( val ), true, 'returns array of NaNs' );

	val = kernelBetainc( 0.5, -1.0, -1.0, false, false );
	t.equal( isNaNArray( val ), true, 'returns array of NaNs' );

	val = kernelBetainc( 0.5, -1.0, -1.0, false, true );
	t.equal( isNaNArray( val ), true, 'returns array of NaNs' );

	val = kernelBetainc( 0.5, -1.0, -1.0, true, false );
	t.equal( isNaNArray( val ), true, 'returns array of NaNs' );

	t.end();
});

tape( 'attached to the function is a method which supports supplying a destination array', function test( t ) {
	var out;
	var v;

	out = [ 0.0, 0.0 ];
	v = kernelBetainc.assign( 0.5, 1.0, 1.0, true, true, out, 1, 0 );

	t.equal( isArray( v ), true, 'returns an array' );
	t.equal( v.length, 2, 'returned array has two elements' );
	t.equal( v, out, 'returns a reference to output array' );

	t.end();
});

// TODO: Add fixtures
