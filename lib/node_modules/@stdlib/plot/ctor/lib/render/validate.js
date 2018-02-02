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
* Validates that an instance is in a valid state for rendering.
*
* @private
* @param {Object} state - state
* @throws {Error} must be in a valid state to render
*/
function validate( state ) {
	/* eslint-disable no-underscore-dangle */
	var x;
	var y;
	var i;

	x = state._xData;
	y = state._yData;
	if ( x.length !== y.length ) {
		throw new Error( 'invalid state. `x` and `y` are different lengths. `x` length: '+x.length+', `y` length: '+y.length+'.' );
	}
	// TODO: will need to refactor to some degree to support `ndarray`-like `x` and `y`
	for ( i = 0; i < x.length; i++ ) {
		if ( x[ i ].length !== y[ i ].length ) {
			throw new Error( 'invalid state. Each `x[i]:y[i]` pair must be the same length. x['+i+'].length: '+x[i].length+', y['+i+'].length: '+y[i].length+'.' );
		}
	}
}


// EXPORTS //

module.exports = validate;
