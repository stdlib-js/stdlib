/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
* Test if a value is an array-like object supporting the accessor (get/set) protocol.
*
* @module @stdlib/assert/is-accessor-array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128array' );
* var isAccessorArray = require( '@stdlib/assert/is-accessor-array' );
*
* var bool = isAccessorArray( new Complex128Array( 10 ) );
* // returns true
*
* bool = isAccessorArray( [] );
* // returns false
*
* bool = isAccessorArray( {} );
* // returns false
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
