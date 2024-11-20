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
* Return a list of ndarray data types to which a provided ndarray data type can be safely cast and, for floating-point data types, can be downcast.
*
* @module @stdlib/ndarray/mostly-safe-casts
*
* @example
* var mostlySafeCasts = require( '@stdlib/ndarray/mostly-safe-casts' );
*
* var list = mostlySafeCasts( 'float32' );
* // returns [...]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
