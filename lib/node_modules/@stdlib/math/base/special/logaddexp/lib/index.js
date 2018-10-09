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
* Compute the natural logarithm of \\( exp(x) + exp(y) \\).
*
* @module @stdlib/math/base/special/logaddexp
*
* @example
* var logaddexp = require( '@stdlib/math/base/special/logaddexp' );
*
* var v = logaddexp( 90.0, 90.0 );
* // returns ~90.6931
*
* v = logaddexp( -20.0, 90.0 );
* // returns 90.0
*
* v = logaddexp( 0.0, -100 );
* // returns ~3.7201e-44
*/

// MODULES //

var logaddexp = require( './main.js' );


// EXPORTS //

module.exports = logaddexp;
