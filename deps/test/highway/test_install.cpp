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

#include <hwy/highway.h>

#include <cstdio>

HWY_BEFORE_NAMESPACE();
namespace HWY_NAMESPACE {
	namespace hn = hwy::HWY_NAMESPACE;

	double SumLanes(const double* HWY_RESTRICT values, size_t num) {
		const hn::ScalableTag<double> d;
		hn::Vec<decltype(d)> sum = hn::Set(d, 0.0);
		size_t i = 0;
		for (; i + hn::Lanes(d) <= num; i += hn::Lanes(d)) {
			sum = hn::Add(sum, hn::LoadU(d, values + i));
		}
		// Reduce the vector lanes to a single scalar.
		alignas(64) double buf[64];
		hn::Store(sum, d, buf);
		double result = 0.0;
		for (size_t j = 0; j < hn::Lanes(d); ++j) {
			result += buf[j];
		}
		// Scalar tail for remaining elements.
		for (; i < num; ++i) {
			result += values[i];
		}
		return result;
	}
}  // namespace HWY_NAMESPACE
HWY_AFTER_NAMESPACE();

int main() {
	double values[] = {1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0};
	const double sum = HWY_STATIC_DISPATCH(SumLanes)(values, sizeof(values) / sizeof(values[0]));

	std::printf("Highway installed successfully!\n");
	std::printf("Detected target: %s\n", hwy::TargetName(HWY_TARGET));
	std::printf("Sum of [1..8] = %0.1f\n", sum);
	return 0;
}
