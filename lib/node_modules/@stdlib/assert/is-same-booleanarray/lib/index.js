/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Test if two arguments are both BooleanArrays and have the same values.
*
* @module @stdlib/assert/is-same-booleanarray
*
* @example
* var BooleanArray = require( '@stdlib/array/bool' );
* var isSameBooleanArray = require( '@stdlib/assert/is-same-booleanarray' );
*
* var x = new BooleanArray( [ true, false, false, true ] );
* var y = new BooleanArray( [ true, false, false, true ] );
*
* var out = isSameBooleanArray( x, y );
* // returns true
*
* @example
* var BooleanArray = require( '@stdlib/array/bool' );
* var isSameBooleanArray = require( '@stdlib/assert/is-same-booleanarray' );
*
* var x = new BooleanArray( [ true, false, false, true ] );
* var y = new BooleanArray( [ true, true, false, false ] );
*
* var out = isSameBooleanArray( x, y );
* // returns false
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
