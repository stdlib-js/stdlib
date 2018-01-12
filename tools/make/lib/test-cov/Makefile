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

include $(TOOLS_MAKE_LIB_DIR)/test-cov/javascript.mk


# TARGETS #

# Run units and generate a test coverage report.
#
# This target instruments source code, runs unit tests, and outputs a test coverage report.

test-cov: test-javascript-cov

.PHONY: test-cov


# View a test coverage report.
#
# This target opens an HTML coverage report in a local web browser.

view-cov: view-javascript-cov

.PHONY: view-cov


# Remove coverage artifacts.
#
# This target deletes coverage artifacts, such as coverage reports and associated HTML pages.

clean-cov: clean-javascript-cov

.PHONY: clean-cov
