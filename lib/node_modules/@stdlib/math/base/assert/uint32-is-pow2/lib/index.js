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
* Test whether an unsigned integer is a power of 2.
*
* @module @stdlib/math/base/assert/uint32-is-pow2
*
* @example
* var isPow2Uint32 = require( '@stdlib/math/base/assert/uint32-is-pow2' );
*
* var bool = isPow2Uint32( 2 );
* // returns true
*
* bool = isPow2Uint32( 5 );
* // returns false
*/

// MODULES //

var isPow2Uint32 = require( './is_pow2.js' );


// EXPORTS //

module.exports = isPow2Uint32;
