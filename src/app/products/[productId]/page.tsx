type ProductDetailsProps = {
    params: {
        productId: string;
    }
}

export default async function ProductDetails({params}: ProductDetailsProps){
    const {productId} = params;
    return <h1>Details About Product {productId}</h1>
}