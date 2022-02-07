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

import promotionRules = require( './index' );


// TESTS //

// The function returns an object when not provided any arguments...
{
	promotionRules(); // $ExpectType Table
}

// The function returns a promoted data type promotion rule when provided recognized data types...
{
	promotionRules( 'complex128', 'complex64' ); // $ExpectType PromotionRule
	promotionRules( 'float64', 'complex128' ); // $ExpectType PromotionRule
}

// The function returns null when provided unrecognized data types...
{
	promotionRules( 'complex128', 'foo' ); // $ExpectType null
	promotionRules( 'bar', 'foo' ); // $ExpectType null
	promotionRules( 'bar', 'complex128' ); // $ExpectType null
}

// The function does not compile if provided a first argument that is not a string...
{
	promotionRules( 123, 'complex128' ); // $ExpectError
	promotionRules( true, 'complex128' ); // $ExpectError
	promotionRules( false, 'complex128' ); // $ExpectError
	promotionRules( null, 'complex128' ); // $ExpectError
	promotionRules( {}, 'complex128' ); // $ExpectError
	promotionRules( ( x: number ): number => x, 'complex128' ); // $ExpectError
}

// The function does not compile if provided a second argument that is not a string...
{
	promotionRules( 'complex64', 123 ); // $ExpectError
	promotionRules( 'complex64', true ); // $ExpectError
	promotionRules( 'complex64', false ); // $ExpectError
	promotionRules( 'complex64', null ); // $ExpectError
	promotionRules( 'complex64', {} ); // $ExpectError
	promotionRules( 'complex64', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided more than one argument...
{
	promotionRules( 'complex128' ); // $ExpectError
	promotionRules( 'complex128', 'complex64', {} ); // $ExpectError
}
