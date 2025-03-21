/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var nCartesianProduct = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof nCartesianProduct, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the Cartesian product (2 arrays)', function test( t ) {
	var expected;
	var actual;

	actual = nCartesianProduct( [ 1, 2 ], [ 3, 4 ] );
	expected = [ [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ] ];
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = nCartesianProduct( [ 1 ], [ 3, 4 ] );
	expected = [ [ 1, 3 ], [ 1, 4 ] ];
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = nCartesianProduct( [ 1, 2 ], [ 3 ] );
	expected = [ [ 1, 3 ], [ 2, 3 ] ];
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = nCartesianProduct( [ 1, 2 ], [ 3, 4, 5 ] );
	expected = [ [ 1, 3 ], [ 1, 4 ], [ 1, 5 ], [ 2, 3 ], [ 2, 4 ], [ 2, 5 ] ];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns the Cartesian product (3 arrays)', function test( t ) {
	var expected;
	var actual;

	actual = nCartesianProduct( [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] );
	expected = [
		[ 1, 3, 5 ],
		[ 1, 3, 6 ],
		[ 1, 4, 5 ],
		[ 1, 4, 6 ],
		[ 2, 3, 5 ],
		[ 2, 3, 6 ],
		[ 2, 4, 5 ],
		[ 2, 4, 6 ]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = nCartesianProduct( [ 1 ], [ 3, 4 ], [ 5, 6 ] );
	expected = [
		[ 1, 3, 5 ],
		[ 1, 3, 6 ],
		[ 1, 4, 5 ],
		[ 1, 4, 6 ]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = nCartesianProduct( [ 1, 2 ], [ 3 ], [ 5, 6 ] );
	expected = [
		[ 1, 3, 5 ],
		[ 1, 3, 6 ],
		[ 2, 3, 5 ],
		[ 2, 3, 6 ]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = nCartesianProduct( [ 1, 2 ], [ 3, 4 ], [ 6 ] );
	expected = [
		[ 1, 3, 6 ],
		[ 1, 4, 6 ],
		[ 2, 3, 6 ],
		[ 2, 4, 6 ]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = nCartesianProduct( [ 1, 2, 3, 4 ], [ 5 ], [ 6, 7 ] );
	expected = [
		[ 1, 5, 6 ],
		[ 1, 5, 7 ],
		[ 2, 5, 6 ],
		[ 2, 5, 7 ],
		[ 3, 5, 6 ],
		[ 3, 5, 7 ],
		[ 4, 5, 6 ],
		[ 4, 5, 7 ]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array if provided one or more empty arrays', function test( t ) {
	var actual;

	actual = nCartesianProduct( [], [] );
	t.deepEqual( actual, [], 'returns expected value' );

	actual = nCartesianProduct( [ 1, 2 ], [] );
	t.deepEqual( actual, [], 'returns expected value' );

	actual = nCartesianProduct( [], [ 3, 4 ] );
	t.deepEqual( actual, [], 'returns expected value' );

	actual = nCartesianProduct( [], [], [] );
	t.deepEqual( actual, [], 'returns expected value' );

	actual = nCartesianProduct( [ 1, 2 ], [], [] );
	t.deepEqual( actual, [], 'returns expected value' );

	actual = nCartesianProduct( [], [ 3, 4 ], [] );
	t.deepEqual( actual, [], 'returns expected value' );

	actual = nCartesianProduct( [], [], [ 5, 6 ] );
	t.deepEqual( actual, [], 'returns expected value' );

	actual = nCartesianProduct( [ 1, 2 ], [ 3, 4 ], [] );
	t.deepEqual( actual, [], 'returns expected value' );

	actual = nCartesianProduct( [ 1, 2 ], [], [ 5, 6 ] );
	t.deepEqual( actual, [], 'returns expected value' );

	actual = nCartesianProduct( [], [ 3, 4 ], [ 5, 6 ] );
	t.deepEqual( actual, [], 'returns expected value' );

	t.end();
});
