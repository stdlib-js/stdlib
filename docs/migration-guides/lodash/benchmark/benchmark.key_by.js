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
var tryRequire = require( '@stdlib/utils/try-require' );
var keyBy = require( '@stdlib/utils/key-by' );
var pkg = require( './../package.json' ).name;


// VARIABLES //

var _ = tryRequire( resolve( __dirname, '..', 'node_modules', 'lodash' ) );
var opts = {
	'skip': ( _ instanceof Error )
};


// MAIN //

bench( pkg+'::stdlib:utils/key-by', opts, function benchmark( b ) {
	var arr;
	var out;
	var i;

	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push({
			'name': 'v'+i,
			'value': i
		});
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ].value = i;
		out = keyBy( arr, toKey );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( typeof out !== 'object' ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function toKey( value ) {
		return value.name;
	}
});

bench( pkg+'::lodash:keyBy', opts, function benchmark( b ) {
	var arr;
	var out;
	var i;

	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push({
			'name': 'v'+i,
			'value': i
		});
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ].value = i;
		out = _.keyBy( arr, toKey );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( typeof out !== 'object' ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function toKey( value ) {
		return value.name;
	}
});
