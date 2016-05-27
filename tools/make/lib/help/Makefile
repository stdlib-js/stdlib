
# VARIABLES #

# Define the command to `cat` a file:
CAT ?= cat
CAT_FLAGS ?=

# Define the path to the Makefile usage text file for displaying help information:
MAKE_USAGE ?= $(TOOLS_MAKE_DIR)/usage.txt


# TARGETS #

# Print Makefile help.
#
# This target prints a help message and lists available targets.

help:
	@$(CAT) $(CAT_FLAGS) $(MAKE_USAGE)

.PHONY: help

