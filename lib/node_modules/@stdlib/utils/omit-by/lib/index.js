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
* Return a partial object copy excluding properties for which a predicate (function) returns a truthy value.
*
* @module @stdlib/utils/omit-by
*
* @example
* var omitBy = require( '@stdlib/utils/omit-by' );
*
* function predicate( key, value ) {
*     return ( value > 1 );
* }
*
* var obj1 = {
*     'a': 1,
*     'b': 2
* };
*
* var obj2 = omitBy( obj1, predicate );
* // returns { 'a': 1 }
*/

// MODULES //

var omitBy = require( './omit_by.js' );


// EXPORTS //

module.exports = omitBy;
