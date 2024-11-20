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

var resolve = require( 'path' ).resolve;
var basename = require( 'path' ).basename;
var tape = require( 'tape' );
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var noop = require( '@stdlib/utils/noop' );
var cwd = require( '@stdlib/process/cwd' );
var resolveParentPath = require( './../lib/async.js' );


// VARIABLES //

// Don't run tests in the browser...for now...
var opts = {
	'skip': IS_BROWSER // FIXME
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof resolveParentPath, 'function', 'main export is a function' );
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

	function badValue( value ) {
		return function badValue() {
			resolveParentPath( value, noop );
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

	function badValue( value ) {
		return function badValue() {
			resolveParentPath( value, {}, noop );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function', function test( t ) {
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
			resolveParentPath( 'beep', value );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (options)', function test( t ) {
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
			resolveParentPath( 'beep', {}, value );
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
			resolveParentPath( 'beep', value, noop );
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
			resolveParentPath( 'beep', {
				'dir': value
			}, noop );
		};
	}
});

tape( 'the function resolves a path by walking parent directories', opts, function test( t ) {
	var expected;
	var base;
	var dir;

	dir = cwd();
	base = basename( dir );

	expected = dir;
	resolveParentPath( base, onPath );

	function onPath( error, actual ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.strictEqual( actual, expected, 'returns path' );
		t.end();
	}
});

tape( 'the function resolves a path by walking parent directories (dir option)', opts, function test( t ) {
	var expected;
	var opts;

	expected = resolve( __dirname, '../package.json' );

	opts = {
		'dir': __dirname
	};
	resolveParentPath( 'package.json', opts, onPath );

	function onPath( error, actual ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.strictEqual( actual, expected, 'returns path' );
		t.end();
	}
});

tape( 'the function returns `null` if unable to resolve a parent path', opts, function test( t ) {
	resolveParentPath( 'beep-boop!!!hello world!?!', onPath );

	function onPath( error, actual ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.strictEqual( actual, null, 'returns null' );
		t.end();
	}
});

tape( 'the function returns `null` if unable to resolve a parent path (options)', opts, function test( t ) {
	var opts = {
		'dir': __dirname
	};
	resolveParentPath( 'beep-boop!!!hello world!?!', opts, onPath );

	function onPath( error, actual ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.strictEqual( actual, null, 'returns null' );
		t.end();
	}
});
