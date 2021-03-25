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

import { Collection } from '@stdlib/types/object';

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Method name determining how ties are treated (`average`, `min`, `max`, `dense`, or `ordinal`; default: 'average').
	*/
	method?: 'average' | 'min' | 'max' | 'dense' | 'ordinal';

	/**
	* Determines where missing values go (`first`,`last`, or `remove`; default: 'last').
	*/
	missing?: 'first' | 'last' | 'remove';

	/**
	* Array of values encoding missing values (default: [null,NaN]).
	*/
	encoding?: Array<any>;
}


/**
* Computes the sample ranks for the values of an array-like object.
*
* ## Notes
*
* -   When all elements of the `array` are different, the ranks are uniquely determined. When there are equal elements (called *ties*), the `method` option determines how they are handled. The default, `'average'`, replaces the ranks of the ties by their mean. Other possible options are `'min'` and `'max'`, which replace the ranks of the ties by their minimum and maximum, respectively. `'dense'` works like `'min'`, with the difference that the next highest element after a tie is assigned the next smallest integer. Finally, `ordinal` gives each element in `arr` a distinct rank, according to the position they appear in.
* -   The `missing` option is used to specify how to handle missing data. By default, `NaN` or `null` are treated as missing values. `'last'`specifies that missing values are placed last, `'first'` that the are assigned the lowest ranks and `'remove'` means that they are removed from the array before the ranks are calculated.
*
* @param x - data array
* @param options - options object
* @param options.method - method name determining how ties are treated (`average`, `min`, `max`, `dense`, or `ordinal`; default: 'average')
* @param options.missing - determines where missing values go (`first`,`last`, or `remove`; default: 'last')
* @param options.encoding - array of values encoding missing values
* @throws must provide valid options
* @returns array containing the computed ranks for the elements of x
*
* @example
* var arr = [ 1.1, 2.0, 3.5, 0.0, 2.4 ];
* var out = ranks( arr );
* // returns [ 2, 3, 5, 1, 4 ]
*
* @example
* // Ties are averaged:
* arr = [ 2, 2, 1, 4, 3 ];
* out = ranks( arr );
* // returns [ 2.5, 2.5, 1, 5, 4 ]
*
* @example
* // Missing values are placed last:
* arr = [ null, 2, 2, 1, 4, 3, NaN, NaN ];
* out = ranks( arr );
* // returns [ 6, 2.5, 2.5, 1, 5, 4, 7 ,8 ]
*/
declare function ranks( x: Collection, options?: Options ): Array<number>;


// EXPORTS //

export = ranks;
