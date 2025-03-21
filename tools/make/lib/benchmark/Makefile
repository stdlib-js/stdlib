#/
# @license Apache-2.0
#
# Copyright (c) 2017 The Stdlib Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#/

# DEPENDENCIES #

include $(TOOLS_MAKE_LIB_DIR)/benchmark/javascript.mk
include $(TOOLS_MAKE_LIB_DIR)/benchmark/c.mk
include $(TOOLS_MAKE_LIB_DIR)/benchmark/cpp.mk
include $(TOOLS_MAKE_LIB_DIR)/benchmark/fortran.mk
include $(TOOLS_MAKE_LIB_DIR)/benchmark/julia.mk
include $(TOOLS_MAKE_LIB_DIR)/benchmark/python.mk
include $(TOOLS_MAKE_LIB_DIR)/benchmark/r.mk


# RULES #

#/
# Runs benchmarks.
#
# @param {string} [BENCHMARKS_FILTER] - file path pattern (e.g., `.*/blas/base/dasum/.*`)
#
# @example
# make benchmark
#
# @example
# make benchmark BENCHMARKS_FILTER=".*/blas/base/dasum/.*"
#/
benchmark: benchmark-javascript

.PHONY: benchmark

#/
# Runs cross-language benchmarks.
#
# ## Notes
#
# -   This rule supports the environment variables supported by each language-specific (`benchmark-<lang>`) prerequisite.
# -   This rule is useful when wanting to glob for benchmark files, irrespective of language, for a particular package in order to compare cross-language performance.
#
#
# @param {string} [BENCHMARKS_FILTER] - file path pattern (e.g., `.*/blas/base/dasum/.*`)
#
# @example
# make benchmark-lang
#
# @example
# make benchmark-lang BENCHMARKS_FILTER=".*/blas/base/dasum/.*"
#/
benchmark-lang: benchmark-javascript benchmark-julia benchmark-python benchmark-r benchmark-c benchmark-cpp benchmark-fortran

.PHONY: benchmark-lang
