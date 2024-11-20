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
var nonsingletonDimensions = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof nonsingletonDimensions, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the number of non-singleton dimensions', function test( t ) {
	var expected;
	var values;
	var n;
	var i;

	values = [
		[ 3, 3, 3 ],
		[ 1, 1 ],
		[ 3, 3, 0, 3 ],
		[ 1, 2, 3, 4 ],
		[ 5 ]
	];

	expected = [
		3,
		0,
		4,
		3,
		1
	];

	for ( i = 0; i < values.length; i++ ) {
		n = nonsingletonDimensions( values[ i ] );
		t.strictEqual( n, expected[ i ], 'returns expected value for shape '+values[ i ].join( 'x' ) );
	}
	t.end();
});
