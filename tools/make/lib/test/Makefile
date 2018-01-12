#/
# @license Apache-2.0
#
# Copyright 2017 The Stdlib Authors
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

include $(TOOLS_MAKE_LIB_DIR)/test/javascript.mk


# TARGETS #

# Run unit tests.
#
# This target runs unit tests.

test: test-local

.PHONY: test


# Run unit tests.
#
# This target runs unit tests for a specified file set.

test-files: test-files-local

.PHONY: test-files


# Run unit tests locally.
#
# This target runs unit tests in a local environment.

test-local: test-javascript-local

.PHONY: test-local


# Run unit tests locally.
#
# This target runs unit tests for a specified file set in a local environment.

test-files-local: test-javascript-files-local

.PHONY: test-files-local


# Generate a test summary.
#
# This target runs unit tests and aggregates TAP output as a test summary.

test-summary: test-javascript-summary

.PHONY: test-summary


# Generate a test summary.
#
# This target runs unit tests for a specified file set and aggregates TAP output as a test summary.

test-files-summary: test-javascript-files-summary

.PHONY: test-files-summary


# Generate TAP output.
#
# This target runs unit tests and streams raw TAP output.

test-tap: test-javascript-tap

.PHONY: test-tap


# Generate TAP output.
#
# This target runs unit tests for a specified file set and streams raw TAP output.

test-files-tap: test-javascript-files-tap

.PHONY: test-files-tap


# Generate a xUnit XML.
#
# This target runs unit tests and converts TAP output to xUnit XML.

test-xunit: test-javascript-xunit

.PHONY: test-xunit


# Generate a xUnit XML.
#
# This target runs unit tests for a specified file set and converts TAP output to xUnit XML.

test-files-xunit: test-javascript-files-xunit

.PHONY: test-files-xunit
