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
var replace = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof replace, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function replaces matches of a regular expression', function test( t ) {
	var expected;
	var out;

	out = replace( 'aBcDeFgHiJkLmNoPqRsTuVwXYZ', /[A-Z]+/, '' );
	expected = 'acDeFgHiJkLmNoPqRsTuVwXYZ';
	t.equal( out, expected, 'replaces letters matching the regular expression (first occurrence)' );

	out = replace( 'aBcDeFgHiJkLmNoPqRsTuVwXYZ', /[A-Z]+/g, '' );
	expected = 'acegikmoqsuw';
	t.equal( out, expected, 'replaces letters matching the regular expression (global)' );

	t.end();
});

tape( 'the function replaces matches with values returned by a replacer function', function test( t ) {
	var expected;
	var out;
	var str;

	str = 'Oranges and lemons say the bells of St. Clement\'s';
	out = replace( str, /([^\s]+)/gi, replacer );

	expected = '/Oranges/ /and/ /lemons/ /say/ /the/ /bells/ /of/ /St./ /Clement\'s/';
	t.equal( out, expected, 'replaces matches using replacer function' );

	t.end();

	function replacer( match, p1 ) {
		return '/' + p1 + '/';
	}
});
