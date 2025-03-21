/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var bench = require( '@stdlib/bench' );
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var pkg = require( './../package.json' ).name;
var nextCodePointIndex = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var strings;
	var len;
	var out;
	var i;

	strings = [
		'last man standing',
		'presidential election',
		'अनुच्छेद',
		'🌷',
		'书/六書',
		'เ❄︎நி',
		'กิิก้้ก็็ก็็กิิก้้ก็็กิิก้้กิิก้้ก็็ก็็กิิก้้ก็็กิิก้้',
		'書六/书六',
		'ܶƔλʃݖͱšɕ҆ʧѸؐҜҦɳΏ',
		'âݝΝҳӌݾҀƳ۵ۧ޳ǁǸΓ'
	];
	len = strings.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = nextCodePointIndex( strings[ i%len ], 1 );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
