export default function ProductReview({params}:{params:{productId:string,reviewId:string}}){
    return <h3>Product Details Page {params.productId} and Review Id {params.reviewId}</h3>
}