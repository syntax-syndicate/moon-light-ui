import type Size from "./Size";

type TagsInputState = {
  value?: unknown;
  size?: Size;
  disabled?: boolean;
  isError?: boolean;
  onClear?: (index: number) => void;
  selectedTagIndex?: number;
  selectTagOnClick?: (newSelectedTag: number) => void;
};

export default TagsInputState;
