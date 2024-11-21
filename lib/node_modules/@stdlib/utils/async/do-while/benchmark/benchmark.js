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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pkg = require( './../package.json' ).name;
var doWhileAsync = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var i;

	i = 0;
	b.tic();

	return next();

	function next( error, result ) {
		i += 1;
		if ( error ) {
			b.fail( 'should not return an error' );
		}
		if ( i <= b.iterations ) {
			return doWhileAsync( fcn, predicate, next );
		}
		b.toc();
		if ( isnan( result ) ) {
			b.fail( 'should not return NaN' );
		}
		b.pass( 'benchmark finished' );
		b.end();
	}

	function fcn( i, next ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			next( null, randu() );
		}
	}

	function predicate( i, clbk ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			clbk( null, i < 5 );
		}
	}
});

bench( pkg+'::sync_predicate', function benchmark( b ) {
	var i;

	i = 0;
	b.tic();

	return next();

	function next( error, result ) {
		i += 1;
		if ( error ) {
			b.fail( 'should not return an error' );
		}
		if ( i <= b.iterations ) {
			return doWhileAsync( fcn, predicate, next );
		}
		b.toc();
		if ( isnan( result ) ) {
			b.fail( 'should not return NaN' );
		}
		b.pass( 'benchmark finished' );
		b.end();
	}

	function fcn( i, next ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			next( null, randu() );
		}
	}

	function predicate( i, clbk ) {
		clbk( null, i < 5 );
	}
});
