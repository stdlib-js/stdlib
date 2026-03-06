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

import fmtprodmsgFactory = require( './index' );


// TESTS //

// The function returns an error formatting function...
{
	fmtprodmsgFactory( {} ); // $ExpectType FormatProdErrorMsgFunction
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	fmtprodmsgFactory( {}, 21 ); // $ExpectError
	fmtprodmsgFactory( {}, 'abc', 123 ); // $ExpectError
}

// The function returns a function which returns a string...
{
	const opts = {
		'url': 'https://stdlib.io/error-decoder.html'
	};
	const fcn = fmtprodmsgFactory( opts );
	fcn( '1' ); // $ExpectType string
	fcn( '3', 'wrong_type' ); // $ExpectType string
}

// The compiler throws an error if the function is provided a `url` option which is not a string...
{
	fmtprodmsgFactory( { 'url': true } ); // $ExpectError
	fmtprodmsgFactory( { 'url': false } ); // $ExpectError
	fmtprodmsgFactory( { 'url': 123 } ); // $ExpectError
	fmtprodmsgFactory( { 'url': [] } ); // $ExpectError
	fmtprodmsgFactory( { 'url': {} } ); // $ExpectError
	fmtprodmsgFactory( { 'url': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `message` option which is not a string...
{
	fmtprodmsgFactory( { 'message': true } ); // $ExpectError
	fmtprodmsgFactory( { 'message': false } ); // $ExpectError
	fmtprodmsgFactory( { 'message': 123 } ); // $ExpectError
	fmtprodmsgFactory( { 'message': [] } ); // $ExpectError
	fmtprodmsgFactory( { 'message': {} } ); // $ExpectError
	fmtprodmsgFactory( { 'message': ( x: number ): number => x } ); // $ExpectError
}
