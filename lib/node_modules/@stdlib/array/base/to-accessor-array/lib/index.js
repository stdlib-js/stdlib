/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
* Convert an array-like object to a minimal array-like object supporting the accessor protocol.
*
* @module @stdlib/array/base/to-accessor-array
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
*
* var o = toAccessorArray( [ 1, 2, 3 ] );
* // returns <Object>
*
* var v = o.get( 0 );
* // returns 1
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
