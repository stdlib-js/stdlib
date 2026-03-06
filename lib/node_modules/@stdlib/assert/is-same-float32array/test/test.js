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
var typedarray = require( '@stdlib/array/typed' );
var isSameFloat32Array = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isSameFloat32Array, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided two Float32Arrays having the same values', function test( t ) {
	var x;
	var y;

	x = typedarray( [ 1.0, 2.0, 3.0 ], 'float32' );
	t.strictEqual( isSameFloat32Array( x, x ), true, 'returns expected value' );

	x = typedarray( [ 1.0, 2.0, 3.0 ], 'float32' );
	y = typedarray( [ 1.0, 2.0, 3.0 ], 'float32' );
	t.strictEqual( isSameFloat32Array( x, y ), true, 'returns expected value' );

	x = typedarray( [ -0.0, 0.0, -0.0 ], 'float32' );
	y = typedarray( [ -0.0, 0.0, -0.0 ], 'float32' );
	t.strictEqual( isSameFloat32Array( x, y ), true, 'returns expected value' );

	x = typedarray( [ NaN, NaN, NaN ], 'float32' );
	y = typedarray( [ NaN, NaN, NaN ], 'float32' );
	t.strictEqual( isSameFloat32Array( x, y ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if not provided two Float32Arrays having the same values', function test( t ) {
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
		typedarray( 10, 'float64' ),
		typedarray( 10, 'int32' ),
		typedarray( 10, 'float64' ),
		typedarray( [ 1.0, 2.0, 3.0 ], 'float32' ),
		typedarray( [ -0.0, -0.0, -0.0 ], 'float32' )
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
		typedarray( 10, 'float64' ),
		typedarray( 10, 'int32' ),
		typedarray( 10, 'float32' ),
		typedarray( [ 2.0, 4.0, 6.0 ], 'float32' ),
		typedarray( [ 0.0, 0.0, 0.0 ], 'float32' )
	];
	for ( i = 0; i < x.length; i++ ) {
		t.strictEqual( isSameFloat32Array( x[ i ], y[ i ] ), false, 'returns expected value when provided '+x[ i ]+' and '+y[ i ] );
	}
	t.end();
});
