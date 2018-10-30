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
* Compute the hyperbolic arccosine of a number.
*
* @module @stdlib/math/base/special/acoth
*
* @example
* var acoth = require( '@stdlib/math/base/special/acoth' );
*
* var v = acoth( 2.0 );
* // returns ~0.5493
*
* v = acoth( 0.0 );
* // returns NaN
*
* v = acoth( 0.5 );
* // returns NaN
*
* v = acoth( 1.0 );
* // returns Infinity
*
* v = acoth( NaN );
* // returns NaN
*/

// MODULES //

var acoth = require( './main.js' );


// EXPORTS //

module.exports = acoth;
