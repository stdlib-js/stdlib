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
* Evaluate the inverse error function.
*
* @module @stdlib/math/base/special/erfinv
*
* @example
* var erfinv = require( '@stdlib/math/base/special/erfinv' );
*
* var y = erfinv( 0.5 );
* // returns ~0.4769
*
* y = erfinv( 0.8 );
* // returns ~0.9062
*
* y = erfinv( 0.0 );
* // returns 0.0
*
* y = erfinv( -0.0 );
* // returns -0.0
*
* y = erfinv( -1.0 );
* // returns -Infinity
*
* y = erfinv( 1.0 );
* // returns Infinity
*
* y = erfinv( NaN );
* // returns NaN
*/

// MODULES //

var erfinv = require( './erfinv.js' );


// EXPORTS //

module.exports = erfinv;
