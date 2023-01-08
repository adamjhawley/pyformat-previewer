import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';

// Icons for "GitHub" and "LinkedIn" won't work without internet connection but it is not important.
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.88/dist/');

@customElement('pyf-footer')
export class Footer extends LitElement {
  
  render () {
    return html`
      <footer class="footer">
        <div class="footer-section">
          <p>Built by <a href="https://adamjhawley.com/" target="_blank">Adam Hawley</a></p>
          <sl-icon-button class="icon" label="LinkedIn logo" href="https://www.linkedin.com/in/adam-hawley/" target="_blank" name="linkedin"></sl-icon-button>
        </div>
        <div class="footer-section">
          <p>Spotted a problem? Report it on <a href="https://github.com/adamjhawley/pyformat-previewer/issues" target="_blank" >GitHub</a></p>
          <sl-icon-button class="icon" label="Github logo" href="https://github.com/adamjhawley/pyformat-previewer/issues" target="_blank" name="github"></sl-icon-button>
        </div>
      </footer>
    `
  }

  static styles = css`
    .footer {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }

    .footer-section {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .icon {
      margin-left: 0.5em;
      margin-right: 0.5em;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'pyf-footer': Footer
  }
}
