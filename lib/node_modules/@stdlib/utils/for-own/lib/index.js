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
* Invoke a function once for each own enumerable property of an object.
*
* @module @stdlib/utils/for-own
*
* @example
* var forOwn = require( '@stdlib/utils/for-own' );
*
* function log( v, key ) {
*     console.log( '%s: %d', key, v );
* }
*
* var obj = {
*     'a': 1,
*     'b': 2,
*     'c': 3,
*     'd': 4
* };
*
* forOwn( obj, log );
*/

// MODULES //

var forOwn = require( './for_own.js' );


// EXPORTS //

module.exports = forOwn;
