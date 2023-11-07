/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var shape2strides = require( '@stdlib/ndarray/base/shape2strides' );
var strided2array4d = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof strided2array4d, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function converts a strided array to a nested array (row-major)', function test( t ) {
	var expected;
	var strides;
	var actual;
	var shape;
	var x;

	x = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];

	shape = [ 1, 2, 2, 2 ];
	strides = shape2strides( shape, 'row-major' );

	expected = [
		[
			[
				[ 1, 2 ],
				[ 3, 4 ]
			],
			[
				[ 5, 6 ],
				[ 7, 8 ]
			]
		]
	];
	actual = strided2array4d( x, shape, strides, 0 );
	t.deepEqual( actual, expected, 'returns expected value' );

	shape = [ 1, 2, 2, 2 ];
	strides = [ 16, 8, 4, 2 ];

	expected = [
		[
			[
				[ 1, 3 ],
				[ 5, 7 ]
			],
			[
				[ 9, 11 ],
				[ 13, 15 ]
			]
		]
	];
	actual = strided2array4d( x, shape, strides, 0 );
	t.deepEqual( actual, expected, 'returns expected value' );

	shape = [ 1, 2, 2, 2 ];
	strides = [ -16, -8, -4, -2 ];

	expected = [
		[
			[
				[ 16, 14 ],
				[ 12, 10 ]
			],
			[
				[ 8, 6 ],
				[ 4, 2 ]
			]
		]
	];
	actual = strided2array4d( x, shape, strides, x.length-1 );
	t.deepEqual( actual, expected, 'returns expected value' );

	shape = [ 2, 2, 2, 2 ];
	strides = [ -8, -4, -2, 1 ];

	expected = [
		[
			[
				[ 15, 16 ],
				[ 13, 14 ]
			],
			[
				[ 11, 12 ],
				[ 9, 10 ]
			]
		],
		[
			[
				[ 7, 8 ],
				[ 5, 6 ]
			],
			[
				[ 3, 4 ],
				[ 1, 2 ]
			]
		]
	];
	actual = strided2array4d( x, shape, strides, x.length-2 );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function converts a strided array to a nested array (column-major)', function test( t ) {
	var expected;
	var strides;
	var actual;
	var shape;
	var x;

	x = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];

	shape = [ 1, 2, 2, 2 ];
	strides = shape2strides( shape, 'column-major' );

	expected = [
		[
			[
				[ 1, 5 ],
				[ 3, 7 ]
			],
			[
				[ 2, 6 ],
				[ 4, 8 ]
			]
		]
	];
	actual = strided2array4d( x, shape, strides, 0 );
	t.deepEqual( actual, expected, 'returns expected value' );

	shape = [ 1, 2, 2, 2 ];
	strides = [ 1, 2, 4, 8 ];

	expected = [
		[
			[
				[ 1, 9 ],
				[ 5, 13 ]
			],
			[
				[ 3, 11 ],
				[ 7, 15 ]
			]
		]
	];
	actual = strided2array4d( x, shape, strides, 0 );
	t.deepEqual( actual, expected, 'returns expected value' );

	shape = [ 1, 2, 2, 2 ];
	strides = [ -1, -2, -4, -8 ];

	expected = [
		[
			[
				[ 16, 8 ],
				[ 12, 4 ]
			],
			[
				[ 14, 6 ],
				[ 10, 2 ]
			]
		]
	];
	actual = strided2array4d( x, shape, strides, x.length-1 );
	t.deepEqual( actual, expected, 'returns expected value' );

	shape = [ 2, 2, 2, 2 ];
	strides = [ 1, -2, -4, -8 ];

	expected = [
		[
			[
				[ 15, 7 ],
				[ 11, 3 ]
			],
			[
				[ 13, 5 ],
				[ 9, 1 ]
			]
		],
		[
			[
				[ 16, 8 ],
				[ 12, 4 ]
			],
			[
				[ 14, 6 ],
				[ 10, 2 ]
			]
		]
	];
	actual = strided2array4d( x, shape, strides, x.length-2 );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
