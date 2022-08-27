const PageNotFound = () => {
    return (<div className={`animate-opacity flex justify-center min-h-screen`}>
        <div className="content-center grid">
            <img className="h-80" src="./images/undraw_page_not_found_re_e9o6.svg" alt="Error" />
            <p className="py-8 font-light justify-self-center">
                We are sorry, but the page you requested was not found
            </p>
        </div>
    </div>)
}

export default PageNotFound;