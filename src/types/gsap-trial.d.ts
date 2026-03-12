declare module 'gsap-trial/SplitText' {
  export class SplitText {
    chars: Element[];
    words: Element[];
    lines: Element[];
    constructor(target: gsap.DOMTarget, vars?: object);
    revert(): void;
    split(vars?: object): this;
  }
}

declare module 'gsap-trial/ScrollSmoother' {
  interface ScrollSmootherVars {
    wrapper?: string | Element;
    content?: string | Element;
    smooth?: number;
    speed?: number;
    effects?: boolean;
    autoResize?: boolean;
    ignoreMobileResize?: boolean;
    normalizeScroll?: boolean;
    [key: string]: unknown;
  }

  export class ScrollSmoother {
    static create(vars?: ScrollSmootherVars): ScrollSmoother;
    static get(): ScrollSmoother;
    static refresh(safe?: boolean): void;
    paused(value?: boolean): boolean | this;
    kill(): void;
    scrollTo(target: gsap.DOMTarget | number, smooth?: boolean, position?: string): void;
    scrollTop(value?: number): number | this;
    progress(value?: number): number | this;
    effects(targets?: gsap.DOMTarget, vars?: object): ScrollSmoother;
    refresh(soft?: boolean): void;
  }
}

declare module 'gsap-trial/ScrollTrigger' {
  export { ScrollTrigger } from 'gsap/ScrollTrigger';
}

declare module 'gsap-trial/*' {
  const plugin: gsap.Plugin;
  export default plugin;
  export { plugin };
}
