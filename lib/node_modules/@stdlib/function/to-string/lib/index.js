/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
* Return a string representing the source code of a provided function.
*
* @module @stdlib/function/to-string
*
* @example
* var function2string = require( '@stdlib/function/to-string' );
*
* function add( x, y ) {
*     return x + y;
* }
*
* var str = function2string( add );
* // e.g., returns 'function add( x, y ) {\n    return x + y;\n}'
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
