
# VARIABLES #

# Define the command for `node`:
NODE ?= node

# Define the path to the executable to list installed package dependencies:
LIST_INSTALLED_PACKAGES ?= $(TOOLS_DIR)/ls/installed-pkgs/bin/cli

# Define the command flags:
LIST_INSTALLED_PACKAGES_FLAGS ?= \
	--dir $(ROOT_DIR)


# TARGETS #

# List installed package dependencies.
#
# This target prints a list of all installed package dependencies.

list-pkgs-installed: $(NODE_MODULES) $(LIST_INSTALLED_PACKAGES)
	$(QUIET) $(NODE) $(LIST_INSTALLED_PACKAGES) $(LIST_INSTALLED_PACKAGES_FLAGS)

.PHONY: list-pkgs-installed
