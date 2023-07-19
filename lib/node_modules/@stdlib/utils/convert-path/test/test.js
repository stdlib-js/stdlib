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
var convertPath = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof convertPath, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not a string', function test( t ) {
	var values;
	var i;

	values = [
		5,
		null,
		true,
		false,
		void 0,
		NaN,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			convertPath( value, 'win32' );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a string', function test( t ) {
	var values;
	var i;

	values = [
		5,
		null,
		true,
		false,
		void 0,
		NaN,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			convertPath( '/foo/bar', value );
		};
	}
});

tape( 'the function throws an error if provided a second argument which does not correspond to a recognized output path convention', function test( t ) {
	var values;
	var i;

	values = [
		'beep',
		'unix',
		'linux',
		'darwin',
		'win',
		'pos',
		'mix'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			convertPath( '/foo/bar', value );
		};
	}
});

tape( 'the function throws an error if asked to convert a Windows extended-length path to something other than a Windows path', function test( t ) {
	t.throws( foo, Error, 'throws an error' );
	t.throws( bar, Error, 'throws an error' );
	t.end();

	function foo() {
		convertPath( '\\\\?\\C:\\\\foo\\bar', 'mixed' );
	}

	function bar() {
		convertPath( '\\\\?\\C:\\\\foo\\bar', 'posix' );
	}
});

tape( 'the function converts a POSIX path to a Windows path', function test( t ) {
	var expected;
	var actual;

	expected = '\\foo\\bar';
	actual = convertPath( '/foo/bar', 'win32' );

	t.strictEqual( actual, expected, 'returns expected path' );

	expected = '.\\foo\\bar';
	actual = convertPath( './foo/bar', 'win32' );

	t.strictEqual( actual, expected, 'returns expected path' );

	expected = '..\\foo\\bar';
	actual = convertPath( '../foo/bar', 'win32' );

	t.strictEqual( actual, expected, 'returns expected path' );

	expected = '\\foo\\bar\\';
	actual = convertPath( '/foo/bar/', 'win32' );

	t.strictEqual( actual, expected, 'returns expected path' );

	expected = 'c:\\foo\\bar';
	actual = convertPath( '/c/foo/bar', 'win32' );

	t.strictEqual( actual, expected, 'returns expected path' );

	t.end();
});

tape( 'the function converts a mixed path to a Windows path', function test( t ) {
	var expected;
	var actual;

	expected = 'c:\\foo\\bar';
	actual = convertPath( 'c:/foo/bar', 'win32' );

	t.strictEqual( actual, expected, 'returns expected path' );

	expected = 'C:\\foo\\bar\\';
	actual = convertPath( 'C:/foo/bar/', 'win32' );

	t.strictEqual( actual, expected, 'returns expected path' );

	t.end();
});

tape( 'the function converts a Windows path to a Windows path', function test( t ) {
	var expected;
	var actual;

	expected = '\\foo\\bar';
	actual = convertPath( '\\foo\\bar', 'win32' );

	t.strictEqual( actual, expected, 'returns expected path' );

	expected = '.\\foo\\bar';
	actual = convertPath( '.\\foo\\bar', 'win32' );

	t.strictEqual( actual, expected, 'returns expected path' );

	expected = '..\\foo\\bar';
	actual = convertPath( '..\\foo\\bar', 'win32' );

	t.strictEqual( actual, expected, 'returns expected path' );

	expected = '\\foo\\bar\\';
	actual = convertPath( '\\foo\\bar\\', 'win32' );

	t.strictEqual( actual, expected, 'returns expected path' );

	expected = 'c:\\\\foo\\bar';
	actual = convertPath( 'c:\\\\foo\\bar', 'win32' );

	t.strictEqual( actual, expected, 'returns expected path' );

	expected = 'c:\\foo\\bar';
	actual = convertPath( 'c:\\foo\\bar', 'win32' );

	t.strictEqual( actual, expected, 'returns expected path' );

	t.end();
});

tape( 'the function converts a Windows path to a mixed path', function test( t ) {
	var expected;
	var actual;

	expected = '/foo/bar';
	actual = convertPath( '\\foo\\bar', 'mixed' );

	t.strictEqual( actual, expected, 'returns expected path' );

	expected = './foo/bar';
	actual = convertPath( '.\\foo\\bar', 'mixed' );

	t.strictEqual( actual, expected, 'returns expected path' );

	expected = '../foo/bar';
	actual = convertPath( '..\\foo\\bar', 'mixed' );

	t.strictEqual( actual, expected, 'returns expected path' );

	expected = '/foo/bar/';
	actual = convertPath( '\\foo\\bar\\', 'mixed' );

	t.strictEqual( actual, expected, 'returns expected path' );

	expected = 'C:/foo/bar';
	actual = convertPath( 'C:\\\\foo\\bar', 'mixed' );

	t.strictEqual( actual, expected, 'returns expected path' );

	expected = 'd:/foo/bar';
	actual = convertPath( 'd:\\foo\\bar', 'mixed' );

	t.strictEqual( actual, expected, 'returns expected path' );

	t.end();
});

tape( 'the function converts a mixed path to a mixed path', function test( t ) {
	var expected;
	var actual;

	expected = '/foo/bar';
	actual = convertPath( '/foo/bar', 'mixed' );

	t.strictEqual( actual, expected, 'returns expected path' );

	expected = './foo/bar';
	actual = convertPath( './foo/bar', 'mixed' );

	t.strictEqual( actual, expected, 'returns expected path' );

	expected = '../foo/bar';
	actual = convertPath( '../foo/bar', 'mixed' );

	t.strictEqual( actual, expected, 'returns expected path' );

	expected = '/foo/bar/';
	actual = convertPath( '/foo/bar/', 'mixed' );

	t.strictEqual( actual, expected, 'returns expected path' );

	expected = 'C:/foo/bar';
	actual = convertPath( 'C:/foo/bar', 'mixed' );

	t.strictEqual( actual, expected, 'returns expected path' );

	expected = 'd:/foo/bar';
	actual = convertPath( 'd:/foo/bar', 'mixed' );

	t.strictEqual( actual, expected, 'returns expected path' );

	t.end();
});

tape( 'the function converts a POSIX path to a mixed path', function test( t ) {
	var expected;
	var actual;

	expected = '/foo/bar';
	actual = convertPath( '/foo/bar', 'mixed' );

	t.strictEqual( actual, expected, 'returns expected path' );

	expected = './foo/bar';
	actual = convertPath( './foo/bar', 'mixed' );

	t.strictEqual( actual, expected, 'returns expected path' );

	expected = '../foo/bar';
	actual = convertPath( '../foo/bar', 'mixed' );

	t.strictEqual( actual, expected, 'returns expected path' );

	expected = '/foo/bar/';
	actual = convertPath( '/foo/bar/', 'mixed' );

	t.strictEqual( actual, expected, 'returns expected path' );

	expected = 'c:/foo/bar';
	actual = convertPath( '/c/foo/bar', 'mixed' );

	t.strictEqual( actual, expected, 'returns expected path' );

	expected = 'd:/foo/bar';
	actual = convertPath( 'd:/foo/bar', 'mixed' );

	t.strictEqual( actual, expected, 'returns expected path' );

	t.end();
});

tape( 'the function converts a Windows path to a POSIX path', function test( t ) {
	var expected;
	var actual;

	expected = '/foo/bar';
	actual = convertPath( '\\foo\\bar', 'posix' );

	t.strictEqual( actual, expected, 'returns expected path' );

	expected = './foo/bar';
	actual = convertPath( '.\\foo\\bar', 'posix' );

	t.strictEqual( actual, expected, 'returns expected path' );

	expected = '../foo/bar';
	actual = convertPath( '..\\foo\\bar', 'posix' );

	t.strictEqual( actual, expected, 'returns expected path' );

	expected = '/foo/bar/';
	actual = convertPath( '\\foo\\bar\\', 'posix' );

	t.strictEqual( actual, expected, 'returns expected path' );

	expected = '/c/foo/bar';
	actual = convertPath( 'C:\\\\foo\\bar', 'posix' );

	t.strictEqual( actual, expected, 'returns expected path' );

	expected = '/d/foo/bar';
	actual = convertPath( 'd:\\foo\\bar', 'posix' );

	t.strictEqual( actual, expected, 'returns expected path' );

	t.end();
});

tape( 'the function converts a mixed path to a POSIX path', function test( t ) {
	var expected;
	var actual;

	expected = '/c/foo/bar';
	actual = convertPath( 'c:/foo/bar', 'posix' );

	t.strictEqual( actual, expected, 'returns expected path' );

	expected = '/c/foo/bar/';
	actual = convertPath( 'C:/foo/bar/', 'posix' );

	t.strictEqual( actual, expected, 'returns expected path' );

	expected = '/c/foo/bar';
	actual = convertPath( 'C:/foo/bar', 'posix' );

	t.strictEqual( actual, expected, 'returns expected path' );

	expected = '/d/foo/../bar';
	actual = convertPath( 'd:/foo/../bar', 'posix' );

	t.strictEqual( actual, expected, 'returns expected path' );

	t.end();
});

tape( 'the function converts a POSIX path to a POSIX path', function test( t ) {
	var expected;
	var actual;

	expected = '/foo/bar';
	actual = convertPath( '/foo/bar', 'posix' );

	t.strictEqual( actual, expected, 'returns expected path' );

	expected = './foo/bar';
	actual = convertPath( './foo/bar', 'posix' );

	t.strictEqual( actual, expected, 'returns expected path' );

	expected = '../foo/bar';
	actual = convertPath( '../foo/bar', 'posix' );

	t.strictEqual( actual, expected, 'returns expected path' );

	expected = '/foo/bar/';
	actual = convertPath( '/foo/bar/', 'posix' );

	t.strictEqual( actual, expected, 'returns expected path' );

	expected = '/c/foo/bar';
	actual = convertPath( '/c/foo/bar', 'posix' );

	t.strictEqual( actual, expected, 'returns expected path' );

	expected = '/d/foo/../bar';
	actual = convertPath( '/d/foo/../bar', 'posix' );

	t.strictEqual( actual, expected, 'returns expected path' );

	t.end();
});
