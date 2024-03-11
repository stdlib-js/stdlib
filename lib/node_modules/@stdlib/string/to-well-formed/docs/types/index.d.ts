/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Replaces all lone surrogates in order to create a new string which is well formed.
*
* @param str - string to test
* @returns new string which does not contain any lone surrogates
*
* @example
* var result = str2wellformed( '\uDBFF' );
* // returns �
*
* @example
* var result = str2wellformed( '\uDBFFFF\uDBFF' );
* // returns �FF�
*
* @example
* var result = str2wellformed( '-5' );
* // returns -5
*/
declare function str2wellformed( str: string ): string;


// EXPORTS //

export = str2wellformed;
