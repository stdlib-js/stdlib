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

include $(TOOLS_MAKE_LIB_DIR)/lint/pycodestyle.mk
include $(TOOLS_MAKE_LIB_DIR)/lint/pydocstyle.mk
include $(TOOLS_MAKE_LIB_DIR)/lint/pylint.mk


# RULES #

# Check for linters.
#
# This target checks that Python linters exist.

check-python-linters: check-pylint check-pycodestyle check-pydocstyle

.PHONY: check-python-linters


# Check code quality.
#
# This target lints all Python code.

lint-python: lint-python-src lint-python-tests-fixtures lint-python-examples lint-python-benchmarks

.PHONY: lint-python


# Check source code quality.
#
# This target lints only Python source files.

lint-python-src: pylint-src pycodestyle-src pydocstyle-src

.PHONY: lint-python-src


# Check test fixture code quality.
#
# This target lints only Python test fixture files.

lint-python-tests-fixtures: pylint-tests-fixtures pycodestyle-tests-fixtures pydocstyle-tests-fixtures

.PHONY: lint-python-tests-fixtures


# Check example code quality.
#
# This target lints only Python example files.

lint-python-examples: pylint-examples pycodestyle-examples pydocstyle-examples

.PHONY: lint-python-examples


# Check benchmark code quality.
#
# This target lints only Python benchmark files.

lint-python-benchmarks: pylint-benchmarks pycodestyle-benchmarks pydocstyle-benchmarks

.PHONY: lint-python-benchmarks


# Check code quality.
#
# This target lints Python files. Note that we expect `$FILES` to be a Python file list.

lint-python-files: pylint-files pycodestyle-files pydocstyle-files

.PHONY: lint-python-files

