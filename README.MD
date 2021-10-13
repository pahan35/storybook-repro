## Purpose

Repo for creating reproducible bugs for [storybook](https://github.com/storybookjs/storybook).

## How to reproduce?

1. Switch to a branch with a special bug.
2. Open a story with a bug.
3. Check the primary control which should be disabled based on https://storybook.js.org/docs/react/essentials/controls#disable-controls-for-specific-properties

## Bug list.

| Branch            | Story                                | Issue |
|-------------------|--------------------------------------|--------------
| [main](tree/main) | [Button](stories/Button.stories.tsx) | [#nnn](https://github.com/storybookjs/storybook/issues/nnn) |
| [cant-disable-control-for-inferred](tree/cant-disable-control-for-inferred) | [Button](stories/Button.stories.tsx) | [#16340](https://github.com/storybookjs/storybook/issues/16340) |
