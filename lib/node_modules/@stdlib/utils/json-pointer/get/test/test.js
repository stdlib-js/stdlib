/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

/* eslint-disable no-useless-escape */

'use strict';

// MODULES //

var tape = require( 'tape' );
var get = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof get, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if the first argument is not an object or array', function test( t ) {
	var values;
	var i;

	values = [
		'abc',
		5,
		NaN,
		true,
		null,
		void 0,
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			get( value, '/foo' );
		};
	}
});

tape( 'the function throws an error if the second argument is not a string', function test( t ) {
	var values;
	var doc;
	var i;

	doc = {
		'foo': 'bar'
	};
	values = [
		5,
		NaN,
		true,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			get( doc, value );
		};
	}
});

tape( 'the function returns the root document for an empty pointer', function test( t ) {
	var doc;
	var out;

	doc = {
		'foo': 'bar'
	};
	out = get( doc, '' );
	t.strictEqual( out, doc, 'returns expected value' );

	doc = [ 1, 2, 3 ];
	out = get( doc, '' );
	t.strictEqual( out, doc, 'returns expected value' );

	t.end();
});

tape( 'the function retrieves values from objects', function test( t ) {
	var expected;
	var values;
	var doc;
	var out;
	var i;

	doc = {
		'foo': [ 'bar', 'baz' ],
		'': 0,
		'a/b': 1,
		'c%d': 2,
		'e^f': 3,
		'g|h': 4,
		'i\\j': 5,
		'k\"l': 6,
		' ': 7,
		'm~n': 8
	};

	values = [
		'/foo',
		'/',
		'/a~1b',
		'/c%d',
		'/e^f',
		'/g|h',
		'/i\\j',
		'/k\"l',
		'/ ',
		'/m~0n'
	];
	expected = [
		doc.foo,
		0,
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8
	];

	for ( i = 0; i < values.length; i++ ) {
		out = get( doc, values[ i ] );
		t.deepEqual( out, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function retrieves values from arrays', function test( t ) {
	var doc;
	var out;

	doc = {
		'foo': [ 'bar', 'baz', 'qux' ]
	};

	out = get( doc, '/foo/0' );
	t.strictEqual( out, 'bar', 'returns expected value' );

	out = get( doc, '/foo/1' );
	t.strictEqual( out, 'baz', 'returns expected value' );

	out = get( doc, '/foo/2' );
	t.strictEqual( out, 'qux', 'returns expected value' );

	t.end();
});

tape( 'the function retrieves nested values', function test( t ) {
	var doc;
	var out;

	doc = {
		'a': {
			'b': {
				'c': 42
			}
		}
	};

	out = get( doc, '/a/b/c' );
	t.strictEqual( out, 42, 'returns expected value' );
	t.end();
});

tape( 'the function returns undefined for the `-` token on an array', function test( t ) {
	var doc;
	var out;

	doc = {
		'foo': [ 'a', 'b', 'c' ]
	};

	out = get( doc, '/foo/-' );
	t.strictEqual( out, void 0, 'returns expected value' );
	t.end();
});

tape( 'the function throws an error for nonexistent object properties', function test( t ) {
	var doc;

	doc = {
		'foo': 'bar'
	};
	t.throws( badValue( '/missing' ), Error, 'throws an error when provided nonexistent object properties' );
	t.end();

	function badValue( value ) {
		return function badValue() {
			get( doc, value );
		};
	}
});

tape( 'the function throws an error for out-of-bounds array indices', function test( t ) {
	var doc;

	doc = {
		'foo': [ 1, 2, 3 ]
	};
	t.throws( badValue( '/foo/5' ), RangeError, 'throws an error when provided out-of-bounds array indices' );
	t.end();

	function badValue( value ) {
		return function badValue() {
			get( doc, value );
		};
	}
});

tape( 'the function throws an error for invalid array indices', function test( t ) {
	var values;
	var doc;
	var i;

	doc = {
		'foo': [ 1, 2, 3 ]
	};
	values = [
		'/foo/01',
		'/foo/bar',
		'/foo/-1',
		'/foo/1.5'
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			get( doc, value );
		};
	}
});

tape( 'the function throws an error when traversing into a primitive', function test( t ) {
	var doc;

	doc = {
		'foo': 'bar'
	};
	t.throws( badValue( '/foo/5' ), TypeError, 'throws an error when traversing into a primitive' );

	doc = {
		'foo': 42
	};
	t.throws( badValue( '/foo/bar' ), TypeError, 'throws an error when traversing into a primitive' );
	t.end();

	function badValue( value ) {
		return function badValue() {
			get( doc, value );
		};
	}
});
