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
var reExtendedLengthPath = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof reExtendedLengthPath, 'function', 'main export is a function' );
	t.end();
});

tape( 'the returned regular expression positively verifies an extended-length path', function test( t ) {
	var values;
	var bool;
	var RE;
	var i;

	RE = reExtendedLengthPath();

	values = [
		'\\\\?\\C:\\foo\\bar',
		'\\\\?\\UNC\\server\\share'
	];

	for ( i = 0; i < values.length; i++ ) {
		bool = RE.test( values[ i ] );
		t.strictEqual( bool, true, ' returns true when provided '+values[ i ] );
	}
	t.end();
});

tape( 'the returned regular expression negatively verifies a non-extended-length path', function test( t ) {
	var values;
	var bool;
	var RE;
	var i;

	RE = reExtendedLengthPath();

	values = [
		'\\\\?\\',
		'C:\\foo\\bar',
		'/c/foo/bar',
		'\\\\server\\\\share',
		'\\\\\\\\server\\share',
		'\\',
		'',
		'\\\\server\\share\\',
		'beep boop \\\\server\\share',
		'\\\\server\\share\\foo\\bar\\baz:',
		'\\\\server\\share\\foo\\bar\\baz:a:',
		'\\\\server\\share\\foo\\bar\\baz::',
		'\\\\server\\share\\foo\\bar\\baz:a:b:c',
		'\\\\server\\share\\foo\\bar\\',
		'//server/share',
		'/foo/bar',
		'foo/bar',
		'./foo/bar',
		'/foo/../bar'
	];

	for ( i = 0; i < values.length; i++ ) {
		bool = RE.test( values[ i ] );
		t.strictEqual( bool, false, 'returns false when provided '+values[ i ] );
	}
	t.end();
});
