const GOOGLE_API_KEY = "AIzaSyCDDAe77DOZQ-FWcCPlqlpWdCKdAIj6Tjk";
export const YOUTUBE_VIDEOS_APIS = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;
export const YOUTUBE_COMMENT_API = `https://www.googleapis.com/youtube/v3/commentThreads?key=${GOOGLE_API_KEY}&textFormat=plainText&part=snippet&videoId=`;
