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
var array2buffer = require( '@stdlib/buffer/from-array' );
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var toJSON = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof toJSON, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a `Buffer`', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		[],
		{},
		function noop() {},
		new Date(),
		/.*/
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided a ' + (typeof values[i]) );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			toJSON( value );
		};
	}
});

tape( 'the function returns a JSON object', function test( t ) {
	var expected;
	var json;
	var buf;

	buf = array2buffer( [ 1, 2 ] );
	json = toJSON( buf );

	t.strictEqual( isPlainObject( json ), true, 'returns an object' );

	expected = {
		'type': 'Buffer',
		'data': [ 1, 2 ]
	};
	t.deepEqual( json, expected, 'returns expected value' );
	t.deepEqual( json, buf.toJSON(), 'returns expected value' );

	t.end();
});

tape( 'the function returns a JSON object (empty)', function test( t ) {
	var expected;
	var json;
	var buf;

	buf = array2buffer( [] );
	json = toJSON( buf );

	t.strictEqual( isPlainObject( json ), true, 'returns an object' );

	expected = {
		'type': 'Buffer',
		'data': []
	};
	t.deepEqual( json, expected, 'returns expected value' );
	t.deepEqual( json, buf.toJSON(), 'returns expected value' );

	t.end();
});
