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

/**
* Inserts array element values into a format string and prints the result.
*
* ## Notes
*
* -   If an interpolated argument is not a collection, the argument is broadcasted for each iteration.
*
* @param str - format string
* @param args - collections or values
* @throws provided collections must have the same length
*
* @example
* var logEach = require( `@stdlib/console/log-each` );
*
* var x = [ 1, 2, 3 ];
* var y = [ 4, 5, 6 ];
*
* logEach( '%d < %d ', x, y );
* // e.g., => '1 < 4\n2 < 5\n3 < 6\n'
*/
declare function logEach( str: string, ...args: any ): void;


// EXPORTS //

export = logEach;
