/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var resolve = require( 'path' ).resolve;
var bench = require( '@stdlib/bench' );
var isnanf = require( '@stdlib/math/base/assert/is-nanf' );
var Complex64Array = require( '@stdlib/array/complex64' );
var Float32Array = require( '@stdlib/array/float32' );
var real = require( '@stdlib/complex/float64/real' );
var tryRequire = require( '@stdlib/utils/try-require' );
var pkg = require( './../package.json' ).name;


// VARIABLES //

var addon = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( addon instanceof Error )
};


// MAIN //

bench( pkg, opts, function benchmark( b ) {
	var ybuf;
	var len;
	var x;
	var y;
	var z;
	var i;

	len = 10;
	x = new Complex64Array( len );
	y = new Complex64Array( len );

	ybuf = new Float32Array( y.buffer );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z = addon( len, x, 1, y, 1 );
		if ( isnanf( ybuf[ i%(len*2) ] ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnanf( real( z.get( i%len ) ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
