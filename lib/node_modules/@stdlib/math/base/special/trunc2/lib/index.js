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
* Round a numeric value to the nearest power of two toward zero.
*
* @module @stdlib/math/base/special/trunc2
*
* @example
* var trunc2 = require( '@stdlib/math/base/special/trunc2' );
*
* var v = trunc2( 3.141592653589793 );
* // returns 2.0
*
* v = trunc2( 13.0 );
* // returns 8.0
*
* v = trunc2( -0.314 );
* // returns -0.25
*/

// MODULES //

var trunc2 = require( './trunc2.js' );


// EXPORTS //

module.exports = trunc2;
