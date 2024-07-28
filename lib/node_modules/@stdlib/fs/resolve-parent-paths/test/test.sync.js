/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var resolve = require( 'path' ).resolve;
var basename = require( 'path' ).basename;
var tape = require( 'tape' );
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var isArray = require( '@stdlib/assert/is-array' );
var cwd = require( '@stdlib/process/cwd' );
var resolveParentPaths = require( './../lib/sync.js' );


// VARIABLES //

// Don't run tests in the browser...for now...
var opts = {
	'skip': IS_BROWSER // FIXME
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof resolveParentPaths, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a `paths` argument which is not an array of strings', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		null,
		void 0,
		true,
		{},
		function noop() {},
		'beep',
		[ 1, 2 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			resolveParentPaths( value );
		};
	}
});

tape( 'the function throws an error if provided a `paths` argument which is not an array of strings (options)', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		null,
		void 0,
		true,
		{},
		function noop() {},
		'beep',
		[ 1, 2 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			resolveParentPaths( value, {} );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			resolveParentPaths( [ 'beep' ], value );
		};
	}
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		null,
		void 0,
		true,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			resolveParentPaths( [ 'beep' ], {
				'dir': value
			});
		};
	}
});

tape( 'the function resolves paths from a set of paths by walking parent directories', opts, function test( t ) {
	var expected;
	var actual;
	var base;
	var dir;

	dir = cwd();
	base = basename( dir );

	expected = dir;
	actual = resolveParentPaths( [ base ] );
	t.strictEqual( actual.length, 1, 'returns expected value' );
	t.strictEqual( actual[ 0 ], expected, 'returns expected value' );

	t.end();
});

tape( 'the function resolves paths from a set of paths by walking parent directories (dir option)', opts, function test( t ) {
	var expected;
	var actual;
	var opts;
	var dir;

	opts = {
		'dir': __dirname
	};
	dir = resolve( __dirname, '..', 'package.json' );

	expected = dir;
	actual = resolveParentPaths( [ 'package.json' ], opts );
	t.strictEqual( actual.length, 1, 'returns expected value' );
	t.strictEqual( actual[ 0 ], expected, 'returns expected value' );

	t.end();
});

tape( 'the function resolves the first path match from a set of paths by walking parent directories (mode=first)', opts, function test( t ) {
	var expected;
	var actual;
	var opts;
	var dir;

	opts = {
		'dir': __dirname,
		'mode': 'first'
	};
	dir = resolve( __dirname, '..', 'package.json' );

	expected = dir;
	actual = resolveParentPaths( [ 'package.json' ], opts );
	t.strictEqual( actual.length, 1, 'returns expected value' );
	t.strictEqual( actual[ 0 ], expected, 'returns expected value' );

	actual = resolveParentPaths( [ 'beep-boop!!!helloWorld!?!', 'package.json' ], opts );
	t.strictEqual( actual.length, 1, 'returns expected value' );
	t.strictEqual( actual[ 0 ], expected, 'returns expected value' );

	actual = resolveParentPaths( [ 'package.json', 'README.md' ], opts );
	t.strictEqual( actual.length, 1, 'returns expected value' );
	t.strictEqual( actual[ 0 ], expected, 'returns expected value' );

	t.end();
});

tape( 'the function resolves one or more paths from a set of paths at a directory level by walking parent directories (mode=some)', opts, function test( t ) {
	var actual;
	var opts;
	var v1;
	var v2;

	opts = {
		'dir': __dirname,
		'mode': 'some'
	};
	v1 = resolve( __dirname, '..', 'package.json' );
	v2 = resolve( __dirname, '..', 'README.md' );

	actual = resolveParentPaths( [ 'package.json' ], opts );
	t.strictEqual( actual.length, 1, 'returns expected value' );
	t.strictEqual( actual[ 0 ], v1, 'returns expected value' );

	actual = resolveParentPaths( [ 'beep-boop!!!helloWorld!?!', 'package.json' ], opts );
	t.strictEqual( actual.length, 1, 'returns expected value' );
	t.strictEqual( actual[ 0 ], v1, 'returns expected value' );

	actual = resolveParentPaths( [ 'package.json', 'README.md' ], opts );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual[ 0 ], v1, 'returns expected value' );
	t.strictEqual( actual[ 1 ], v2, 'returns expected value' );

	t.end();
});

tape( 'the function resolves all paths from a set of paths at a directory level by walking parent directories (mode=all)', opts, function test( t ) {
	var actual;
	var opts;
	var v1;
	var v2;

	opts = {
		'dir': __dirname,
		'mode': 'all'
	};
	v1 = resolve( __dirname, '..', 'package.json' );
	v2 = resolve( __dirname, '..', 'README.md' );

	actual = resolveParentPaths( [ 'beep-boop!!!helloWorld!?!', 'package.json' ], opts );
	t.strictEqual( actual.length, 0, 'returns expected value' );

	actual = resolveParentPaths( [ 'package.json', 'README.md' ], opts );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual[ 0 ], v1, 'returns expected value' );
	t.strictEqual( actual[ 1 ], v2, 'returns expected value' );

	t.end();
});

tape( 'the function resolves each path from a set of paths by walking parent directories (mode=each)', opts, function test( t ) {
	var actual;
	var opts;
	var v1;
	var v2;

	opts = {
		'dir': __dirname,
		'mode': 'each'
	};
	v1 = resolve( __dirname, '..', 'package.json' );
	v2 = resolve( __dirname, '..', '..', 'resolve-parent-paths' );

	actual = resolveParentPaths( [ 'beep-boop!!!helloWorld!?!', 'package.json' ], opts );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual[ 0 ], null, 'returns expected value' );
	t.strictEqual( actual[ 1 ], v1, 'returns expected value' );

	actual = resolveParentPaths( [ 'package.json', 'resolve-parent-paths' ], opts );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual[ 0 ], v1, 'returns expected value' );
	t.strictEqual( actual[ 1 ], v2, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array if unable to resolve a parent path (mode=first)', opts, function test( t ) {
	var actual;
	var opts;

	opts = {
		'mode': 'first'
	};

	actual = resolveParentPaths( [], opts );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 0, 'returns expected value' );

	actual = resolveParentPaths( [ 'beep-boop!!!hello world!?!' ], opts );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 0, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array if unable to resolve a parent path (mode=some)', opts, function test( t ) {
	var actual;
	var opts;

	opts = {
		'mode': 'some'
	};

	actual = resolveParentPaths( [], opts );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 0, 'returns expected value' );

	actual = resolveParentPaths( [ 'beep-boop!!!hello world!?!' ], opts );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 0, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array if unable to resolve a parent path (mode=all)', opts, function test( t ) {
	var actual;
	var opts;

	opts = {
		'mode': 'all'
	};

	actual = resolveParentPaths( [], opts );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 0, 'returns expected value' );

	actual = resolveParentPaths( [ 'beep-boop!!!hello world!?!' ], opts );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 0, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array of `null` values if unable to resolve a parent path (mode=each)', opts, function test( t ) {
	var actual;
	var opts;

	opts = {
		'mode': 'each'
	};

	actual = resolveParentPaths( [], opts );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 0, 'returns expected value' );

	actual = resolveParentPaths( [ 'beep-boop!!!hello world!?!' ], opts );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual[ 0 ], null, 'returns expected value' );

	t.end();
});
