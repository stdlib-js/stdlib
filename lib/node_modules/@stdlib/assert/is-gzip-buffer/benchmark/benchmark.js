/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var Float32Array = require( '@stdlib/array/float32' );
var Float64Array = require( '@stdlib/array/float64' );
var Int8Array = require( '@stdlib/array/int8' );
var Int16Array = require( '@stdlib/array/int16' );
var Int32Array = require( '@stdlib/array/int32' );
var Uint8Array = require( '@stdlib/array/uint8' );
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
var Uint16Array = require( '@stdlib/array/uint16' );
var Uint32Array = require( '@stdlib/array/uint32' );
var string2buffer = require( '@stdlib/buffer/from-string' );
var pkg = require( './../package.json' ).name;
var isgzipBuffer = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		new Float64Array( 20 ),
		new Float32Array( 20 ),
		new Int32Array( 20 ),
		new Uint32Array( 20 ),
		new Int16Array( 20 ),
		new Uint16Array( 20 ),
		new Int8Array( 20 ),
		new Uint8Array( 20 ),
		new Uint8ClampedArray( 20 ),
		string2buffer( 'beep boop bop bip foo bar' )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isgzipBuffer( values[ i%values.length ] );
		if ( !isBoolean( bool ) ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
