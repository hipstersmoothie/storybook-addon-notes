export const PARAM_KEY = `notes`;
export const ADDON_ID = `storybookjs/${PARAM_KEY}`;
export const PANEL_ID = `${ADDON_ID}/panel`;

interface TextParameter {
  text: string;
}
interface MarkdownParameter {
  markdown: string;
}
interface DisabledParameter {
  disable: boolean;
}
type TabsParameter = Record<string, string>;

export type Parameters =
  | string
  | TextParameter
  | MarkdownParameter
  | DisabledParameter
  | TabsParameter;
