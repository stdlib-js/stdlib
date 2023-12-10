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

import { Iterator } from '@stdlib/types/iter';

/**
* Consumes an entire iterator and returns the number of iterated values (i.e., the iterator length).
*
* @param iterator - input iterator
* @returns iterator length
*
* @example
* var array2iterator = require( `@stdlib/array/to-iterator` );
*
* var it = array2iterator( [ 0, 0, 0, 0, 1 ] );
*
* var v = iterLength( it );
* // returns 5
*/
declare function iterLength( iterator: Iterator ): number;


// EXPORTS //

export = iterLength;
