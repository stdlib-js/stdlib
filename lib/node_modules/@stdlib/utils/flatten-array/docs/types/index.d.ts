/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

// TypeScript Version: 2.0

interface Options {
	/**
	* Boolean indicating whether to deep copy array elements.
	*/
	copy?: boolean;

	/**
	* Maximum depth to flatten.
	*/
	depth?: number;
}

interface FactoryOptions {
	/**
	* Boolean indicating whether to deep copy array elements.
	*/
	copy?: boolean;
}

/**
* Flattens an array.
*
* @param arr - array to flatten
* @returns flattened array
*/
type Unary = ( arr: Array<any> ) => Array<any>;

/**
* Interface for the flattenArray function.
*/
interface FlattenArray {
	/**
	* Flattens an array.
	*
	* @param arr - input array
	* @param options - function options
	* @param options.depth - maximum depth to flatten
	* @param options.copy - boolean indicating whether to deep copy array elements (default: false)
	* @returns flattened array
	*
	* @example
	* var arr = [ 1, [2, [3, [4, [ 5 ], 6], 7], 8], 9 ];
	*
	* var out = flattenArray( arr );
	* // returns [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
	*/
	( arr: Array<any>, options?: Options ): Array<any>;

	/**
	* Returns a function for flattening arrays having specified dimensions.
	*
	* ## Notes
	*
	* -   The returned function does not validate that input arrays actually have the specified dimensions.
	*
	* @param dims - dimensions
	* @param options - function options
	* @param options.copy - boolean indicating whether to deep copy array elements (default: false)
	* @returns flatten function
	*
	* @example
	* var flatten = flattenArray.factory( [2,2], {
	*     'copy': false
	* });
	*
	* var out = flatten( [[1,2],[3,4]] );
	* // returns [ 1, 2, 3, 4 ]
	*
	* out = flatten( [[5,6],[7,8]] );
	* // returns [ 5, 6, 7, 8 ]
	*/
	factory( dims: Array<number>, options?: FactoryOptions ): Unary;
}

/**
* Flatten an array.
*
* @param arr - input array
* @param options - function options
* @param options.depth - maximum depth to flatten
* @param options.copy - boolean indicating whether to deep copy array elements (default: false)
* @returns flattened array
*
* @example
* var arr = [ 1, [2, [3, [4, [ 5 ], 6], 7], 8], 9 ];
*
* var out = flattenArray( arr );
* // returns [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
*
* @example
* var flatten = flattenArray.factory( [2,2], {
*     'copy': false
* });
*
* var out = flatten( [[1,2],[3,4]] );
* // returns [ 1, 2, 3, 4 ]
*
* out = flatten( [[5,6],[7,8]] );
* // returns [ 5, 6, 7, 8 ]
*/
declare var flattenArray: FlattenArray;


// EXPORTS //

export = flattenArray;
