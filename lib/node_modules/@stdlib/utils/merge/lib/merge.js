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

// MODULES //

var defaults = require( './defaults.js' );
var mergefcn = require( './mergefcn.js' );


// MAIN //

/**
* Merges objects into a target object. Note that the target object is mutated.
*
* @name merge
* @type {Function}
* @param {Object} target - target object
* @param {...Object} source - source objects (i.e., objects to be merged into the target object)
* @throws {Error} must provide a target object and one or more source objects
* @throws {TypeError} first argument must be an object
* @throws {TypeError} source arguments must be objects
* @returns {Object} merged (target) object
*
* @example
* var target = {
*     'a': 'beep'
* };
* var source = {
*     'a': 'boop',
*     'b': 'bap'
* };
*
* var out = merge( target, source );
* // returns {'a':'boop', 'b':'bap'}
*/
var merge = mergefcn( defaults );


// EXPORTS //

module.exports = merge;
