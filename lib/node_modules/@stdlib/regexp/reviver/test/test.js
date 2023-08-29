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
var parseJSON = require( '@stdlib/utils/parse-json' );
var reviveRegExp = require( './../lib' );


// FUNCTIONS //

function setup( pattern, flags ) {
	return {
		'type': 'RegExp',
		'pattern': pattern,
		'flags': flags || ''
	};
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof reviveRegExp, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function does not transform values which are not serialized RegExp objects', function test( t ) {
	var expected;
	var actual;

	expected = {
		'beep': 'boop'
	};
	actual = parseJSON( '{"beep":"boop"}', reviveRegExp );

	t.deepEqual( actual, expected, 'returns expected value' );

	// Null edge case:
	actual = parseJSON( 'null', reviveRegExp );
	t.equal( actual, null, 'returns expected value' );

	t.end();
});

tape( 'an object must have a recognized `type` field in order to be revived', function test( t ) {
	var expected;
	var actual;

	expected = setup( 'ab+c' );
	expected.type = 'Boop';

	actual = parseJSON( JSON.stringify( expected ), reviveRegExp );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'an object must have a `pattern` field in order to be revived', function test( t ) {
	var expected;
	var actual;

	expected = setup( 'ab+c' );
	delete expected.pattern;

	actual = parseJSON( JSON.stringify( expected ), reviveRegExp );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function revives a JSON-serialized regular expression', function test( t ) {
	var expected;
	var patterns;
	var actual;
	var flags;
	var json;
	var i;

	patterns = [
		'.*',
		'ab+c',
		'/.*^1',
		'a+.b*'
	];

	flags = [
		'd',
		'dy',
		's',
		''
	];

	for ( i = 0; i < patterns.length; i++ ) {
		json = JSON.stringify( setup( patterns[ i ], flags[ i ] ) );

		expected = new RegExp( patterns[ i ], flags[ i ] );
		actual = parseJSON( json, reviveRegExp );

		t.ok( actual instanceof RegExp, 'returns expected value' );
		t.equal( actual.toString(), expected.toString(), 'returns expected value when provided ' + json );
	}
	t.end();
});
