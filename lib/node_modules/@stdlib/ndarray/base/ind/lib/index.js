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
*
* @example
* var ind = require( '@stdlib/ndarray/base/ind' );
*
* var idx = ind( 1, 10, 'normalize' );
* // returns 1
*
* idx = ind( -4, 10, 'normalize' );
* // returns 7
*
* idx = ind( -100, 10, 'normalize' );
* // throws <RangeError>
*
* @example
* var ind = require( '@stdlib/ndarray/base/ind' );
*
* var fcn = ind.factory( 'clamp' );
*
* var idx = fcn( -1, 10 );
* // returns 0
*
* idx = fcn( 14, 10 );
* // returns 10
*
* idx = fcn( 6, 10 );
* // returns 6
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var factory = require( './factory.js' );
var main = require( './main.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
