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

/// <reference types="@stdlib/types"/>

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Boolean indicating whether to truncate arrays longer than the shortest input array.
	*/
	trunc?: boolean;

	/**
	* Fill value used for arrays of unequal length.
	*/
	fill?: any;

	/**
	* Boolean indicating whether an input array should be interpreted as an array of arrays to be zipped.
	*/
	arrays?: boolean;
}

/**
* Generates array tuples from input arrays.
*
* @param arr0 - first input array
* @param arr1 - second input array
* @param options - function options
* @param options.trunc - boolean indicating whether to truncate arrays longer than the shortest input array (default: true)
* @param options.fill - fill value used for arrays of unequal length (default: null)
* @param options.arrays - boolean indicating whether an input array should be interpreted as an array of arrays to be zipped (default: false)
* @returns output array of arrays
*
* @example
* var zipped = zip( [ 1, 2 ], [ 'a', 'b' ] );
* // returns [ [ 1, 'a' ], [ 2, 'b' ] ]
*
* @example
* var zipped = zip( [ 1, 2, 3 ], [ 'a', 'b' ] );
* // returns [ [ 1, 'a' ], [ 2, 'b' ] ]
*
* @example
* var opts = {
*     'trunc': false
* };
*
* var zipped = zip( [ 1, 2, 3 ], [ 'a', 'b' ], opts );
* // returns [ [ 1, 'a' ], [ 2, 'b' ], [ 3, null ] ]
*
* @example
* var opts = {
*     'trunc': false,
*     'fill': ''
* };
*
* var zipped = zip( [ 1, 2, 3 ], [ 'a', 'b' ], opts );
* // returns [ [ 1, 'a' ], [ 2, 'b' ], [ 3, '' ] ]
*
* @example
* var arr = [ [ 1, 2 ], [ 'a', 'b' ] ];
*
* // Default behavior:
* var zipped = zip( arr );
* // returns [ [ [ 1, 2 ] ], [ [ 'a', 'b' ] ] ]
*
* // Array of arrays:
* zipped = zip( arr, { 'arrays': true } );
* // returns [ [ 1, 'a' ], [ 2, 'b' ] ]
*/
declare function zip( arr0: Array<any>, arr1: Array<any>, options?: Options ): Array<Array<any>>; // tslint:disable-line:max-line-length

/**
* Generates array tuples from input arrays.
*
* @param arr0 - first input array
* @param arr1 - second input array
* @param arr2 - third input array
* @param options - function options
* @param options.trunc - boolean indicating whether to truncate arrays longer than the shortest input array (default: true)
* @param options.fill - fill value used for arrays of unequal length (default: null)
* @param options.arrays - boolean indicating whether an input array should be interpreted as an array of arrays to be zipped (default: false)
* @returns output array of arrays
*
* @example
* var zipped = zip( [ 1, 2 ], [ 'a', 'b' ], [ true, false ] );
* // returns [ [ 1, 'a', true ], [ 2, 'b', false ] ]
*
* @example
* var zipped = zip( [ 1, 2, 3 ], [ 'a', 'b' ], [ true, false ] );
* // returns [ [ 1, 'a', true ], [ 2, 'b', false ] ]
*
* @example
* var opts = {
*     'trunc': false
* };
*
* var zipped = zip( [ 1, 2, 3 ], [ 'a', 'b' ], [ true, false, true ], opts );
* // returns [ [ 1, 'a', true ], [ 2, 'b', false ], [ 3, null, true ] ]
*
* @example
* var opts = {
*     'trunc': false,
*     'fill': ''
* };
*
* var zipped = zip( [ 1, 2, 3 ], [ 'a', 'b' ], [ true, false, true ], opts );
* // returns [ [ 1, 'a', true ], [ 2, 'b', false ], [ 3, '', true ] ]
*
* @example
* var arr = [ [ 1, 2 ], [ 'a', 'b' ], [ true, false ] ];
*
* // Default behavior:
* var zipped = zip( arr );
* // returns [ [ [ 1, 2 ] ], [ [ 'a', 'b' ] ], [ [ true, false ] ] ]
*
* // Array of arrays:
* zipped = zip( arr, { 'arrays': true } );
* // returns [ [ 1, 'a', true ], [ 2, 'b', false ] ]
*/
declare function zip( arr0: Array<any>, arr1: Array<any>, arr2: Array<any>, options?: Options ): Array<Array<any>>; // tslint:disable-line:max-line-length

/**
* Generates array tuples from input arrays.
*
* @param arr0 - first input array
* @param arr1 - second input array
* @param arr2 - third input array
* @param arr3 - fourth input array
* @param options - function options
* @param options.trunc - boolean indicating whether to truncate arrays longer than the shortest input array (default: true)
* @param options.fill - fill value used for arrays of unequal length (default: null)
* @param options.arrays - boolean indicating whether an input array should be interpreted as an array of arrays to be zipped (default: false)
* @returns output array of arrays
*
* @example
* var zipped = zip( [ 1, 2 ], [ 'a', 'b' ], [ true, false ], [ {}, {} ] );
* // returns [ [ 1, 'a', true, {} ], [ 2, 'b', false, {} ] ]
*
* @example
* var zipped = zip( [ 1, 2, 3 ], [ 'a', 'b' ], [ true, false ], [ {}, {} ] );
* // returns [ [ 1, 'a', true, {} ], [ 2, 'b', false, {} ] ]
*
* @example
* var opts = {
*     'trunc': false
* };
*
* var zipped = zip( [ 1, 2, 3 ], [ 'a', 'b' ], [ true, false, true ], [ {}, {}, {} ], opts );
* // returns [ [ 1, 'a', true, {} ], [ 2, 'b', false, {} ], [ 3, null, true, {} ] ]
*
* @example
* var opts = {
*     'trunc': false,
*     'fill': ''
* };
*
* var zipped = zip( [ 1, 2, 3 ], [ 'a', 'b' ], [ true, false, true ], [ {}, {}, {} ], opts );
* // returns [ [ 1, 'a', true, {} ], [ 2, 'b', false, {} ], [ 3, '', true, {} ] ]
*
* @example
* var arr = [ [ 1, 2 ], [ 'a', 'b' ], [ true, false ], [ {}, {} ] ];
*
* // Default behavior:
* var zipped = zip( arr );
* // returns [ [ [ 1, 2 ] ], [ [ 'a', 'b' ] ], [ [ true, false ] ], [ [ {}, {} ] ] ]
*
* // Array of arrays:
* zipped = zip( arr, { 'arrays': true } );
* // returns [ [ 1, 'a', true, {} ], [ 2, 'b', false, {} ] ]
*/
declare function zip( arr0: Array<any>, arr1: Array<any>, arr2: Array<any>, arr3: Array<any>, options?: Options ): Array<Array<any>>; // tslint:disable-line:max-line-length

/**
* Generates array tuples from input arrays.
*
* @param arr0 - first input array
* @param arr1 - second input array
* @param args - subsequent arrays followed by an optional options object
* @returns output array of arrays
*
* @example
* var zipped = zip( [ 1, 2 ], [ 'a', 'b' ] );
* // returns [ [ 1, 'a' ], [ 2, 'b' ] ]
*
* @example
* var zipped = zip( [ 1, 2, 3 ], [ 'a', 'b' ] );
* // returns [ [ 1, 'a' ], [ 2, 'b' ] ]
*
* @example
* var opts = {
*     'trunc': false
* };
*
* var zipped = zip( [ 1, 2, 3 ], [ 'a', 'b' ], opts );
* // returns [ [ 1, 'a' ], [ 2, 'b' ], [ 3, null ] ]
*
* @example
* var opts = {
*     'trunc': false,
*     'fill': ''
* };
*
* var zipped = zip( [ 1, 2, 3 ], [ 'a', 'b' ], opts );
* // returns [ [ 1, 'a' ], [ 2, 'b' ], [ 3, '' ] ]
*
* @example
* var arr = [ [ 1, 2 ], [ 'a', 'b' ] ];
*
* // Default behavior:
* var zipped = zip( arr );
* // returns [ [ [ 1, 2 ] ], [ [ 'a', 'b' ] ] ]
*
* // Array of arrays:
* zipped = zip( arr, { 'arrays': true } );
* // returns [ [ 1, 'a' ], [ 2, 'b' ] ]
*/
declare function zip( arr0: Array<any>, arr1: Array<any>, ...args: Array<Array<any> | Options> ): Array<Array<any>>; // tslint:disable-line:max-line-length


// EXPORTS //

export = zip;
