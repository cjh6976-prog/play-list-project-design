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
  static get properties() {
    return {
        ...super.properties,
        direction: { type: String },
        disabled: {type: Boolean}
    };
  }

 static styles = css`
    :host {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
    }
    .arrow {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 3px solid var(--ddd-theme-default-link80);
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        color: var(--ddd-theme-default-link80);
        font-weight: bold;
        
    }
    :host([direction="left"]) {
      left: -20px;
    }
    :host([direction="right"]) {
      right: -20px;
    }
    :host([disabled]) .arrow {
        opacity: 0.3;
        cursor: not-allowed;
        border-color: var(--ddd-theme-default-limestoneGray);
        color: var(--ddd-theme-default-limestoneGray);
    }
  `;

  _activate() {
    if (this.disabled)
    {
        return;
    }
    this.dispatchEvent(
        new CustomEvent("arrow-clicked", {
            bubbles: true,
            composed: true,
            detail: { direction: this.direction },
        })
    );
  }
  _handleKey(e){
    if (e.key === "Enter"){
        this._activate();
    }
  }
    



  // Lit render the HTML
  render() {
    return html`
    <div class="arrow"
    tabindex="0"
    @click="${this._activate}"
    @keydown="${this._handleKey}"
    >${this.direction === "left" ? "<" : ">"}</div>
`;
  }

}

globalThis.customElements.define(PlayListArrow.tag, PlayListArrow);
