/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { ArrayLike } from '@stdlib/types/array';
import { ndarray } from '@stdlib/types/ndarray';

/**
* Callback invoked for each ndarray element.
*
* @returns result
*/
type Nullary = () => any;

/**
* Applies a nullary callback and assigns results to elements in an output ndarray.
*
* @param arrays - array-like object containing an output ndarray
* @param fcn - nullary callback
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
* var ndarray = require( `@stdlib/ndarray/ctor` );
*
* function fcn() {
*     return 10.0;
* }
*
* // Create data buffers:
* var xbuf = new Float64Array( 12 );
*
* // Define the shape of the output array:
* var shape = [ 3, 1, 2 ];
*
* // Define the array strides:
* var sx = [ 4, 4, 1 ];
*
* // Define the index offset:
* var ox = 1;
*
* // Create the output ndarray:
* var x = ndarray( 'float64', xbuf, shape, sx, ox, 'row-major' );
*
* // Apply the nullary function:
* nullary( [ x ], fcn );
*
* console.log( x.data );
* // => <Float64Array>[ 0.0, 10.0, 10.0, 0.0, 0.0, 10.0, 10.0, 0.0, 0.0, 10.0, 10.0, 0.0 ]
*/
declare function nullary( arrays: ArrayLike<ndarray>, fcn: Nullary ): void;


// EXPORTS //

export = nullary;
