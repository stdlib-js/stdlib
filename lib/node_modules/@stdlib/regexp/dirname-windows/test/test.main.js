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
var reDirnameWindows = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof reDirnameWindows, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a regular expression captures Windows path dirnames', function test( t ) {
	var expected;
	var values;
	var dir;
	var RE;
	var i;

	RE = reDirnameWindows();

	values = [
		'index.js',
		'C:\\foo\\bar\\home.html',
		'\\foo\\bar\\',
		'foo\\file.pdf',
		'foo\\file',
		'index.js\\',
		'foo\\bar\\home.html\\',
		'foo\\..\\..\\bar\\home.html',
		'.gitigno.re',
		'C:\\foo\\bar\\.editorconf.ig',
		'main\\.travis.yml',
		'boop.'
	];

	expected = [
		'',
		'C:\\foo\\bar',
		'\\foo',
		'foo',
		'foo',
		'',
		'foo\\bar',
		'foo\\..\\..\\bar',
		'',
		'C:\\foo\\bar',
		'main',
		''
	];

	for ( i = 0; i < values.length; i++ ) {
		dir = RE.exec( values[ i ] )[ 1 ];
		t.equal( dir, expected[ i ], values[ i ] );
	}
	t.end();
});
