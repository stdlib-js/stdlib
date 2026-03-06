/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* Return the data type enumeration constant for an ndarray data buffer.
*
* @module @stdlib/ndarray/base/buffer-dtype-enum
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dtypeEnum = require( '@stdlib/ndarray/base/buffer-dtype-enum' );
*
* var x = new Float64Array( 10 );
*
* var c = dtypeEnum( x );
* // returns <number>
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
