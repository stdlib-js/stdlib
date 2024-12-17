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

# Note: keep in alphabetical order...
include $(TOOLS_MAKE_LIB_DIR)/lint/c/Makefile
include $(TOOLS_MAKE_LIB_DIR)/lint/conf/Makefile
include $(TOOLS_MAKE_LIB_DIR)/lint/editorconfig.mk
include $(TOOLS_MAKE_LIB_DIR)/lint/filenames.mk
include $(TOOLS_MAKE_LIB_DIR)/lint/git/Makefile
include $(TOOLS_MAKE_LIB_DIR)/lint/javascript/Makefile
include $(TOOLS_MAKE_LIB_DIR)/lint/julia/Makefile
include $(TOOLS_MAKE_LIB_DIR)/lint/license-headers/Makefile
include $(TOOLS_MAKE_LIB_DIR)/lint/markdown/Makefile
include $(TOOLS_MAKE_LIB_DIR)/lint/package_json.mk
include $(TOOLS_MAKE_LIB_DIR)/lint/python/Makefile
include $(TOOLS_MAKE_LIB_DIR)/lint/r/Makefile
include $(TOOLS_MAKE_LIB_DIR)/lint/repl_help.mk
include $(TOOLS_MAKE_LIB_DIR)/lint/shell/Makefile
include $(TOOLS_MAKE_LIB_DIR)/lint/toposort.mk
include $(TOOLS_MAKE_LIB_DIR)/lint/typescript/Makefile


# RULES #

#/
# Lints files.
#
# ## Notes
#
# -   This rule supports the environment variables supported by each prerequisite.
# -   This rule is useful when wanting to glob for files, irrespective of context, for a particular package in order to lint all contained files.
#
# @example
# make lint
#/
lint: lint-filenames lint-javascript lint-markdown lint-c lint-python lint-julia lint-r lint-shell lint-typescript lint-conf lint-pkg-json lint-repl-help lint-license-headers lint-editorconfig

.PHONY: lint

#/
# Lints source files.
#
# ## Notes
#
# -   This rule supports the environment variables supported by each prerequisite.
# -   This rule is useful when wanting to glob for source files (e.g., lint all source files for a particular package).
#
# @example
# make lint-src
#/
lint-src: lint-javascript-src lint-c-src

.PHONY: lint-src

#/
# Lints test files.
#
# ## Notes
#
# -   This rule supports the environment variables supported by each prerequisite.
# -   This rule is useful when wanting to glob for test files (e.g., lint all test files for a particular package).
#
# @example
# make lint-tests
#/
lint-tests: lint-javascript-tests

.PHONY: lint-tests

#/
# Lints examples files.
#
# ## Notes
#
# -   This rule supports the environment variables supported by each prerequisite.
# -   This rule is useful when wanting to glob for examples files (e.g., lint all examples files for a particular package).
#
# @example
# make lint-examples
#/
lint-examples: lint-javascript-examples lint-c-examples

.PHONY: lint-examples

#/
# Lints benchmark files.
#
# ## Notes
#
# -   This rule supports the environment variables supported by each prerequisite.
# -   This rule is useful when wanting to glob for benchmark files (e.g., lint all benchmark files for a particular package).
#
# @example
# make lint-benchmarks
#/
lint-benchmarks: lint-javascript-benchmarks lint-c-benchmarks lint-python-benchmarks lint-julia-benchmarks lint-r-benchmarks

.PHONY: lint-benchmarks
