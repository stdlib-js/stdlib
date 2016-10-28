
# VARIABLES #

# Define the command to `cat` a file:
CAT ?= cat
CAT_FLAGS ?=

# Define the path to the Makefile usage text file for displaying help information:
MAKE_USAGE ?= $(TOOLS_MAKE_DIR)/usage.txt

# Define command flags:
FIND_MAKEFILES_FLAGS ?= \
	-name 'Makefile' -o -name '*.mk'


# TARGETS #

# Print Makefile help.
#
# This target prints a help message and lists available targets.

help:
	$(QUIET) $(CAT) $(CAT_FLAGS) $(MAKE_USAGE)

.PHONY: help


# List Makefile targets.
#
# This target lists all Makefile targets.

list-targets:
	$(QUIET) find $(TOOLS_MAKE_DIR) $(FIND_MAKEFILES_FLAGS) \
	| xargs grep '^.PHONY: ' \
	| awk '{print $$2}' \
	| sort

.PHONY: list-targets


# List Makefile stats targets.
#
# This target lists all Makefile targets for computing statistics.

list-stats-targets:
	$(QUIET) find $(TOOLS_MAKE_DIR) $(FIND_MAKEFILES_FLAGS) \
	| xargs grep '^.PHONY: stats-' \
	| awk '{print $$2}' \
	| sort

.PHONY: list-stats-targets
