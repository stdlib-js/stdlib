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

/**
* Determine if an array data type can be cast to another array data type according to a specified casting rule.
*
* @module @stdlib/ndarray/base/assert/is-allowed-data-type-cast
*
* @example
* var isAllowedCast = require( '@stdlib/ndarray/base/assert/is-allowed-data-type-cast' );
*
* var bool = isAllowedCast( 'float32', 'float64', 'safe' );
* // returns true
*
* bool = isAllowedCast( 'float64', 'int32', 'safe' );
* // returns false
*/

// MODULES //

var isAllowedCast = require( './main.js' );


// EXPORTS //

module.exports = isAllowedCast;
