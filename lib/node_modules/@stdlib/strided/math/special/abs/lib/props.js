/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
var dtypes2signatures = require( '@stdlib/ndarray/base/dtypes2signatures' );
var dtypes = require( './types.json' );
var meta = require( './meta.json' );


// FUNCTIONS //

/**
* Returns a list of strided array interface array type signatures.
*
* @private
* @returns {StringArray} list of signatures
*/
function types() {
	return dtypes2signatures( dtypes, meta.nin, meta.nout );
}


// MAIN //

/**
* Defines properties which expose strided array function meta data.
*
* @private
* @param {Function} fcn - function on which to define properties
* @param {boolean} bool - boolean indicating whether the provided function is an "ndarray" interface
*/
function setProps( fcn, bool ) {
	// Define the number of input arguments:
	if ( bool ) {
		setReadOnly( fcn, 'nargs', meta.nargs+meta.nin+meta.nout ); // Note: accounts for one offset argument per input/output strided array
	} else {
		setReadOnly( fcn, 'nargs', meta.nargs );
	}
	// Define the number of input strided arrays:
	setReadOnly( fcn, 'nin', meta.nin );

	// Define the number of output strided arrays:
	setReadOnly( fcn, 'nout', meta.nout );

	// Define a read-only accessor for listing a function's supported array data types:
	setReadOnlyAccessor( fcn, 'types', types );
}


// EXPORTS //

module.exports = setProps;
