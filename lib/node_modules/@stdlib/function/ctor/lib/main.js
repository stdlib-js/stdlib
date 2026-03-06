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

// MAIN //

/**
* Returns a Function object.
*
* @name Function
* @constructor
* @type {Function}
* @param {...*} [argNames] - parameters names
* @param {string} body - function body
* @returns {Function} function
*
* @example
* var add = new Fcn( 'x', 'y', 'return x + y' );
*
* var v = add( 1, 2 );
* // returns 3
*/
var Fcn = Function; // eslint-disable-line stdlib/require-globals


// EXPORTS //

module.exports = Fcn;
