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
* Convert a collection to an object whose keys are determined by a provided function and whose values are the collection values.
*
* @module @stdlib/utils/key-by
*
* @example
* var keyBy = require( '@stdlib/utils/key-by' );
*
* function toKey( value ) {
*     return value.name;
* }
*
* var collection = [
*     { 'name': 'beep', 'a': 1 },
*     { 'name': 'boop', 'b': 2 }
* ];
*
* var obj = keyBy( collection, toKey );
* // returns { 'beep': { 'name': 'beep', 'a': 1 }, 'boop': { 'name': 'boop', 'b': 2 } }
*/

// MODULES //

var keyBy = require( './key_by.js' );


// EXPORTS //

module.exports = keyBy;
