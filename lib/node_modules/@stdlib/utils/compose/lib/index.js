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
* Function composition.
*
* @module @stdlib/utils/compose
*
* @example
* var compose = require( '@stdlib/utils/compose' );
*
* function a( x ) {
*     return 2 * x;
* }
*
* function b( x ) {
*     return x + 3;
* }
*
* function c( x ) {
*     return x / 5;
* }
*
* var f = compose( c, b, a );
*
* var z = f( 6 );
* // returns 3
*/

// MODULES //

var compose = require( './compose.js' );


// EXPORTS //

module.exports = compose;
