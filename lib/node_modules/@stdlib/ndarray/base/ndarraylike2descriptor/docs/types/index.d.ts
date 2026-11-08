/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

import { ndarray, Descriptor } from '@stdlib/types/ndarray';

/**
* Converts an ndarray-like object to an ndarray descriptor.
*
* @param x - input ndarray
* @returns ndarray descriptor
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var out = ndarraylike2descriptor( zeros( [ 2, 2 ] ) );
* // returns {...}
*/
declare function ndarraylike2descriptor( x: ndarray ): Descriptor;


// EXPORTS //

export = ndarraylike2descriptor;
