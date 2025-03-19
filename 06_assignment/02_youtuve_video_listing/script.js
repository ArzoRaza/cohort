const videoContainerEl = document.querySelector(".video-container");
const searchInput = document.getElementById("search-value");
const searchBtn = document.getElementById("search");
const loadMoreBtn = document.getElementById("load-more");
let videosData = [];
let currentPage = 1;
let isSearchActive = false;

// Fetch video data from the API(MAIN PART OF THE PROJECT)
const fetchVideosInfo = async ({ limit = 20, page = 1, sortBy = "latest" }) => {
    try {
        const response = await fetch(
            `https://api.freeapi.app/api/v1/public/youtube/videos?limit=${limit}&page=${page}&sortBy=${sortBy}`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching videos:", error);
        return null;
    }
};

// Calculate time since video was published(kitni purani video hai bhai)
const timeAgo = (date) => {
    const now = new Date();
    const seconds = Math.floor((now - new Date(date)) / 1000);

    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1,
    };

    for (let key in intervals) {
        const count = Math.floor(seconds / intervals[key]);
        if (count >= 1) {
            return `${count} ${key}${count > 1 ? "s" : ""} ago`;
        }
    }
    return "Just now";
};

// not to much focus it's just HTML added code for best visual
const generateCard = (cardDetails) => {
    return `
        <div class="card">
            <div class="image-wrapper">
                <a href="https://www.youtube.com/watch?v=${cardDetails?.id}" target="_blank">
                    <img src="${cardDetails?.snippet?.thumbnails?.high?.url}" alt="" />
                </a>
            </div>
            <div class="content-wrapper">
                <div class="user">
                    <img src="${cardDetails?.snippet?.thumbnails?.default?.url}" alt="" />
                </div>
                <div class="content">
                    <h3><a href="https://www.youtube.com/watch?v=${cardDetails?.id}" target="_blank">${cardDetails?.snippet?.title}</a></h3>
                    <a href="https://www.youtube.com/channel/${cardDetails?.snippet?.channelId}" target="_blank">${cardDetails?.snippet?.channelTitle}</a>
                    <p class="channel-analytics-info">
                        <span>${cardDetails?.statistics?.viewCount} views</span>
                        <span class="dot-separator">&#9679;</span>
                        <span>${timeAgo(cardDetails?.snippet?.publishedAt)}</span>
                    </p>
                </div>
            </div>
        </div>
    `;
};

// Display videos in the container
const displayVideos = async (page = 1) => {
    const videoDetails = await fetchVideosInfo({ limit: 20, page });
    if (!videoDetails || !videoDetails.data?.data) {
        videoContainerEl.innerHTML = '<h1 style="text-align: center; color: #ff0000;">Failed to fetch videos. Please try again later.</h1>';
        return;
    }

    const newVideos = videoDetails.data.data;
    videosData = [...videosData, ...newVideos]; 

    let cards = "";
    videosData.forEach((details) => {
        if (details.items) {
            cards += generateCard(details.items);
        }
    });

    videoContainerEl.innerHTML = cards;

    // Disable LOAD MORE button if no more videos are available
    if (newVideos.length < 20) {
        loadMoreBtn.disabled = true;
        loadMoreBtn.textContent = "No more videos";
    }
};

// Search and filter videos
const searchVideos = () => {
    const searchText = searchInput.value.toLowerCase();
    let cards = "";

    const filteredVideos = videosData.filter((video) => {
        return (
            video.items.snippet.title.toLowerCase().includes(searchText) ||
            video.items.snippet.channelTitle.toLowerCase().includes(searchText)
        );
    });

    if (filteredVideos.length > 0) {
        filteredVideos.forEach((details) => {
            cards += generateCard(details.items);
        });
    } else {
        cards = '<h1 style="text-align: center; color: #666;">No videos found.</h1>';
    }

    videoContainerEl.innerHTML = cards;
    isSearchActive = true;
};

// Load more videos
loadMoreBtn.addEventListener("click", () => {
    if (isSearchActive) {
        isSearchActive = false;
        currentPage = 1;
        videosData = [];
    }
    currentPage++;
    displayVideos(currentPage);
});

window.onload = () => displayVideos(currentPage);
searchBtn.addEventListener("click", searchVideos);
searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searchVideos();
    }
});