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

var linear = require( 'd3-scale' ).scaleLinear; // TODO: remove
var time = require( 'd3-scale' ).scaleTime; // TODO: remove


// MAIN //

/**
* Returns a scale function for mapping values to a coordinate along the y-axis.
*
* @private
* @returns {Function} scale function
*/
function get() {
	/* eslint-disable no-invalid-this */
	var scale;
	if ( this._yScale === 'time' ) {
		scale = time()
			.domain( this.yDomain )
			.range( this.yRange );
	} else if ( this._yScale === 'linear' ) {
		scale = linear()
			.domain( this.yDomain )
			.range( this.yRange );
	}
	// TODO: other scales
	return scale;
}


// EXPORTS //

module.exports = get;
