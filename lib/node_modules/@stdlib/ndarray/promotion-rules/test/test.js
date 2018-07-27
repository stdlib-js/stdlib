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
var dtypes = require( '@stdlib/ndarray/dtypes' );
var isObject = require( '@stdlib/assert/is-plain-object' );
var promotionRules = require( './../lib' );


// VARIABLES //

var DTYPES = dtypes();


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof promotionRules, 'function', 'main export is a function' );
	t.end();
});

tape( 'if not provided data types, the function returns a table', function test( t ) {
	var out = promotionRules();
	t.strictEqual( isObject( out ), true, 'returns an object' );
	t.strictEqual( out[ 'float32' ][ 'uint32' ], 'float64', 'returns expected value' );
	t.end();
});

tape( 'the function returns the ndarray data type with the smallest size and closest "kind" to which ndarray data types can be safely cast', function test( t ) {
	var table;
	var dt1;
	var dt2;
	var dt;
	var j;
	var i;

	table = promotionRules();

	for ( i = 0; i < DTYPES.length; i++ ) {
		dt1 = DTYPES[ i ];
		for ( j = 0; j < DTYPES.length; j++ ) {
			dt2 = DTYPES[ j ];
			dt = promotionRules( dt1, dt2 );
			t.strictEqual( dt, table[ dt1 ][ dt2 ], 'returns expected value when provided ('+dt1+','+dt2+')' );
		}
	}
	t.end();
});

tape( 'if provided an unrecognized or unsupported data type, the function returns `null`', function test( t ) {
	var values;
	var i;
	var j;

	values = [
		'beep',
		'boop',
		'foo',
		'bar',
		true,
		false
	];
	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( promotionRules( values[ i ], 'generic' ), null, 'returns expected value when provided '+values[ i ] );
		t.strictEqual( promotionRules( 'generic', values[ i ] ), null, 'returns expected value when provided '+values[ i ] );

		j = (i+1) % values.length;
		t.strictEqual( promotionRules( values[ i ], values[ j ] ), null, 'returns expected value when provided ('+values[ i ]+','+values[ j ]+')' );
	}
	t.end();
});
