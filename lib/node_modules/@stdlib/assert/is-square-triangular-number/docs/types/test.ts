/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

import isSquareTriangularNumber = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isSquareTriangularNumber( 3 ); // $ExpectType boolean
	isSquareTriangularNumber( 0.2 ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	isSquareTriangularNumber(); // $ExpectError
	isSquareTriangularNumber( 0.2, 123 ); // $ExpectError
}

// Attached to main export is an isPrimitive method which returns a boolean...
{
	// tslint:disable-next-line:no-construct
	isSquareTriangularNumber.isPrimitive( new Number( 0.2 ) ); // $ExpectType boolean
	isSquareTriangularNumber.isPrimitive( 0.2 ); // $ExpectType boolean
}

// The compiler throws an error if the isPrimitive method is provided an unsupported number of arguments...
{
	isSquareTriangularNumber.isPrimitive(); // $ExpectError
	isSquareTriangularNumber.isPrimitive( 0.2, 123 ); // $ExpectError
}


// Attached to main export is an isPrimitive method which returns a boolean...
{
	// tslint:disable-next-line:no-construct
	isSquareTriangularNumber.isObject( new Number( 0.2 ) ); // $ExpectType boolean
	isSquareTriangularNumber.isObject( 0.2 ); // $ExpectType boolean
}

// The compiler throws an error if the isObject method is provided an unsupported number of arguments...
{
	isSquareTriangularNumber.isObject(); // $ExpectError
	isSquareTriangularNumber.isObject( 0.2, 123 ); // $ExpectError
}
