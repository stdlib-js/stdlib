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

var format = require( 'd3-format' ).format; // TODO: remove
var isNull = require( '@stdlib/assert/is-null' );


// MAIN //

/**
* Returns the y-axis tick format.
*
* @private
* @returns {(Function|null)} format function or null
*/
function get() {
	/* eslint-disable no-invalid-this */
	if ( isNull( this._yTickFormat ) ) {
		return this._yTickFormat;
	}
	return format( this._yTickFormat );
}


// EXPORTS //

module.exports = get;
