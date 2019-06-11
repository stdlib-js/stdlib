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

/**
* If a condition is truthy, returns `x`; otherwise, returns `y`.
*
* @param bool - condition
* @param x - value to return if a condition is truthy
* @param y - value to return if a condition is falsy
* @returns either `x` or `y`
*
* @example
* var randu = require( `@stdlib/random/base/randu` );
*
* var z = ifelse( randu() > 0.5, 1.0, -1.0 );
* // returns <number>
*/
declare function ifelse( bool: boolean, x: any, y: any ): any;


// EXPORTS //

export = ifelse;
