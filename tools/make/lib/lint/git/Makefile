#/
# @license Apache-2.0
#
# Copyright (c) 2023 The Stdlib Authors.
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
include $(TOOLS_MAKE_LIB_DIR)/lint/git/commitlint.mk


# RULES #

#/
# Lints commit messages.
#
# @example
# make lint-commit
#/
lint-commit:
ifeq ($(GIT_COMMIT_LINTER), commitlint)
	$(QUIET) $(MAKE) -f $(this_file) commitlint
endif

.PHONY: lint-commit

#/
# Lints a commit message.
#
# @param {string} GIT_COMMIT_MESSAGE - Git commit message text
#
# @example
# make lint-commit-message GIT_COMMIT_MESSAGE='feat: add `foo/bar`'
#/
lint-commit-message:
ifeq ($(GIT_COMMIT_LINTER), commitlint)
	$(QUIET) NODE_ENV="$(NODE_ENV)" NODE_PATH="$(NODE_PATH)" GIT_COMMIT_MESSAGE='$(GIT_COMMIT_MESSAGE)' $(MAKE) -f $(this_file) commitlint-message
endif

.PHONY: lint-commit-message

#/
# Lints a list of files, each containing a commit message.
#
# @param {string} FILES - list of file paths
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make lint-commit-files FILES='/foo/commit.txt'
#/
lint-commit-files:
ifeq ($(GIT_COMMIT_LINTER), commitlint)
	$(QUIET) NODE_ENV="$(NODE_ENV)" NODE_PATH="$(NODE_PATH)" FILES="$(FILES)" $(MAKE) -f $(this_file) commitlint-files
endif

.PHONY: lint-commit-files
