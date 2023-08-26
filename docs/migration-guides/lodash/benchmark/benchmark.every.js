/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var tryRequire = require( '@stdlib/utils/try-require' );
var every = require( '@stdlib/utils/every' );
var pkg = require( './../package.json' ).name;


// VARIABLES //

var _ = tryRequire( resolve( __dirname, '..', 'node_modules', 'lodash' ) );
var opts = {
	'skip': ( _ instanceof Error )
};


// MAIN //

bench( pkg+'::stdlib:utils/every', opts, function benchmark( b ) {
	var bool;
	var arr;
	var i;

	arr = [ 1, 2, 3, 4, 5 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] += i;
		bool = every( arr, predicate );
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function predicate( v ) {
		return !isnan( v );
	}
});

bench( pkg+'::lodash:every', opts, function benchmark( b ) {
	var bool;
	var arr;
	var i;

	arr = [ 1, 2, 3, 4, 5 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] += i;
		bool = _.every( arr, predicate );
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function predicate( v ) {
		return !isnan( v );
	}
});
