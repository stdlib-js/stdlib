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
var isRelativeURI = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isRelativeURI, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `false` if not provided a string primitive', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		null,
		undefined,
		true,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isRelativeURI( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `false` if provided an absolute URI', function test( t ) {
	var values;
	var i;

	values = [
		'http://example.com/',
		'https://example.com/',
		'ftp://example.com/',
		'file://example.com/'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isRelativeURI( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `false` if provided a string with illegal characters for an URI', function test( t ) {
	var values;
	var i;

	values = [
		'http://example.com/\n',
		'http://example.com/\t',
		'http://example.com/\v',
		'http://example.com/\f',
		'http://example.com/\r',
		'http://example.com/\0',
		'http://example.com/\u00A0',
		'http://example.com/\u2028',
		'http://example.com/\u2029'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isRelativeURI( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `false` if provided a string with incomplete HEX escapes', function test( t ) {
	var values;
	var i;

	values = [
		'http://example.com/%',
		'http://example.com/%0',
		'http://example.com/%1',
		'http://example.com/%2'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isRelativeURI( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `true` if provided a relative URI', function test( t ) {
	var values;
	var i;

	values = [
		'//example.com/',
		'/',
		'a/b/c',
		'a/b/c?a=b',
		'a/b/c#a',
		'a/b/c?a=b#a',
		'dashboard/admin',
		'images/logo.png',
		'./images/logo.png'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isRelativeURI( values[i] ), true, 'returns true when provided '+values[i] );
	}
	t.end();
});
