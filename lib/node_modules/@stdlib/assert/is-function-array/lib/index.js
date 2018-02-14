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
* Test if a value is an array-like object containing only functions.
*
* @module @stdlib/assert/is-function-array
*
* @example
* var isFunctionArray = require( '@stdlib/assert/is-function-array' );
*
* function beep() {}
*
* function boop() {}
*
* var bool = isFunctionArray( [ beep, boop ] );
* // returns true
*
* bool = isFunctionArray( [ {}, beep ] );
* // returns false
*
* bool = isFunctionArray( [] );
* // returns false
*/

// MODULES //

var arrayfun = require( '@stdlib/assert/tools/array-like-function' );
var isFunction = require( '@stdlib/assert/is-function' );


// MAIN //

var isFunctionArray = arrayfun( isFunction );


// EXPORTS //

module.exports = isFunctionArray;
