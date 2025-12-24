/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var MAX_UINT16 = require( '@stdlib/constants/uint16/max' );
var pkg = require( './../package.json' ).name;
var fromWord = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var word;
	var y;
	var i;

	word = discreteUniform( 100, 0.0, MAX_UINT16 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = fromWord( word );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
