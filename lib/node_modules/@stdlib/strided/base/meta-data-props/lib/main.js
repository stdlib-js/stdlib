/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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


// MAIN //

/**
* Defines non-enumerable read-only properties which expose strided array function meta data.
*
* @param {Object} meta - function meta data
* @param {NonNegativeInteger} meta.nargs - total number of arguments (excluding offsets)
* @param {NonNegativeInteger} meta.nin - total number of input arrays
* @param {NonNegativeInteger} meta.nout - total number of output arrays
* @param {ArrayLikeObject} dtypes - list of strided array data types
* @param {(Function|Object)} obj - object on which to define properties
* @param {boolean} bool - boolean indicating whether the provided object should describe an "ndarray" function interface
* @returns {(Function|Object)} object on which properties were defined
*
* @example
* // Define strided array function meta data:
* var meta = {
*     'nargs': 7,
*     'nin': 1,
*     'nout': 1
* };
*
* // Define the list of strided array data types:
* var dtypes = [
*     'float64', 'float64',
*     'float32', 'float32',
*     'generic', 'generic'
* ];
*
* // Define an object on which to set the properties:
* var obj = {};
*
* // Set the properties:
* setProps( meta, dtypes, obj, false );
*
* @example
* // Define strided array function meta data:
* var meta = {
*     'nargs': 7,
*     'nin': 1,
*     'nout': 1
* };
*
* // Define the list of strided array data types:
* var dtypes = [
*     'float64', 'float64',
*     'float32', 'float32',
*     'generic', 'generic'
* ];
*
* // Define a function on which to set the properties:
* function abs( N, dtypeX, x, strideX, dtypeY, y, strideY ) {
*     // Implementation...
* }
*
* // Set the properties:
* setProps( meta, dtypes, abs, false );
*/
function setProps( meta, dtypes, obj, bool ) {
	// Define the number of arguments:
	if ( bool ) {
		setReadOnly( obj, 'nargs', meta.nargs+meta.nin+meta.nout ); // Note: accounts for one offset argument per input/output strided array
	} else {
		setReadOnly( obj, 'nargs', meta.nargs );
	}
	// Define the number of input strided arrays:
	setReadOnly( obj, 'nin', meta.nin );

	// Define the number of output strided arrays:
	setReadOnly( obj, 'nout', meta.nout );

	// Define a read-only accessor for listing a function's supported array data types:
	setReadOnlyAccessor( obj, 'types', types );

	return obj;

	/**
	* Returns a list of strided array interface array type signatures.
	*
	* @private
	* @returns {StringArray} list of signatures
	*/
	function types() {
		return dtypes2signatures( dtypes, meta.nin, meta.nout );
	}
}


// EXPORTS //

module.exports = setProps;
