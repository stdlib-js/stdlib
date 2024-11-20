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

var cwd = require( '@stdlib/process/cwd' );
var env = require( './env.js' );


// MAIN //

/**
* Returns child process options.
*
* @private
* @param {Options} options - worker options
* @param {(NonNegativeInteger|null)} [options.uid] - process user identity
* @param {(NonNegativeInteger|null)} [options.gid] - process group identity
* @returns {Object} child process options
*/
function getOpts( options ) {
	var opts = {
		'cwd': cwd(),
		'env': env( options ),
		'stdio': 'inherit' // Use stdio of parent process
	};
	if ( options.uid ) {
		opts.uid = options.uid;
	}
	if ( options.gid ) {
		opts.gid = options.gid;
	}
	return opts;
}


// EXPORTS //

module.exports = getOpts;
