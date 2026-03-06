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
* var x = [ 1, 2, 3 ];
* var y = [ 4, 5, 6 ];
*
* logEach( '%d < %d ', x, y );
* // e.g., => '1 < 4\n2 < 5\n3 < 6\n'
*
* @example
* var x = [ 0.5, 1.0, 1.5 ];
* var y = [ 0.25, 0.5, 0.75 ];
*
* logEach( '%0.2f > %0.2f', x, y );
* // e.g., => '0.50 > 0.25\n1.00 > 0.50\n1.50 > 0.75\n'
*
* @example
* var x = [ 'foo', 'bar' ];
* var y = [ 'beep', 'boop' ];
*
* logEach( 'x: %s, y: %s', x, y );
* // e.g., => 'x: foo, y: beep\nx: bar, y: boop\n'
*/
declare function logEach( str: string, ...args: any ): void;


// EXPORTS //

export = logEach;
