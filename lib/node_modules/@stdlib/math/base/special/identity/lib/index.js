/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Evaluate the identity function for a double-precision floating-point number.
*
* @module @stdlib/math/base/special/identity
*
* @example
* var identity = require( '@stdlib/math/base/special/identity' );
*
* var v = identity( -1.0 );
* // returns -1.0
*
* v = identity( 2.0 );
* // returns 2.0
*
* v = identity( 0.0 );
* // returns 0.0
*
* v = identity( -0.0 );
* // returns -0.0
*
* v = identity( NaN );
* // returns NaN
*/

// MODULES //

var identity = require( './main.js' );


// EXPORTS //

module.exports = identity;
