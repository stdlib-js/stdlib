/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

/**
* Tests whether an input value is an ndarray order.
*
* @param v - value to test
* @returns boolean indicating whether an input value is an ndarray order
*
* @example
* var bool = isOrder( 'row-major' );
* // returns true
*
* bool = isOrder( 'column-major' );
* // returns true
*
* bool = isOrder( 'foo' );
* // returns false
*/
declare function isOrder( v: any ): boolean;


// EXPORTS //

export = isOrder;
