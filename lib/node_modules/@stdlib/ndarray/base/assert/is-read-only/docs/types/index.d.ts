/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

import { ndarray } from '@stdlib/types/ndarray';

/**
* Tests whether an ndarray is read-only.
*
* @param arr - input ndarray
* @returns boolean indicating whether an ndarray is read-only
*
* @example
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ [ 1, 2 ], [ 3, 4 ] ], {
*     'readonly': true
* });
* var bool = isReadOnly( x );
* // returns true
*
* x = array( [ [ 1, 2 ], [ 3, 4 ] ], {
*     'readonly': false
* });
* bool = isReadOnly( x );
* // returns false
*/
declare function isReadOnly( arr: ndarray ): boolean;


// EXPORTS //

export = isReadOnly;
