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
* Invoke a function for each UTF-16 code unit in a string iterating from right to left.
*
* @module @stdlib/string/base/for-each-right
*
* @example
* var forEachRight = require( '@stdlib/string/base/for-each-right' );
*
* function log( value, index ) {
*     console.log( '%d: %s', index, value );
* }
*
* forEachRight( 'Hello', log );
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
