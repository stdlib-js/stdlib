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

import { ndarray, Shape } from '@stdlib/types/ndarray';

/**
* Returns the shape of a provided ndarray.
*
* ## Notes
*
* -   When `copy` is `false`, changes to the returned shape array may mutate the input ndarray shape. If there is a chance that the returned shape will be mutated (either directly or by downstream consumers), set `copy` to `true` to prevent unintended side effects.
*
* @param x - input ndarray
* @param copy - boolean indicating whether to explicitly copy the value assigned to the input ndarray's `shape` property
* @returns shape
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var sh = shape( zeros( [ 3, 3, 3 ] ), false );
* // returns [ 3, 3, 3 ]
*/
declare function shape( x: ndarray, copy: boolean ): Shape;


// EXPORTS //

export = shape;
