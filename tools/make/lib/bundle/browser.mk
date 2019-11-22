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

# Define the command for generating distributable browser bundles:
DIST_BROWSER_BUNDLES ?= NODE_PATH="$(NODE_PATH)" $(NODE) \
	--max_old_space_size=4096 \
	--expose_gc \
	$(TOOLS_PKGS_DIR)/bundle/scripts/dist_browser_bundles

# Define the command-line options to be used when executing the command:
DIST_BROWSER_BUNDLES_FLAGS ?=

# Define the command for updating distributable browser bundle stats in the dist README:
UPDATE_DIST_README_BROWSER_BUNDLE_STATS ?= $(NODE) $(TOOLS_PKGS_DIR)/bundle/scripts/update_dist_readme_browser_bundle_stats

# Define the command-line options to be used when executing the command:
UPDATE_DIST_README_BROWSER_BUNDLE_STATS_FLAGS ?=


# RULES #

#/
# Generates distributable browser bundles.
#
# @example
# make dist-browser-bundles
#/
dist-browser-bundles: $(NODE_MODULES)
	$(QUIET) echo 'Generating distributable browser bundles...'
	$(QUIET) $(DIST_BROWSER_BUNDLES) $(DIST_BROWSER_BUNDLES_FLAGS)
	$(QUIET) for file in $(DIST_DIR)/*.min.js; do \
		echo "Compressing file: $$file"; \
		$(GZIP) "$$file" -9 -c > "$$file".gz; \
	done

.PHONY: dist-browser-bundles

#/
# Updates a README file documenting distributable browser bundles to include the most recent bundle statistics.
#
# @example
# make update-dist-readme-browser-bundle-stats
#/
update-dist-readme-browser-bundle-stats: $(NODE_MODULES)
	$(QUIET) NODE_PATH="$(NODE_PATH)" $(UPDATE_DIST_README_BROWSER_BUNDLE_STATS) $(UPDATE_DIST_README_BROWSER_BUNDLE_STATS_FLAGS)

.PHONY: update-dist-readme-browser-bundle-stats
