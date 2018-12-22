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
var randu = require( '@stdlib/random/base/randu' );
var isnan = require( '@stdlib/assert/is-nan' ).isPrimitive;
var pkg = require( './../package.json' ).name;
var trycatchAsync = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var i;

	i = 0;
	b.tic();

	return next();

	function next( error, result ) {
		i += 1;
		if ( i <= b.iterations ) {
			return trycatchAsync( x, -1.0, next );
		}
		b.toc();
		if ( error ) {
			b.pass( 'receiving an error is okay' );
		}
		if ( isnan( result ) ) {
			b.fail( 'should not return NaN' );
		}
		b.pass( 'benchmark finished' );
		b.end();
	}

	function x( clbk ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			if ( randu() > 0.5 ) {
				return clbk( null, 1.0 );
			}
			clbk( new Error( 'beep' ) );
		}
	}
});
