/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var cwd = require( '@stdlib/process/cwd' );
var resolveParentPathBy = require( './../lib/sync.js' );


// VARIABLES //

// Don't run tests in the browser...for now...
var opts = {
	'skip': IS_BROWSER // FIXME
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof resolveParentPathBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a `path` argument which is not a string', function test( t ) {
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

	function predicate() {
		return true;
	}

	function badValue( value ) {
		return function badValue() {
			resolveParentPathBy( value, predicate );
		};
	}
});

tape( 'the function throws an error if provided a `path` argument which is not a string (options)', function test( t ) {
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

	function predicate() {
		return true;
	}

	function badValue( value ) {
		return function badValue() {
			resolveParentPathBy( value, {}, predicate );
		};
	}
});

tape( 'the function throws an error if provided a last argument which is not a function', function test( t ) {
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
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			resolveParentPathBy( 'package.json', value );
		};
	}
});

tape( 'the function throws an error if provided a last argument which is not a function (options)', function test( t ) {
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
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			resolveParentPathBy( 'package.json', {}, value );
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

	function predicate() {
		return true;
	}

	function badValue( value ) {
		return function badValue() {
			resolveParentPathBy( 'beep', value, predicate );
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

	function predicate() {
		return true;
	}

	function badValue( value ) {
		return function badValue() {
			var opts = {
				'dir': value
			};
			resolveParentPathBy( 'beep', opts, predicate );
		};
	}
});

tape( 'the function resolves a path by walking parent directories', opts, function test( t ) {
	var expected;
	var actual;
	var base;
	var dir;

	dir = cwd();
	base = basename( dir );

	expected = dir;
	actual = resolveParentPathBy( base, predicate );

	t.strictEqual( actual, expected, 'returns path' );
	t.end();

	function predicate() {
		return true;
	}
});

tape( 'the function resolves a path by walking parent directories (dir option)', opts, function test( t ) {
	var expected;
	var actual;
	var opts;

	expected = resolve( __dirname, '../package.json' );

	opts = {
		'dir': __dirname
	};
	actual = resolveParentPathBy( 'package.json', opts, predicate );

	t.strictEqual( actual, expected, 'returns path' );
	t.end();

	function predicate() {
		return true;
	}
});

tape( 'the function returns `null` if unable to resolve a parent path', opts, function test( t ) {
	var actual = resolveParentPathBy( 'beep-boop!!!hello world!?!', predicate );

	t.strictEqual( actual, null, 'returns null' );
	t.end();

	function predicate() {
		return false;
	}
});

tape( 'the function returns `null` if unable to resolve a parent path (options)', opts, function test( t ) {
	var actual;
	var opts;

	opts = {
		'dir': __dirname
	};
	actual = resolveParentPathBy( 'beep-boop!!!hello world!?!', opts, predicate );

	t.strictEqual( actual, null, 'returns null' );
	t.end();

	function predicate() {
		return false;
	}
});
