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
* Test if a value is a BigUint64Array.
*
* @module @stdlib/assert/is-biguint64array
*
* @example
* var isBigUint64Array = require( '@stdlib/assert/is-biguint64array' );
*
* var value = new BigUint64Array( 2 );
* var bool = isBigUint64Array( value );
* // returns true
*
* bool = isBigUint64Array( [] );
* // returns false
*/

// MODULES //

var isBigUint64Array = require( './main.js' );


// EXPORTS //

module.exports = isBigUint64Array;
