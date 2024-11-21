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
var isObject = require( '@stdlib/assert/is-object' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var stdev = require( '@stdlib/stats/base/dists/uniform/stdev' );
var pkg = require( './../package.json' ).name;
var ztest = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var result;
	var sigma;
	var len;
	var x;
	var i;

	x = new Array( 100 );
	len = x.length;
	for ( i = 0; i < len; i++ ) {
		x[ i ] = randu()*50.0;
	}
	sigma = stdev( 0.0, 50.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x[ i % x.length ] = randu()*50.0;
		result = ztest( x, sigma );
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

bench( pkg+'::one-sided', function benchmark( b ) {
	var result;
	var sigma;
	var opts;
	var len;
	var x;
	var i;

	x = new Array( 100 );
	len = x.length;
	for ( i = 0; i < len; i++ ) {
		x[ i ] = randu()*50.0;
	}
	opts = {
		'alternative': 'less'
	};
	sigma = stdev( 0.0, 50.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x[ i % x.length ] = randu()*50.0;
		result = ztest( x, sigma, opts );
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

bench( pkg+':print', function benchmark( b ) {
	var digits;
	var result;
	var output;
	var sigma;
	var len;
	var x;
	var i;

	x = new Array( 100 );
	len = x.length;
	for ( i = 0; i < len; i++ ) {
		x[ i ] = randu()*50.0;
	}
	sigma = stdev( 0.0, 50.0 );
	result = ztest( x, sigma );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		digits = ( i % 8 ) + 1;
		output = result.print({
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
