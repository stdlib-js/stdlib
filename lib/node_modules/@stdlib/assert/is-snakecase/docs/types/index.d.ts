/**
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

// TypeScript Version: 2.0

/**
* Tests if a value is a string in snake case.
*
* @param value - value to test
* @returns boolean indicating whether a value is a string in snake case
*
* @example
* var bool = isSnakecase( 'hello_world' );
* // returns true
*
* @example
* var bool = isSnakecase( 'Hello World' );
* // returns false
*
* @example
* var bool = isSnakecase( 'Hello_World' );
* // returns false
*
* @example
* var bool = isSnakecase( '' );
* // returns true
*
* @example
* var bool = isSnakecase( null );
* // returns false
*/
declare function isSnakecase( value: any ): value is string;


// EXPORTS //

export = isSnakecase;
