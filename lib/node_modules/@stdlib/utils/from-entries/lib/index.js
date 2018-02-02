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
* Create an object from key-value pairs.
*
* @module @stdlib/utils/from-entries
*
* @example
* var objectFromEntries = require( '@stdlib/utils/from-entries' );
*
* var entries = [ ['beep', 'boop'], ['foo', 'bar'] ];
*
* var obj = objectFromEntries( entries );
* // returns {'beep': 'boop', 'foo': 'bar'}
*/

// MODULES //

var objectFromEntries = require( './from_entries.js' );


// EXPORTS //

module.exports = objectFromEntries;
