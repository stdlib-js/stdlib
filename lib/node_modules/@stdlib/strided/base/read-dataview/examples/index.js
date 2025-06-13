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

var DataView = require( '@stdlib/array/dataview' );
var typedarray = require( '@stdlib/array/typed' );
var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var IS_LITTLE_ENDIAN = require( '@stdlib/assert/is-little-endian' );
var logEach = require( '@stdlib/console/log-each' );
var readDataView = require( './../lib' );

// Specify the array data type:
var dtype = 'float64';

// Resolve the number of bytes per element:
var nbytes = bytesPerElement( dtype );

// Generate an array of random numbers:
var x = discreteUniform( 10, 0, 100, {
	'dtype': dtype
});

// Create a DataView:
var view = new DataView( x.buffer );

// Create an output array:
var out = typedarray( x.length, dtype );

// Read elements from the DataView according to host byte order:
readDataView( out.length, view, nbytes, out, 1, IS_LITTLE_ENDIAN );

// Print the results:
logEach( '%d -> %d', x, out );

// Read elements from the DataView according to the opposite byte order:
readDataView( out.length, view, nbytes, out, 1, !IS_LITTLE_ENDIAN );

// Print the results:
logEach( '%d -> %d', x, out );
