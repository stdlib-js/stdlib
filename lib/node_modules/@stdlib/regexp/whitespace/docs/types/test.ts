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

import reWhitespace = require( './index' );


// TESTS //

// The function returns a regular expression...
{
	reWhitespace(); // $ExpectType RegExp
	reWhitespace( { 'flags': 'gm' } ); // $ExpectType RegExp
	reWhitespace( { 'capture': false } ); // $ExpectType RegExp
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	reWhitespace( null ); // $ExpectError
}

// The compiler throws an error if the function is provided a `capture` option which is not a boolean...
{
	reWhitespace( { 'capture': 123 } ); // $ExpectError
	reWhitespace( { 'capture': 'abc' } ); // $ExpectError
	reWhitespace( { 'capture': [] } ); // $ExpectError
	reWhitespace( { 'capture': {} } ); // $ExpectError
	reWhitespace( { 'capture': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `flags` option which is not a string...
{
	reWhitespace( { 'flags': 123 } ); // $ExpectError
	reWhitespace( { 'flags': true } ); // $ExpectError
	reWhitespace( { 'flags': false } ); // $ExpectError
	reWhitespace( { 'flags': [] } ); // $ExpectError
	reWhitespace( { 'flags': {} } ); // $ExpectError
	reWhitespace( { 'flags': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	reWhitespace( {}, 2 ); // $ExpectError
}

// Attached to main export is a `REGEXP` property that is a regular expression...
{
	// tslint:disable-next-line:no-unused-expression
	reWhitespace.REGEXP; // $ExpectType RegExp
}

// Attached to main export is a `REGEXP_CAPTURE` property that is a regular expression...
{
	// tslint:disable-next-line:no-unused-expression
	reWhitespace.REGEXP_CAPTURE; // $ExpectType RegExp
}
