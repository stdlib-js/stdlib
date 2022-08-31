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

// TypeScript Version: 2.0

/**
* Trims whitespace characters from the beginning of a string.
*
* @param str - input string
* @returns trimmed string
*
* @example
* var out = ltrim( '   Whitespace   ' );
* // returns 'Whitespace   '
*
* @example
* var out = ltrim( '\t\t\tTabs\t\t\t' );
* // returns 'Tabs\t\t\t'
*
* @example
* var out = ltrim( '\n\n\nNew Lines\n\n\n' );
* // returns 'New Lines\n\n\n'
*/
declare function ltrim( str: string ): string;


// EXPORTS //

export = ltrim;
