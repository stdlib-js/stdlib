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
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;
var stopwords = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': IS_BROWSER
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof stopwords, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an array of strings', opts, function test( t ) {
	var list = stopwords();
	t.equal( isStringArray( list ), true, 'main export is a string array' );
	t.end();
});

tape( 'the function returns a copy', opts, function test( t ) {
	var d1;
	var d2;
	var v;

	d1 = stopwords();
	d2 = stopwords();

	t.notEqual( d1, d2, 'different references' );

	v = d2[ 5 ];
	d1[ 5 ] = 'beep';

	t.equal( d1[ 5 ], 'beep', 'expected element' );
	t.notEqual( d1[ 5 ], d2[ 5 ], 'no shared state' );
	t.equal( d2[ 5 ], v, 'expected element' );

	t.end();
});
