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
* Map keys from one object to a new object having the same values.
*
* @module @stdlib/utils/map-keys
*
* @example
* var mapKeys = require( '@stdlib/utils/map-keys' );
*
* function transform( key, value ) {
*     return key + value;
* }
*
* var obj1 = {
*     'a': 1,
*     'b': 2
* };
*
* var obj2 = mapKeys( obj1, transform );
* // returns { 'a1': 1, 'b2': 2 }
*/

// MODULES //

var mapKeys = require( './map_keys.js' );


// EXPORTS //

module.exports = mapKeys;
