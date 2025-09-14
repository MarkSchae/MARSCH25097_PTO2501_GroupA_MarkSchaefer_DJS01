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
            const podcastCardClasses = 'podcast-card-mobile podcast-card-desktop modal-btn';  

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

    renderPodcastsModal (podcast) { // Parse the object
        // Create the modal container DOM element
        const podcastModalContainer = document.createElement('div');
        podcastModalContainer.classList.add('podcast-modal-mobile'); // Add the sm: styling if needed
        // Create and populate the DOM elements for the podcast data
            // Title
            const podcastModalTitle = document.createElement('div')
            podcastModalTitle.innerHTML = podcast.title; 
            // Large cover img
            const podcastModalImg = document.createElement('img');
            podcastModalImg.src = podcast.img;
            podcastModalImg.alt = `${podcast.title}: Cover Image`;
            // Description
            const podcastDescription = document.createElement('div');
            podcastDescription.innerHTML = podcast.description; 
            // Genres
            const podcastModalGenres = document.createElement('div');
            podcast.genreNames.forEach(genreName => {
                const genreModal = document.createElement('div');
                genreModal.classList.add('genre-display-styling');
                genreModal.innerHTML = genreName;
                podcastModalGenres.append(genreModal);
            });
            // Last updated as a normal date
            // Seasons heading - Season (season number), season information like episodes and title
        // Create and reveal the backdrop to focus the viewer on the modal
        // Create the exit button and the helper function to exit the modal
    }
} 

/*<script>
    function detailedTasksView (task, taskDiv) {
  // Delete existing button elements
  const existingButton = document.getElementById('btn-save-changes');
  if (existingButton) {
    existingButton.remove();
  }
  const oldDeleteBtn = document.getElementById('delete-task-btn');
  if (oldDeleteBtn) {
    oldDeleteBtn.remove();
  }
  // Save changes/edits button
  const button = document.createElement('button');
  button.id = 'btn-save-changes';
  button.innerHTML = 'Save Changes';
  button.className = 'click-hover button-default';
  button.addEventListener('click', () => saveChanges(task, taskDiv));
  const detailedTaskCard = document.getElementById('detailed-task-card');
  // Delete/remove task
  const deleteBtn = document.createElement('button');
  deleteBtn.id = 'delete-task-btn';
  deleteBtn.innerHTML = 'Delete Task';
  deleteBtn.className = 'click-hover button-default';
  deleteBtn.addEventListener('click', () => deleteTask(task));
  detailedTaskCard.appendChild(deleteBtn);
  detailedTaskCard.appendChild(button);
  const overlay = document.getElementById('backdrop');
  if (detailedTaskCard.classList.contains('hidden')) {
    detailedTaskCard.classList.remove('hidden');
    detailedTaskCard.classList.add('detailed-card-styling');
    overlay.classList.remove('hidden');
    document.getElementById('edit-title').value = task.title;
    document.getElementById('edit-description').value = task.description;
    document.getElementById('edit-task-status').value = task.status;
    document.getElementById('edit-task-priority').value = task.priority;
  }
};

// Might need to moduralize the exit button function
// The function to return the page to normal when exiting the detailed view
function exitTasksView () {
  const detailedTaskCard = document.getElementById('detailed-task-card');
  const taskModal = document.getElementById('add-task-modal');
  const overlay = document.getElementById('backdrop'); 
  detailedTaskCard.classList.add('hidden');
  taskModal.classList.add('hidden');
  detailedTaskCard.classList.remove('detailed-card-styling');
  taskModal.classList.remove('detailed-card-styling');
  overlay.classList.add('hidden');
};
</script>


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
