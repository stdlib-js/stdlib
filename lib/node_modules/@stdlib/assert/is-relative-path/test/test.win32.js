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
var isRelativePath = require( './../lib/win32.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isRelativePath, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `false` if not provided a string', function test( t ) {
	var values;
	var bool;
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
		bool = isRelativePath( values[ i ] );
		t.equal( bool, false, 'returns `false` when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `true` if provided an empty string', function test( t ) {
	var bool = isRelativePath( '' );
	t.strictEqual( bool, true, 'returns true' );
	t.end();
});

tape( 'the function returns `true` if provided a Windows relative path', function test( t ) {
	var values;
	var bool;
	var i;

	values = [
		'.',
		'foo',
		'foo/bar',
		'./foo/bar',
		'..',
		'../foo/bar',
		'foo/../bar',
		'foo\\bar',
		'.\\foo\\bar',
		'..\\foo\\bar',
		'foo\\..\\bar'
	];
	for ( i = 0; i < values.length; i++ ) {
		bool = isRelativePath( values[ i ] );
		t.strictEqual( bool, true, 'returns true when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `false` if provided a Windows absolute path', function test( t ) {
	var values;
	var bool;
	var i;

	values = [
		'/foo/bar/baz',
		'/foo/..',
		'/beep boop',
		'/',
		'\\',
		'\\foo\\bar\\baz',
		'\\foo\\..',
		'\\beep boop',
		'C:\\foo\\bar\\baz',
		'C:/foo/bar/baz',
		'c:\\foo\\bar\\baz',
		'c:/foo/bar/baz',
		'//server',
		'\\\\server'
	];
	for ( i = 0; i < values.length; i++ ) {
		bool = isRelativePath( values[ i ] );
		t.strictEqual( bool, false, 'returns false when provided '+values[i] );
	}
	t.end();
});
