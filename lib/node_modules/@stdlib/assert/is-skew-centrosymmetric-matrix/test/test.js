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

/* eslint-disable array-element-newline */

'use strict';

// MODULES //

var tape = require( 'tape' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var noop = require( '@stdlib/utils/noop' );
var isSkewCentrosymmetricMatrix = require( './../lib' ); // eslint-disable-line id-length


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isSkewCentrosymmetricMatrix, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a skew-centrosymmetric matrix (odd order)', function test( t ) {
	var buffer;
	var arr;

	buffer = [
		0, 1, 2, 3, 4,
		5, 6, 7, 8, 9,
		10, 11, 0, -11, -10,
		-9, -8, -7, -6, -5,
		-4, -3, -2, -1, -0
	];
	arr = ndarray( 'generic', buffer, [ 5, 5 ], [ 5, 1 ], 0, 'row-major' );

	t.equal( isSkewCentrosymmetricMatrix( arr ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `true` if provided a skew-centrosymmetric matrix (even order)', function test( t ) {
	var buffer;
	var arr;

	buffer = [
		0, 1, 2, 3, 4, 5,
		6, 7, 8, 9, 10, 11,
		12, 13, 14, 15, 16, 17,
		-17, -16, -15, -14, -13, -12,
		-11, -10, -9, -8, -7, -6,
		-5, -4, -3, -2, -1, -0
	];
	arr = ndarray( 'generic', buffer, [ 6, 6 ], [ 6, 1 ], 0, 'row-major' );

	t.equal( isSkewCentrosymmetricMatrix( arr ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `true` if provided a 2-dimensional ndarray-like object which is skew-centrosymmetric', function test( t ) {
	var arr = {
		'data': [
			4, 1, 2,
			3, 0, -3,
			-2, -1, -4
		],
		'shape': [ 3, 3 ],
		'strides': [ 3, 1 ],
		'offset': 0,
		'order': 'row-major',
		'ndims': 2,
		'dtype': 'generic',
		'length': 9,
		'flags': {},
		'get': get,
		'set': noop
	};

	t.equal( isSkewCentrosymmetricMatrix( arr ), true, 'returns true' );
	t.end();

	function get( i, j ) {
		return arr.data[ (arr.strides[0]*i) + j ];
	}
});

tape( 'the function returns `false` if not provided a square matrix', function test( t ) {
	var arr = ndarray( 'generic', [ 0, 0, 0, 0, 0, 0 ], [ 3, 2 ], [ 2, 1 ], 0, 'row-major' );
	t.equal( isSkewCentrosymmetricMatrix( arr ), false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if not provided a skew-centrosymmetric matrix (even order)', function test( t ) {
	var arr = ndarray( 'generic', [ 1, 2, 3, 4 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
	t.equal( isSkewCentrosymmetricMatrix( arr ), false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if not provided a skew-centrosymmetric matrix (odd order)', function test( t ) {
	var buffer;
	var arr;

	buffer = [
		1, 2, 3,
		4, 5, -4,
		-3, -2, -1
	];
	arr = ndarray( 'generic', buffer, [ 3, 3 ], [ 3, 1 ], 0, 'row-major' );

	t.equal( isSkewCentrosymmetricMatrix( arr ), false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if provided a 2-dimensional ndarray-like object not having equal dimensions', function test( t ) {
	var arr = {
		'data': [ 0, 0, 0, 0, 0, 0 ],
		'shape': [ 3, 2 ],
		'strides': [ 2, 1 ],
		'offset': 0,
		'order': 'row-major',
		'ndims': 2,
		'dtype': 'generic',
		'length': 6,
		'flags': {},
		'get': noop,
		'set': noop
	};

	t.equal( isSkewCentrosymmetricMatrix( arr ), false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if provided a 2-dimensional ndarray-like object which is not skew-centrosymmetric', function test( t ) {
	var arr = {
		'data': [ 1, 2, 3, 4, 0, -6, -7, -8, -9 ],
		'shape': [ 3, 3 ],
		'strides': [ 3, 1 ],
		'offset': 0,
		'order': 'row-major',
		'ndims': 2,
		'dtype': 'generic',
		'length': 9,
		'flags': {},
		'get': get,
		'set': noop
	};

	t.equal( isSkewCentrosymmetricMatrix( arr ), false, 'returns false' );
	t.end();

	function get( i, j ) {
		return arr.data[ (arr.strides[0]*i) + j ];
	}
});

tape( 'the function returns `false` if not provided a 2-dimensional ndarray-like object', function test( t ) {
	var values;
	var arr;
	var i;

	arr = ndarray( 'generic', [ 0, 0, 0 ], [ 3, 1, 1 ], [ 1, 1, 1 ], 0, 'row-major' );

	values = [
		arr,
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
		t.equal( isSkewCentrosymmetricMatrix( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});
