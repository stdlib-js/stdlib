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
* Return an array of an object's own enumerable property `[key, value]` pairs.
*
* @module @stdlib/utils/entries
*
* @example
* var objectEntries = require( '@stdlib/utils/entries' );
*
* var obj = {
*     'beep': 'boop',
*     'foo': 'bar'
* };
*
* var entries = objectEntries( obj );
* // e.g., returns [ ['beep', 'boop'], ['foo', 'bar'] ]
*/

// MODULES //

var objectEntries = require( './entries.js' );


// EXPORTS //

module.exports = objectEntries;
