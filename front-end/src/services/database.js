import request from "./request";

const headers = { "content-type": "application/json" };

const reviewUrl = 'https://localhost:5001/albums/review';
const albumReviewsUrl = 'https://localhost:5001/albums/reviews/';

export function reviewAlbum(albumId, userId, comment, rating) {
    return request(reviewUrl, 'post', 
        headers,
        JSON.stringify({
            'albumId' : albumId,
            'userId': userId,
            'rating': rating,
            'comment': comment            
        })
    );
}

export function getReviews(albumId) {
    return request(albumReviewsUrl + albumId);
}