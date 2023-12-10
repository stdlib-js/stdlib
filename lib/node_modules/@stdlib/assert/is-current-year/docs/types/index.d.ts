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

// TypeScript Version: 4.1

/**
* Tests if a value is either an integer equal to the current year or a `Date` object representing the current year.
*
* @param value - value to test
* @returns boolean indicating whether a provided value is the current year
*
* @example
* var bool = isCurrentYear( new Date() );
* // returns true
*
* @example
* var currentYear = require( `@stdlib/time/current-year` );
* var bool = isCurrentYear( currentYear() );
* // returns true
*
* @example
* var bool = isCurrentYear( 2021 );
* // returns false
*
* @example
* var bool = isCurrentYear( null );
* // returns false
*/
declare function isCurrentYear( value: any ): value is Date | number;


// EXPORTS //

export = isCurrentYear;
