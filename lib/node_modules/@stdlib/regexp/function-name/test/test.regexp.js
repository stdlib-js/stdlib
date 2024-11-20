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

/* eslint-disable func-names, func-style */

'use strict';

// MODULES //

var tape = require( 'tape' );
var RE = require( './../lib/regexp.js' );


// TESTS //

tape( 'main export is a regular expression', function test( t ) {
	t.ok( true, __filename );
	t.equal( RE instanceof RegExp, true, 'main export is a regular expression' );
	t.end();
});

tape( 'the regular expression captures a function name', function test( t ) {
	function beep() {
		return 'boop';
	}
	t.equal( RE.exec( beep.toString() )[ 1 ], 'beep', 'captures function name' );
	t.end();
});

tape( 'if a function is anonymous, the regular expression captures nothing', function test( t ) {
	var beep = function () {
		return 'boop';
	};
	t.equal( RE.exec( beep.toString() )[ 1 ], '', 'captures nothing' );
	t.end();
});
