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

# Note: keep the following in alphabetical order...
include $(TOOLS_MAKE_LIB_DIR)/examples/c.mk
include $(TOOLS_MAKE_LIB_DIR)/examples/cpp.mk
include $(TOOLS_MAKE_LIB_DIR)/examples/javascript.mk
include $(TOOLS_MAKE_LIB_DIR)/examples/markdown.mk


# RULES #

#/
# Runs examples.
#
# @param {string} [EXAMPLES_FILTER] - file path pattern (e.g., `.*/blas/base/dasum/.*`)
#
# @example
# make examples
#
# @example
# make examples EXAMPLES_FILTER=".*/blas/base/dasum/.*"
#/
examples: examples-javascript

.PHONY: examples

#/
# Runs cross-language examples.
#
# ## Notes
#
# -   This rule supports the environment variables supported by each language-specific (`examples-<lang>`) prerequisite.
# -   This rule is useful when wanting to glob for examples files, irrespective of language, for a particular package in order to compare cross-language example output.
#
#
# @param {string} [EXAMPLES_FILTER] - file path pattern (e.g., `.*/blas/base/dasum/.*`)
#
# @example
# make examples-lang
#
# @example
# make examples-lang EXAMPLES_FILTER=".*/blas/base/dasum/.*"
#/
examples-lang: examples-javascript examples-c examples-cpp

.PHONY: examples-lang

