/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var replace = require( '@stdlib/string/replace' );


// MAIN //

/**
* Defines array shapes in a provided template string.
*
* @private
* @param {string} tmpl - template string
* @param {Array<Array>} shapes - array of shape arrays
* @returns {string} updated string
*/
function defineShapes( tmpl, shapes ) {
	var i;
	for ( i = 1; i < shapes.length; i++ ) {
		tmpl = replace( tmpl, '{{NDARRAY_SHAPE_'+i+'D}}', shapes[ i ].join( ', ' ) );
	}
	return tmpl;
}


// EXPORTS //

module.exports = defineShapes;
