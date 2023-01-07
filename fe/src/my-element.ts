import { html, css, LitElement } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import {query} from 'lit/decorators/query.js';

import '@shoelace-style/shoelace/dist/components/input/input.js';

@customElement('pyf-page')
export class SearchBar extends LitElement {
  
  @query('#val-form')
  _valForm: any

  @query('#format-form')
  _formatForm: any

  @state()
  _output: string = "";

  @state()
  _error: string = "";

  sendRequest () {
    const host = "https://pyformat-previewer.vercel.app"
    var url = `${host}/format`
    const val = this._valForm.value
    const format = this._formatForm.value
    if (!(val && format)){
      return
    }
    url = `${url}?value=${val}&format=${format}`
    fetch(url, {method: "GET", headers: {"Accept": "application/json"}})
      .then((response) => response.json())
      .then((json) => {
        this._output = json["formatted"]
        if (json["error"]) {
          this._error = json["error"]
        } else {
          this._error = ""
        }
      })
  }

  render () {
    return html`
      <form>
          <p>f"{</p>
          <sl-input @sl-input=${() => {this.sendRequest()}} id="val-form" name="val" filled></sl-input>
          <p>:</p>
          <sl-input @sl-input=${() => {this.sendRequest()}} id="format-form" name="format" filled></sl-input>
          <p>}"</p>
      </form>
      ${this._error
        ?html`<div class="error"><pre>Error: ${this._error}</pre></div>`
        :html``
      }
      ${this._output
        ?html`
          <p class="formatted-label">Formatted value:</p>
          <pre>${this._output}</pre>
        `
        :html``
      }
      `
  }

  static styles = css`
    form {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .error {
      border-style:solid;
      border-radius:5px;
      border-color: red;
      padding-left:5px;
      padding-right:5px;
    }

    .formatted-label {
      margin-bottom: 0px;
    }

    pre {
      margin: 0px;
      text-align: center;
    }

    sl-input {
      width: 25%;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'pyf-page': SearchBar
  }
}
