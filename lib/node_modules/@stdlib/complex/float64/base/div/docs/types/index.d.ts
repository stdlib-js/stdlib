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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Complex128 } from '@stdlib/types/complex';

/**
* Divides two double-precision complex floating-point numbers.
*
* @param z1 - complex number
* @param z2 - complex number
* @returns result
*
* @example
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* var z1 = new Complex128( -13.0, -1.0 );
* var z2 = new Complex128( -2.0, 1.0 );
*
* var out = cdiv( z1, z2 );
* // returns <Complex128>[ 5.0, 3.0 ]
*/
declare function cdiv( z1: Complex128, z2: Complex128 ): Complex128;


// EXPORTS //

export = cdiv;
