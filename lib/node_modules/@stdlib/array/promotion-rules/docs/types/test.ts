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

import promotionRules = require( './index' );


// TESTS //

// The function returns an object, array of strings, or null...
{
	promotionRules(); // $ExpectType Table
	promotionRules( 'float32', 'uint32' ); // $ExpectType string | number | null
	promotionRules( 'int32', 'generic' ); // $ExpectType string | number | null
	promotionRules( 'float32', 'foo' ); // $ExpectType string | number | null
}

// The function does not compile if provided a first argument that is not a string...
{
	promotionRules( 123, 'float64' ); // $ExpectError
	promotionRules( true, 'float64' ); // $ExpectError
	promotionRules( false, 'float64' ); // $ExpectError
	promotionRules( null, 'float64' ); // $ExpectError
	promotionRules( {}, 'float64' ); // $ExpectError
	promotionRules( ( x: number ): number => x, 'float64' ); // $ExpectError
}

// The function does not compile if provided a second argument that is not a string...
{
	promotionRules( 'int32', 123 ); // $ExpectError
	promotionRules( 'int32', true ); // $ExpectError
	promotionRules( 'int32', false ); // $ExpectError
	promotionRules( 'int32', null ); // $ExpectError
	promotionRules( 'int32', {} ); // $ExpectError
	promotionRules( 'int32', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided more than one argument...
{
	promotionRules( 'float32' ); // $ExpectError
	promotionRules( 'float32', 'int32', {} ); // $ExpectError
}
