
# VARIABLES #

# Define the directory from which to copy git hooks:
GIT_HOOKS_DIR ?= $(TOOLS_DIR)/git/hooks

# Define a list of hooks:
GIT_HOOKS ?= $(shell find $(GIT_HOOKS_DIR) -type f | xargs -n 1 basename)

# Define the destination directory for git hooks:
GIT_HOOKS_OUT ?= $(ROOT_DIR)/.git/hooks


# RULES #

# Install git hooks.
#
# This target installs [git hooks][1].
#
# [1]: https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks

init-git-hooks:
	$(QUIET) for file in $(GIT_HOOKS); do \
		$(CP) $(GIT_HOOKS_DIR)/$$file $(GIT_HOOKS_OUT)/$$file; \
		$(MAKE_EXECUTABLE) $(GIT_HOOKS_OUT)/$$file; \
	done

.PHONY: init-git-hooks

