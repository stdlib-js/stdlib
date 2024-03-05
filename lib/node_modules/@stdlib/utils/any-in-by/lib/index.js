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
* Test whether at least one property in an object passes a test implemented by a predicate function.
*
* @module @stdlib/utils/any-in-by
*
* @example
* var anyInBy = require( '@stdlib/utils/any-in-by' );
*
* function isNegative( v ) {
*     return ( v < 0 );
* }
*
* var obj = {
*     a: 1,
*     b: 2,
*     c: -1
* };
*
* var bool = anyInBy( obj, isNegative );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
