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
var isProbabilityArray = require( '@stdlib/assert/is-probability-array' );
var isArray = require( '@stdlib/assert/is-array' );
var pkg = require( './../package.json' ).name;
var padjust = require( './../lib' );


// MAIN //

bench( pkg+':method=bonferroni', function benchmark( b ) {
	var result;
	var pvals;
	var len;
	var i;

	pvals = new Array( 10 );
	len = pvals.length;
	for ( i = 0; i < len; i++ ) {
		pvals[ i ] = randu() * 0.5;
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		pvals[ 0 ] = randu() * 0.5;
		result = padjust( pvals, 'bonferroni' );
		if ( !isArray( result ) ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isProbabilityArray( result ) ) {
		b.fail( 'should return a probability array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':method=bh', function benchmark( b ) {
	var result;
	var pvals;
	var len;
	var i;

	pvals = new Array( 10 );
	len = pvals.length;
	for ( i = 0; i < len; i++ ) {
		pvals[ i ] = randu() * 0.5;
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		pvals[ 0 ] = randu() * 0.5;
		result = padjust( pvals, 'bh' );
		if ( !isArray( result ) ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isProbabilityArray( result ) ) {
		b.fail( 'should return a probability array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':method=by', function benchmark( b ) {
	var result;
	var pvals;
	var len;
	var i;

	pvals = new Array( 10 );
	len = pvals.length;
	for ( i = 0; i < len; i++ ) {
		pvals[ i ] = randu() * 0.5;
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		pvals[ 0 ] = randu() * 0.5;
		result = padjust( pvals, 'by' );
		if ( !isArray( result ) ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isProbabilityArray( result ) ) {
		b.fail( 'should return a probability array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':method=holm', function benchmark( b ) {
	var result;
	var pvals;
	var len;
	var i;

	pvals = new Array( 10 );
	len = pvals.length;
	for ( i = 0; i < len; i++ ) {
		pvals[ i ] = randu() * 0.5;
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		pvals[ 0 ] = randu() * 0.5;
		result = padjust( pvals, 'holm' );
		if ( !isArray( result ) ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isProbabilityArray( result ) ) {
		b.fail( 'should return a probability array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':method=hommel', function benchmark( b ) {
	var result;
	var pvals;
	var len;
	var i;

	pvals = new Array( 10 );
	len = pvals.length;
	for ( i = 0; i < len; i++ ) {
		pvals[ i ] = randu() * 0.5;
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		pvals[ 0 ] = randu() * 0.5;
		result = padjust( pvals, 'hommel' );
		if ( !isArray( result ) ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isProbabilityArray( result ) ) {
		b.fail( 'should return a probability array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
