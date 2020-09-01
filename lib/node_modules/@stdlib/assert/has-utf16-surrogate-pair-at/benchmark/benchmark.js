/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var randu = require( '@stdlib/random/base/randu' );
var floor = require( '@stdlib/math/base/special/floor' );
var fromCodePoint = require( '@stdlib/string/from-code-point' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var UNICODE_MAX = require( '@stdlib/constants/string/unicode-max' );
var pkg = require( './../package.json' ).name;
var hasUTF16SurrogatePairAt = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var bool;
	var x;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = floor( randu() * UNICODE_MAX );
		bool = hasUTF16SurrogatePairAt( fromCodePoint( x ), 0 );
		if ( !isBoolean( bool ) ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	b.pass( 'benchmark finished' );
	if ( !isBoolean( bool ) ) {
		b.fail( 'should return a boolean' );
	}
	b.end();
});
