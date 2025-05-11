/**
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

'use strict';

// MODULES //

var base64ToUint8Array = require( '@stdlib/string/base/base64-to-uint8array' );


// MAIN //

var wasm = base64ToUint8Array( 'AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEYA2AAAGAFf39/f38BfGAHf39/f39/fwF8Ag8BA2VudgZtZW1vcnkCAAADBAMAAQIHMQMRX193YXNtX2NhbGxfY3RvcnMAAAdjX2RzZG90AAEPY19kc2RvdF9uZGFycmF5AAIK6QIDAwABCy0AIAAgASACQQEgAGsiACACbEEAIAJBAEwbIAMgBCAAIARsQQAgBEEATBsQAgu0AgIBfwF8AkAgAEEATARADAELIAJBAUcgBUEBR3JFBEACQCAAQQVwIgVFDQADQCAFIAdGDQEgASADQQJ0aioCALsgBCAGQQJ0aioCALuiIAigIQggB0EBaiEHIAZBAWohBiADQQFqIQMMAAsACyAAQQVIDQEDQCAAIAVMDQIgCCABIANBAnRqIgIqAhC7IAQgBkECdGoiByoCELuiIAIqAgy7IAcqAgy7oiACKgIIuyAHKgIIu6IgAioCALsgByoCALuiIAIqAgS7IAcqAgS7oqCgoKCgIQggBUEFaiEFIAZBBWohBiADQQVqIQMMAAsACwNAIAAgB0YNASABIANBAnRqKgIAuyAEIAZBAnRqKgIAu6IgCKAhCCAHQQFqIQcgBSAGaiEGIAIgA2ohAwwACwALIAgL' );


// EXPORTS //

module.exports = wasm;
