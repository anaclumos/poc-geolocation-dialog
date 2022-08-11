class navigator {
  constructor(navigator) {
    this.navigator = navigator
  }
  get geolocation() {
    getCurrentPosition(success, error)
    {
      const dialog = this.document.createElement('dialog')
      dialog.innerHTML = html` <div>
        <h1>I am a pretty permission dialog.</h1>

        <form method="dialog">
          <section>
            <p>
              <label for="favAnimal">Favorite animal:</label>
              <select id="favAnimal" name="favAnimal">
                <option></option>
                <option>Brine shrimp</option>
                <option>Red panda</option>
                <option>Spider monkey</option>
              </select>
            </p>
          </section>
          <menu>
            <button id="cancel" type="reset">Cancel</button>
            <button type="submit">Confirm</button>
          </menu>
        </form>

        <iframe
          src="https://giphy.com/embed/MDJ9IbxxvDUQM"
          width="480"
          height="270"
          frameborder="0"
          class="giphy-embed"
          allowfullscreen
        ></iframe>
        <form method="dialog">
          <button>OK</button>
        </form>
      </div>`
      dialog.setAttribute('open', true)
      this.navigator.geolocation.getCurrentPosition(success, error)
    }
  }
}
