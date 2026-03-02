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
 * @element play-list-arrow
 */
export class PlayListArrow extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "play-list-arrow";
  }

 static styles = css`
    :host {
      display: block;
      padding: 10px;
      margin: 5px;
      border: 1px solid white;
    text-align: center;
    }
  `;



  // Lit render the HTML
  render() {
    return html`
    <button></button>
`;
  }

}

globalThis.customElements.define(PlayListArrow.tag, PlayListArrow);
