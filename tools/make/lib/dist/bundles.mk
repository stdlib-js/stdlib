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

# Define the command for listing distributable bundle package directories:
DIST_PKG_DIRS ?= NODE_PATH="$(NODE_PATH)" $(NODE) \
	$(DIST_DIR)/scripts/bundle_dirs.js

# Define the command for updating distributable package versions:
DIST_UPDATE_VERSIONS ?= NODE_PATH="$(NODE_PATH)" $(NODE) \
	$(DIST_DIR)/scripts/update_versions.js

# Define the command for verifying distributable package versions:
DIST_VERIFY_VERSIONS ?= NODE_PATH="$(NODE_PATH)" $(NODE) \
	$(DIST_DIR)/scripts/verify_versions.js


# RULES #

#/
# Generates distributable bundles.
#
# @example
# make dist-bundles
#/
dist-bundles: $(NODE_MODULES)
	$(QUIET) echo 'Generating bundles...'
	$(QUIET) $(DIST_PKG_DIRS) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r pkg; do \
		echo ""; \
		echo "Building: $$pkg"; \
		cd $$pkg; \
		$(MAKE) NODE="$(NODE)" NODE_PATH="$(NODE_PATH)" || exit 1; \
	done
	$(QUIET) echo 'Compressing bundles...'
	$(QUIET) for file in $(DIST_DIR)/*/build/*.min.js; do \
		echo "Compressing file: $$file"; \
		$(GZIP) "$$file" -9 -c > "$$file".gz || exit 1; \
	done
	$(QUIET) echo 'Finished generating bundles.'

.PHONY: dist-bundles

#/
# Publishes packages containing distributable bundles to the npm package registry.
#
# @example
# make dist-bundles-publish
#/
dist-bundles-publish: $(NODE_MODULES) dist-bundles
	$(QUIET) echo 'Updating package versions...'
	$(QUIET) $(DIST_UPDATE_VERSIONS)
	$(QUIET) echo 'Verifying package versions...'
	$(QUIET) $(DIST_VERIFY_VERSIONS)
	$(QUIET) echo 'Publishing packages...'
	$(QUIET) $(DIST_PKG_DIRS) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r pkg; do \
		echo ""; \
		echo "Publishing package: $$pkg"; \
		cd $$pkg; \
		$(NPM) publish --access public || exit 1; \
	done
	$(QUIET) echo 'Finished publishing packages.'

.PHONY: dist-bundles-publish

#/
# Performs a dry run of publishing packages containing distributable bundles to the npm package registry.
#
# @example
# make dist-bundles-publish-dry-run
#/
dist-bundles-publish-dry-run: $(NODE_MODULES)
	$(QUIET) echo '(dry run) Verifying package versions...'
	$(QUIET) $(DIST_VERIFY_VERSIONS)
	$(QUIET) echo '(dry run) Publishing packages...'
	$(QUIET) $(DIST_PKG_DIRS) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r pkg; do \
		echo ""; \
		echo "(dry run) Publishing package: $$pkg"; \
		cd $$pkg; \
		$(NPM) publish --access public --dry-run || exit 1; \
	done
	$(QUIET) echo '(dry run) Finished publishing packages.'

.PHONY: dist-bundles-publish-dry-run

#/
# Removes distributable bundle build artifacts.
#
# @example
# make clean-dist-bundles
#/
clean-dist-bundles:
	$(QUIET) echo 'Removing build artifacts...'
	$(QUIET) $(DIST_PKG_DIRS) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r pkg; do \
		echo ""; \
		echo "Removing build artifacts for package: $$pkg"; \
		cd $$pkg; \
		$(MAKE) NODE="$(NODE)" NODE_PATH="$(NODE_PATH)" clean; \
	done
	$(QUIET) echo 'Finished removing build artifacts.'

.PHONY: clean-dist-bundles
