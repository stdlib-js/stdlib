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
var parseJSON = require( '@stdlib/utils/parse-json' );
var Complex128 = require( '@stdlib/complex/float64' );
var reviver = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof reviver, 'function', 'main export is a function' );
	t.end();
});

tape( 'values which are not recognized as serialized 128-bit complex numbers are unaffected', function test( t ) {
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
		're': 5.0,
		'im': 3.0
	};

	expected = copy( json );
	actual = parseJSON( JSON.stringify( json ), reviver );

	t.deepEqual( actual, expected, 'deep equal' );
	t.end();
});

tape( 'an object must have a numeric "re" field in order to be revived', function test( t ) {
	var expected;
	var actual;
	var json;

	json = {
		'type': 'Complex128',
		'im': 3.0
	};

	expected = copy( json );
	actual = parseJSON( JSON.stringify( json ), reviver );

	t.deepEqual( actual, expected, 'deep equal' );

	json = {
		'type': 'Complex128',
		'im': 3.0,
		're': '5.0'
	};

	expected = copy( json );
	actual = parseJSON( JSON.stringify( json ), reviver );

	t.deepEqual( actual, expected, 'deep equal' );

	json = {
		'type': 'Complex128',
		'im': 3.0,
		're': null
	};

	expected = copy( json );
	actual = parseJSON( JSON.stringify( json ), reviver );

	t.deepEqual( actual, expected, 'deep equal' );

	t.end();
});

tape( 'an object must have a numeric "im" field in order to be revived', function test( t ) {
	var expected;
	var actual;
	var json;

	json = {
		'type': 'Complex128',
		're': 3.0
	};

	expected = copy( json );
	actual = parseJSON( JSON.stringify( json ), reviver );

	t.deepEqual( actual, expected, 'deep equal' );

	json = {
		'type': 'Complex128',
		're': 3.0,
		'im': '5.0'
	};

	expected = copy( json );
	actual = parseJSON( JSON.stringify( json ), reviver );

	t.deepEqual( actual, expected, 'deep equal' );

	json = {
		'type': 'Complex128',
		're': 3.0,
		'im': null
	};

	expected = copy( json );
	actual = parseJSON( JSON.stringify( json ), reviver );

	t.deepEqual( actual, expected, 'deep equal' );

	t.end();
});

tape( 'the function will revive a JSON-serialized 128-bit complex number', function test( t ) {
	var json;
	var z;
	var w;

	z = new Complex128( 5.0, 3.0 );
	json = JSON.stringify( z );

	w = parseJSON( json, reviver );

	t.strictEqual( w instanceof Complex128, true, 'is an instance' );
	t.strictEqual( w.re, z.re, true, 'has expected property value' );
	t.strictEqual( w.im, z.im, true, 'has expected property value' );

	t.end();
});

tape( 'the function will revive deeply nested serialized 128-bit complex numbers (array)', function test( t ) {
	var actual;
	var arr;
	var i;

	arr = [
		new Complex128( 5.0, 3.0 ),
		new Complex128( -2.0, -4.0 )
	];

	actual = parseJSON( JSON.stringify( arr ), reviver );

	for ( i = 0; i < arr.length; i++ ) {
		t.strictEqual( actual[i] instanceof Complex128, true, 'is an instance' );
		t.strictEqual( actual[i].re, arr[i].re, 'has expected property value' );
		t.strictEqual( actual[i].im, arr[i].im, 'has expected property value' );
	}
	t.end();
});

tape( 'the function will revive deeply nested serialized 128-bit complex numbers (object)', function test( t ) {
	var actual;
	var json;

	json = {
		'beep': {
			'boop': new Complex128( 5.0, 3.0 )
		}
	};
	actual = parseJSON( JSON.stringify( json ), reviver );

	t.strictEqual( actual.beep.boop instanceof Complex128, true, 'is an instance' );
	t.strictEqual( actual.beep.boop.re, json.beep.boop.re, 'has expected property value' );
	t.strictEqual( actual.beep.boop.im, json.beep.boop.im, 'has expected property value' );

	t.end();
});
