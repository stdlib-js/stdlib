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
var flipud4d = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof flipud4d, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function reverses the order of elements along the second-to-last dimension', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [
		[
			[
				[ 1, 2 ],
				[ 3, 4 ]
			],
			[
				[ 1, 2 ],
				[ 3, 4 ]
			]
		],
		[
			[
				[ 1, 2 ],
				[ 3, 4 ]
			],
			[
				[ 1, 2 ],
				[ 3, 4 ]
			]
		]
	];
	expected = [
		[
			[
				[ 3, 4 ],
				[ 1, 2 ]
			],
			[
				[ 3, 4 ],
				[ 1, 2 ]
			]
		],
		[
			[
				[ 3, 4 ],
				[ 1, 2 ]
			],
			[
				[ 3, 4 ],
				[ 1, 2 ]
			]
		]
	];
	actual = flipud4d( x );
	t.notEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [
		[
			[
				[ 1, 2, 3, 4 ],
				[ 5, 6, 7, 8 ],
				[ 9, 10, 11, 12 ]
			]
		]
	];
	expected = [
		[
			[
				[ 9, 10, 11, 12 ],
				[ 5, 6, 7, 8 ],
				[ 1, 2, 3, 4 ]
			]
		]
	];
	actual = flipud4d( x );
	t.notEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [
		[
			[
				[ 1 ],
				[ 2 ],
				[ 3 ],
				[ 4 ]
			]
		]
	];
	expected = [
		[
			[
				[ 4 ],
				[ 3 ],
				[ 2 ],
				[ 1 ]
			]
		]
	];
	actual = flipud4d( x );
	t.notEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns empty arrays if provided an array whose first dimension has a length equal to zero', function test( t ) {
	var expected;
	var actual;
	var x;

	expected = [];

	x = [];
	actual = flipud4d( x );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns empty arrays if provided an array whose second dimension has a length equal to zero', function test( t ) {
	var expected;
	var actual;
	var x;

	expected = [
		[],
		[]
	];

	x = [
		[],
		[]
	];
	actual = flipud4d( x );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns empty arrays if provided an array whose third dimension has a length equal to zero', function test( t ) {
	var expected;
	var actual;
	var x;

	expected = [
		[
			[],
			[]
		]
	];

	x = [
		[
			[],
			[]
		]
	];
	actual = flipud4d( x );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns empty arrays if provided an array whose fourth dimension has a length equal to zero', function test( t ) {
	var expected;
	var actual;
	var x;

	expected = [
		[
			[
				[],
				[]
			]
		]
	];

	x = [
		[
			[
				[],
				[]
			]
		]
	];
	actual = flipud4d( x );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
