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
var Parser = require( './../lib' );


// FIXTURES //

var fixture = require( './fixtures/skipped_comment.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Parser, 'function', 'main export is a function' );
	t.end();
});

tape( 'the parser successfully parses DSV containing skipped comments', function test( t ) {
	var expected;
	var comments;
	var values;
	var flg1;
	var flg2;
	var flg3;
	var p;
	var i;
	var j;
	var k;

	expected = fixture.json;
	i = 0;

	comments = [
		' comment 2'
	];
	j = 0;

	values = [
		'# comment 1',
		'# comment 3'
	];
	k = 0;

	p = new Parser({
		'newline': '\n',
		'comment': '#',
		'trimComment': false,
		'skip': '//',
		'onRow': onRow,
		'onComment': onComment,
		'onSkip': onSkip,
		'onClose': onClose
	});
	p.next( fixture.dsv ).close();

	function onRow( record, row ) {
		flg1 = true;
		t.deepEqual( record, expected[ i ], 'returns expected value. Row: '+row+'.' );
		i += 1;
	}

	function onComment( str, line ) {
		flg2 = true;
		t.strictEqual( str, comments[ j ], 'returns expected value. Line: '+line+'.' );
		j += 1;
	}

	function onSkip( str, line ) {
		flg3 = true;
		t.strictEqual( str, values[ k ], 'returns expected value. Line: '+line+'.' );
		k += 1;
	}

	function onClose() {
		t.ok( flg1 && flg2 && flg3, 'parses rows' );
		t.end();
	}
});
