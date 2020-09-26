/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

import { ArrayLike } from '@stdlib/types/array';

/**
* Transforms a list of array argument data types into a list of signatures.
*
* @param dtypes - list of array argument data types
* @param nin - number of input array arguments
* @param nout - number of output array arguments
* @throws first argument must be an array-like object containing strings
* @throws second argument must be a nonnegative integer
* @throws third argument must be a nonnegative integer
* @throws first argument must have at least one element
* @throws first argument must be compatible with second and third arguments
* @returns list of signatures
*
* @example
* var dtypes = [
*     'float64', 'float64',
*     'float32', 'float32'
* ];
*
* var sigs = dtypes2signatures( dtypes, 1, 1 );
* // returns [ '(float64) => (float64)', '(float32) => (float32)' ]
*/
declare function dtypes2signatures( dtypes: ArrayLike<string>, nin: number, nout: number ): ArrayLike<string>; // tslint:disable-line:max-line-length


// EXPORTS //

export = dtypes2signatures;
