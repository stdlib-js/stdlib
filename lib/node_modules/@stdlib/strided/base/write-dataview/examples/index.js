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

var ArrayBuffer = require( '@stdlib/array/buffer' );
var DataView = require( '@stdlib/array/dataview' );
var typedarray = require( '@stdlib/array/typed' );
var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var IS_LITTLE_ENDIAN = require( '@stdlib/assert/is-little-endian' );
var logEach = require( '@stdlib/console/log-each' );
var writeDataView = require( './../lib' );

// Specify the array data type:
var dtype = 'float64';

// Resolve the number of bytes per element:
var nbytes = bytesPerElement( dtype );

// Generate an array of random numbers:
var x = discreteUniform( 10, 0, 100, {
	'dtype': dtype
});

// Create a DataView:
var buf = new ArrayBuffer( x.length*nbytes );
var view = new DataView( buf );

// Copy the numbers to the DataView:
writeDataView( x.length, x, 1, view, nbytes, IS_LITTLE_ENDIAN );

// Create a view of the DataView:
var y = typedarray( view.buffer, dtype );

// Print the results:
logEach( '%d -> %d', x, y );
