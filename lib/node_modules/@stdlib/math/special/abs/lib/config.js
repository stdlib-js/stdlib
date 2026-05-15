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

// MODULES //

var dtypes = require( '@stdlib/ndarray/dtypes' );


// MAIN //

var config = {
	// Total number of ndarray arguments:
	'nargs': 2,

	// Number of input ndarray arguments:
	'nin': 1,

	// Number of output ndarray arguments:
	'nout': 1,

	// List of supported input ndarray data types:
	'idtypes': dtypes( 'numeric_and_generic' ),

	// List of supported output ndarray data types:
	'odtypes': dtypes( 'real_and_generic' ),

	// Dispatch policies:
	'policies': {
		// Output data type policy:
		'output': 'real_and_generic',

		// Input ndarray casting policy:
		'casting': 'none'
	}
};


// EXPORTS //

module.exports = config;
