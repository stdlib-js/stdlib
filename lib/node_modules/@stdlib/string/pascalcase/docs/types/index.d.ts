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
* Converts a string to Pascal case.
*
* @param str - string to convert
* @returns Pascal-cased string
*
* @example
* var str = pascalcase( 'Hello World!' );
* // returns 'HelloWorld'
*
* @example
* var str = pascalcase( 'foo_bar' );
* // returns 'FooBar'
*
* @example
* var str = pascalcase( 'foo-bar' );
* // returns 'FooBar'
*/
declare function pascalcase( str: string ): string;


// EXPORTS //

export = pascalcase;
