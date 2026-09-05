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

'use strict';

// MODULES //

var tape = require( 'tape' );
var parse = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof parse, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a string', function test( t ) {
	var values;
	var i;

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
			parse( value );
		};
	}
});

tape( 'the function throws an error if pointer does not start with `/`', function test( t ) {
	var values;
	var i;

	values = [
		'foo',
		'foo/bar',
		'a/b/c',
		' '
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			parse( value );
		};
	}
});

tape( 'the function returns an empty array for the root pointer ("")', function test( t ) {
	var tokens = parse( '' );
	t.deepEqual( tokens, [], 'returns expected value' );
	t.end();
});

tape( 'the function parses a JSON pointer', function test( t ) {
	var expected;
	var values;
	var i;

	values = [
		'/foo/bar',
		'/foo',
		'/a~1b/c~0d',
		'/~01',
		'/',
		'//',
		'/foo/-',
		'/foo/0/bar/12',
		'/ ',
		'/c%d',
		'/e^f',
		'/g|h',
		'/i\\j',
		'/k"l'
	];
	expected = [
		[ 'foo', 'bar' ],
		[ 'foo' ],
		[ 'a/b', 'c~d' ],
		[ '~1' ],
		[ '' ],
		[ '', '' ],
		[ 'foo', '-' ],
		[ 'foo', '0', 'bar', '12' ],
		[ ' ' ],
		[ 'c%d' ],
		[ 'e^f' ],
		[ 'g|h' ],
		[ 'i\\j' ],
		[ 'k"l' ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.deepEqual( parse( values[ i ] ), expected[ i ], 'returns expected value' );
	}
	t.end();
});
