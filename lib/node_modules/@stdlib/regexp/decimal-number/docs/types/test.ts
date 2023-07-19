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

import reDecimalNumber = require( './index' );


// TESTS //

// The function returns a regular expression...
{
	reDecimalNumber(); // $ExpectType RegExp
	reDecimalNumber( { 'flags': 'gm' } ); // $ExpectType RegExp
	reDecimalNumber( { 'capture': false } ); // $ExpectType RegExp
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	reDecimalNumber( null ); // $ExpectError
}

// The compiler throws an error if the function is provided a `capture` option which is not a boolean...
{
	reDecimalNumber( { 'capture': 123 } ); // $ExpectError
	reDecimalNumber( { 'capture': 'abc' } ); // $ExpectError
	reDecimalNumber( { 'capture': [] } ); // $ExpectError
	reDecimalNumber( { 'capture': {} } ); // $ExpectError
	reDecimalNumber( { 'capture': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `flags` option which is not a string...
{
	reDecimalNumber( { 'flags': 123 } ); // $ExpectError
	reDecimalNumber( { 'flags': true } ); // $ExpectError
	reDecimalNumber( { 'flags': false } ); // $ExpectError
	reDecimalNumber( { 'flags': [] } ); // $ExpectError
	reDecimalNumber( { 'flags': {} } ); // $ExpectError
	reDecimalNumber( { 'flags': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	reDecimalNumber( {}, 2 ); // $ExpectError
}

// Attached to main export is a `REGEXP` property that is a regular expression...
{
	// tslint:disable-next-line:no-unused-expression
	reDecimalNumber.REGEXP; // $ExpectType RegExp
}

// Attached to main export is a `REGEXP_CAPTURE` property that is a regular expression...
{
	// tslint:disable-next-line:no-unused-expression
	reDecimalNumber.REGEXP_CAPTURE; // $ExpectType RegExp
}
