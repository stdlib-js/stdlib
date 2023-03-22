/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
* Converts a string to inverse case.
*
* @param str - string to convert
* @returns inverse-cased string
*
* @example
* var str = invcase( 'FOO bar' );
* // returns 'foo BAR'
*
* @example
* var str = invcase( 'beep' );
* // returns 'BEEP'
*
* @example
* var str = invcase( 'beep boop' );
* // returns 'BEEP BOOP'
*
* @example
* var str = invcase( 'Hello World!' );
* // returns 'hELLO wORLD!'
*/
declare function invcase( str: string ): string;


// EXPORTS //

export = invcase;
