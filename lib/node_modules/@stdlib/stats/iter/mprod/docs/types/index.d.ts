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

import { Iterator } from '@stdlib/types/iter';

/**
* Returns an iterator which iteratively computes a moving product.
*
* ## Notes
*
* -   The `W` parameter defines the number of iterated values over which to compute the moving product.
* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all previously iterated values.
* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
*
* @param iterator - input iterator
* @param W - window size
* @throws second argument must be a positive integer
* @returns iterator
*
* @example
* var runif = require( `@stdlib/random/iter/uniform` );
*
* var rand = runif( -10.0, 10.0, {
*     'iter': 100
* });
*
* var it = itermprod( rand, 3 );
*
* var v = it.next().value;
* // returns <number>
*
* v = it.next().value;
* // returns <number>
*
* v = it.next().value;
* // returns <number>
*
* // ...
*/
declare function itermprod( iterator: Iterator, W: number ): Iterator;


// EXPORTS //

export = itermprod;
