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
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var gediff = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gediff, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 15', function test( t ) {
	t.strictEqual( gediff.length, 15, 'returns expected value' );
	t.end();
});

tape( 'the function calculates differences between consecutive elements of a strided array', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var o;

	x = [ 4.0, 8.0, 12.0, 16.0, 20.0 ];
	p = [ 10.0, 15.0 ];
	a = [ 30.0, 35.0 ];
	o = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	out = gediff( x.length, x, 1, 0, 2, p, 1, 0, 2, a, 1, 0, o, 1, 0 );
	expected = [ 10.0, 15.0, 4.0, 4.0, 4.0, 4.0, 30.0, 35.0 ];
	t.deepEqual( o, expected, 'returns expected value' );
	t.strictEqual( out, o, 'returns expected value' );

	t.end();
});

tape( 'the function calculates differences between consecutive elements of a strided array (accessors)', function test( t ) {
	var expected;
	var obuf;
	var x;
	var p;
	var a;
	var o;

	x = toAccessorArray( [ 4.0, 8.0, 12.0, 16.0, 20.0 ] );
	p = toAccessorArray( [ 10.0, 15.0 ] );
	a = toAccessorArray( [ 30.0, 35.0 ] );
	obuf = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	o = toAccessorArray( obuf );

	gediff( x.length, x, 1, 0, 2, p, 1, 0, 2, a, 1, 0, o, 1, 0 );
	expected = [ 10.0, 15.0, 4.0, 4.0, 4.0, 4.0, 30.0, 35.0 ];
	t.deepEqual( obuf, expected, 'returns expected value' );

	t.end();
});

tape( 'if the sum of the `N`, `N1`, and `N2` parameters is less than or equal to `1`, the function returns `out` unchanged', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var o;

	x = [ 4.0, 8.0, 12.0, 16.0, 20.0 ];
	p = [ 10.0, 15.0 ];
	a = [ 30.0, 35.0 ];
	o = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	out = gediff( 1, x, 1, 0, 0, p, 1, 0, 0, a, 1, 0, o, 1, 0 );
	expected = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	t.deepEqual( o, expected, 'returns expected value' );
	t.strictEqual( out, o, 'returns expected value' );

	t.end();
});

tape( 'the function supports stride parameters', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var o;

	x = [ 4.0, 8.0, 12.0, 16.0, 20.0 ];
	p = [ 10.0, 15.0, 25.0 ];
	a = [ 30.0, 35.0, 45.0 ];
	o = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	out = gediff( 3, x, 2, 0, 2, p, 2, 0, 2, a, 2, 0, o, 2, 0 );
	expected = [ 10.0, 0.0, 25.0, 0.0, 8.0, 0.0, 8.0, 0.0, 30.0, 0.0, 45.0 ];
	t.deepEqual( o, expected, 'returns expected value' );
	t.strictEqual( out, o, 'returns expected value' );

	t.end();
});

tape( 'the function supports stride parameters (accessors)', function test( t ) {
	var expected;
	var obuf;
	var x;
	var p;
	var a;
	var o;

	x = toAccessorArray( [ 4.0, 8.0, 12.0, 16.0, 20.0 ] );
	p = toAccessorArray( [ 10.0, 15.0, 25.0 ] );
	a = toAccessorArray( [ 30.0, 35.0, 45.0 ] );
	obuf = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	o = toAccessorArray( obuf );

	gediff( 3, x, 2, 0, 2, p, 2, 0, 2, a, 2, 0, o, 2, 0 );
	expected = [ 10.0, 0.0, 25.0, 0.0, 8.0, 0.0, 8.0, 0.0, 30.0, 0.0, 45.0 ];
	t.deepEqual( obuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative stride parameters', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var o;

	x = [ 4.0, 8.0, 12.0, 16.0, 20.0 ];
	p = [ 10.0, 15.0, 25.0 ];
	a = [ 30.0, 35.0, 45.0 ];
	o = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	out = gediff( 3, x, -2, 4, 2, p, -2, 2, 2, a, -2, 2, o, -2, 10 );
	expected = [ 30.0, 0.0, 45.0, 0.0, -8.0, 0.0, -8.0, 0.0, 10.0, 0.0, 25.0 ];
	t.deepEqual( o, expected, 'returns expected value' );
	t.strictEqual( out, o, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative stride parameters (accessors)', function test( t ) {
	var expected;
	var obuf;
	var x;
	var p;
	var a;
	var o;

	x = toAccessorArray( [ 4.0, 8.0, 12.0, 16.0, 20.0 ] );
	p = toAccessorArray( [ 10.0, 15.0, 25.0 ] );
	a = toAccessorArray( [ 30.0, 35.0, 45.0 ] );
	obuf = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	o = toAccessorArray( obuf );

	gediff( 3, x, -2, 4, 2, p, -2, 2, 2, a, -2, 2, o, -2, 10 );
	expected = [ 30.0, 0.0, 45.0, 0.0, -8.0, 0.0, -8.0, 0.0, 10.0, 0.0, 25.0 ];
	t.deepEqual( obuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports offset parameters', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var o;

	x = [ 0.0, 4.0, 7.0, 12.0, 16.0, 20.0 ];
	p = [ 10.0 ];
	a = [ 30.0 ];
	o = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	out = gediff( 3, x, 1, 2, 1, p, 1, 0, 1, a, 1, 0, o, 1, 0 );
	expected = [ 10.0, 5.0, 4.0, 30.0, 0.0, 0.0 ];
	t.deepEqual( o, expected, 'returns expected value' );
	t.strictEqual( out, o, 'returns expected value' );

	t.end();
});

tape( 'the function supports offset parameters (accessors)', function test( t ) {
	var expected;
	var obuf;
	var x;
	var p;
	var a;
	var o;

	x = toAccessorArray( [ 0.0, 4.0, 7.0, 12.0, 16.0, 20.0 ] );
	p = toAccessorArray( [ 10.0 ] );
	a = toAccessorArray( [ 30.0 ] );
	obuf = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	o = toAccessorArray( obuf );

	gediff( 3, x, 1, 2, 1, p, 1, 0, 1, a, 1, 0, o, 1, 0 );
	expected = [ 10.0, 5.0, 4.0, 30.0, 0.0, 0.0 ];
	t.deepEqual( obuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports no prepend and no append', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var o;

	x = [ 1.0, 3.0, 6.0, 10.0 ];
	p = [];
	a = [];
	o = [ 0.0, 0.0, 0.0 ];

	out = gediff( x.length, x, 1, 0, 0, p, 1, 0, 0, a, 1, 0, o, 1, 0 );
	expected = [ 2.0, 3.0, 4.0 ];
	t.deepEqual( o, expected, 'returns expected value' );
	t.strictEqual( out, o, 'returns expected value' );

	t.end();
});

tape( 'the function supports no prepend and no append (accessors)', function test( t ) {
	var expected;
	var obuf;
	var x;
	var p;
	var a;
	var o;

	x = toAccessorArray( [ 1.0, 3.0, 6.0, 10.0 ] );
	p = toAccessorArray( [] );
	a = toAccessorArray( [] );
	obuf = [ 0.0, 0.0, 0.0 ];
	o = toAccessorArray( obuf );

	gediff( 4, x, 1, 0, 0, p, 1, 0, 0, a, 1, 0, o, 1, 0 );
	expected = [ 2.0, 3.0, 4.0 ];
	t.deepEqual( obuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports multiple prepend and append values', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var o;

	// Multiple prepend (N1=2), no append:
	x = [ 6.0, 8.0 ];
	p = [ 1.0, 3.0 ];
	a = [];
	o = [ 0.0, 0.0, 0.0 ];

	out = gediff( x.length, x, 1, 0, 2, p, 1, 0, 0, a, 1, 0, o, 1, 0 );
	expected = [ 1.0, 3.0, 2.0 ];
	t.deepEqual( o, expected, 'returns expected value' );
	t.strictEqual( out, o, 'returns expected value' );

	// Prepend (N1=1), x, and multiple append (N2=2):
	x = [ 2.0, 4.0 ];
	p = [ 1.0 ];
	a = [ 6.0, 10.0 ];
	o = [ 0.0, 0.0, 0.0, 0.0 ];

	out = gediff( x.length, x, 1, 0, 1, p, 1, 0, 2, a, 1, 0, o, 1, 0 );
	expected = [ 1.0, 2.0, 6.0, 10.0 ];
	t.deepEqual( o, expected, 'returns expected value' );
	t.strictEqual( out, o, 'returns expected value' );

	t.end();
});

tape( 'the function supports multiple prepend and append values (accessors)', function test( t ) {
	var expected;
	var obuf;
	var x;
	var p;
	var a;
	var o;

	// Multiple prepend (N1=2), no append:
	x = toAccessorArray( [ 6.0, 8.0 ] );
	p = toAccessorArray( [ 1.0, 3.0 ] );
	a = toAccessorArray( [] );
	obuf = [ 0.0, 0.0, 0.0 ];
	o = toAccessorArray( obuf );

	gediff( 2, x, 1, 0, 2, p, 1, 0, 0, a, 1, 0, o, 1, 0 );
	expected = [ 1.0, 3.0, 2.0 ];
	t.deepEqual( obuf, expected, 'returns expected value' );

	// Prepend (N1=1), x, and multiple append (N2=2):
	x = toAccessorArray( [ 2.0, 4.0 ] );
	p = toAccessorArray( [ 1.0 ] );
	a = toAccessorArray( [ 6.0, 10.0 ] );
	obuf = [ 0.0, 0.0, 0.0, 0.0 ];
	o = toAccessorArray( obuf );

	gediff( 2, x, 1, 0, 1, p, 1, 0, 2, a, 1, 0, o, 1, 0 );
	expected = [ 1.0, 2.0, 6.0, 10.0 ];
	t.deepEqual( obuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports append without prepend', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var o;

	x = [ 2.0, 5.0 ];
	p = [];
	a = [ 10.0 ];
	o = [ 0.0, 0.0 ];

	out = gediff( x.length, x, 1, 0, 0, p, 1, 0, 1, a, 1, 0, o, 1, 0 );
	expected = [ 3.0, 10.0 ];
	t.deepEqual( o, expected, 'returns expected value' );
	t.strictEqual( out, o, 'returns expected value' );

	t.end();
});

tape( 'the function supports append without prepend (accessors)', function test( t ) {
	var expected;
	var obuf;
	var x;
	var p;
	var a;
	var o;

	x = toAccessorArray( [ 2.0, 5.0 ] );
	p = toAccessorArray( [] );
	a = toAccessorArray( [ 10.0 ] );
	obuf = [ 0.0, 0.0 ];
	o = toAccessorArray( obuf );

	gediff( 2, x, 1, 0, 0, p, 1, 0, 1, a, 1, 0, o, 1, 0 );
	expected = [ 3.0, 10.0 ];
	t.deepEqual( obuf, expected, 'returns expected value' );

	t.end();
});
