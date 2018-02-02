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
* Convert each object key to lowercase.
*
* @module @stdlib/utils/lowercase-keys
*
* @example
* var lowercaseKeys = require( '@stdlib/utils/lowercase-keys' );
*
* var obj1 = {
*     'A': 1,
*     'B': 2
* };
*
* var obj2 = lowercaseKeys( obj1 );
* // returns { 'a': 1, 'b': 2 }
*/

// MODULES //

var lowercaseKeys = require( './lowercase_keys.js' );


// EXPORTS //

module.exports = lowercaseKeys;
