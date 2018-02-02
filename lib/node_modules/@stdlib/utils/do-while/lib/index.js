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
* Invoke a function while a test condition is true.
*
* @module @stdlib/utils/do-while
*
* @example
* var doWhile = require( '@stdlib/utils/do-while' );
*
* function predicate( i ) {
*     return ( i < 5 );
* }
*
* function beep( i ) {
*     console.log( 'boop: %d', i );
* }
*
* doWhile( beep, predicate );
*/

// MODULES //

var doWhile = require( './do_while.js' );


// EXPORTS //

module.exports = doWhile;
