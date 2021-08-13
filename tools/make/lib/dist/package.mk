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

# Define the version bump type (e.g., pre-patch, patch, pre-minor, minor, pre-major, major, pre-release):
NPM_VERSION ?=

# Define a Git commit message when incrementing the project version:
NPM_VERSION_COMMIT_MESSAGE ?= 'Increment version'

# Specify the output build directory when generating a gzipped archive:
NPM_TARBALL_BUILD_OUT ?= $(BUILD_DIR)/npm

# Specify the gzipped archive basename:
npm_tarball_basename := "stdlib_v$(shell $(CURRENT_PROJECT_VERSION)).tgz"

# Specify the output gzipped archive basename:
NPM_TARBALL ?= $(npm_tarball_basename)

# Specify the output gzipped archive file path:
npm_tarball := $(NPM_TARBALL_BUILD_OUT)/$(NPM_TARBALL)

# Define the version upgrade prerequisite...
ifeq ($(NPM_VERSION), pre-patch)
	npm_version_target := npm-version-pre-patch
else
ifeq ($(NPM_VERSION), patch)
	npm_version_target := npm-version-patch
else
ifeq ($(NPM_VERSION), pre-minor)
	npm_version_target := npm-version-pre-minor
else
ifeq ($(NPM_VERSION), minor)
	npm_version_target := npm-version-minor
else
ifeq ($(NPM_VERSION), pre-major)
	npm_version_target := npm-version-pre-major
else
ifeq ($(NPM_VERSION), major)
	npm_version_target := npm-version-major
else
ifeq ($(NPM_VERSION), pre-release)
	npm_version_target := npm-version-pre-release
else
	npm_version_target :=
endif
endif
endif
endif
endif
endif
endif


# RULES #

#/
# Generates a gzipped archive for publishing to npm.
#
# @private
#/
$(npm_tarball):
	$(QUIET) $(MKDIR_RECURSIVE) $(NPM_TARBALL_BUILD_OUT)
	$(QUIET) $(NPM_PACK) $(ROOT_DIR) >/dev/null
	$(QUIET) mv $(ROOT_DIR)/$(npm_tarball_basename) $@

#/
# Generates a gzipped archive for publishing to npm.
#
# @example
# make npm-tarball
#/
npm-tarball: $(npm_tarball)

.PHONY: npm-tarball

#/
# Performs checks to prevent unintended behavior when attempting to publish to npm.
#
# TODO: once we have a `master` branch, swap `develop` for `master`
#
# @example
# make npm-publish-check
#/
npm-publish-check:
	$(QUIET) if [[ "$(shell $(GIT_BRANCH))" != "develop" ]]; then \
		echo 'Error: invalid operation. New versions should only be performed on the `develop`'; \
		echo 'branch.'; \
		exit 1; \
	fi

.PHONY: npm-publish-check


# Run pre-patch tasks.
#
# This target runs tasks which should be completed when publishing a "pre-patch" version.

npm-version-pre-patch: npm-pre-version
	$(QUIET) $(NPM) version pre-patch $(npm_version_flags)

.PHONY: npm-version-pre-patch


# Run patch tasks.
#
# This target runs tasks which should be completed when publishing a "patch" version.

npm-version-patch: npm-pre-version
	$(QUIET) $(NPM) version patch $(npm_version_flags)

.PHONY: npm-version-patch


# Run pre-minor tasks.
#
# This target runs tasks which should be completed when publishing a "pre-minor" version.

npm-version-pre-minor: npm-pre-version
	$(QUIET) $(NPM) version pre-minor $(npm_version_flags)

.PHONY: npm-version-pre-minor


# Run minor version tasks.
#
# This target runs tasks which should be completed when publishing a "minor" version.

npm-version-minor: npm-pre-version
	$(QUIET) $(NPM) version minor $(npm_version_flags)

.PHONY: npm-version-minor


# Run pre-major tasks.
#
# This target runs tasks which should be completed when publishing a "pre-major" version.

npm-version-pre-major: npm-pre-version
	$(QUIET) $(NPM) version pre-major $(npm_version_flags)

.PHONY: npm-version-pre-major


# Run major version tasks.
#
# This target runs tasks which should be completed when publishing a "major" version.

npm-version-major: npm-pre-version
	$(QUIET) $(NPM) version major $(npm_version_flags)

.PHONY: npm-version-major


# Run pre-release tasks.
#
# This target runs tasks which should be completed when publishing a "pre-release" version.

npm-version-pre-release: npm-pre-version
	$(QUIET) $(NPM) version pre-release $(npm_version_flags)

.PHONY: npm-version-pre-release


# Run version tasks.
#
# This target runs tasks which should be completed when incrementing the project version and committing version changes to the local repository.
#
# TODO: move recipe guts to a script
# TODO: on version, regenerate SVG equations and update README equation elements

npm-version: dist-browser-bundles
	$(QUIET) $(GIT_ADD) -A dist && \
		$(GIT_COMMIT) -m 'Update distributable browser bundles' && \
		$(MAKE) -f $(this_file) $(npm_version_target) && \
		$(MAKE) -f $(this_file) npm-post-version

.PHONY: npm-version


# Run post-version tasks.
#
# This target runs tasks which should be completed after incrementing the project version and committing version changes to the local repository.

npm-post-version:
	$(QUIET) echo ''
	$(QUIET) echo 'Incremented version and committed changes.'
	$(QUIET) echo ''
	$(QUIET) echo "Tarball size: $(shell $(MAKE) -f $(this_file) stats-npm-tarball-size)"
	$(QUIET) echo ''
	$(QUIET) echo 'If okay to publish, run:'
	$(QUIET) echo ''
	$(QUIET) echo '  $$ make npm-publish'
	$(QUIET) echo "  $$ git push origin $(shell $(GIT_BRANCH)) && git push origin --tags"
	$(QUIET) echo ''

.PHONY: npm-post-version

#/
# Remove npm tarball(s).
#
# This target removes npm gzipped archives.
#/
clean-npm-tarball:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(NPM_TARBALL_BUILD_OUT)/*.tgz

.PHONY: clean-npm-tarball
