/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;
var cards = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': IS_BROWSER
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cards, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an array of strings', opts, function test( t ) {
	var list = cards();
	t.equal( isStringArray( list ), true, 'returns an array of strings' );
	t.equal( list.length, 52, 'has length of 52' );
	t.end();
});

tape( 'the function returns a copy', opts, function test( t ) {
	var l1;
	var l2;

	l1 = cards();
	l2 = cards();

	t.notEqual( l1, l2, 'different references' );

	l1[ 5 ] = 'beep';

	t.equal( l1[ 5 ], 'beep', 'expected element' );
	t.notEqual( l1[ 5 ], l2[ 5 ], 'no shared state' );
	t.equal( l2[ 5 ], '6C', 'expected element' );

	t.end();
});
