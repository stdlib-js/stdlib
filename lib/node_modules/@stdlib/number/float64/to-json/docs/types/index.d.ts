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
* Returns a JSON representation of a number.
*
* @param x - input value
* @returns JSON representation
*
* @example
* var str = JSON.stringify( number2json( NaN ) );
* // returns '{"type":"float64","value":"NaN"}'
*/
declare function number2json( x: number ): any;


// EXPORTS //

export = number2json;
