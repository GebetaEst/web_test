const NotFoundPage = () => {
    return ( 
        <>
        <div className="h-[100vh] w-full border flex items-center justify-center text-center">
            <div className="flex flex-col items-center justify-center gap-4">
                <h1>404</h1>
            <p>Page Not Found</p>
            <button className="bg-primary text-white font-semibold p-2 hover:bg-white hover:text-black transform duration-200 rounded-lg w-[100px] border-gray shadow-inner  border" onClick={() => window.history.back()}>Go Back</button>
            <div className="bg-[url('/src/assets/images/404.jpg')] h-[300px] w-[300px] bg-contain bg-center bg-no-repeat">
            </div>
            </div>
        </div>
        </>
     );
}
 
export default NotFoundPage;