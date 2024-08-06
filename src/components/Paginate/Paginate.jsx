const Paginate = ({todosLength, pageWindow, pageNum, setPageNum}) => {
    const lastPage = Math.ceil(todosLength/pageWindow)
    const handleNext = () => setPageNum(pageNum+1)
    const handlePrevious = () => setPageNum(pageNum-1)
    const handleFirst = () => setPageNum(1)
    const handleLast = () => setPageNum(lastPage)

    return (
        <>
            <button onClick={handleFirst} disabled={pageNum<=1}>First</button>
            <button onClick={handlePrevious} disabled={pageNum<=1}>Previous</button>
            <button onClick={handleNext} disabled={pageNum>=lastPage}>Next</button>
            <button onClick={handleLast} disabled={pageNum>=lastPage}>Last</button>
        </>
    )
}

export default Paginate