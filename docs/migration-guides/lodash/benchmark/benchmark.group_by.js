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
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var tryRequire = require( '@stdlib/utils/try-require' );
var groupBy = require( '@stdlib/utils/group-by' );
var pkg = require( './../package.json' ).name;


// VARIABLES //

var _ = tryRequire( resolve( __dirname, '..', 'node_modules', 'lodash' ) );
var opts = {
	'skip': ( _ instanceof Error )
};


// MAIN //

bench( pkg+'::stdlib:utils/group-by', opts, function benchmark( b ) {
	var vals;
	var arr;
	var o;
	var i;
	var j;

	vals = [ 'beep', 'boop', 'foo', 'bar', 'woot' ];

	arr = [];
	for ( i = 0; i < 100; i++ ) {
		j = discreteUniform( 0, vals.length-1 );
		arr.push( vals[ j ] );
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] = vals[ i%vals.length ];
		o = groupBy( arr, indicator );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( typeof o !== 'object' ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function indicator( v ) {
		return v[ 0 ];
	}
});

bench( pkg+'::lodash:groupBy', opts, function benchmark( b ) {
	var vals;
	var arr;
	var o;
	var i;
	var j;

	vals = [ 'beep', 'boop', 'foo', 'bar', 'woot' ];

	arr = [];
	for ( i = 0; i < 100; i++ ) {
		j = discreteUniform( 0, vals.length-1 );
		arr.push( vals[ j ] );
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] = vals[ i%vals.length ];
		o = _.groupBy( arr, indicator );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( typeof o !== 'object' ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function indicator( v ) {
		return v[ 0 ];
	}
});
