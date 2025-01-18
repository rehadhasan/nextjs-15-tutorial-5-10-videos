import {notFound} from "next/navigation";

type ProductReviewProps = {
    params: {
        productId: string;
        reviewId: string;
    }
}

export default async function ProductReview({params}: ProductReviewProps) {
    const {productId, reviewId} = params;
    if(parseInt(reviewId) > 1000){
        return notFound()
    }
    return <h1>Review {reviewId} for Product {productId}</h1>
}