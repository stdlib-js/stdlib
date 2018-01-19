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

include $(TOOLS_MAKE_LIB_DIR)/lint/conf.mk
include $(TOOLS_MAKE_LIB_DIR)/lint/filenames.mk
include $(TOOLS_MAKE_LIB_DIR)/lint/javascript.mk
include $(TOOLS_MAKE_LIB_DIR)/lint/julia.mk
include $(TOOLS_MAKE_LIB_DIR)/lint/license_headers.mk
include $(TOOLS_MAKE_LIB_DIR)/lint/markdown.mk
include $(TOOLS_MAKE_LIB_DIR)/lint/package_json.mk
include $(TOOLS_MAKE_LIB_DIR)/lint/python/Makefile
include $(TOOLS_MAKE_LIB_DIR)/lint/r.mk


# RULES #

# Lint.
#
# This target lints all files.

lint: lint-filenames lint-javascript lint-markdown lint-python lint-julia lint-r lint-conf lint-pkg-json lint-license-headers

.PHONY: lint


# Check source code quality.
#
# This target lints only source files.

lint-src: lint-javascript-src

.PHONY: lint-src


# Check test code quality.
#
# This target lints only test files.

lint-tests: lint-javascript-tests

.PHONY: lint-tests


# Check example code quality.
#
# This target lints only example files.

lint-examples: lint-javascript-examples

.PHONY: lint-examples


# Check benchmark code quality.
#
# This target lints only benchmark files.

lint-benchmarks: lint-javascript-benchmarks lint-python-benchmarks lint-julia-benchmarks lint-r-benchmarks

.PHONY: lint-benchmarks

