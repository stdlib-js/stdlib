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

import { Collection } from '@stdlib/types/array';
import { Shape4D } from '@stdlib/types/ndarray';

/**
* Four-dimensional nested array.
*/
type Array4D<T> = Array<Array<Array<T>>>;

/**
* Returns a filled four-dimensional nested array.
*
* @param value - fill value
* @param shape - array shape
* @returns output array
*
* @example
* var out = filled4d( 0.0, [ 1, 1, 1, 3 ] );
* // returns [ [ [ [ 0.0, 0.0, 0.0 ] ] ] ]
*
* @example
* var out = filled4d( 'beep', [ 1, 1, 1, 3 ] );
* // returns [ [ [ [ 'beep', 'beep', 'beep' ] ] ] ]
*/
declare function filled4d<T = unknown>( value: T, shape: Shape4D ): Array4D<T>;


// EXPORTS //

export = filled4d;
