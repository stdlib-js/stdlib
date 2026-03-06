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

var bench = require( '@stdlib/bench' );
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var pkg = require( './../package.json' ).name;
var blockSize = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var dx;
	var dy;
	var dz;
	var s;
	var i;

	dx = [
		'float64',
		'float32',
		'int8',
		'uint8',
		'uint8c',
		'int16',
		'uint16',
		'int32',
		'uint32',
		'binary',
		'generic',
		'foobar'
	];
	dy = [
		'float64',
		'float32',
		'int8',
		'uint8',
		'uint8c',
		'int16',
		'uint16',
		'int32',
		'uint32',
		'binary',
		'generic',
		'foobar'
	];
	dz = [
		'float64',
		'generic',
		'int32',
		'int16',
		'int8'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		s = blockSize( dx[ i%dx.length ], dy[ i%dy.length ], dz[ i%dz.length ] ); // eslint-disable-line max-len
		if ( typeof s !== 'number' ) {
			b.fail( 'should return a number' );
		}
	}
	b.toc();
	if ( !isPositiveInteger( s ) ) {
		b.fail( 'should return a positive integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
