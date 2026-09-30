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
var EPS = require( '@stdlib/constants/float64/eps' );
var format = require( '@stdlib/string/format' );
var pkg = require( './../package.json' ).name;
var inmapAsync = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var arr;
	var len;
	var i;

	function onItem( v, i, clbk ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			clbk( null, v*i );
		}
	}
	arr = [];
	len = 100;
	for ( i = 0; i < len; i++ ) {
		arr.push( EPS );
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
			arr[ 0 ] += 10.0;
			return inmapAsync( arr, onItem, next );
		}
		b.toc();
		b.pass( 'benchmark finished' );
		b.end();
	}
});

bench( format( '%s:series=true', pkg ), function benchmark( b ) {
	var opts;
	var arr;
	var len;
	var i;

	function onItem( v, i, clbk ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			clbk( null, v*i );
		}
	}
	opts = {
		'series': true
	};
	arr = [];
	len = 100;
	for ( i = 0; i < len; i++ ) {
		arr.push( EPS );
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
			arr[ 0 ] += 10.0;
			return inmapAsync( arr, opts, onItem, next );
		}
		b.toc();
		b.pass( 'benchmark finished' );
		b.end();
	}
});

bench( format( '%s:limit=3', pkg ), function benchmark( b ) {
	var opts;
	var arr;
	var len;
	var i;

	function onItem( v, i, clbk ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			clbk( null, v*i );
		}
	}
	opts = {
		'limit': 3
	};
	arr = [];
	len = 100;
	for ( i = 0; i < len; i++ ) {
		arr.push( EPS );
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
			arr[ 0 ] += 10.0;
			return inmapAsync( arr, opts, onItem, next );
		}
		b.toc();
		b.pass( 'benchmark finished' );
		b.end();
	}
});
