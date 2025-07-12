/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var isUint8Array = require( '@stdlib/assert/is-uint8array' );
var pkg = require( './../package.json' ).name;
var base64ToUint8Array = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		'SGVsbG8gV29ybGQh',
		'VG8gYmUsIG9yIG5vdCB0byBiZTogdGhhdCBpcyB0aGUgcXVlc3Rpb24u',
		'SEVMTE8gV09STEQh'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = base64ToUint8Array( values[ i%values.length ] );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return a Uint8Array' );
		}
	}
	b.toc();
	if ( !isUint8Array( out ) ) {
		b.fail( 'should return a Uint8Array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
