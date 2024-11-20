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
var parseJSON = require( '@stdlib/utils/parse-json' );
var toJSON = require( '@stdlib/buffer/to-json' );
var copy = require( '@stdlib/utils/copy' );
var array2buffer = require( '@stdlib/buffer/from-array' );
var isBuffer = require( '@stdlib/assert/is-buffer' );
var reviver = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof reviver, 'function', 'main export is a function' );
	t.end();
});

tape( 'values which are not recognized as serialized Buffers are unaffected', function test( t ) {
	var expected;
	var actual;

	expected = {
		'beep': 'boop'
	};
	actual = parseJSON( '{"beep":"boop"}', reviver );

	t.deepEqual( actual, expected, 'deep equal' );

	// Null edge case:
	actual = parseJSON( 'null', reviver );
	t.strictEqual( actual, null, 'equals null' );

	t.end();
});

tape( 'an object must have a recognized "type" field in order to be revived', function test( t ) {
	var expected;
	var actual;
	var json;

	json = {
		'type': 'Boop',
		'data': [ 5.0, 3.0 ]
	};

	expected = copy( json );
	actual = parseJSON( JSON.stringify( json ), reviver );

	t.deepEqual( actual, expected, 'deep equal' );
	t.end();
});

tape( 'an object must have a "data" field having an array value in order to be revived', function test( t ) {
	var expected;
	var actual;
	var json;

	json = {
		'type': 'Buffer'
	};

	expected = copy( json );
	actual = parseJSON( JSON.stringify( json ), reviver );

	t.deepEqual( actual, expected, 'deep equal' );

	json = {
		'type': 'Buffer',
		'data': null
	};

	expected = copy( json );
	actual = parseJSON( JSON.stringify( json ), reviver );

	t.deepEqual( actual, expected, 'deep equal' );

	json = {
		'type': 'Buffer',
		'data': '[1,2,3]'
	};

	expected = copy( json );
	actual = parseJSON( JSON.stringify( json ), reviver );

	t.deepEqual( actual, expected, 'deep equal' );

	t.end();
});

tape( 'the function will revive a JSON-serialized Buffer', function test( t ) {
	var json;
	var buf;
	var out;

	buf = array2buffer( [ 5, 3 ] );
	json = JSON.stringify( toJSON( buf ) );

	out = parseJSON( json, reviver );

	t.strictEqual( isBuffer( out ), true, 'is an instance' );
	t.strictEqual( out[ 0 ], buf[ 0 ], true, 'has expected value' );
	t.strictEqual( out[ 1 ], buf[ 1 ], true, 'has expected value' );

	t.end();
});

tape( 'the function will revive deeply nested serialized Buffers (array)', function test( t ) {
	var actual;
	var arr;
	var i;

	arr = [
		toJSON( array2buffer( [ 5, 3 ] ) ),
		toJSON( array2buffer( [ 1, 2 ] ) )
	];

	actual = parseJSON( JSON.stringify( arr ), reviver );

	for ( i = 0; i < arr.length; i++ ) {
		t.strictEqual( isBuffer( actual[ i ] ), true, 'is an instance' );
		t.strictEqual( actual[i][0], arr[i].data[0], 'has expected value' );
		t.strictEqual( actual[i][1], arr[i].data[1], 'has expected value' );
	}
	t.end();
});

tape( 'the function will revive deeply nested serialized Buffers (object)', function test( t ) {
	var actual;
	var json;

	json = {
		'a': {
			'b': toJSON( array2buffer( [ 1, 2 ] ) ),
			'c': toJSON( array2buffer( [ 3, 5 ] ) )
		}
	};
	actual = parseJSON( JSON.stringify( json ), reviver );

	t.strictEqual( isBuffer( actual.a.b ), true, 'is an instance' );
	t.strictEqual( actual.a.b[0], json.a.b.data[0], 'has expected value' );
	t.strictEqual( actual.a.b[1], json.a.b.data[1], 'has expected value' );

	t.strictEqual( isBuffer( actual.a.c ), true, 'is an instance' );
	t.strictEqual( actual.a.c[0], json.a.c.data[0], 'has expected value' );
	t.strictEqual( actual.a.c[1], json.a.c.data[1], 'has expected value' );

	t.end();
});
