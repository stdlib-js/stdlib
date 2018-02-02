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
* Memoize a function.
*
* @module @stdlib/utils/memoize
*
* @example
* var memoize = require( '@stdlib/utils/memoize' );
*
* function factorial( n ) {
*     var prod;
*     var i;
*     prod = 1;
*     for ( i = n; i > 1; i-- ) {
*         prod *= i;
*     }
*     return prod;
* }
*
* var memoized = memoize( factorial );
*
* var v = memoized( 5 );
* // returns 120
*
* v = memoized( 5 );
* // returns 120
*/

// MODULES //

var memoize = require( './memoize.js' );


// EXPORTS //

module.exports = memoize;
