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
* Return the minimum safe integer capable of being represented by a numeric real type.
*
* @module @stdlib/utils/safe-int-min
*
* @example
* var safeintmin = require( '@stdlib/utils/safe-int-min' );
*
* var m = safeintmin( 'float64' );
* // returns -9007199254740991
*
* m = safeintmin( 'float16' );
* // returns -2047
*
* m = safeintmin( 'float32' );
* // returns -16777215
*/

// MODULES //

var safeintmin = require( './main.js' );


// EXPORTS //

module.exports = safeintmin;
