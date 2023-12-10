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
var copy = require( '@stdlib/utils/copy' );
var reviveError = require( './../lib' );


// FUNCTIONS //

function setup( type, name, msg, stack ) {
	var json = {};
	json.type = type || 'Error';
	json.name = name || 'Error';
	json.message = msg || '';
	json.stack = stack || 'boop';
	return json;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof reviveError, 'function', 'main export is a function' );
	t.end();
});

tape( 'values which are not recognized as serialized error objects are unaffected', function test( t ) {
	var expected;
	var actual;

	expected = {
		'beep': 'boop'
	};
	actual = JSON.parse( '{"beep":"boop"}', reviveError );

	t.deepEqual( actual, expected, 'returns expected value' );

	// Null edge case:
	actual = JSON.parse( 'null', reviveError );
	t.equal( actual, null, 'returns expected value' );

	t.end();
});

tape( 'an object must have a recognized "type" field in order to be revived', function test( t ) {
	var expected;
	var actual;
	var json;

	json = setup();
	json.type = 'Boop';

	expected = copy( json );

	actual = JSON.parse( JSON.stringify( json ), reviveError );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'an object must have a "message" field in order to be revived', function test( t ) {
	var expected;
	var actual;
	var json;

	json = setup();
	delete json.message;

	expected = copy( json );

	actual = JSON.parse( JSON.stringify( json ), reviveError );

	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function will revive a JSON-serialized error object', function test( t ) {
	var expected;
	var actual;
	var types;
	var ctors;
	var json;
	var msgs;
	var i;

	types = [
		'Error',
		'TypeError',
		'SyntaxError',
		'URIError',
		'ReferenceError',
		'EvalError',
		'RangeError'
	];
	msgs = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g'
	];
	ctors = [
		Error,
		TypeError,
		SyntaxError,
		URIError,
		ReferenceError,
		EvalError,
		RangeError
	];
	for ( i = 0; i < types.length; i++ ) {
		json = setup( types[ i ], types[ i ], msgs[i], 'boop'+i );

		expected = new ctors[ i ]( msgs[i] );
		expected.stack = 'boop' + i;

		actual = JSON.parse( JSON.stringify( json ), reviveError );

		t.ok( actual instanceof ctors[ i ], 'instance of type ' + types[i] );
		t.equal( actual.message, expected.message, 'returns expected value' );
		t.equal( actual.stack, expected.stack, 'returns expected value' );
	}
	t.end();
});

tape( 'non-standard error properties are bound to the revived error instance', function test( t ) {
	var json;
	var err;

	json = setup();
	json.beep = 'boop';
	json.arr = [1, 2, 3, [4, 5]];

	err = JSON.parse( JSON.stringify( json ), reviveError );

	t.equal( err.beep, json.beep, 'shallow properties' );

	t.notEqual( err.arr, json.arr, 'separate instances' );
	t.deepEqual( err.arr, json.arr, 'returns expected value' );

	t.end();
});

tape( 'if a serialized error object lacks a "stack" field or has a "stack" field and lacks a stack trace, the returned error will not have an associated stack trace', function test( t ) {
	var json;
	var err;

	// Missing stack field...
	json = setup();
	delete json.stack;

	err = JSON.parse( JSON.stringify( json ), reviveError );

	t.ok( err.stack === '' || err.stack === void 0, 'returned error does not have a stack trace' );

	// Stack field is empty or null...
	json = setup();
	json.stack = null;

	err = JSON.parse( JSON.stringify( json ), reviveError );

	t.ok( err.stack === '' || err.stack === void 0, 'returned error does not have a stack trace' );

	t.end();
});

tape( 'the function will revive deeply nested serialized error objects', function test( t ) {
	var expected;
	var actual;
	var ctors;
	var json;
	var arrs;
	var msgs;
	var i;

	arrs = [
		setup( 'Error', 'Error', 'beep' ),
		setup( 'TypeError', 'TypeError', 'boop' )
	];

	ctors = [
		Error,
		TypeError
	];

	msgs = [
		'beep',
		'boop'
	];

	actual = JSON.parse( JSON.stringify( arrs ), reviveError );

	for ( i = 0; i < arrs.length; i++ ) {
		expected = new ctors[ i ]( msgs[i] );
		expected.stack = 'boop';

		t.ok( actual[i] instanceof ctors[i], 'instance of ' + ctors[ i ] );
		t.equal( actual[i].message, expected.message, 'returns expected value' );
		t.equal( actual[i].stack, expected.stack, 'returns expected value' );
	}

	json = {
		'beep': {
			'boop': setup( 'RangeError', 'RangeError', 'bap' )
		}
	};

	expected = {
		'beep': {
			'boop': new RangeError( 'bap' )
		}
	};
	expected.beep.boop.stack = 'boop';

	actual = JSON.parse( JSON.stringify( json ), reviveError );

	t.ok( actual.beep.boop instanceof RangeError, 'instance of RangeError' );

	t.equal( actual.beep.boop.message, expected.beep.boop.message, 'returns expected value' );

	t.equal( actual.beep.boop.stack, expected.beep.boop.stack, 'returns expected value' );

	t.end();
});
