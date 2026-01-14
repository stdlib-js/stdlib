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
var constantFunction = require( '@stdlib/utils/constant-function' );
var filled3dBy = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof filled3dBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a filled nested array', function test( t ) {
	var expected;
	var actual;

	expected = [
		[
			[ 'beep', 'beep', 'beep' ]
		]
	];
	actual = filled3dBy( [ 1, 1, 3 ], constantFunction( 'beep' ) );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [
		[
			[ 'beep' ],
			[ 'beep' ],
			[ 'beep' ]
		]
	];
	actual = filled3dBy( [ 1, 3, 1 ], constantFunction( 'beep' ) );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [
		[
			[ 1, 1, 1 ],
			[ 1, 1, 1 ]
		],
		[
			[ 1, 1, 1 ],
			[ 1, 1, 1 ]
		]
	];
	actual = filled3dBy( [ 2, 2, 3 ], constantFunction( 1 ) );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty outer array if provided a shape having a first element equal to zero', function test( t ) {
	var expected;
	var actual;

	expected = [];
	actual = filled3dBy( [ 0, 1, 1 ], constantFunction( 'beep' ) );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [];
	actual = filled3dBy( [ 0, 0, 0 ], constantFunction( 'beep' ) );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [];
	actual = filled3dBy( [ 0, 100, 100 ], constantFunction( 'beep' ) );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns empty inner arrays if provided a shape having a second element equal to zero', function test( t ) {
	var expected;
	var actual;

	expected = [ [] ];
	actual = filled3dBy( [ 1, 0, 1 ], constantFunction( 'beep' ) );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ [], [] ];
	actual = filled3dBy( [ 2, 0, 2 ], constantFunction( 'beep' ) );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ [], [], [] ];
	actual = filled3dBy( [ 3, 0, 3 ], constantFunction( 'beep' ) );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns empty inner arrays if provided a shape having a third element equal to zero', function test( t ) {
	var expected;
	var actual;

	expected = [
		[ [] ]
	];
	actual = filled3dBy( [ 1, 1, 0 ], constantFunction( 'beep' ) );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [
		[
			[]
		],
		[
			[]
		]
	];
	actual = filled3dBy( [ 2, 1, 0 ], constantFunction( 'beep' ) );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [
		[
			[]
		],
		[
			[]
		],
		[
			[]
		]
	];
	actual = filled3dBy( [ 3, 1, 0 ], constantFunction( 'beep' ) );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing an execution context', function test( t ) {
	var expected;
	var actual;
	var ctx;

	ctx = {
		'count': 0
	};
	expected = [
		[
			[ 'beep', 'beep', 'beep' ],
			[ 'beep', 'beep', 'beep' ]
		]
	];
	actual = filled3dBy( [ 1, 2, 3 ], clbk, ctx );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.strictEqual( ctx.count, 6, 'returns expected value' );

	t.end();

	function clbk() {
		this.count += 1; // eslint-disable-line no-invalid-this
		return 'beep';
	}
});

tape( 'the function invokes a provided callback function with one argument', function test( t ) {
	var expected;
	var actual;
	var idx;

	idx = [];
	actual = filled3dBy( [ 1, 2, 3 ], clbk );

	expected = [
		[
			[ 'beep', 'beep', 'beep' ],
			[ 'beep', 'beep', 'beep' ]
		]
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [
		[ 0, 0, 0 ],
		[ 0, 0, 1 ],
		[ 0, 0, 2 ],
		[ 0, 1, 0 ],
		[ 0, 1, 1 ],
		[ 0, 1, 2 ]
	];
	t.deepEqual( idx, expected, 'returns expected value' );

	t.end();

	function clbk( indices ) {
		idx.push( indices );
		return 'beep';
	}
});
