/**
 * Copyright 2026 cjh6976-prog
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `play-list-project-desgin`
 * 
 * @demo index.html
 * @element play-list-slide
 */
export class PlayListSlide extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "play-list-slide";
  }

  static get properties() {
    return {
        ...super.properties,
        topHeading: { type: String, attribute: "top-heading" },
        secondHeading: { type: String, attribute: "second-heading" },
        active: { type: Boolean, reflect: true },
    };
}

  static get styles() {
    return [super.styles, css`
    :host {
      display: block;
    }
    :host([active]) {
      display: block;
    }
    .slide-wrapper {
        color: lightblue;
    }
    h3 {
        font-size: 20px;
        color: var(--ddd-theme-default-link80);
        margin-bottom: 5px;
    }
    h4 {
        font-size: 40px;
        color: var(--ddd-theme-default-link);
        margin: 0;
    }
  
    .line {
        border: none;
        border-top: 2px solid var(--ddd-theme-default-skyBlue);
        margin: 16px 0;
        width: 40px;
    }
    div::-webkit-scrollbar {
  width: 12px;               /* width of the entire scrollbar */
}

div::-webkit-scrollbar-track {
  background: lightgray;        /* color of the tracking area */
}

div::-webkit-scrollbar-thumb {
  background-color: gray;    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  border: 3px gray;  /* creates padding around scroll thumb */
}
    .content {
        color: black;
        overflow-y: auto;
        max-height: 175px;
    }
  `];
  } 
  // Lit render the HTML
  render() {
    return html`
<div class="slide-wrapper">
    <h3>${this.topHeading}</h3>
    <h4>${this.secondHeading}</h4>
    <hr class="line">
    <div class="content">
    <slot></slot>
</div>

</div>
`;
  }
}


globalThis.customElements.define(PlayListSlide.tag, PlayListSlide);
