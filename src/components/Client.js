const Client = () => {
    return (<div className="flex flex-col gap-4 items-center py-8">
        <span className="font-bold text-lg sm:text-xl text-gray-700">Trusted By 1k+ Company Arround The World!</span>
        <div className="flex flex-wrap gap-8 justify-center">
            <img alt="amazon" className="h-8" src="./images/logos/amazon.svg" />
            <img alt="shopify" className="h-8" src="./images/logos/shopify.svg" />
            <img alt="paypal" className="h-8" src="./images/logos/paypal.svg" />
            <img alt="google" className="h-8" src="./images/logos/google.svg" />
        </div>
    </div>)
}

export default Client;