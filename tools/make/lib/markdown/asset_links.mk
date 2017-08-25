
# VARIABLES #

# Define the asset file path relative to the project root:
MARKDOWN_ASSET_PATH ?=

# Get the current Git hash:
GIT_COMMIT_HASH ?= $(shell $(GIT) rev-parse HEAD)

# Define the path to utility for generating asset links:
RAWGIT_URL ?= $(TOOLS_PKGS_DIR)/utils/rawgit-url/bin/cli

# Define command-line flags to be used when invoking the utility:
RAWGIT_URL_FLAGS ?= \
	--slug stdlib-js/stdlib/$(GIT_COMMIT_HASH)


# TARGETS #

# Generate an asset link.
#
# This target generates an asset link based on the current Git hash for inclusion in a project Markdown file.

markdown-asset-link: $(NODE_MODULES)
	$(QUIET) $(RAWGIT_URL) $(RAWGIT_URL_FLAGS) $(MARKDOWN_ASSET_PATH)

.PHONY: markdown-asset-link
