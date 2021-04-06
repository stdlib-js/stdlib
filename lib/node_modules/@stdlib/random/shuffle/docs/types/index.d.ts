/*
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

// TypeScript Version: 2.0

/// <reference types="@stdlib/types"/>

import { ArrayLike } from '@stdlib/types/array';

/**
* Interface defining function options.
*/
interface Options {
	/**
	* String indicating whether to return a copy (`deep`, `shallow`, or `none`; default: 'shallow')
	*/
	copy?: 'deep' | 'shallow' | 'none';
}

/**
* Interface defining `factory` options.
*/
interface FactoryOptions {
	/**
	* Default copy option (`deep`, `shallow`, or `none`; default: 'shallow')
	*/
	copy?: 'deep' | 'shallow' | 'none';

	/**
	* Integer-valued seed.
	*/
	seed?: number;
}

/**
* Returns a random permutation of elements in `arr`.
*
* @param arr - array-like object to shuffle
* @param options - function options
* @param options.copy - string indicating whether to return a copy (`deep`, `shallow`, or `none`)
* @throws must provide valid options
* @returns the shuffled array-like object
*
* @example
* var data = [ 1, 2, 3 ];
* var out = shuffle( data );
* // e.g., returns [ 3, 1, 2 ]
*
* @example
* var data = [ 1, 2, 3 ];
* var out = shuffle( data, {
*     'copy': 'none'
* });
* var bool = ( data === out );
* // returns true
*/
type ShuffleFunction = ( arr: ArrayLike<any>, options?: Options ) => ArrayLike<any>; // tslint-disable-line max-line-length

/**
* Interface for generating random permutations of elements in an array.
*/
interface Shuffle {
	/**
	* Returns a random permutation of elements in `arr`.
	*
	* @param arr - array-like object to shuffle
	* @param options - function options
	* @param options.copy - string indicating whether to return a copy (`deep`, `shallow`, or `none`; default: 'shallow')
	* @throws must provide valid options
	* @returns the shuffled array-like object
	*
	* @example
	* var data = [ 1, 2, 3 ];
	* var out = shuffle( data );
	* // e.g., returns [ 3, 1, 2 ]
	*
	* @example
	* var data = [ 1, 2, 3 ];
	* var out = shuffle( data, {
	*     'copy': 'none'
	* });
	* var bool = ( data === out );
	* // returns true
	*/
	( arr: ArrayLike<any>, options?: Options ): ArrayLike<any>;

	/**
	* Returns a function to create a random permutation of elements from an array-like object.
	*
	* @param options - function options
	* @param options.seed - integer-valued seed
	* @param options.copy - default copy option (`deep`, `shallow`, or `none`; default: 'shallow')
	* @throws must provide valid options
	* @returns shuffle function
	*
	* @example
	* var fcn = shuffle.factory({
	*     'seed': 249
	* });
	* var data = [ 3, 8, 4, 8 ];
	* var out = fcn( data );
	* // e.g., returns [ 4, 3, 8, 8 ]
	*/
	factory( options?: FactoryOptions ): ShuffleFunction;
}

/**
* Returns a random permutation of elements in `arr`.
*
* @param arr - array-like object to shuffle
* @param options - function options
* @param options.copy - string indicating whether to return a copy (`deep`, `shallow`, or `none`; default: 'shallow')
* @throws must provide valid options
* @returns the shuffled array-like object
*
* @example
* var data = [ 1, 2, 3 ];
* var out = shuffle( data );
* // e.g., returns [ 3, 1, 2 ]
*
* @example
* var data = [ 1, 2, 3 ];
* var out = shuffle( data, {
*     'copy': 'none'
* });
* var bool = ( data === out );
* // returns true
*/
declare var shuffle: Shuffle;


// EXPORTS //

export = shuffle;
