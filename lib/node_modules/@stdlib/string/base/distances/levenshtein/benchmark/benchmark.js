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
var pkg = require( './../package.json' ).name;
var levenshteinDistance = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var value;
	var out;
	var i;

	values = [
		[ 'algorithm', 'altruistic' ],
		[ '1638452297', '444488444' ],
		[ '', '' ],
		[ '', 'a' ],
		[ 'aaapppp', '' ],
		[ 'frog', 'fog' ],
		[ 'fly', 'ant' ],
		[ 'elephant', 'hippo' ],
		[ 'hippo', 'elephant' ],
		[ 'hippo', 'zzzzzzzz' ],
		[ 'hello', 'hallo' ],
		[ 'congratulations', 'conmgeautlatins' ]
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		value = values[ i%values.length ];
		out = levenshteinDistance( value[0], value[1] );
		if ( typeof out !== 'number' ) {
			b.fail( 'should return a number' );
		}
	}
	b.toc();
	if ( typeof out !== 'number' ) {
		b.fail( 'should return a number' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
