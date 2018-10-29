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
* Revive a JSON-serialized pseudorandom generator.
*
* @module @stdlib/random/base/reviver
*
* @example
* var mt19937 = require( '@stdlib/random/base/mt19937' );
* var reviver = require( '@stdlib/random/base/reviver' );
*
* var str = JSON.stringify( mt19937 );
* var rand = JSON.parse( str, reviver );
* // returns <Function>
*/

// MODULES //

var reviver = require( './main.js' );


// EXPORTS //

module.exports = reviver;
