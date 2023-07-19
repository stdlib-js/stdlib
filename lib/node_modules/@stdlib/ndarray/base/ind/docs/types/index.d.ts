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

import { Mode } from '@stdlib/types/ndarray';


/**
* Returns an index given an index mode.
*
* @param idx - index
* @param max - maximum index
* @param mode - specifies how to handle an index outside the interval `[0,max]`
* @throws index out-of-bounds
* @returns index
*
* @example
* var idx = ind( 2, 9, 'clamp' );
* // returns 2
*
* idx = ind( 10, 9, 'clamp' );
* // returns 9
*
* idx = ind( -1, 9, 'clamp' );
* // returns 0
*
* @example
* var idx = ind( 2, 9, 'wrap' );
* // returns 2
*
* idx = ind( 10, 9, 'wrap' );
* // returns 0
*
* idx = ind( -1, 9, 'wrap' );
* // returns 9
*
* @example
* var idx = ind( 2, 9, 'throw' );
* // returns 2
*
* idx = ind( 10, 9, 'throw' );
* // throws <RangeError>
*
* idx = ind( -1, 9, 'throw' );
* // throws <RangeError>
*/
declare function ind( idx: number, max: number, mode: Mode ): number;


// EXPORTS //

export = ind;
