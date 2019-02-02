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
* Computes the range of all iterated values.
*
* @param iterator - input iterator
* @returns range
*
* @example
* var runif = require( `@stdlib/random/iter/uniform` );
*
* var rand = runif( -10.0, 10.0, {
*     'iter': 100
* });
*
* var v = iterrange( rand );
* // returns <number>
*/
declare function iterrange( iterator: Iterator ): number | null;


// EXPORTS //

export = iterrange;
