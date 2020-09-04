# @alisowski/storybook-addon-notes

> NOTE: Storybook deprecated this plugin in favor of `addon-docs`.
> While that plugin is useful this plugin solves different problems.

Storybook Addon Notes allows you to write notes (text or HTML) for your stories in [Storybook](https://storybook.js.org).

[Framework Support](https://github.com/storybookjs/storybook/blob/master/ADDONS_SUPPORT.md)

![Storybook Addon Notes Demo](docs/demo.png)

## Getting Started

```sh
yarn add -D @alisowski/storybook-addon-notes
```

within `.storybook/main.js`:

```js
module.exports = {
  addons: ["@alisowski/storybook-addon-notes/register"],
};
```

Alternatively register the notes addon into a panel. Choose only one, not both.

```js
module.exports = {
  addons: ["@alisowski/storybook-addon-notes/register-panel"],
};
```

Now, you can use the `notes` parameter to add a note to each story.

```js
import Component from "./Component";

export default {
  title: "Component",
  parameters: {
    notes: "some documentation here",
  },
};
```

### Upgrading to CSF Format

Add `notes` to the `parameters` object:

```js
export default {
  parameters: {
    notes: "My notes",
  },
};
```

## Using Markdown

Using Markdown in your notes is supported, Storybook will load Markdown as raw by default.

```jsx
import Component from "./Component";
import markdown from "./someMarkdownText.md";

export default {
  title: "Component",
};

export const withMarkdown = () => <Component />;
withmarkdown.story = {
  parameters: {
    notes: { markdown },
  },
};
```

## Multiple Notes Sections

If you need to display different notes for different consumers of your storybook (e.g design, developers), you can configure multiple notes pages. The following will render a tab with unique notes for both `Introduction` and `Design`.

```js
import { storiesOf } from "@storybook/react";
import Component from "./Component";

import intro from "./intro.md";
import design from "./design.md";

export default {
  title: "Component",
  parameters: {
    notes: { Introduction: intro, "Design Notes": design },
  },
};
```
