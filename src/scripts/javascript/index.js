// Save the data using the class from the dataManager class

import { genres, podcasts, seasons } from "./data";
import dataManager from "./data-handling";
import relationalMapper from "./relational-mapper";
import render from "./render";

// Save the static arrays to local storage as it makes it easier to filter for relational data after saved

// Save the podcasts array to local storage
dataManager.saveDataLocal('podcasts', podcasts);
// Save the Genres array to local storage
dataManager.saveDataLocal('genres', genres);
// Save the Seasons array to local storage
dataManager.saveDataLocal('seasons', seasons);

const combinedArrayData = relationalMapper.combineStaticArrays(podcasts, genres, seasons);

// Build the render class now and call render podcast card, podcast modal, etc on the combined data array
const podcastsContainer = document.getElementById('podcasts-container');
const renderer = new render(podcastsContainer);
renderer.renderPodcastsCard(combinedArrayData);