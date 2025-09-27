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

/**
* Resolve the data type that results from applying promotion rules to a provided list of data types.
*
* @module @stdlib/ndarray/base/promote-dtypes
*
* @example
* var promoteDataTypes = require( '@stdlib/ndarray/base/promote-dtypes' );
*
* var dt = promoteDataTypes( [ 'float32', 'float64' ] );
* // returns 'float64'
*
* dt = promoteDataTypes( [ 'binary', 'complex128' ] );
* // returns null
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
