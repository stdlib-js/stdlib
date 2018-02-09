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
* Test if a value is a valid array length.
*
* @module @stdlib/assert/is-array-length
*
* @example
* var isArrayLength = require( '@stdlib/assert/is-array-length' );
*
* var bool = isArrayLength( 5 );
* // returns true
*
* bool = isArrayLength( 2.0e200 );
* // returns false
*
* bool = isArrayLength( -3.14 );
* // returns false
*
* bool = isArrayLength( null );
* // returns false
*/

// MODULES //

var isArrayLength = require( './main.js' );


// EXPORTS //

module.exports = isArrayLength;
