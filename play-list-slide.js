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

  static styles = css`
    :host {
      display: block;
      text-align: center;
      padding: 20px;
      margin: 10px;
      border: 2px solid blue;
    }
    
    .top {
        font-size: 14px;
        color: white;
    }
    h2 {
        font-size: 24px;
        margin: 10px 0;
        color: white;
    }
  `;

  // Lit render the HTML
  render() {
    return html`
<div class="card">
  <div class="top">Top line heading</div>
  <h2>Slide 1, sub-heading</h2>
</div>`;
  }

}


globalThis.customElements.define(PlayListSlide.tag, PlayListSlide);
