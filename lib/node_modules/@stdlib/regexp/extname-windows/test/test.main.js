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
var reExtnameWindows = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof reExtnameWindows, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a regular expression that captures Windows filename extensions', function test( t ) {
	var expected;
	var values;
	var ext;
	var RE;
	var i;

	RE = reExtnameWindows();

	values = [
		'index.js',
		'C:\\foo\\bar\\home.html',
		'foo\\file.pdf',
		'index.js\\',
		'foo\\bar\\home.html\\',
		'foo\\..\\..\\bar\\home.html',
		'.gitigno.re',
		'\\foo\\bar\\.editorconf.ig',
		'main\\.travis.yml',
		'boop.'
	];

	expected = [
		'.js',
		'.html',
		'.pdf',
		'.js',
		'.html',
		'.html',
		'.re',
		'.ig',
		'.yml',
		'.'
	];

	for ( i = 0; i < values.length; i++ ) {
		ext = RE.exec( values[ i ] )[ 1 ];
		t.equal( ext, expected[ i ], values[ i ] );
	}
	t.end();
});

tape( 'the function returns a regular expression that does not capture anything if provided a path not having a filename extension, including dotfiles not having an extension', function test( t ) {
	var values;
	var ext;
	var RE;
	var i;

	RE = reExtnameWindows();

	values = [
		'',
		'C:\\foo\\bar\\file',
		'\\foo\\bar\\.gitignore',
		'.editorconfig',
		'.jshintrc',
		'jshintignore',
		'beep',
		'\\foo\\bar\\file\\'
	];

	for ( i = 0; i < values.length; i++ ) {
		ext = RE.exec( values[ i ] )[ 1 ];
		t.equal( ext, '', values[ i ] );
	}
	t.end();
});
