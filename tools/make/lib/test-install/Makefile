#/
# @license Apache-2.0
#
# Copyright (c) 2018 The Stdlib Authors.
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

# VARIABLES #

# Define the directory path where the package should be installed:
TEST_NPM_INSTALL_DIR ?= $(BUILD_DIR)/test-npm-install

# Define the package to test:
TEST_NPM_INSTALL_PKG ?= $(shell $(PROJECT_NAME))

# Define the repository to test:
TEST_NPM_INSTALL_GITHUB_URL ?= $(shell $(PROJECT_GITHUB_URL))

# Define the repository tag/commit/branch to test:
TEST_NPM_INSTALL_GITHUB_TAG ?= develop

# Define the package version to install:
TEST_NPM_INSTALL_VERSION ?= latest


# RULES #

#/
# Tests whether a package can be successfully installed via `npm install`.
#
# @example
# make test-npm-install
#/
test-npm-install: clean-test-npm-install
	$(QUIET) $(MKDIR_RECURSIVE) $(TEST_NPM_INSTALL_DIR) && \
		cd $(TEST_NPM_INSTALL_DIR) && \
		echo '{"name":"test-npm-install","version":"0.0.0","private":true}' > $(TEST_NPM_INSTALL_DIR)/package.json && \
		$(NPM) install "$(TEST_NPM_INSTALL_PKG)@$(TEST_NPM_INSTALL_VERSION)"

.PHONY: test-npm-install

#/
# Tests whether a package can be successfully installed from GitHub via `npm install`.
#
# @example
# make test-npm-install-github
#/
test-npm-install-github: clean-test-npm-install
	$(QUIET) $(MKDIR_RECURSIVE) $(TEST_NPM_INSTALL_DIR) && \
		cd $(TEST_NPM_INSTALL_DIR) && \
		echo '{"name":"test-npm-install-github","version":"0.0.0","private":true}' > $(TEST_NPM_INSTALL_DIR)/package.json && \
		$(NPM) install "$(TEST_NPM_INSTALL_GITHUB_URL)#$(TEST_NPM_INSTALL_GITHUB_TAG)"

.PHONY: test-npm-install-github

#/
# Removes the test installation directory.
#
# @example
# make clean-test-npm-install
#/
clean-test-npm-install:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(TEST_NPM_INSTALL_DIR)

.PHONY: clean-test-npm-install
