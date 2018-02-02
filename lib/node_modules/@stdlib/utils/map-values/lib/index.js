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
* Map values from one object to a new object having the same keys.
*
* @module @stdlib/utils/map-values
*
* @example
* var mapValues = require( '@stdlib/utils/map-values' );
*
* function transform( value, key ) {
*     return key + value;
* }
*
* var obj1 = {
*     'a': 1,
*     'b': 2
* };
*
* var obj2 = mapValues( obj1, transform );
* // returns { 'a': 'a1', 'b': 'b2' }
*/

// MODULES //

var mapValues = require( './map_values.js' );


// EXPORTS //

module.exports = mapValues;
