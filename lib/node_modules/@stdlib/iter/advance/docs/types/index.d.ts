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
* Advances an iterator.
*
* ## Notes
*
* -   The function **eagerly** advances an input iterator `n` iterations or until the input iterator finishes, whichever comes first.
*
* @param iterator - input iterator
* @param n - number of iterations (default: 1e308)
* @throws `n` must be a nonnegative integer
* @returns input iterator
*
* @example
* var array2iterator = require( `@stdlib/array/to-iterator` );
*
* var it1 = array2iterator( [ 0, 0, 0, 0, 1 ] );
*
* var it2 = iterAdvance( it1, 4 );
*
* var v = it2.next().value;
* // returns 1
*
* var bool = it2.next().done;
* // returns true
*/
declare function iterAdvance( iterator: Iterator, n?: number ): Iterator;


// EXPORTS //

export = iterAdvance;
