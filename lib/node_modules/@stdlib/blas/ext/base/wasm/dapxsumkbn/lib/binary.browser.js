/**
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

'use strict';

// MODULES //

var base64ToUint8Array = require( '@stdlib/string/base/base64-to-uint8array' );


// MAIN //

var wasm = base64ToUint8Array( 'AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEVA2AAAGAEf3x/fwF8YAV/fH9/fwF8Ag8BA2VudgZtZW1vcnkCAAADBAMAAQIHVQMRX193YXNtX2NhbGxfY3RvcnMAABlzdGRsaWJfc3RyaWRlZF9kYXB4c3Vta2JuAAEhc3RkbGliX3N0cmlkZWRfZGFweHN1bWtibl9uZGFycmF5AAIKqQEDAwABCxwAIAAgASACIANBASAAayADbEEAIANBAEwbEAILhQECA3wBfyAAQQBMBEBEAAAAAAAAAAAPCyADBEADQCAAIAhGRQRAIAUgASACIARBA3RqKwMAoCIFIAYgBiAFoCIHoaAgBiAFIAehoCAGmSAFmWYboCEFIAhBAWohCCADIARqIQQgByEGDAELCyAGIAWgDwsgASACIARBA3RqKwMAoCAAuKIL' );


// EXPORTS //

module.exports = wasm;
