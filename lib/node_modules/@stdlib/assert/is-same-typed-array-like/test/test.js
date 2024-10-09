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
var Int8Array = require( '@stdlib/array/int8' );
var Int16Array = require( '@stdlib/array/int16' );
var isSameTypedArrayLike = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isSameTypedArrayLike, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided two typed-array-like objects having the same contents', function test( t ) {
	var x;
	var y;

	x = new Int8Array( [ 1.0, 2.0, 3.0 ] );
	t.strictEqual( isSameTypedArrayLike( x, x ), true, 'returns expected value' );

	x = new Int8Array( [ 1.0, 2.0, 3.0 ] );
	y = new Int16Array( [ 1.0, 2.0, 3.0 ] );
	t.strictEqual( isSameTypedArrayLike( x, y ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if provided two typed-array-like objects having the different contents', function test( t ) {
	var x;
	var y;

	x = new Int8Array( [ 1.0, 2.0, 3.0 ] );
	y = new Int16Array( [ 1.0, 2.0, 4.0 ] );
	t.strictEqual( isSameTypedArrayLike( x, y ), false, 'returns expected value' );

	x = new Int8Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Int8Array( [ 1.0, 2.0, 3.0 ] );
	t.strictEqual( isSameTypedArrayLike( x, y ), false, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` when one of the provided objects is not typed-array-like', function test( t ) {
	var x;
	var y;

	x = new Int8Array( [ 1.0, 2.0, 3.0 ] );
	y = 'beep';
	t.strictEqual( isSameTypedArrayLike( x, y ), false, 'returns expected value' );

	x = new Int8Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = 12;
	t.strictEqual( isSameTypedArrayLike( x, y ), false, 'returns expected value' );

	x = new Int8Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = null;
	t.strictEqual( isSameTypedArrayLike( x, y ), false, 'returns expected value' );

	x = new Int8Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = undefined;
	t.strictEqual( isSameTypedArrayLike( x, y ), false, 'returns expected value' );

	x = new Int8Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = {};
	t.strictEqual( isSameTypedArrayLike( x, y ), false, 'returns expected value' );

	x = new Int8Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = true;
	t.strictEqual( isSameTypedArrayLike( x, y ), false, 'returns expected value' );

	x = new Int8Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = [ 1.0, 2.0, 3.0, 4.0 ];
	t.strictEqual( isSameTypedArrayLike( x, y ), false, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if not provided two typed-array-like objects having the same contents', function test( t ) {
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
		t.strictEqual( isSameTypedArrayLike( x[ i ], y[ i ] ), false, 'returns expected value when provided '+x[ i ]+' and '+y[ i ] );
	}
	t.end();
});
