/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var ndarray = require( '@stdlib/ndarray/ctor' );
var noop = require( '@stdlib/utils/noop' );
var Float32Array = require( '@stdlib/array/float32' );
var isFloat32VectorLike = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isFloat32VectorLike, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a 1-dimensional ndarray containing single-precision floating-point numbers', function test( t ) {
	var arr = ndarray( 'float32', new Float32Array( [ 0, 0, 0, 0 ] ), [ 4 ], [ 1 ], 0, 'row-major' );

	t.equal( isFloat32VectorLike( arr ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `true` if provided a 1-dimensional ndarray-like object containing single-precision floating-point numbers', function test( t ) {
	var arr = {
		'data': new Float32Array( [ 0, 0, 0, 0 ] ),
		'shape': [ 4 ],
		'strides': [ 1 ],
		'offset': 0,
		'order': 'row-major',
		'ndims': 1,
		'dtype': 'float32',
		'length': 4,
		'flags': {},
		'get': noop,
		'set': noop
	};

	t.equal( isFloat32VectorLike( arr ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if not provided a 1-dimensional ndarray-like object containing single-precision floating-point numbers', function test( t ) {
	var values;
	var arr1;
	var arr2;
	var i;

	arr1 = ndarray( 'float32', new Float32Array( [ 0, 0, 0 ] ), [ 3, 1, 1 ], [ 1, 1, 1 ], 0, 'row-major' );

	arr2 = ndarray( 'generic', [ 0, 0, 0 ], [ 3 ], [ 1 ], 0, 'row-major' );

	values = [
		arr1,
		arr2,
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isFloat32VectorLike( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});
