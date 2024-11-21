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
* Evaluate the natural logarithm of \\(1-\exp(-|x|)\\).
*
* @module @stdlib/math/base/special/log1mexp
*
* @example
* var log1mexp = require( '@stdlib/math/base/special/log1mexp' );
*
* var v = log1mexp( 1.1 );
* // returns ~-0.40477
*
* v = log1mexp( 0.0 );
* // returns -Infinity
*
* v = log1mexp( NaN );
* // returns NaN
*/

// MODULES //

var log1mexp = require( './main.js' );


// EXPORTS //

module.exports = log1mexp;
