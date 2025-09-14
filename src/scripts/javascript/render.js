import './data-handling.js';
import { lastUpdated, updatedDate } from './helpers.js';

// Write the class for rendering the static podcasts data
export default class render {
    // Create the instance of this object using the DOM element that we intend to append the podcasts to
    constructor (podcastsContainer, podcastsArray) {
        this.podcastsContainer = podcastsContainer;
        this.podcasts = podcastsArray;
    }
    // Create the render method 
    // Need to create the method for this creation of dom elements and loop through all podcasts
    renderPodcastsCard () {
        // Clear the old to avoid duplicates
        this.podcastsContainer.innerHTML = '';
        this.podcasts.forEach (podcast => {
            // Loop the arrays and create the DOM elements to display the specific data
            // Need from podcasts array: cover img, title, amount of seasons, geners, last updated
            const podcastCard = document.createElement('div');
            podcastCard.dataset.podcast = podcast.id;

            const podcastCardClasses = 'podcast-card-mobile podcast-card-desktop modal-btn';  

            // Split by spaces into an array, then spread into classList.add
            //el.classList.add(...classes.split(" "));
            podcastCard.classList.add(...podcastCardClasses.split(' '));

            const podcastCoverImg = document.createElement('img');
            podcastCoverImg.src = podcast.image;
            podcastCoverImg.alt = `${podcast.title}: Cover Image`;

            const podcastTitle = document.createElement('div');
            podcastTitle.innerHTML = podcast.title;

            const podcastSeasons = document.createElement('div');
            podcastSeasons.innerHTML = `${podcast.seasons} Seasons`

            const podcastGenres = document.createElement('div');
            podcast.genreNames.forEach(genreName => {
                const genre = document.createElement('div');
                genre.classList.add('genre-display-styling');
                genre.innerHTML = genreName.title;
                podcastGenres.append(genre);
            });

            const podcastLastUpdated = document.createElement('div');
            podcastLastUpdated.innerHTML = `Updated ${lastUpdated(podcast.updated)}`;

            podcastCard.append(podcastCoverImg, podcastTitle, podcastSeasons, podcastGenres, podcastLastUpdated);
            // Append to podcastsContainer
            this.podcastsContainer.append(podcastCard);
        });
    }

    renderPodcastsModal (podcastId) { // Parse the object id and filter for only that podcast
        const podcast = this.podcasts.find(podcast => podcast.id === podcastId);
        // Create the modal container DOM element
        const podcastModalContainer = document.createElement('div');
        podcastModalContainer.classList.add('podcast-modal-mobile'); // Add the sm: styling if needed
        podcastModalContainer.id = 'podcast-modal-container-id'; 
        // Create and populate the DOM elements for the podcast data
            // Title
            const podcastModalTitle = document.createElement('div')
            podcastModalTitle.innerHTML = podcast.title; 
            // Large cover img
            const podcastModalImg = document.createElement('img');
            podcastModalImg.src = podcast.image;
            podcastModalImg.alt = `${podcast.title}: Cover Image`;
            // Description
            const podcastDescription = document.createElement('div');
            podcastDescription.innerHTML = podcast.description; 
            // Genres
            const podcastModalGenres = document.createElement('div');
            podcastModalGenres.innerHTML = 'Genres';
            podcast.genreNames.forEach(genreName => {
                const genreModal = document.createElement('div');
                genreModal.classList.add('genre-display-styling');
                genreModal.innerHTML = genreName.title;
                podcastModalGenres.append(genreModal);
            });
            // Last updated as a normal date
            const podcastUpdatedDate = document.createElement('div');
            podcastUpdatedDate.innerHTML = `Last Updated: ${updatedDate(podcast.updated)}`;
            podcastModalContainer.append(podcastUpdatedDate);
            // Seasons heading - Season (season number), season information like episodes and title
            const podcastModalSeasons = document.createElement('div');
            podcastModalSeasons.innerHTML = 'Seasons';
            podcast.seasonsData.forEach(season => {
                season.seasonDetails.forEach(season => {
                    const seasonTitle = document.createElement('div');
                    seasonTitle.innerHTML = season.title;
                    const seasonEpisodes = document.createElement('div');
                    seasonEpisodes.innerHTML = `Episodes: ${season.episodes}`;
                    podcastModalSeasons.append(seasonTitle, seasonEpisodes);
                })
            });
            // Create the exit button and the helper function to exit the modal
            const exit = document.createElement('img');
            exit.src = './src/images/exit.png';
            exit.classList.add('exit-btn');
            exit.id = 'exit-btn-id';
            // Create and reveal the backdrop to focus the viewer on the modal
            const overlay = document.createElement('div');
            overlay.classList.add('backdrop');
            overlay.id = 'overlay-id';
        podcastModalContainer.append(podcastModalTitle, podcastModalImg, podcastDescription, podcastModalGenres, podcastModalSeasons, exit);
        this.podcastsContainer.append(podcastModalContainer, overlay);
    }

    removePodcastsModal () {
        const targetRemove = this.podcastsContainer.querySelector('#podcast-modal-container-id');
        if (targetRemove) {
            targetRemove.remove();
        }
    }
} 