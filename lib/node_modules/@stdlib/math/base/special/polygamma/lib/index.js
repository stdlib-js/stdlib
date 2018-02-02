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
* Evaluate the polygamma function.
*
* @module @stdlib/math/base/special/polygamma
*
* @example
* var polygamma = require( '@stdlib/math/base/special/polygamma' );
*
* var v = polygamma( 3, 1.2 );
* // returns ~3.245
*
* v = polygamma( 5, 1.2 );
* // returns ~41.39
*
* v = polygamma( 3, -4.9 );
* // returns ~60014.239
*
* v = polygamma( -1, 5.3 );
* // returns NaN
*
* v = polygamma( 2, -1.0 );
* // returns NaN
*/

// MODULES //

var polygamma = require( './polygamma.js' );


// EXPORTS //

module.exports = polygamma;
