/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Compute the secant of an angle measured in degrees.
*
* @module @stdlib/math/base/special/secd
*
* @example
* var secd = require( '@stdlib/math/base/special/secd' );
*
* var v = secd( 30 );
* // returns ~1.15
*
* v = secd( 45 );
* // returns ~1.41
*
* v = secd( 60 );
* // returns ~2.0
*
* v = secd( 90 );
* // returns 16331239353195370
*
* v = secd( 0 );
* // returns 1.0
*
* v = secd( NaN );
* // returns NaN
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
