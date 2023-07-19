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

import reColorHexadecimal = require( './index' );


// TESTS //

// The function returns a regular expression...
{
	reColorHexadecimal(); // $ExpectType RegExp
	reColorHexadecimal( 'full' ); // $ExpectType RegExp
	reColorHexadecimal( 'either' ); // $ExpectType RegExp
	reColorHexadecimal( 'shorthand' ); // $ExpectType RegExp
}

// The compiler throws an error if the function is provided an invalid argument...
{
	reColorHexadecimal( 123 ); // $ExpectError
	reColorHexadecimal( 'abc' ); // $ExpectError
	reColorHexadecimal( [] ); // $ExpectError
	reColorHexadecimal( {} ); // $ExpectError
	reColorHexadecimal( true ); // $ExpectError
	reColorHexadecimal( false ); // $ExpectError
	reColorHexadecimal( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	reColorHexadecimal( 'full', 2 ); // $ExpectError
}

// Attached to main export is a `REGEXP` property that is a regular expression...
{
	// tslint:disable-next-line:no-unused-expression
	reColorHexadecimal.REGEXP; // $ExpectType RegExp
}

// Attached to main export is a `REGEXP_SHORTHAND` property that is a regular expression...
{
	// tslint:disable-next-line:no-unused-expression
	reColorHexadecimal.REGEXP_SHORTHAND; // $ExpectType RegExp
}

// Attached to main export is a `REGEXP_EITHER` property that is a regular expression...
{
	// tslint:disable-next-line:no-unused-expression
	reColorHexadecimal.REGEXP_EITHER; // $ExpectType RegExp
}
