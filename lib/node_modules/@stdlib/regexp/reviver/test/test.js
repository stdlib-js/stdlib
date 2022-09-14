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
var copy = require( '@stdlib/utils/copy' );
var reviveRegExp = require( './../lib' );


// FUNCTIONS //

function setup( pattern, flags ) {
	var json = {};
	json.type = 'RegExp';
	json.pattern = pattern;
	json.flags = flags || '';
	return json;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof reviveRegExp, 'function', 'main export is a function' );
	t.end();
});

tape( 'values which are not recognized as serialized RegExp objects are unaffected', function test( t ) {
	var expected;
	var actual;

	expected = {
		'beep': 'boop'
	};
	actual = JSON.parse( '{"beep":"boop"}', reviveRegExp );

	t.deepEqual( actual, expected, 'deep equal' );

	// Null edge case:
	actual = JSON.parse( 'null', reviveRegExp );
	t.equal( actual, null, 'equals null' );

	t.end();
});

tape( 'an object must have a recognized `type` field in order to be revived', function test( t ) {
	var expected;
	var actual;
	var json;

	json = setup( 'ab+c' );
	json.type = 'Boop';

	expected = copy( json );

	actual = JSON.parse( JSON.stringify( json ), reviveRegExp );

	t.deepEqual( actual, expected, 'deep equal' );
	t.end();
});

tape( 'an object must have a `pattern` field in order to be revived', function test( t ) {
	var expected;
	var actual;
	var json;

	json = setup( 'ab+c' );
	delete json.pattern;

	expected = copy( json );

	actual = JSON.parse( JSON.stringify( json ), reviveRegExp );

	t.deepEqual( actual, expected, 'deep equal' );

	t.end();
});

tape( 'the function will revive a JSON-serialized regular expression', function test( t ) {
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
		json = setup( patterns[ i ], flags[ i ] );

		expected = new RegExp( patterns[i], flags[i] );

		actual = JSON.parse( JSON.stringify( json ), reviveRegExp );

		t.ok( actual instanceof RegExp, 'instance of type RegExp' );
		t.equal( String(actual), String(expected), 'equal pattern and flags' );
	}
	t.end();
});
