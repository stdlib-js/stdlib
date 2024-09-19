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
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex64Array = require( '@stdlib/array/complex64' );
var isSameAccessorArray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isSameAccessorArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided two accessor arrays with the same contents', function test( t ) {
	var x;
	var y;
	var i;

	x = [
		new Complex128Array( [ 1, 2, 3, 4 ] ),
		new Complex64Array( [ 1, 2, 3, 4 ] ),
		new Complex128Array( [ NaN, NaN ] ),
		new Complex64Array( [] ),
		new Complex64Array( [ 1, 2, 3, 4 ] ),
		new Complex128Array( [ -0.0, 0.0 ] )
	];
	y = [
		new Complex128Array( [ 1, 2, 3, 4 ] ),
		new Complex64Array( [ 1, 2, 3, 4 ] ),
		new Complex64Array( [ NaN, NaN ] ),
		new Complex128Array( [] ),
		new Complex128Array( [ 1, 2, 3, 4 ] ),
		new Complex128Array( [ -0.0, 0.0 ] )
	];
	for ( i = 0; i < x.length; i++ ) {
		t.strictEqual( isSameAccessorArray( x[ i ], y[ i ] ), true, 'returns true when provided two identical accessor arrays' );
	}
	t.end();
});

tape( 'the function returns `false` if provided two accessor arrays with different contents', function test( t ) {
	var x;
	var y;
	var i;

	x = [
		new Complex128Array( [ 1, 2, 3, 4 ] ),
		new Complex128Array( [ 1, 2, 3, 4, 5, 6 ] ),
		new Complex64Array( [ 1, 2, 3, 4 ] ),
		new Complex64Array( [] ),
		new Complex128Array( [ -0.0, 0.0 ] ),
		new Complex128Array( [ -0.0, NaN ] ),
		new Complex128Array( [ 1, 2 ] )
	];
	y = [
		new Complex128Array( [ 1, 2, 3, 5 ] ),
		new Complex128Array( [ 7, 8, 9, 10, 11, 12 ] ),
		new Complex64Array( [ 1, 2, 3, 5 ] ),
		new Complex128Array( [ 0, 0 ] ),
		new Complex128Array( [ 0.0, -0.0 ] ),
		new Complex128Array( [ NaN, 0.0 ] ),
		new Complex128Array( [ -0.0, 0.0, 1, 2 ] )
	];
	for ( i = 0; i < x.length; i++ ) {
		t.strictEqual( isSameAccessorArray( x[ i ], y[ i ] ), false, 'returns false when provided two different accessor arrays' );
	}
	t.end();
});

tape( 'the function returns `false` if not provided two accessor arrays', function test( t ) {
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
		[ 1.0 ],
		{},
		function noop() {},
		[ 1.0, 2.0, 3.0 ],
		[ -0.0, -0.0, -0.0 ]
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
		[ -1.0 ],
		{},
		function noop() {},
		[ 2.0, 4.0, 6.0 ],
		[ 0.0, 0.0, 0.0 ]
	];
	for ( i = 0; i < x.length; i++ ) {
		t.strictEqual( isSameAccessorArray( x[ i ], y[ i ] ), false, 'returns false when not provided an accessor array' );
	}
	t.end();
});
