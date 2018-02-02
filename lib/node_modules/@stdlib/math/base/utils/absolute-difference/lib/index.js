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
* Compute the absolute difference.
*
* @module @stdlib/math/base/utils/absolute-difference
*
* @example
* var diff = require( '@stdlib/math/base/utils/absolute-difference' );
*
* var d = diff( 2.0, 5.0 );
* // returns 3.0
*
* d = diff( -1.0, 3.14 );
* // returns ~4.14
*
* d = diff( 10.1, -2.05 );
* // returns ~12.15
*
* d = diff( -0.0, 0.0 );
* // returns +0.0
*
* d = diff( NaN, 5.0 );
* // returns NaN
*
* d = diff( Infinity, -Infinity  );
* // returns Infinity
*
* d = diff( Infinity, Infinity  );
* // returns NaN
*/

// MODULES //

var absoluteDifference = require( './main.js' );


// EXPORTS //

module.exports = absoluteDifference;
