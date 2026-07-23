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

var wasm = base64ToUint8Array( 'AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEYA2AAAGAGf31/f39/AGAIf31/f39/f38AAg8BA2VudgZtZW1vcnkCAAADBAMAAQIHTAQRX193YXNtX2NhbGxfY3RvcnMAABhfX3dhc21fYXBwbHlfZGF0YV9yZWxvY3MAAAdjX3NheHB5AAEPY19zYXhweV9uZGFycmF5AAIK8wIDAwABCy8AIAAgASACIANBASAAayIAIANsQQAgA0EATBsgBCAFIAAgBWxBACAFQQBMGxACC7wCAQJ/AkAgAEEATCABQwAAAABbcg0AIANBAUcgBkEBR3JFBEAgAEEDcSIGBEADQCAGIAhGRQRAIAUgB0ECdGoiAyABIAIgBEECdGoqAgCUIAMqAgCSOAIAIAhBAWohCCAHQQFqIQcgBEEBaiEEDAELCyAAQQRIDQILA0AgACAGTA0CIAUgB0ECdGoiAyABIAIgBEECdGoiCCoCAJQgAyoCAJI4AgAgAyABIAgqAgSUIAMqAgSSOAIEIAMgASAIKgIIlCADKgIIkjgCCCADIAEgCCoCDJQgAyoCDJI4AgwgBkEEaiEGIAdBBGohByAEQQRqIQQMAAsACwNAIAAgCEYNASAFIAdBAnRqIgkgASACIARBAnRqKgIAlCAJKgIAkjgCACAIQQFqIQggBiAHaiEHIAMgBGohBAwACwALCw==' );


// EXPORTS //

module.exports = wasm;
