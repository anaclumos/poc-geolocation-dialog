const navigator = {
  allowed: false,
  geolocation: {
    getCurrentPosition(success) {
      const dialog = document.createElement('dialog')
      dialog.innerHTML = `
      <div>
        <form method="dialog">
          <section>
            <h1>Hey! Please allow location 😽 uwu</h1>
            <iframe
              src="https://giphy.com/embed/MDJ9IbxxvDUQM"
              width="480"
              height="270"
              frameborder="0"
              class="giphy-embed"
              allowfullscreen
            ></iframe>
          </section>
          <menu>
            <button id="cancel" type="reset">NO</button>
            <button id="submit" type="submit">OK</button>
          </menu>
        </form>
      </div>
      `
      document.body.appendChild(dialog)
      const cancelButton = document.getElementById('cancel')
      cancelButton.addEventListener('click', () => {
        alert('You have denied location access.')
        document.getElementById('location').innerText = 'Denied'
        dialog.close()
      })
      const submitButton = document.getElementById('submit')
      submitButton.addEventListener('click', () => {
        navigator.allowed = true
        dialog.close()
        return success({
          coords: {
            latitude: 77,
            longitude: 77,
          },
        })
      })
      if (!navigator.allowed) {
        dialog.showModal()
      } else {
        return success({
          coords: {
            latitude: 77,
            longitude: 77,
          },
        })
      }
    },
  },
}
