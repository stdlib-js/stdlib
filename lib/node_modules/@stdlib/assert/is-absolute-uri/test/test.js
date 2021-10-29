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

var tape = require( 'tape' );
var isAbsoluteURI = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isAbsoluteURI, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a valid absolute HTTP(S) URI', function test( t ) {
	var values;
	var i;

	values = [
		'http://example.com',
		'https://example.com',
		'http://example.com/',
		'https://example.com/',
		'http://example.com:8080',
		'https://example.com:8080',
		'http://example.com:8080/',
		'https://example.com:8080/',
		'http://example.com:8080/foo/bar?baz=qux',
		'https://example.com:8080/foo/bar?baz=qux'
	];
	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isAbsoluteURI( values[ i ] ), true, values[ i ] );
	}
	t.end();
});

tape( 'the function returns `true` if provided a valid absolute non-HTTP(S) URI', function test( t ) {
	var values;
	var i;

	values = [
		'file://example.com',
		'ftp://example.com',
		'gopher://example.com',
		'nntp://example.com',
		'news://example.com',
		'smtp://example.com',
		'telnet://example.com',
		'wais://example.com',
		'ws://example.com',
		'wss://example.com'
	];
	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isAbsoluteURI( values[ i ] ), true, values[ i ] );
	}
	t.end();
});

tape( 'the function returns `false` if provided a value other than a string primitive', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		null,
		undefined,
		true,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isAbsoluteURI( values[ i ] ), false, values[ i ] );
	}
	t.end();
});

tape( 'the function returns `false` if provided a URI missing a scheme', function test( t ) {
	var values;
	var i;

	values = [
		'example.com',
		'example.com/',
		'google.com?q=beep'
	];
	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isAbsoluteURI( values[ i ] ), false, values[ i ] );
	}
	t.end();
});

tape( 'the function returns `false` if provided a relative URI', function test( t ) {
	var values;
	var i;

	values = [
		'/dashboard',
		'/path/to/file.txt',
		'path/to/file.txt',
		'path/to/file.txt?foo=bar',
		'path/to/file.txt#foo',
		'path/to/file.txt?foo=bar#foo',
		'path/to/file.txt?foo=bar#foo?baz=qux'
	];
	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isAbsoluteURI( values[ i ] ), false, values[ i ] );
	}
	t.end();
});

tape( 'the function returns `false` if provided a Windows file path', function test( t ) {
	var values;
	var i;

	values = [
		'C:\\path\\to\\file.txt',
		'C:\\path\\to\\file.txt?foo=bar',
		'C:\\path\\to\\file.txt#foo',
		'C:\\path\\to\\file.txt?foo=bar#foo?baz=qux'
	];
	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isAbsoluteURI( values[ i ] ), false, values[ i ] );
	}
	t.end();
});
