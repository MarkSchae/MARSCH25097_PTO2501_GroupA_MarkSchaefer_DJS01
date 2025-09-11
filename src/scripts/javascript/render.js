import './data-handling.js';

// Write the class for rendering the static podcasts data
export default class render {
    // Create the instance of this object using the DOM element that we intend to append the podcasts to
    constructor (podcastsContainer) {
        this.podcastsContainer = podcastsContainer;
    }
    // Create the render method 
    renderPodcasts (podcasts) {
        // Clear the old to avoid duplicates
        this.podcastsContainer,innerHTML = '';
        // Loop the arrays and create the DOM elements to display the specific data
    }
} 



// Example code for oop
/* services/PlayerUI.js
export  class PlayerUI {
  constructor(container) {
    this.container = container; // DOM element to render into
  }

  render(players) {
    this.container.innerHTML = ""; // clear previous
    players.forEach(p => {
      const div = document.createElement("div");
      div.textContent = `${p.name} (${p.type})`;
      this.container.appendChild(div);
    });
  }
}*/
