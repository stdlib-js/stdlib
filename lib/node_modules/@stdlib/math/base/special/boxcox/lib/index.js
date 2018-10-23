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
* Compute a one-parameter Box-Cox transformation.
*
* @module @stdlib/math/base/special/boxcox
*
* @example
* var boxcox = require( '@stdlib/math/base/special/boxcox' );
*
* var v = boxcox( 1.0, 2.5 );
* // returns 0.0
*
* v = boxcox( 4.0, 2.5 );
* // returns 12.4
*
* v = boxcox( 10.0, 2.5 );
* // returns ~126.0911
*
* v = boxcox( 2.0, 0.0 );
* // returns ~0.6931
*
* v = boxcox( -1.0, 2.5 );
* // returns NaN
*
* v = boxcox( 0.0, -1.0 );
* // returns -Infinity
*/

// MODULES //

var boxcox = require( './main.js' );


// EXPORTS //

module.exports = boxcox;
