/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

#include "hwy/highway.h"

HWY_BEFORE_NAMESPACE();

namespace hwy {
	namespace HWY_NAMESPACE {

		int test_install( void ) {
#if HWY_HAVE_FLOAT64
			using T = double;
#else
			using T = float;
#endif
			const ScalableTag<T> tag;
			const auto value = Set( tag, static_cast<T>( 1.0 ) );

			return ( GetLane( value ) == static_cast<T>( 1.0 ) ) ? 0 : 1;
		}

	} // namespace HWY_NAMESPACE
} // namespace hwy

HWY_AFTER_NAMESPACE();

int main( void ) {
	return hwy::HWY_NAMESPACE::test_install();
}
