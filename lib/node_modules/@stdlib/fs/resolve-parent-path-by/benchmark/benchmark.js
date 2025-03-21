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

var bench = require( '@stdlib/bench' );
var pkg = require( './../package.json' ).name;
var resolveParentPathBy = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var opts;
	var i;

	opts = {
		'dir': __dirname
	};

	i = 0;
	b.tic();

	return next();

	function next() {
		i += 1;
		if ( i <= b.iterations ) {
			return resolveParentPathBy( 'package.json', opts, predicate, done );
		}
		b.toc();
		b.pass( 'benchmark finished' );
		b.end();
	}

	function predicate( path, next ) {
		next( null, true );
	}

	function done( error, path ) {
		if ( error ) {
			b.fail( error.message );
		}
		if ( path === null ) {
			b.fail( 'should return a path' );
		}
		next();
	}
});

bench( pkg+':sync', function benchmark( b ) {
	var opts;
	var path;
	var i;

	opts = {
		'dir': __dirname
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		path = resolveParentPathBy.sync( 'package.json', opts, predicate );
		if ( path === null ) {
			b.fail( 'should return a path' );
		}
	}
	b.toc();
	if ( path === null ) {
		b.fail( 'should return a path' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function predicate() {
		return true;
	}
});
