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
var has = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof has, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns false if the first argument is not an object or array', function test( t ) {
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
		t.strictEqual( has( values[ i ], '/foo' ), false, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns false if the second argument is not a string', function test( t ) {
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
		t.strictEqual( has( doc, values[ i ] ), false, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns false for invalid pointer syntax', function test( t ) {
	var values;
	var doc;
	var i;

	doc = {
		'foo': 'bar'
	};
	values = [
		'foo',
		'foo/bar',
		'bar'
	];
	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( has( doc, values[ i ] ), false, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns true for an empty pointer referencing valid objects or arrays', function test( t ) {
	var doc;

	doc = {
		'foo': 'bar'
	};
	t.strictEqual( has( doc, '' ), true, 'returns expected value' );

	doc = [ 1, 2, 3 ];
	t.strictEqual( has( doc, '' ), true, 'returns expected value' );

	doc = {};
	t.strictEqual( has( doc, '' ), true, 'returns expected value' );

	doc = [];
	t.strictEqual( has( doc, '' ), true, 'returns expected value' );

	t.end();
});

tape( 'the function tests pointers on objects', function test( t ) {
	var values;
	var doc;
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

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( has( doc, values[ i ] ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function tests pointers on arrays', function test( t ) {
	var doc;

	doc = {
		'foo': [ 'bar', 'baz', 'qux' ]
	};

	t.strictEqual( has( doc, '/foo/0' ), true, 'returns expected value' );
	t.strictEqual( has( doc, '/foo/1' ), true, 'returns expected value' );
	t.strictEqual( has( doc, '/foo/2' ), true, 'returns expected value' );
	t.strictEqual( has( doc, '/foo/3' ), false, 'returns expected value' );
	t.strictEqual( has( doc, '/foo/99' ), false, 'returns expected value' );
	t.strictEqual( has( doc, '/foo/-1' ), false, 'returns expected value' );
	t.end();
});

tape( 'the function returns false for the `-` token on an array', function test( t ) {
	var doc;

	doc = {
		'foo': [ 'a', 'b', 'c' ]
	};

	t.strictEqual( has( doc, '/foo/-' ), false, 'returns expected value' );
	t.end();
});

tape( 'the function tests nested pointers', function test( t ) {
	var doc;

	doc = {
		'a': {
			'b': {
				'c': 42
			}
		}
	};

	t.strictEqual( has( doc, '/a/b/c' ), true, 'returns expected value' );
	t.strictEqual( has( doc, '/a/x/c' ), false, 'returns expected value' );
	t.end();
});

tape( 'the function returns false when traversing into a primitive', function test( t ) {
	var doc;

	doc = {
		'foo': 'bar'
	};
	t.strictEqual( has( doc, '/foo/baz' ), false, 'returns expected value' );

	doc = {
		'foo': 42
	};
	t.strictEqual( has( doc, '/foo/bar' ), false, 'returns expected value' );
	t.end();
});
