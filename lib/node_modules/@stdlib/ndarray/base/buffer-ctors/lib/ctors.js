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

var Buffer = require( '@stdlib/buffer/ctor' );
var Float64Array = require( '@stdlib/array/float64' );
var Float32Array = require( '@stdlib/array/float32' );
var Int16Array = require( '@stdlib/array/int16' );
var Int32Array = require( '@stdlib/array/int32' );
var Int8Array = require( '@stdlib/array/int8' );
var Uint16Array = require( '@stdlib/array/uint16' );
var Uint32Array = require( '@stdlib/array/uint32' );
var Uint8Array = require( '@stdlib/array/uint8' );
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex128Array = require( '@stdlib/array/complex128' );


// MAIN //

// Mapping from data types to underlying buffer constructors...
var ctors = {
	'binary': Buffer,
	'float64': Float64Array,
	'float32': Float32Array,
	'generic': Array, // TODO: replace with `stdlib` pkg
	'int16': Int16Array,
	'int32': Int32Array,
	'int8': Int8Array,
	'uint16': Uint16Array,
	'uint32': Uint32Array,
	'uint8': Uint8Array,
	'uint8c': Uint8ClampedArray,
	'complex64': Complex64Array,
	'complex128': Complex128Array
};


// EXPORTS //

module.exports = ctors;
