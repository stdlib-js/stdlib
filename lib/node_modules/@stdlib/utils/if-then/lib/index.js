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
* If a condition is truthy, invoke `x`; otherwise, invoke `y`.
*
* @module @stdlib/utils/if-then
*
* @example
* var randu = require( '@stdlib/random/base/randu' );
* var ifthen = require( '@stdlib/utils/if-then' );
*
* function x() {
*     return randu() * 100.0;
* }
*
* function y() {
*     return -1.0 * randu() * 100.0;
* }
*
* var z = ifthen( randu() > 0.5, x, y );
* // returns <number>
*/

// MODULES //

var ifthen = require( './if_then.js' );


// EXPORTS //

module.exports = ifthen;
