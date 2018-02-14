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

// MODULES //

var round = require( '@stdlib/math/base/special/round' );


// MAIN //

/**
* Returns the time in seconds since the epoch.
*
* @private
* @returns {integer32} time
*
* @example
* var ts = now();
* // returns <number>
*/
function now() {
	var ts;
	var d;

	d = new Date();
	ts = round( d.getTime() / 1000 );
	return ts|0; // asm type annotation
}


// EXPORTS //

module.exports = now;
