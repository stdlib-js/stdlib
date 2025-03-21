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
var shape2strides = require( '@stdlib/ndarray/base/shape2strides' );
var strides2offset = require( '@stdlib/ndarray/base/strides2offset' );
var pkg = require( './../package.json' ).name;
var isSingleSegmentCompatible = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var strides;
	var offset;
	var shape;
	var out;
	var i;

	shape = [ 10, 10, 10 ];
	strides = shape2strides( shape, 'row-major' );
	strides[ 2 ] *= -1;
	offset = strides2offset( shape, strides );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		offset += i;
		out = isSingleSegmentCompatible( shape, strides, offset );
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
