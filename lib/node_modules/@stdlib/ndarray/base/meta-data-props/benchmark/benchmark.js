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

/* eslint-disable array-element-newline */

'use strict';

// MODULES //

var bench = require( '@stdlib/bench' );
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var pkg = require( './../package.json' ).name;
var setProps = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var types;
	var meta;
	var out;
	var i;

	meta = {
		'nargs': 2,
		'nin': 1,
		'nout': 1
	};

	types = [
		'float64', 'float64',
		'float32', 'float32',
		'generic', 'generic'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = setProps( meta, types, {}, false );
		if ( typeof out.nout !== 'number' ) {
			b.fail( 'should return a number' );
		}
	}
	b.toc();
	if ( !isNonNegativeInteger( out.nargs ) ) {
		b.fail( 'should return a nonnegative integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
