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
var HAS_BUILTIN = require( './../lib/has_builtin.js' );
var endsWith = require( './../lib/main.js' );


// VARIABLES //

var opts = {
	'skip': !HAS_BUILTIN
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof endsWith, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if the input string ends with the search value', opts, function test( t ) {
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

tape( 'the function returns `false` if the input string does not end with the search value', opts, function test( t ) {
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

tape( 'the function supports restricting the search to a substring by providing a length parameter (positive)', opts, function test( t ) {
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

tape( 'the function supports restricting the search to a substring by providing a length parameter (negative)', opts, function test( t ) {
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

tape( 'the function returns `false` if provided a length parameter equal to `0`', opts, function test( t ) {
	var bool = endsWith( 'abc', 'c', 0 );
	t.strictEqual( bool, false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if provided a length parameter which exceeds the input string length', opts, function test( t ) {
	var bool = endsWith( 'abcdef', 'f', 9999 );
	t.strictEqual( bool, false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if provided a search string which exceeds the input string length', opts, function test( t ) {
	var bool = endsWith( 'abc', 'abcd' );
	t.strictEqual( bool, false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if provided a search string which exceeds the input (sub)string length', opts, function test( t ) {
	var bool = endsWith( 'abcdef', 'abcd', 3 );
	t.strictEqual( bool, false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if provided a search string which exceeds the input (sub)string length (negative)', opts, function test( t ) {
	var bool = endsWith( 'abcdef', 'abcd', -3 );
	t.strictEqual( bool, false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `true` if provided an empty search string', opts, function test( t ) {
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
