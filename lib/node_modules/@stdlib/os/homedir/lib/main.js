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

var ENV = require( '@stdlib/process/env' );
var IS_WINDOWS = require( '@stdlib/assert/is-windows' );
var PLATFORM = require( '@stdlib/os/platform' );
var getuid = require( '@stdlib/process/getuid' );


// MAIN //

/**
* Returns the current user's home directory.
*
* @returns {(string|null)} home directory
*
* @example
* var home = homedir();
* // e.g., returns '/Users/<username>'
*/
function homedir() {
	var home;
	var user;

	if ( IS_WINDOWS ) {
		// https://github.com/libuv/libuv/blob/764877fd9e4ea67c0cbe27bf81b2b294ed33b0f5/src/win/util.c#L1170
		// https://en.wikipedia.org/wiki/Environment_variable#Windows
		home = ENV[ 'USERPROFILE' ] || ENV[ 'HOMEDRIVE' ]+ENV[ 'HOMEPATH' ] || ENV[ 'HOME' ];
		return ( home ) ? home : null; // eslint-disable-line no-unneeded-ternary
	}
	// https://github.com/libuv/libuv/blob/9fbcca048181b927cfcdb5c6c49e5bdff173aad5/src/unix/core.c#L1030
	home = ENV[ 'HOME' ];
	if ( home ) {
		return home;
	}
	// Get the current user account (https://docs.python.org/2/library/getpass.html):
	user = ENV[ 'LOGNAME' ] || ENV[ 'USER' ] || ENV[ 'LNAME' ] || ENV[ 'USERNAME' ];

	// If on Mac OS X, use the Mac path convention (http://apple.stackexchange.com/questions/119230/what-is-standard-for-os-x-filesystem-e-g-opt-vs-usr)...
	if ( PLATFORM === 'darwin' ) {
		return ( user ) ? '/Users/'+user : null;
	}
	// Check if running as 'root' (https://en.wikipedia.org/wiki/Filesystem_Hierarchy_Standard)...
	if ( getuid() === 0 ) {
		return '/root';
	}
	// If on Linux, use the Linux path convention (https://en.wikipedia.org/wiki/Filesystem_Hierarchy_Standard)...
	return ( user ) ? '/home/'+user : null;
}


// EXPORTS //

module.exports = homedir;
