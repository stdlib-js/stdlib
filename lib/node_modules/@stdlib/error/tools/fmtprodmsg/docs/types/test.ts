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

import formatProdErrorMessage = require( './index' );


// TESTS //

// The function returns an string...
{
	formatProdErrorMessage( '1' ); // $ExpectType string
	formatProdErrorMessage( '3', 'wrong_type' ); // $ExpectType string
}

// The compiler throws an error if the function is not provided at least one argument...
{
	formatProdErrorMessage(); // $ExpectError
}

// Attached to main export is a `factory` method which returns an error formatting function...
{
	formatProdErrorMessage.factory( {} ); // $ExpectType FormatProdErrorMsgFunction
}

// The compiler throws an error if the `factory` method is provided an unsupported number of arguments...
{
	formatProdErrorMessage.factory(); // $ExpectError
	formatProdErrorMessage.factory( {}, 21 ); // $ExpectError
}

// The `factory` method returns a function which returns a string...
{
	const opts = {
		'url': 'https://stdlib.io/error-decoder.html'
	};
	const fcn = formatProdErrorMessage.factory( opts );
	fcn( '1' ); // $ExpectType string
	fcn( '3', 'wrong_type' ); // $ExpectType string
}

// The compiler throws an error if the `factory` method is provided an `url` option which is not a string...
{
	formatProdErrorMessage.factory( { 'url': true } ); // $ExpectError
	formatProdErrorMessage.factory( { 'url': false } ); // $ExpectError
	formatProdErrorMessage.factory( { 'url': 123 } ); // $ExpectError
	formatProdErrorMessage.factory( { 'url': [] } ); // $ExpectError
	formatProdErrorMessage.factory( { 'url': {} } ); // $ExpectError
	formatProdErrorMessage.factory( { 'url': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `message` option which is not a string...
{
	formatProdErrorMessage.factory( { 'message': true } ); // $ExpectError
	formatProdErrorMessage.factory( { 'message': false } ); // $ExpectError
	formatProdErrorMessage.factory( { 'message': 123 } ); // $ExpectError
	formatProdErrorMessage.factory( { 'message': [] } ); // $ExpectError
	formatProdErrorMessage.factory( { 'message': {} } ); // $ExpectError
	formatProdErrorMessage.factory( { 'message': ( x: number ): number => x } ); // $ExpectError
}
