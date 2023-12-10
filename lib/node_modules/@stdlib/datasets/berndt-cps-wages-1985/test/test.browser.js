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
var isObjectArray = require( '@stdlib/assert/is-plain-object-array' );
var dataset = require( './../lib/browser.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dataset, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an array of objects', function test( t ) {
	var data = dataset();
	t.equal( isObjectArray( data ), true, 'returns an array of objects' );
	t.end();
});

tape( 'the function returns a copy', function test( t ) {
	var d1;
	var d2;
	var v;

	d1 = dataset();
	d2 = dataset();

	t.notEqual( d1, d2, 'different references' );

	v = d2[ 5 ].education;
	d1[ 5 ].education = 'beep';

	t.equal( d1[ 5 ].education, 'beep', 'expected element' );
	t.notEqual( d1[ 5 ], d2[ 5 ], 'no shared state' );
	t.equal( d2[ 5 ].education, v, 'expected element' );

	t.end();
});
