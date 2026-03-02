import { html, fixture, expect } from '@open-wc/testing';
import "../play-list-project-desgin.js";

describe("PlayListProjectDesgin test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <play-list-project-desgin
        title="title"
      ></play-list-project-desgin>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
