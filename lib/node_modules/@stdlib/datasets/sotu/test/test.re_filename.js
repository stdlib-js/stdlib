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
var isRegExp = require( '@stdlib/assert/is-regexp' );
var RE = require( './../lib/re_filename.js' );


// TESTS //

tape( 'main export is a regular expression', function test( t ) {
	t.ok( true, __filename );
	t.equal( isRegExp( RE ), true, 'main export is a regular expression' );
	t.end();
});

tape( 'the regular expression can be used to test for file name convention for naming data files', function test( t ) {
	var bool;

	bool = RE.test( 'beep.txt' );
	t.equal( bool, false, 'returns false' );

	bool = RE.test( 'beep.json' );
	t.equal( bool, false, 'returns false' );

	bool = RE.test( '2008_barack_obama_d.json' );
	t.equal( bool, true, 'returns true' );

	bool = RE.test( '2008_barack_obama_d.txt' );
	t.equal( bool, true, 'returns true' );

	t.end();
});

tape( 'the regular expression matches the year, President name, and party abbreviation from a data file name', function test( t ) {
	var parts;
	var str;

	str = '2008_barack_obama_d.txt';
	parts = str.match( RE );

	t.equal( parts[ 1 ], '2008', 'matches the year' );
	t.equal( parts[ 2 ], 'barack_obama', 'matches the President name' );
	t.equal( parts[ 3 ], 'd', 'matches the party abbreviation' );

	t.end();
});
