export default function ProductDetails({params}:{params:{productId:string}}){
    return <h3>Product Details Page {params.productId}</h3>
}