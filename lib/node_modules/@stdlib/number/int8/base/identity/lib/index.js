/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Evaluate the identity function for a signed 8-bit integer.
*
* @module @stdlib/number/int8/base/identity
*
* @example
* var identity = require( '@stdlib/number/int8/base/identity' );
*
* var v = identity( 1 );
* // returns 1
*
* v = identity( 2 );
* // returns 2
*
* v = identity( 0 );
* // returns 0
*
* v = identity( 127 );
* // returns 127
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
