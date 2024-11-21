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
* Test if two arguments are both Date objects corresponding to the same date and time.
*
* @module @stdlib/assert/is-same-date-object
*
* @example
* var isSameDateObject = require( '@stdlib/assert/is-same-date-object' );
*
* var d1 = new Date( 2024, 11, 31, 23, 59, 59, 999 );
* var d2 = new Date( 2024, 11, 31, 23, 59, 59, 999 );
*
* var bool = isSameDateObject( d1, d2 );
* // returns true
*
* @example
* var isSameDateObject = require( '@stdlib/assert/is-same-date-object' );
*
* var d1 = new Date( 2024, 11, 31, 23, 59, 59, 999 );
* var d2 = new Date( 2024, 11, 31, 23, 59, 59, 78 );
*
* var bool = isSameDateObject( d1, d2 );
* // returns false
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
