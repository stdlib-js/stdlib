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
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var pkg = require( './../package.json' ).name;
var Complex64Array = require( './../lib' );


// MAIN //

bench( pkg+':copyWithin:len=5', function benchmark( b ) {
	var arr;
	var buf;
	var i;

	arr = [];
	for ( i = 0; i < 5; i++ ) {
		arr.push( new Complex64( i, i ) );
	}
	arr = new Complex64Array( arr );
	buf = arr.buffer;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buf[ 0 ] = i;
		arr = arr.copyWithin( 1, 0 );
		if ( buf[ 0 ] !== i ) {
			b.fail( 'unexpected result' );
		}
	}
	b.toc();
	if ( buf[ 0 ] !== buf[ 0 ] ) {
		b.fail( 'should not be NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
