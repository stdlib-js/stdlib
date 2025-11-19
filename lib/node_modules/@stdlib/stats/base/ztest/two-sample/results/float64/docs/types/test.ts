/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import Results = require( './index' );


// TESTS //

// The function returns a results object...
{
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const r0 = new Results( {} ); // $ExpectType ResultsStruct

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const r1 = new Results( new ArrayBuffer( 80 ) ); // $ExpectType ResultsStruct

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const r2 = new Results( new ArrayBuffer( 80 ), 8 ); // $ExpectType ResultsStruct

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const r3 = new Results( new ArrayBuffer( 80 ), 8, 16 ); // $ExpectType ResultsStruct
}

// TODO: add individual parameter tests
