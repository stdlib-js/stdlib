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

var proc = require( 'process' );


// MAIN //

/**
* Checks whether the built-in `process.umask` exhibits expected behavior.
*
* ## Notes
*
* -   In certain environments on Windows, `process.umask` does not seem to behave as expected (e.g., a mask cannot be set). This function is indicated to "sniff" this behavior.
*
* @private
* @returns {boolean} boolean indicating whether `process.umask` exhibits expected behavior
*/
function check() {
	var MASK;
	var mask;
	var bool;
	var old;
	var i;

	MASK = proc.umask();
	bool = true;

	for ( i = 100; i < 200; i++ ) {
		old = proc.umask();

		// Should return an integer-valued number:
		if ( typeof old !== 'number' ) {
			bool = false;
			break;
		}

		// Attempt to update the mask:
		mask = proc.umask( i );

		// Should have returned the previous mask:
		if ( mask !== old ) {
			bool = false;
			break;
		}
		// Should return the current mask:
		if ( proc.umask() !== i ) {
			bool = false;
			break;
		}
	}
	proc.umask( MASK ); // restore
	return bool;
}


// EXPORTS //

module.exports = check;
