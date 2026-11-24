/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var naryFunction = require( '@stdlib/utils/nary-function' );
var unzip = require( '@stdlib/utils/unzip' );
var nCartesianProduct = require( '@stdlib/array/base/n-cartesian-product' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var inputCastingDataType = require( './../lib' );

var idt1 = [
	'float32',
	'float64'
];

var idt2 = [
	'int8',
	'uint8',
	'uint16',
	'uint32'
];

var odt = [
	'float32',
	'float64',
	'complex64',
	'complex128'
];

// Define a list of casting policies:
var policies = [
	'promoted',
	'accumulation',
	'output'
];

// Generate dtype-policy argument groups:
var args = nCartesianProduct( idt1, idt2, odt, policies );

// Unzip the argument arrays:
args = unzip( args );

// Resolve casting data types:
logEachMap( 'dtypes: (%10s, %10s, %10s). policy: %20s. result: %10s.', args[ 0 ], args[ 1 ], args[ 2 ], args[ 3 ], naryFunction( inputCastingDataType, 4 ) );
