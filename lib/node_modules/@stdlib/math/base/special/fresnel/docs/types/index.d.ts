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
* Computes the Fresnel integrals S(x) and C(x).
*
* @param out - destination array
* @param x - input value
* @returns S(x) and C(x)
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* var out = new Float64Array( 2 );
*
* var v = fresnel( out, 0.0 );
* // return <Float64Array>[ ~0.0, ~0.0 ]
*
* var bool = ( v === out );
* // returns true
*/
declare function fresnel( out: Collection, x: number ): Collection;

/**
* Computes the Fresnel integrals S(x) and C(x).
*
* @param x - input value
* @returns S(x) and C(x)
*
* @example
* var v = fresnel( 0.0 );
* // returns [ 0.0, 0.0 ]
*
* @example
* var v = fresnel( 1.0 );
* // returns [ ~0.438, ~0.780 ]
*
* @example
* var v = fresnel( Infinity );
* // returns [ ~0.5, ~0.5 ]
*
* @example
* var v = fresnel( -Infinity );
* // returns [ ~-0.5, ~-0.5 ]
*
* @example
* var v = fresnel( NaN );
* // returns [ NaN, NaN ]
*/
declare function fresnel( x: number ): Collection;


// EXPORTS //

export = fresnel;
