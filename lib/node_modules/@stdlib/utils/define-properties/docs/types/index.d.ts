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
* Defines (and/or modifies) object properties.
*
* @param obj - object on which to define the properties
* @param props - object with property descriptors
* @returns object with added and/or modified properties
*
* @example
* var obj = {};
* defineProperties( obj, {
*     'foo': {
*         'value': 'bar'
*     },
*     'baz': {
*          'value': 13
*     }
* });
*
* var val = obj.foo;
* // returns 'bar'
*
* val = obj.baz;
* // returns 13
*/
declare function defineProperties( obj: any, props: any ): any;


// EXPORTS //

export = defineProperties;
