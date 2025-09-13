import './data-handling.js';
import { lastUpdated } from './helpers.js';

// Write the class for rendering the static podcasts data
export default class render {
    // Create the instance of this object using the DOM element that we intend to append the podcasts to
    constructor (podcastsContainer) {
        this.podcastsContainer = podcastsContainer;
    }
    // Create the render method 
    // Need to create the method for this creation of dom elements and loop through all podcasts
    renderPodcastsCard (podcasts) {
        // Clear the old to avoid duplicates
        this.podcastsContainer.innerHTML = '';
        podcasts.forEach (podcast => {
            // Loop the arrays and create the DOM elements to display the specific data
            // Need from podcasts array: cover img, title, amount of seasons, geners, last updated
            podcastCard = document.createElement('div');
            const podcastCardClasses = 'podcast-card-mobile podcast-card-desktop';  

            // Split by spaces into an array, then spread into classList.add
            //el.classList.add(...classes.split(" "));
            podcastCard.classList.add(...podcastCardClasses.split(' '));

            podcastCoverImg = document.createElement('img');
            podcastCoverImg.src = podcast.img;
            podcastCoverImg.alt = `${podcast.title}: Cover Image`;

            podcastTitle = document.createElement('div');
            podcastTitle.innerHTML = podcast.title;

            podcastSeasons = document.createElement('div');
            podcastSeasons.innerHTML = `${podcast.seasons} Seasons`

            podcastGenres = document.createElement('div');
            podcast.genreNames.forEach(genreName => {
                const genre = document.createElement('div');
                genre.classList.add('genre-display-styling');
                genre.innerHTML = genreName;
                podcastGenres.append(genre);
            });

            podcastLastUpdated = document.createElement('div');
            podcastLastUpdated.innerHTML = lastUpdated(podcast.updated);

            podcastCard.append(podcastCoverImg, podcastTitle, podcastSeasons, podcastGenres, podcastLastUpdated);
            // Append to podcastsContainer
            this.podcastsContainer.append(podcastCard);
        });
    }
} 


/* Render class and methods
    take the combined data array as the argument
    create the dom elements
    style the dom elements
    create a seperate render method for each element section (modal & podcast card for eg)
    remember that updates need to occur without a reload of the browser*/


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
