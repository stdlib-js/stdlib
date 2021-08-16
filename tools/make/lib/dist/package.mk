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

# VARIABLES #

# Define the path to a script for releasing a new project version:
NPM_RELEASE ?= $(TOOLS_DIR)/scripts/npm_publish

# Define the version bump type (e.g., prepatch, patch, preminor, minor, premajor, major, prerelease):
NPM_RELEASE_TYPE ?= patch

# Define a Git commit message when incrementing the project version:
NPM_RELEASE_COMMIT_MESSAGE ?= 'Feature updates and bug fixes'


# RULES #

#/
# Publishes a new project version to the npm package registry.
#
# @param {string} NPM_RELEASE_TYPE - release type (e.g., prepatch, patch, preminor, minor, premajor, major, prerelease)
# @param {string} NPM_RELEASE_COMMIT_MESSAGE - release message
#
# @example
# make npm-publish
#/
npm-publish: $(NODE_MODULES) assert-clean-working-directory
	$(QUIET) $(NPM_RELEASE) "$(NPM_RELEASE_TYPE)" "$(NPM_RELEASE_COMMIT_MESSAGE)"

.PHONY: npm-publish
