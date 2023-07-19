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
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var Float32Array = require( '@stdlib/array/float32' );
var Float64Array = require( '@stdlib/array/float64' );
var Int8Array = require( '@stdlib/array/int8' );
var Int16Array = require( '@stdlib/array/int16' );
var Int32Array = require( '@stdlib/array/int32' );
var Uint8Array = require( '@stdlib/array/uint8' );
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
var Uint16Array = require( '@stdlib/array/uint16' );
var Uint32Array = require( '@stdlib/array/uint32' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var Buffer = require( '@stdlib/buffer/ctor' );
var Number = require( '@stdlib/number/ctor' );
var pkg = require( './../package.json' ).name;
var functionName = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var str;
	var i;

	values = [
		Math.sqrt, // eslint-disable-line stdlib/no-builtin-math
		String,
		Number,
		Boolean,
		function noop() {}, // eslint-disable-line no-empty-function
		function () {}, // eslint-disable-line func-names, no-empty-function
		Date,
		Error,
		TypeError,
		SyntaxError,
		URIError,
		EvalError,
		ReferenceError,
		RangeError,
		Int8Array,
		Uint8Array,
		Uint8ClampedArray,
		Int16Array,
		Uint16Array,
		Int32Array,
		Uint32Array,
		Float32Array,
		Float64Array,
		ArrayBuffer,
		Buffer
	];
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		str = functionName( values[ i%values.length ] );
		if ( typeof str !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( str ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
