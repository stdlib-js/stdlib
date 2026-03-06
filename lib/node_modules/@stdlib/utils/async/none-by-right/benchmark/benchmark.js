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
var pkg = require( './../package.json' ).name;
var noneByRightAsync = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var arr;
	var i;

	arr = [ 1, 2, 3, 4, 5 ];

	function predicate( value, clbk ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			clbk( null, false );
		}
	}

	i = 0;
	b.tic();

	return next();

	function next( error ) {
		i += 1;
		if ( error ) {
			b.fail( 'should not return an error' );
		}
		if ( i <= b.iterations ) {
			return noneByRightAsync( arr, predicate, next );
		}
		b.toc();
		b.pass( 'benchmark finished' );
		b.end();
	}
});

bench( pkg+':series=true', function benchmark( b ) {
	var opts;
	var arr;
	var i;

	opts = {
		'series': true
	};
	arr = [ 1, 2, 3, 4, 5 ];

	function predicate( value, clbk ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			clbk( null, false );
		}
	}

	i = 0;
	b.tic();

	return next();

	function next( error ) {
		i += 1;
		if ( error ) {
			b.fail( 'should not return an error' );
		}
		if ( i <= b.iterations ) {
			return noneByRightAsync( arr, opts, predicate, next );
		}
		b.toc();
		b.pass( 'benchmark finished' );
		b.end();
	}
});

bench( pkg+':limit=3', function benchmark( b ) {
	var opts;
	var arr;
	var i;

	opts = {
		'limit': 3
	};
	arr = [ 1, 2, 3, 4, 5 ];

	function predicate( value, clbk ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			clbk( null, false );
		}
	}

	i = 0;
	b.tic();

	return next();

	function next( error ) {
		i += 1;
		if ( error ) {
			b.fail( 'should not return an error' );
		}
		if ( i <= b.iterations ) {
			return noneByRightAsync( arr, opts, predicate, next );
		}
		b.toc();
		b.pass( 'benchmark finished' );
		b.end();
	}
});
