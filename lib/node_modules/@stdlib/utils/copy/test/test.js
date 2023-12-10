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

'use strict';

// MODULES //

var tape = require( 'tape' );
var assert = require( 'chai' ).assert;
var PI = require( '@stdlib/constants/float64/pi' );
var copy = require( './../lib' );
var fixtures = require( './fixtures' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof copy, 'function', 'export is a function' );
	t.end();
});

tape( 'if provided a nonnegative integer level, the function will throw an error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		PI,
		-1,
		null,
		NaN,
		void 0,
		true,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws when provided a ' + ( typeof values[i] ) );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			copy( [1, 2, 3], value );
		};
	}
});

tape( 'the function deep copies an input value', function test( t ) {
	var actual;

	// Primitives...
	actual = copy( 'beep' );
	t.equal( actual, 'beep', 'returns expected value' );

	actual = copy( 5 );
	t.equal( actual, 5, 'returns expected value' );

	// Empty arrays...
	actual = copy( fixtures.emptyArr );
	t.deepEqual( actual, fixtures.expectedEmptyArray, 'returns expected value' );
	t.strictEqual( actual.length, fixtures.expectedEmptyArray.length, 'has expected length' );

	// Empty objects...
	actual = copy( fixtures.emptyObj );
	t.deepEqual( actual, fixtures.expectedEmptyObj, 'returns expected value' );

	// Arrays...
	actual = copy( fixtures.arr );
	assert.deepEqual( actual, fixtures.expectedArray );
	t.ok( true, 'returns expected value' );

	// Sparse arrays...
	actual = copy( fixtures.sparseArr );
	t.deepEqual( actual, fixtures.expectedSparseArray, 'returns expected value' );
	t.strictEqual( actual.length, fixtures.expectedSparseArray.length, 'has expected length' );

	// Objects...
	actual = copy( fixtures.obj );
	assert.deepEqual( actual, fixtures.expectedObj2 );
	t.ok( true, 'returns expected value' );

	t.end();
});

tape( 'the function supports deep coping to a specified level', function test( t ) {
	var actual;

	actual = copy( fixtures.obj, 1 );
	assert.deepEqual( actual, fixtures.expectedObj1 );
	t.ok( true, 'copy to depth 1' );

	actual = copy( fixtures.obj, 2 );
	assert.deepEqual( actual, fixtures.expectedObj2 );
	t.ok( true, 'copy to depth 2' );

	t.end();
});

tape( 'when provided a level equal to 0, the function returns the input reference', function test( t ) {
	var actual = copy( fixtures.obj, 0 );
	t.equal( actual, fixtures.obj, 'copy to depth 0' );
	t.end();
});
