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
* Percent-encode a UTF-16 encoded string according to [RFC 3986][1].
*
* [1]: https://tools.ietf.org/html/rfc3986#section-2.1
*
* @param str - string to percent-encode
* @returns percent-encoded string
*
* @example
* var str1 = 'Ladies + Gentlemen';
*
* var str2 = percentEncode( str1 );
* // returns 'Ladies%20%2B%20Gentlemen'
*/
declare function percentEncode( str: string ): string;


// EXPORTS //

export = percentEncode;
