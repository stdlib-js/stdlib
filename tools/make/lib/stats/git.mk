
# VARIABLES #

# Define the command for setting executable permissions:
MAKE_EXECUTABLE ?= chmod +x

# Define the path to the directory containing scripts for mining the git repository:
GIT_SCRIPTS_DIR ?= $(TOOLS_DIR)/git/scripts


# TARGETS #

# Compute additions per day.
#
# This target computes the number of additions committed per day.

stats-additions-per-day:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/additions_per_day
	$(QUIET) $(GIT_SCRIPTS_DIR)/additions_per_day

.PHONY: stats-additions-per-day


# Compute additions per hour.
#
# This target computes the number of additions committed per hour.

stats-additions-per-hour:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/additions_per_hour
	$(QUIET) $(GIT_SCRIPTS_DIR)/additions_per_hour

.PHONY: stats-additions-per-hour


# Compute additions per month.
#
# This target computes the number of additions committed per month.

stats-additions-per-month:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/additions_per_month
	$(QUIET) $(GIT_SCRIPTS_DIR)/additions_per_month

.PHONY: stats-additions-per-month


# Compute additions per weekday.
#
# This target computes the number of additions committed per weekday.

stats-additions-per-weekday:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/additions_per_weekday
	$(QUIET) $(GIT_SCRIPTS_DIR)/additions_per_weekday

.PHONY: stats-additions-per-weekday


# Compute author additions per day.
#
# This target computes the number of additions committed per day per author.

stats-author-additions-per-day:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_additions_per_day
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_additions_per_day

.PHONY: stats-author-additions-per-day


# Compute author additions per month.
#
# This target computes the number of additions committed per month per author.

stats-author-additions-per-month:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_additions_per_month
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_additions_per_month

.PHONY: stats-author-additions-per-month


# Compute author additions per weekday.
#
# This target computes the number of additions committed per weekday per author.

stats-author-additions-per-weekday:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_additions_per_weekday
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_additions_per_weekday

.PHONY: stats-author-additions-per-weekday


# Compute author commit intervals.
#
# This target computes the interval between commits for each author.

stats-author-commit-intervals:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_commit_intervals
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_commit_intervals

.PHONY: stats-author-commit-intervals


# Compute author commits per day.
#
# This target computes the number of commits per day per author.

stats-author-commits-per-day:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_commits_per_day
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_commits_per_day

.PHONY: stats-author-commits-per-day


# Compute author commits per hour.
#
# This target computes the number of commits per hour per author.

stats-author-commits-per-hour:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_commits_per_hour
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_commits_per_hour

.PHONY: stats-author-commits-per-hour


# Compute author commits per month.
#
# This target computes the number of commits per month per author.

stats-author-commits-per-month:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_commits_per_month
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_commits_per_month

.PHONY: stats-author-commits-per-month


# Compute author commits per weekday.
#
# This target computes the number of commits per weekday per author.

stats-author-commits-per-weekday:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_commits_per_weekday
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_commits_per_weekday

.PHONY: stats-author-commits-per-weekday


# Compute author days active.
#
# This target computes the number of days each author has committed.

stats-author-days-active:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_days_active
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_days_active

.PHONY: stats-author-days-active


# Compute author deletions per day.
#
# This target computes the number of deletions committed per day per author.

stats-author-deletions-per-day:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_deletions_per_day
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_deletions_per_day

.PHONY: stats-author-deletions-per-day


# Compute author deletions per month.
#
# This target computes the number of deletions committed per month per author.

stats-author-deletions-per-month:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_deletions_per_month
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_deletions_per_month

.PHONY: stats-author-deletions-per-month


# Compute author deletions per weekday.
#
# This target computes the number of deletions committed per weekday per author.

stats-author-deletions-per-weekday:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_deletions_per_weekday
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_deletions_per_weekday

.PHONY: stats-author-deletions-per-weekday


# Compute author number of changed files per day.
#
# This target computes the number of files changed per day per author.

stats-author-files-changed-per-day:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_files_changed_per_day
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_files_changed_per_day

.PHONY: stats-author-files-changed-per-day


# Compute author number of changed files per month.
#
# This target computes the number of files changed per month per author.

stats-author-files-changed-per-month:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_files_changed_per_month
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_files_changed_per_month

.PHONY: stats-author-files-changed-per-month


# Compute author number of changed files per weekday.
#
# This target computes the number of files changed per weekday per author.

stats-author-files-changed-per-weekday:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_files_changed_per_weekday
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_files_changed_per_weekday

.PHONY: stats-author-files-changed-per-weekday


# Compute author mean commit interval.
#
# This target computes the mean commit interval per author.

stats-author-mean-commit-interval:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_mean_commit_interval
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_mean_commit_interval

.PHONY: stats-author-mean-commit-interval


# Compute author mean short stats.
#
# This target computes summary statistic averages for each author.

stats-author-mean-shortstats:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_mean_shortstats
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_mean_shortstats

.PHONY: stats-author-mean-shortstats


# Compute author short stats per day.
#
# This target computes summary statistic per day per author.

stats-author-shortstats-per-day:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_shortstats_per_day
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_shortstats_per_day

.PHONY: stats-author-shortstats-per-day


# Compute author short stats per month.
#
# This target computes summary statistic per month per author.

stats-author-shortstats-per-month:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_shortstats_per_month
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_shortstats_per_month

.PHONY: stats-author-shortstats-per-month
