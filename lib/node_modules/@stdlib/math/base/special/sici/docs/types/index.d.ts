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
* Computes the sine and cosine integrals.
*
* @param out - output array
* @param x - input value
* @returns output array
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* var out = new Float64Array( 2 );
*
* var v = sici( out, 3.0 );
* // returns <Float64Array>[ ~1.849, ~0.12 ]
*
* var bool = ( v === out );
* // returns true
*/
declare function sici( out: Collection, x: number ): Collection;

/**
* Computes the sine and cosine integrals.
*
* @param x - input value
* @returns output array
*
* @example
* var v = sici( 3.0 );
* // returns [ ~1.849, ~0.12 ]
*
* @example
* var v = sici( 0.0 );
* // returns [ 0.0, -Infinity  ]
*
* @example
* var v = sici( -9.0 );
* // returns [ ~-1.665, ~0.055 ]
*
* @example
* var v = sici( NaN );
* // returns [ NaN, NaN ]
*/
declare function sici( x: number ): Collection;


// EXPORTS //

export = sici;
