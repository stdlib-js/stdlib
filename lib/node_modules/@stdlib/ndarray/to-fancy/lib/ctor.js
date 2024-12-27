/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

// MAIN //

/**
* Returns a trap for constructing new ndarray instances.
*
* @private
* @param {Function} ndarray2fancy - function for creating a proxied ndarray
* @param {Object} opts - options
* @param {boolean} opts.strict - boolean indicating whether to perform strict bounds checking
* @returns {Function} handler
*/
function factory( ndarray2fancy, opts ) {
	return constructor;

	/**
	* Trap for constructing new ndarray instances.
	*
	* @private
	* @param {Object} target - target object
	* @param {Array} args - list of constructor arguments
	* @param {Object} newTarget - constructor that was originally called
	* @returns {*} new instance
	*/
	function constructor( target, args ) {
		var x;
		var a;

		a = args;
		switch ( a.length ) {
		case 0:
			x = new target();
			break;
		case 1:
			x = new target( a[0] );
			break;
		case 2:
			x = new target( a[0], a[1] );
			break;
		case 3:
			x = new target( a[0], a[1], a[2] );
			break;
		case 4:
			x = new target( a[0], a[1], a[2], a[3] );
			break;
		case 5:
			x = new target( a[0], a[1], a[2], a[3], a[4] );
			break;
		case 6:
			x = new target( a[0], a[1], a[2], a[3], a[4], a[5] );
			break;
		case 7:
			x = new target( a[0], a[1], a[2], a[3], a[4], a[5], a[6] );
			break;
		case 8:
			x = new target( a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7] );
			break;
		case 9:
			x = new target( a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8] ); // eslint-disable-line max-len
			break;
		case 10:
			x = new target( a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9] ); // eslint-disable-line max-len
			break;
		default:
			// Fallback to using `apply`; however, some constructors may error if the constructor is not callable (i.e., if a constructor always requires `new`):
			x = target.apply( null, a );
		}
		return ndarray2fancy( x, opts );
	}
}


// EXPORTS //

module.exports = factory;
