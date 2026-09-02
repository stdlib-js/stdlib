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
var gdiff = require( './../lib/gdiff.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gdiff, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function calculates the first forward difference', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var w;

	x = [ 2.0, 4.0, 6.0, 8.0, 10.0 ];
	p = [ 1.0 ];
	a = [ 11.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	w = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 );

	expected = [ 1.0, 2.0, 2.0, 2.0, 2.0, 1.0 ];
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function calculates higher-order forward differences', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var w;

	// Second forward difference (k=2):
	x = [ 2.0, 4.0, 7.0, 11.0, 16.0 ];
	p = [ 1.0 ];
	a = [ 22.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	w = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gdiff( x.length, 2, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 );

	expected = [ 1.0, 1.0, 1.0, 1.0, 1.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	// Third forward difference (k=3):
	x = [ 1.0, 3.0, 6.0, 10.0, 15.0, 21.0 ];
	p = [];
	a = [];
	out = [ 0.0, 0.0, 0.0 ];
	w = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gdiff( x.length, 3, x, 1, 0, p, 1, 0, a, 1, out, 1, w, 1 );

	expected = [ 0.0, 0.0, 0.0 ];
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports k=0 (copies input)', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var w;

	x = [ 2.0, 4.0, 6.0 ];
	p = [ 1.0 ];
	a = [ 7.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	w = [ 0.0, 0.0, 0.0, 0.0 ];

	gdiff( x.length, 0, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 );

	expected = [ 1.0, 2.0, 4.0, 6.0, 7.0 ];
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns the output array unchanged for trivial cases', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var w;

	// N <= 0:
	x = [ 2.0, 4.0 ];
	p = [];
	a = [];
	out = [ 0.0, 0.0 ];
	w = [ 0.0, 0.0 ];

	gdiff( 0, 1, x, 1, 0, p, 1, 0, a, 1, out, 1, w, 1 );

	expected = [ 0.0, 0.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	x = [ 5.0 ];
	p = [];
	a = [];
	out = [ 0.0 ];
	w = [ 0.0 ];

	gdiff( 1, 1, x, 1, 0, p, 1, 0, a, 1, out, 1, w, 1 );

	expected = [ 0.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	x = [ 1.0, 2.0 ];
	p = [];
	a = [];
	out = [ 0.0 ];
	w = [ 0.0 ];

	gdiff( x.length, 5, x, 1, 0, p, 1, 0, a, 1, out, 1, w, 1 );

	expected = [ 0.0 ];
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports no prepend and no append', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var w;

	x = [ 1.0, 3.0, 6.0, 10.0 ];
	p = [];
	a = [];
	out = [ 0.0, 0.0, 0.0 ];
	w = [ 0.0, 0.0, 0.0 ];

	gdiff( x.length, 1, x, 1, 0, p, 1, 0, a, 1, out, 1, w, 1 );

	expected = [ 2.0, 3.0, 4.0 ];
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports strides', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var w;

	// Negative strides:
	x = [ 2.0, 4.0, 6.0, 8.0, 10.0 ];
	p = [ 1.0 ];
	a = [ 11.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	w = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gdiff( x.length, 1, x, -1, 1, p, 1, 1, a, 1, out, 1, w, 1 );

	expected = [ 9.0, -2.0, -2.0, -2.0, -2.0, 9.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	// Strided access (stride=2):
	x = [ 2.0, 4.0, 6.0, 8.0, 10.0 ];
	p = [ 1.0 ];
	a = [ 11.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0 ];
	w = [ 0.0, 0.0, 0.0, 0.0 ];

	gdiff( 3, 1, x, 2, 1, p, 1, 1, a, 1, out, 1, w, 1 );

	expected = [ 1.0, 4.0, 4.0, 1.0 ];
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports multiple prepend and append values', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var w;

	// Multiple prepend (N1=2), no append:
	x = [ 6.0, 8.0 ];
	p = [ 1.0, 3.0 ];
	a = [];
	out = [ 0.0, 0.0, 0.0 ];
	w = [ 0.0, 0.0, 0.0 ];

	gdiff( x.length, 1, x, 1, 2, p, 1, 0, a, 1, out, 1, w, 1 );

	expected = [ 2.0, 3.0, 2.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	// Multiple prepend (N1=2) and append (N2=1), no x:
	x = [];
	p = [ 1.0, 3.0 ];
	a = [ 7.0 ];
	out = [ 0.0, 0.0 ];
	w = [ 0.0, 0.0 ];

	gdiff( 0, 1, x, 1, 2, p, 1, 1, a, 1, out, 1, w, 1 );

	expected = [ 2.0, 4.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	// Prepend (N1=1), x, and multiple append (N2=2):
	x = [ 2.0, 4.0 ];
	p = [ 1.0 ];
	a = [ 6.0, 10.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0 ];
	w = [ 0.0, 0.0, 0.0, 0.0 ];

	gdiff( x.length, 1, x, 1, 1, p, 1, 2, a, 1, out, 1, w, 1 );

	expected = [ 1.0, 2.0, 2.0, 4.0 ];
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports append without prepend', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var w;

	// No prepend, x present, single append:
	x = [ 2.0, 5.0 ];
	p = [];
	a = [ 10.0 ];
	out = [ 0.0, 0.0 ];
	w = [ 0.0, 0.0 ];

	gdiff( x.length, 1, x, 1, 0, p, 1, 1, a, 1, out, 1, w, 1 );

	expected = [ 3.0, 5.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	// No prepend, no x, only append (N2=3):
	x = [];
	p = [];
	a = [ 1.0, 4.0, 9.0 ];
	out = [ 0.0, 0.0 ];
	w = [ 0.0, 0.0 ];

	gdiff( 0, 1, x, 1, 0, p, 1, 3, a, 1, out, 1, w, 1 );

	expected = [ 3.0, 5.0 ];
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function calculates the first forward difference (accessors)', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var w;

	x = [ 2.0, 4.0, 6.0, 8.0, 10.0 ];
	p = [ 1.0 ];
	a = [ 11.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	w = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gdiff( 5, 1, toAccessorArray( x ), 1, 1, toAccessorArray( p ), 1, 1, toAccessorArray( a ), 1, toAccessorArray( out ), 1, toAccessorArray( w ), 1 );

	expected = [ 1.0, 2.0, 2.0, 2.0, 2.0, 1.0 ];
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function calculates higher-order forward differences (accessors)', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var w;

	x = [ 2.0, 4.0, 7.0, 11.0, 16.0 ];
	p = [ 1.0 ];
	a = [ 22.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	w = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gdiff( 5, 2, toAccessorArray( x ), 1, 1, toAccessorArray( p ), 1, 1, toAccessorArray( a ), 1, toAccessorArray( out ), 1, toAccessorArray( w ), 1 );

	expected = [ 1.0, 1.0, 1.0, 1.0, 1.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	// Third forward difference (k=3):
	x = [ 1.0, 3.0, 6.0, 10.0, 15.0, 21.0 ];
	p = [];
	a = [];
	out = [ 0.0, 0.0, 0.0 ];
	w = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gdiff( x.length, 3, toAccessorArray( x ), 1, 0, toAccessorArray( p ), 1, 0, toAccessorArray( a ), 1, toAccessorArray( out ), 1, toAccessorArray( w ), 1 );

	expected = [ 0.0, 0.0, 0.0 ];
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports k=0 (copies input) (accessors)', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var w;

	x = [ 2.0, 4.0, 6.0 ];
	p = [ 1.0 ];
	a = [ 7.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	w = [ 0.0, 0.0, 0.0, 0.0 ];

	gdiff( 3, 0, toAccessorArray( x ), 1, 1, toAccessorArray( p ), 1, 1, toAccessorArray( a ), 1, toAccessorArray( out ), 1, toAccessorArray( w ), 1 );

	expected = [ 1.0, 2.0, 4.0, 6.0, 7.0 ];
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports no prepend and no append (accessors)', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var w;

	x = [ 1.0, 3.0, 6.0, 10.0 ];
	p = [];
	a = [];
	out = [ 0.0, 0.0, 0.0 ];
	w = [ 0.0, 0.0, 0.0 ];

	gdiff( 4, 1, toAccessorArray( x ), 1, 0, toAccessorArray( p ), 1, 0, toAccessorArray( a ), 1, toAccessorArray( out ), 1, toAccessorArray( w ), 1 );

	expected = [ 2.0, 3.0, 4.0 ];
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports strides (accessors)', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var w;

	x = [ 2.0, 4.0, 6.0, 8.0, 10.0 ];
	p = [ 1.0 ];
	a = [ 11.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	w = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gdiff( 5, 1, toAccessorArray( x ), -1, 1, toAccessorArray( p ), 1, 1, toAccessorArray( a ), 1, toAccessorArray( out ), 1, toAccessorArray( w ), 1 );

	expected = [ 9.0, -2.0, -2.0, -2.0, -2.0, 9.0 ];
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns the output array unchanged for trivial cases (accessors)', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var w;

	// N <= 0:
	x = [ 2.0, 4.0 ];
	p = [];
	a = [];
	out = [ 0.0, 0.0 ];
	w = [ 0.0, 0.0 ];

	gdiff( 0, 1, toAccessorArray( x ), 1, 0, toAccessorArray( p ), 1, 0, toAccessorArray( a ), 1, toAccessorArray( out ), 1, toAccessorArray( w ), 1 );

	expected = [ 0.0, 0.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	// Single element (total <= 1):
	x = [ 5.0 ];
	p = [];
	a = [];
	out = [ 0.0 ];
	w = [ 0.0 ];

	gdiff( 1, 1, toAccessorArray( x ), 1, 0, toAccessorArray( p ), 1, 0, toAccessorArray( a ), 1, toAccessorArray( out ), 1, toAccessorArray( w ), 1 );

	expected = [ 0.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	// k >= total:
	x = [ 1.0, 2.0 ];
	p = [];
	a = [];
	out = [ 0.0 ];
	w = [ 0.0 ];

	gdiff( x.length, 5, toAccessorArray( x ), 1, 0, toAccessorArray( p ), 1, 0, toAccessorArray( a ), 1, toAccessorArray( out ), 1, toAccessorArray( w ), 1 );

	expected = [ 0.0 ];
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports multiple prepend and append values (accessors)', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var w;

	// Multiple prepend (N1=2), no append:
	x = [ 6.0, 8.0 ];
	p = [ 1.0, 3.0 ];
	a = [];
	out = [ 0.0, 0.0, 0.0 ];
	w = [ 0.0, 0.0, 0.0 ];

	gdiff( x.length, 1, toAccessorArray( x ), 1, 2, toAccessorArray( p ), 1, 0, toAccessorArray( a ), 1, toAccessorArray( out ), 1, toAccessorArray( w ), 1 );

	expected = [ 2.0, 3.0, 2.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	// Multiple prepend (N1=2) and append (N2=1), no x:
	x = [];
	p = [ 1.0, 3.0 ];
	a = [ 7.0 ];
	out = [ 0.0, 0.0 ];
	w = [ 0.0, 0.0 ];

	gdiff( 0, 1, toAccessorArray( x ), 1, 2, toAccessorArray( p ), 1, 1, toAccessorArray( a ), 1, toAccessorArray( out ), 1, toAccessorArray( w ), 1 );

	expected = [ 2.0, 4.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	// Prepend (N1=1), x, and multiple append (N2=2):
	x = [ 2.0, 4.0 ];
	p = [ 1.0 ];
	a = [ 6.0, 10.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0 ];
	w = [ 0.0, 0.0, 0.0, 0.0 ];

	gdiff( x.length, 1, toAccessorArray( x ), 1, 1, toAccessorArray( p ), 1, 2, toAccessorArray( a ), 1, toAccessorArray( out ), 1, toAccessorArray( w ), 1 );

	expected = [ 1.0, 2.0, 2.0, 4.0 ];
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports append without prepend (accessors)', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var w;

	// No prepend, x present, single append:
	x = [ 2.0, 5.0 ];
	p = [];
	a = [ 10.0 ];
	out = [ 0.0, 0.0 ];
	w = [ 0.0, 0.0 ];

	gdiff( x.length, 1, toAccessorArray( x ), 1, 0, toAccessorArray( p ), 1, 1, toAccessorArray( a ), 1, toAccessorArray( out ), 1, toAccessorArray( w ), 1 );

	expected = [ 3.0, 5.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	// No prepend, no x, only append (N2=3):
	x = [];
	p = [];
	a = [ 1.0, 4.0, 9.0 ];
	out = [ 0.0, 0.0 ];
	w = [ 0.0, 0.0 ];

	gdiff( 0, 1, toAccessorArray( x ), 1, 0, toAccessorArray( p ), 1, 3, toAccessorArray( a ), 1, toAccessorArray( out ), 1, toAccessorArray( w ), 1 );

	expected = [ 3.0, 5.0 ];
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});
