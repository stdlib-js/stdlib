/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var Complex128 = require( '@stdlib/complex/float64' );
var isSameComplex128 = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isSameComplex128, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided two double-precision complex floating-point numbers having the same value', function test( t ) {
	var x;
	var y;

	x = new Complex128( 1.0, 2.0 );
	t.strictEqual( isSameComplex128( x, x ), true, 'returns expected value' );

	x = new Complex128( 3.0, 4.0 );
	y = new Complex128( 3.0, 4.0 );
	t.strictEqual( isSameComplex128( x, y ), true, 'returns expected value' );

	x = new Complex128( 0.0, -0.0 );
	y = new Complex128( 0.0, -0.0 );
	t.strictEqual( isSameComplex128( x, y ), true, 'returns expected value' );

	x = new Complex128( NaN, NaN );
	y = new Complex128( NaN, NaN );
	t.strictEqual( isSameComplex128( x, y ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if not provided two double-precision complex floating-point numbers having the same value', function test( t ) {
	var x;
	var y;
	var i;

	x = [
		'',
		'beep',
		5,
		3.14,
		-3.14,
		0.0,
		-0.0,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {},
		new Complex128( 1.0, 2.0 ),
		new Complex128( 1.0, 2.0 ),
		new Complex128( -0.0, 0.0 )
	];
	y = [
		'abc',
		'boop',
		-5,
		-3.14,
		3.14,
		-0.0,
		0.0,
		false,
		true,
		void 0,
		null,
		[],
		{},
		function noop() {},
		1.0,
		new Complex128( 3.0, 4.0 ),
		new Complex128( 0.0, -0.0 )
	];
	for ( i = 0; i < x.length; i++ ) {
		t.strictEqual( isSameComplex128( x[ i ], y[ i ] ), false, 'returns expected value when provided '+x[ i ]+' and '+y[ i ] );
	}
	t.end();
});
