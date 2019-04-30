import React from 'react';

export interface DocsContextProps {
  selectedKind?: string;
  selectedStory?: string;
  mdxKind?: string;
  parameters?: any;
  storyStore?: any;
  forceRender?: () => void;
}

export const DocsContext: React.Context<DocsContextProps> = React.createContext({});
