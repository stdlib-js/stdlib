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
* Compute a one-parameter Box-Cox transformation of `1+x`.
*
* @module @stdlib/math/base/special/boxcox1p
*
* @example
* var boxcox1p = require( '@stdlib/math/base/special/boxcox1p' );
*
* var v = boxcox1p( 1.0, 2.5 );
* // returns ~1.8627
*
* v = boxcox1p( 4.0, 2.5 );
* // returns ~21.9607
*
* v = boxcox1p( 10.0, 2.5 );
* // returns ~160.1246
*
* v = boxcox1p( 2.0, 0.0 );
* // returns ~1.0986
*
* v = boxcox1p( -1.0, 2.5 );
* // returns -0.4
*
* v = boxcox1p( 0.0, -1.0 );
* // returns 0.0
*
* v = boxcox1p( -1.0, -1.0 );
* // returns -Infinity
*/

// MODULES //

var boxcox1p = require( './main.js' );


// EXPORTS //

module.exports = boxcox1p;
