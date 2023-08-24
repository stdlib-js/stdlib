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
import { Shape5D } from '@stdlib/types/ndarray';

/**
* Five-dimensional nested array.
*/
type Array5D<T> = Array<Array<Array<Array<Array<T>>>>>;

/**
* Returns a filled five-dimensional nested array.
*
* @param value - fill value
* @param shape - array shape
* @returns output array
*
* @example
* var out = filled5d( 0.0, [ 1, 1, 1, 1, 3 ] );
* // returns [ [ [ [ [ 0.0, 0.0, 0.0 ] ] ] ] ]
*
* @example
* var out = filled5d( 'beep', [ 1, 1, 1, 1, 3 ] );
* // returns [ [ [ [ [ 'beep', 'beep', 'beep' ] ] ] ] ]
*/
declare function filled5d<T = unknown>( value: T, shape: Shape5D ): Array5D<T>;


// EXPORTS //

export = filled5d;
