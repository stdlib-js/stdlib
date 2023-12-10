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
var isArray = require( '@stdlib/assert/is-array' );
var afinn96 = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': IS_BROWSER
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof afinn96, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an array of 2-element arrays', opts, function test( t ) {
	var list;
	var i;
	list = afinn96();
	t.equal( isArray( list ), true, 'returns an array' );
	for ( i = 0; i < list.length; i++ ) {
		t.equal( isArray( list[i] ), true, 'element '+i+' is an array' );
		t.equal( list[i].length, 2, 'element '+i+' is a 2-element array' );
	}
	t.end();
});

tape( 'the function returns a deep copy', opts, function test( t ) {
	var d1;
	var d2;
	var v;

	d1 = afinn96();
	d2 = afinn96();

	t.notEqual( d1, d2, 'different references' );

	v = d2[ 5 ][ 0 ];
	d1[ 5 ][ 0 ] = 'beep';

	t.equal( d1[ 5 ][ 0 ], 'beep', 'expected element' );
	t.notEqual( d1[ 5 ], d2[ 5 ], 'no shared state' );
	t.equal( d2[ 5 ][ 0 ], v, 'expected element' );

	t.end();
});
