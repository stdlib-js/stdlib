/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* Wraps `require` in a try/catch block.
*
* ## Notes
*
* -   This function traps and returns any errors encountered when attempting to require a module.
* -   Use caution when attempting to resolve a relative path or a local module. This function attempts to resolve a module from its current path. Thus, the function is unable to resolve anything which is not along its search path. For local requires, use an absolute file path.
*
* @param id - module id
* @returns `module.exports` of the resolved module or an error
*
* @example
* var out = tryRequire( 'beepboop' );
*
* if ( out instanceof Error ) {
*     console.error( out.message );
* }
*/
declare function tryRequire( id: string ): any;


// EXPORTS //

export = tryRequire;
