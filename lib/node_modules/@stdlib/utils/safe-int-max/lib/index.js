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
* Return the maximum safe integer capable of being represented by a numeric real type.
*
* @module @stdlib/utils/safe-int-max
*
* @example
* var safeintmax = require( '@stdlib/utils/safe-int-max' );
*
* var m = safeintmax( 'float64' );
* // returns 9007199254740991
*
* m = safeintmax( 'float16' );
* // returns 2047
*
* m = safeintmax( 'float32' );
* // returns 16777215
*/

// MODULES //

var safeintmax = require( './main.js' );


// EXPORTS //

module.exports = safeintmax;
