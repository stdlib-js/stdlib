/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var proxyquire = require( 'proxyquire' );
var polyfill = require( './../lib/polyfill.js' );
var main = require( './../lib/main.js' );
var endsWith = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof endsWith, 'function', 'main export is a function' );
	t.end();
});

tape( 'the main export is a polyfill if an environment does not support String.prototype.endsWith', function test( t ) {
	var endsWith = proxyquire( './../lib', {
		'./has_builtin.js': false
	});
	t.equal( endsWith, polyfill, 'returns expected value' );
	t.end();
});

tape( 'the main export is a wrapper around a builtin if an environment supports String.prototype.endsWith', function test( t ) {
	var endsWith = proxyquire( './../lib', {
		'./has_builtin.js': true
	});
	t.equal( endsWith, main, 'returns expected value' );
	t.end();
});

tape( 'the function returns `true` if the input string ends with the search value', function test( t ) {
	var bool;
	var str;

	str = 'Too late, I\'m afraid';
	bool = endsWith( str, 'afraid', str.length );
	t.strictEqual( bool, true, 'returns expected value' );

	str = 'Not too late, I\'m afraid...';
	bool = endsWith( str, 'afraid...', str.length );
	t.strictEqual( bool, true, 'returns expected value' );

	str = 'Welcome home!';
	bool = endsWith( str, 'home!', str.length );
	t.strictEqual( bool, true, 'returns expected value' );

	str = 'Welcome home! 🏠';
	bool = endsWith( str, '🏠', str.length );
	t.strictEqual( bool, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if the input string does not end with the search value', function test( t ) {
	var bool;
	var str;

	str = 'Too late, I\'m afraid';
	bool = endsWith( str, 'Afraid', str.length );
	t.strictEqual( bool, false, 'returns expected value' );

	str = 'Not too late, I\'m afraid...';
	bool = endsWith( str, 'afraid', str.length );
	t.strictEqual( bool, false, 'returns expected value' );

	str = 'Welcome home!';
	bool = endsWith( str, 'welcome home!', str.length );
	t.strictEqual( bool, false, 'returns expected value' );

	t.end();
});

tape( 'the function supports restricting the search to a substring by providing a length parameter (positive)', function test( t ) {
	var bool;
	var str;

	str = 'Too late, I\'m afraid';

	bool = endsWith( str, 'late', 7 );
	t.strictEqual( bool, false, 'returns expected value' );

	bool = endsWith( str, 'late', 8 );
	t.strictEqual( bool, true, 'returns expected value' );

	bool = endsWith( str, 'late', 9 );
	t.strictEqual( bool, false, 'returns expected value' );

	str = 'Welcome 🏠!';
	bool = endsWith( str, '🏠', str.length-1 );
	t.strictEqual( bool, true, 'returns expected value' );

	t.end();
});

tape( 'the function supports restricting the search to a substring by providing a length parameter (negative)', function test( t ) {
	var bool;
	var str;

	str = 'Too late, I\'m afraid';

	bool = endsWith( str, 'i', -1 );
	t.strictEqual( bool, true, 'returns expected value' );

	bool = endsWith( str, 'late', -13 );
	t.strictEqual( bool, false, 'returns expected value' );

	bool = endsWith( str, 'late', -12 );
	t.strictEqual( bool, true, 'returns expected value' );

	bool = endsWith( str, 'late', -11 );
	t.strictEqual( bool, false, 'returns expected value' );

	str = 'Welcome 🏠!';
	bool = endsWith( str, '🏠', -1 );
	t.strictEqual( bool, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if provided a length parameter equal to `0`', function test( t ) {
	var bool = endsWith( 'abc', 'c', 0 );
	t.strictEqual( bool, false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if provided a length parameter which exceeds the input string length', function test( t ) {
	var bool = endsWith( 'abcdef', 'f', 9999 );
	t.strictEqual( bool, false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if provided a search string which exceeds the input string length', function test( t ) {
	var bool = endsWith( 'abc', 'abcd' );
	t.strictEqual( bool, false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if provided a search string which exceeds the input (sub)string length', function test( t ) {
	var bool = endsWith( 'abcdef', 'abcd', 3 );
	t.strictEqual( bool, false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if provided a search string which exceeds the input (sub)string length (negative)', function test( t ) {
	var bool = endsWith( 'abcdef', 'abcd', -3 );
	t.strictEqual( bool, false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `true` if provided an empty search string', function test( t ) {
	var bool;

	bool = endsWith( '', '', 0 );
	t.strictEqual( bool, true, 'returns expected value' );

	bool = endsWith( 'abc', '', 3 );
	t.strictEqual( bool, true, 'returns expected value' );

	bool = endsWith( 'abc', '', 10 );
	t.strictEqual( bool, true, 'returns expected value' );

	bool = endsWith( 'abc', '', -10 );
	t.strictEqual( bool, true, 'returns expected value' );

	bool = endsWith( 'abc', '', 0 );
	t.strictEqual( bool, true, 'returns expected value' );

	t.end();
});
