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

import { Collection } from '@stdlib/types/object';

/**
* Returns the minimum and maximum values.
*
* @param out - output object
* @param x - first number
* @param y - second number
* @param args - numbers
* @returns minimum and maximum values
*
* @example
* var out = [ 0.0, 0.0 ];
* var v = minmax( out, 5.9, 3.14, 4.2 );
* // returns [ 3.14, 5.9 ]
*
* var bool = ( v === out );
* // returns true
*/
declare function minmax( out: Collection, x: number, y?: number, ...args: Array<number> ): Collection; // tslint-disable-line max-line-length

/**
* Returns the minimum and maximum values.
*
* @param x - first number
* @param y - second number
* @param args - numbers
* @returns minimum and maximum values
*
* @example
* var v = minmax( 3.14, 4.2 );
* // returns [ 3.14, 4.2 ]
*
* var v = minmax( 3.14, NaN );
* // returns [ NaN, NaN ]
*
* @example
* var v = minmax( +0.0, -0.0 );
* // returns [ -0.0, 0.0 ]
*/
declare function minmax( x: number, y?: number, ...args: Array<number> ): Collection; // tslint-disable-line max-line-length


// EXPORTS //

export = minmax;
