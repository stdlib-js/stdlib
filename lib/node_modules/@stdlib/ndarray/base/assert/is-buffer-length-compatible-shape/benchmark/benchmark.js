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
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var floor = require( '@stdlib/math/base/special/floor' );
var randu = require( '@stdlib/random/base/randu' );
var pkg = require( './../package.json' ).name;
var isBufferLengthCompatibleShape = require( './../lib' ); // eslint-disable-line id-length


// MAIN //

bench( pkg, function benchmark( b ) {
	var shape;
	var len;
	var out;
	var i;

	shape = [ 10, 10, 10 ];
	len = 1500;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		shape[ 2 ] = floor( randu()*20.0 );
		out = isBufferLengthCompatibleShape( len, shape );
		if ( typeof out !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( out ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
