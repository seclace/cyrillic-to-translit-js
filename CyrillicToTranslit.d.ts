// Type definitions for cyrillic-to-translit-js 1.0.6
// Project: https://github.com/greybax/cyrillic-to-translit-js
// Definitions by: makepost <https://github.com/makepost>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = CyrillicToTranslit;

declare class CyrillicToTranslit {
  constructor(config?: { preset: "ru" | "uk" });

  public transform(input: string, spaceReplacement?: string): string;
}
