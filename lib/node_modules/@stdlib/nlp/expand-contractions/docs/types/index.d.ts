/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

// TypeScript Version: 2.0

/**
* Expands all contractions to their formal equivalents.
*
* @param str - string to convert
* @returns string with expanded contractions
*
* @example
* var str = 'I won\'t be able to get y\'all out of this one.';
* var out = expandContractions( str );
* // returns 'I will not be able to get you all out of this one.'
*
* @example
* var str = 'It oughtn\'t to be my fault, because, you know, I didn\'t know';
* var out = expandContractions( str );
* // returns 'It ought not to be my fault, because, you know, I did not know'
*/
declare function expandContractions( str: string ): string;


// EXPORTS //

export = expandContractions;
