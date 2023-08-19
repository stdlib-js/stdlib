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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Complex64Array } from '@stdlib/types/array';

/**
* Reinterprets a `Complex64Array` as a `Float32Array`.
*
* @param x - input array
* @param offset - starting index
* @returns `Float32Array` view
*
* @example
* var Complex64Array = require( `@stdlib/array/complex64` );
*
* var x = new Complex64Array( 10 );
*
* var out = reinterpret( x, 0 );
* // returns <Float32Array>
*
* var bool = ( out.buffer === x.buffer );
*/
declare function reinterpret( x: Complex64Array, offset: number ): Float32Array;


// EXPORTS //

export = reinterpret;
