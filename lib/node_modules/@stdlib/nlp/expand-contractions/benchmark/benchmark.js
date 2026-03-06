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

var bench = require( '@stdlib/bench' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var mobyDick = require( '@stdlib/datasets/moby-dick' );
var pkg = require( './../package.json' ).name;
var expandContractions = require( './../lib' );
var CONTRACTIONS = require( './../lib/contractions.json' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var str;
	var out;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		str = 'BEEP BOOP '+CONTRACTIONS[ i % CONTRACTIONS.length ]+'BEEP BOOP';
		out = expandContractions( str );
		if ( typeof out !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( out ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::long_text', function benchmark( b ) {
	var text;
	var str;
	var out;
	var i;

	text = mobyDick();
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		str = text[ i % text.length ].text;
		out = expandContractions( str );
		if ( typeof out !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( out ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
