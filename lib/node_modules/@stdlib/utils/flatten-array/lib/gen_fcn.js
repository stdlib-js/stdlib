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
* Returns a function to flatten an array containing elements all having the same dimensions.
*
* @private
* @param {PositiveIntegerArray} dims - dimensions
* @returns {Function} flatten function
*/
function genFcn( dims ) {
	var len;
	var n;
	var f;
	var i;

	// Code generation. Start with the function definition:
	f = 'return function flattenArray(x){';

	// Create the function body...
	len = dims.length;
	n = len - 1;

	// Create the variables...
	f += 'var o=[];var ';
	for ( i = 0; i < len; i++ ) {
		f += 'i' + i;
		if ( i < n ) {
			f += ',';
		} else {
			f += ';';
		}
	}
	// Create the nested for loops...
	for ( i = 0; i < len; i++ ) {
		f += 'for(i' + i + '=0;i' + i + '<' + dims[ i ] + ';i' + i + '++){';
	}
	// Create the code which accesses the nested array values and pushes them onto the flattened array.
	f += 'o.push(x';
	for ( i = 0; i < len; i++ ) {
		f += '[i' + i + ']';
	}
	f += ');';

	// Closing braces...
	for ( i = 0; i < len; i++ ) {
		f += '}';
	}
	f += 'return o;';

	// Close the function:
	f += '}';

	// Add a source directive for debugging:
	f += '//# sourceURL=flatten_array.gen_fcn.js';

	// Create the function in the global scope:
	return ( new Function( f ) )(); // eslint-disable-line no-new-func

	/*
	* e.g.,
	*
	*   function flattenArray( x ) {
	*       var o = [];
	*       var i0, i1;
	*       for ( i0 = 0; i0 < 2; i0++ ) {
	*           for ( i1 = 0; i1 < 2; i1++ ) {
	*               o.push( x[i0][i1] );
	*           }
	*       }
	*       return o;
	*   }
	*/
}


// EXPORTS //

module.exports = genFcn;
