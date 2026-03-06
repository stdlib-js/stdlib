/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import { Collection, Complex64Array } from '@stdlib/types/array';

/**
* Tests if a value is a `Complex64Array`.
*
* @param value - value to test
* @returns boolean indicating whether a value is a `Complex64Array`
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var arr = new Complex64Array( 10 );
* var bool = isComplex64Array( arr );
* // returns true
*
* @example
* var bool = isComplex64Array( [] );
* // returns false
*/
declare function isComplex64Array( value: Collection | Complex64Array ): value is Complex64Array;


// EXPORTS //

export = isComplex64Array;
