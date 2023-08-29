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

import { Complex128 } from '@stdlib/types/object';

/**
* Evaluates the signum function of a double-precision complex floating-point number.
*
* @param z - input value
* @returns result
*
* @example
* var Complex128 = require( `@stdlib/complex/float64` );
* var real = require( `@stdlib/complex/real` );
* var imag = require( `@stdlib/complex/imag` );
*
* var v = cceil( new Complex128( -4.2, 5.5 ) );
* // returns <Complex128>
*
* var re = real( v );
* // returns -0.6069136033622302
*
* var im = imag( v );
* // returns 0.79476781392673
*/
declare function csignum( z: Complex128 ): Complex128;


// EXPORTS //

export = csignum;
