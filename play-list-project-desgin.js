/**
 * Copyright 2026 cjh6976-prog
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./play-list-indicator.js";
import "./play-list-arrow.js";
import "./play-list-slide.js";

/**
 * `play-list-project-desgin`
 * 
 * @demo index.html
 * @element play-list-project-desgin
 */
export class PlayListProjectDesgin extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "play-list-project-desgin";
  }

  constructor() {
    super();
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      
    };
    this.currentIndex = 0;
    this.slides = [];   
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      currentIndex: { type: Number },
      slides: { type: Array },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: white;
        font-family: var(--ddd-font-navigation);
        max-width: 900px;
  
        margin: 0 auto;
        padding: var(--ddd-spacing-2);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: 25px;
        background-color: var(--ddd-theme-default-slateMaxLight);
        position: relative;
        border-radius: 12px;
        max-width: 900px;
        height: 350px;
        position: relative;
        box-shadow: 0px 4px 12px gray;
      }
      h3 span {
        font-size: var(--play-list-project-desgin-label-font-size, var(--ddd-font-size-s));
      }
    `];
  }

  firstUpdated() {
    this.slides = this.querySelectorAll("play-list-slide");
    this._updateSlides();
  }

  _updateSlides() {
    this.slides.forEach((slide, index) => {
      slide.style.display = index === this.currentIndex ? "block" : "none";
    });
  }

  next() {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
      this._updateSlides();
    }
  }
  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this._updateSlides();
    }
  }

  goToSlide(index) {
    this.currentIndex = index;
    this._updateSlides();
  }


  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
  <play-list-arrow 
   direction="left"
   ?disabled="${this.currentIndex === 0}"
    @arrow-clicked="${this.prev}">
    </play-list-arrow>

  <slot></slot>
  <play-list-arrow 
   direction="right"
   ?disabled="${this.currentIndex === this.slides.length - 1}"
    @arrow-clicked="${this.next}">
    </play-list-arrow>

  <play-list-indicator
  .total="${this.slides.length}"
  .currentIndex="${this.currentIndex}"
  @indicator-clicked="${(e) => this.goToSlide(e.detail.index)}">
</play-list-indicator>
</div>`;
  }

}

globalThis.customElements.define(PlayListProjectDesgin.tag, PlayListProjectDesgin);