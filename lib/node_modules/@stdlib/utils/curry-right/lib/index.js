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
* Transform a function into a sequence of functions each accepting a single argument.
*
* @module @stdlib/utils/curry-right
*
* @example
* var curryRight = require( '@stdlib/utils/curry-right' );
*
* function add( x, y ) {
*     return x + y;
* }
*
* var f = curryRight( add );
*
* var sum = f( 2 )( 3 );
* // returns 5
*/

// MODULES //

var curryRight = require( './curry_right.js' );


// EXPORTS //

module.exports = curryRight;
