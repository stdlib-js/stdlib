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
* Return an index given an index mode.
*
* @module @stdlib/ndarray/base/ind
*
* @example
* var ind = require( '@stdlib/ndarray/base/ind' );
*
* var idx = ind( -1, 10, 'wrap' );
* // returns 10
*
* idx = ind( 14, 10, 'wrap' );
* // returns 3
*
* idx = ind( 6, 10, 'wrap' );
* // returns 6
*
* @example
* var ind = require( '@stdlib/ndarray/base/ind' );
*
* var idx = ind( -1, 10, 'clamp' );
* // returns 0
*
* idx = ind( 14, 10, 'clamp' );
* // returns 10
*
* idx = ind( 6, 10, 'clamp' );
* // returns 6
*
* @example
* var ind = require( '@stdlib/ndarray/base/ind' );
*
* var idx = ind( 1, 10, 'throw' );
* // returns 1
*
* idx = ind( 14, 10, 'throw' );
* // throws <RangeError>
*
* idx = ind( -1, 10, 'throw' );
* // throws <RangeError>
*/

// MODULES //

var ind = require( './main.js' );


// EXPORTS //

module.exports = ind;
