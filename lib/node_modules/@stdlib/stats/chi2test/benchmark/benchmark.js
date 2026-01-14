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
var array = require( '@stdlib/ndarray/array' );
var isObject = require( '@stdlib/assert/is-object' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var max = require( '@stdlib/math/base/special/max' );
var pkg = require( './../package.json' ).name;
var chi2test = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var result;
	var len;
	var x;
	var i;

	// Generate contingency table:
	len = 100;
	x = new Array( len );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = discreteUniform( 10, 50 );
	}
	x = array( x, {
		'shape': [ 10, 10 ]
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x.data[ i % x.data.length ] += max( discreteUniform( -1, 1 ), 0 );
		result = chi2test( x );
		if ( typeof result !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isObject( result ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':toString', function benchmark( b ) {
	var digits;
	var result;
	var output;
	var x;
	var i;

	x = array([
		/* Grades Popular Sports */
		[ 63, 31, 25 ], // 4th
		[ 88, 55, 33 ], // 5th
		[ 96, 55, 32 ] // 6th
	]);
	result = chi2test( x );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		digits = ( i % 8 ) + 1;
		output = result.toString({
			'digits': digits
		});
		if ( typeof output !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( output ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
