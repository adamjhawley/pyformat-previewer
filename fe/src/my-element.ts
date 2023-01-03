import { html, css, LitElement } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import {query} from 'lit/decorators/query.js';

import '@shoelace-style/shoelace/dist/components/input/input.js';

@customElement('pyf-searchbar')
export class SearchBar extends LitElement {
  
  @query('#val-form')
  _valForm: any

  @query('#format-form')
  _formatForm: any

  @state()
  _output: string = "";

  sendRequest () {
    const host = "https://pyformat-previewer.vercel.app/"
    var url = `${host}/format`
      const val = this._valForm.value
      const format = this._formatForm.value
      if (!(val && format)){
        return
      }
      var xmlHttp = new XMLHttpRequest()
      url = `${url}?value=${val}&format=${format}`
      xmlHttp.open("GET", url, false)
      xmlHttp.send(null)
      this._output = xmlHttp.responseText
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
      ${this._output
        ?html`
          <p>Formatted value:</p>
          <pre>
            ${this._output}
          </pre>
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

    sl-input {
      width: 25%;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'pyf-searchbar': SearchBar
  }
}
