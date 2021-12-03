import Comment from "./Comment"

export default function Comments({ reviews }) {
    return (
        <ul>
            {reviews?.map(review => <Comment key={review.id} review={review}/>)}
        </ul>
    )
}