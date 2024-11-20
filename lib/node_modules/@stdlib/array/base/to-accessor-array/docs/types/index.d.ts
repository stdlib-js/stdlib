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

import { Collection, AccessorArrayLike } from '@stdlib/types/array';

/**
* Converts an array-like object to a minimal array-like object supporting the accessor protocol.
*
* ## Notes
*
* -   If a provided array-like object already supports the accessor protocol, the function returns the provided array-like object; otherwise, the function wraps the provided value in a object which uses accessors for getting and setting elements.
*
* @param arr - input array
* @returns accessor array
*
* @example
* var arr = toAccessorArray( [ 1, 2, 3 ] );
* // returns <AccessorArray>
*
* var v = arr.get( 0 );
* // returns 1
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var arr = toAccessorArray( new Complex128Array( 10 ) );
* // returns <Complex128Array>
*/
declare function toAccessorArray<T>( arr: Collection<T> ): AccessorArrayLike<T>;


// EXPORTS //

export = toAccessorArray;
