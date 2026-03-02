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

var numCPUs = require( '@stdlib/os/num-cpus' );
var max = require( '@stdlib/math/base/special/fast/max' );


// MAIN //

/**
* Returns default options.
*
* @private
* @returns {Object} default options
*
* @example
* var o = defaults();
* // returns {...}
*/
function defaults() {
	var n;

	// Accommodate single-core systems by ensuring at least 1 worker and 1 concurrent script:
	n = max( 1, numCPUs - 1 );

	return {
		// Number of workers:
		'workers': n,

		// Number of scripts to execute concurrently:
		'concurrency': n,

		// Executable file/command:
		'cmd': 'node',

		// Boolean indicating whether script output can be interleaved or must be ordered:
		'ordered': false,

		// Process user identity:
		'uid': null,

		// Process group identity:
		'gid': null,

		// `stdio` encoding:
		'encoding': 'buffer',

		// Max child process `stdio` buffer size:
		'maxBuffer': 200 * 1024 * 1024 // bytes
	};
}


// EXPORTS //

module.exports = defaults;
