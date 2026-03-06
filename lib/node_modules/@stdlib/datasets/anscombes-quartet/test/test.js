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
var data = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': IS_BROWSER
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof data, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an array of arrays of 2-element arrays', opts, function test( t ) {
	var d;
	var i;
	var j;

	d = data();
	t.strictEqual( isArray( d ), true, 'returns expected value' );
	for ( i = 0; i < d.length; i++ ) {
		t.strictEqual( isArray( d[i] ), true, 'element '+i+' is an array' );
		for ( j = 0; j < d[i].length; j++ ) {
			t.strictEqual( isArray( d[i][j] ), true, 'element ('+i+','+j+') is an array' );
			t.strictEqual( d[i][j].length, 2, 'element ('+i+','+j+') is a 2-element array' );
		}
	}
	t.end();
});

tape( 'the function returns a deep copy', opts, function test( t ) {
	var d1;
	var d2;
	var v;

	d1 = data();
	d2 = data();

	t.notEqual( d1, d2, 'different references' );

	v = d2[ 1 ][ 0 ];
	d1[ 1 ][ 0 ] = 'beep';

	t.strictEqual( d1[ 1 ][ 0 ], 'beep', 'expected element' );
	t.notEqual( d1[ 1 ], d2[ 1 ], 'no shared state' );
	t.strictEqual( d2[ 1 ][ 0 ], v, 'expected element' );

	t.end();
});
