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
* Invoke a function `n` times and return an array of accumulated function return values.
*
* @module @stdlib/utils/map-function
*
* @example
* var mapFun = require( '@stdlib/utils/map-function' );
*
* function fcn( i ) {
*     return i;
* }
*
* var arr = mapFun( fcn, 5 );
* // returns [ 0, 1, 2, 3, 4 ]
*/

// MODULES //

var mapFun = require( './map_function.js' );


// EXPORTS //

module.exports = mapFun;
