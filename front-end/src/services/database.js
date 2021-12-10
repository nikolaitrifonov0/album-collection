import request from "./request";

const headers = { "content-type": "application/json" };

const reviewUrl = 'https://localhost:5001/albums/review';
const editReviewUrl = 'https://localhost:5001/albums/edit/';
const deleteReviewUrl = 'https://localhost:5001/albums/delete/';
const likeReviewUrl = 'https://localhost:5001/albums/like';
const getAllReviewsUrl = 'https://localhost:5001/albums/getall/';
const getReviewUrl = 'https://localhost:5001/albums/getone/';
const collectionUrl = 'https://localhost:5001/albums/collection/';

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

export function editAlbumReview(id, albumId, userId, comment, rating) {
    return request(editReviewUrl + id, 'put', 
        headers,
        JSON.stringify({
            'id' : id,
            'albumId' : albumId,
            'userId': userId,
            'rating': rating,
            'comment': comment            
        })
    );
}

export function likeReview(reviewId, userId) {
    return request(likeReviewUrl, 'post', 
        headers,
        JSON.stringify({
            'reviewId' : reviewId,
            'userId': userId          
        })
    );
}

export function deleteReview(albumId) {
    return request(deleteReviewUrl + albumId, 'delete');
}

export function getAllReviews(albumId) {
    return request(getAllReviewsUrl + albumId);
}

export function getOneReview(albumId) {
    return request(getReviewUrl + albumId);
}

export function getCollection(userId) {
    return request(collectionUrl + userId);
}