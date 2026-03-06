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
var RE_FILENAME_WINDOWS = require( './../lib/regexp.js' );


// TESTS //

tape( 'main export is a regular expression', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( RE_FILENAME_WINDOWS instanceof RegExp, true, 'main export is a regular expression' );
	t.end();
});

tape( 'the regular expression splits a Windows filename', function test( t ) {
	var expected;
	var values;
	var parts;
	var i;

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
		'.gitignore',
		'boop.',
		'\\foo foo foo\\bar bar_bar\\',
		'.\\..\\..\\foo\\bar',
		'.\\..\\..\\',
		'.\\',
		'.',
		''
	];

	expected = [
		[ 'index.js', '', '', '', 'index.js', '.js' ],
		[ 'C:\\foo\\bar\\home.html', 'C:', '\\', 'foo\\bar\\', 'home.html', '.html' ],
		[ 'foo\\file.pdf', '', '', 'foo\\', 'file.pdf', '.pdf' ],
		[ 'index.js\\', '', '', '', 'index.js', '.js' ],
		[ 'foo\\bar\\home.html\\', '', '', 'foo\\bar\\', 'home.html', '.html' ],
		[ 'foo\\..\\..\\bar\\home.html', '', '', 'foo\\..\\..\\bar\\', 'home.html', '.html' ],
		[ '.gitigno.re', '', '', '', '.gitigno.re', '.re' ],
		[ '\\foo\\bar\\.editorconf.ig', '', '\\', 'foo\\bar\\', '.editorconf.ig', '.ig' ],
		[ 'main\\.travis.yml', '', '', 'main\\', '.travis.yml', '.yml' ],
		[ '.gitignore', '', '', '', '.gitignore', '' ],
		[ 'boop.', '', '', '', 'boop.', '.' ],
		[ '\\foo foo foo\\bar bar_bar\\', '', '\\', 'foo foo foo\\', 'bar bar_bar', '' ],
		[ '.\\..\\..\\foo\\bar', '', '', '.\\..\\..\\foo\\', 'bar', '' ],
		[ '.\\..\\..\\', '', '', '.\\..\\', '..', '' ],
		[ '.\\', '', '', '', '.', '' ],
		[ '.', '', '', '', '.', '' ],
		[ '', '', '', '', '', '' ]
	];

	for ( i = 0; i < values.length; i++ ) {
		parts = RE_FILENAME_WINDOWS.exec( values[ i ] );
		t.deepEqual( parts.slice(), expected[ i ], values[ i ] );
	}
	t.end();
});
