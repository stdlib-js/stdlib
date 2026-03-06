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

// MODULES //

/// <reference types="@stdlib/types"/>

import { Complex64 } from '@stdlib/types/complex';


/**
* Parse a string representation of a 64-bit complex number.
*
* @param str - string representation of a complex number
* @throws must provide a string recognized as a complex number
* @returns Complex64 instance
*
* @example
* var str = '5 + 3i';
*
* var z = parseComplex64( str );
* // returns <Complex64>
*/
declare function parseComplex64( str: string ): Complex64;


// EXPORTS //

export = parseComplex64;
