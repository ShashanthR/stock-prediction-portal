import Button from './Button'

const Main = () => {
    return (
        <>
        <div className='container'>
            <div className='pt-3 text-center bg-light-dark'>
                <h1 className='text-light'>Stock Prediction Portal</h1>
                <p className='text-light pb-0'>Explore stock market data with tools designed to help you understand price trends. Enter a ticker to view historical performance, moving-average charts, model-based predictions, and evaluation metrics—all in one place. Use these insights to support your own research; predictions are estimates, not financial advice.</p>
                <p className='text-light pb-0'>Compare a stock's historical prices with its 100-day and 200-day moving averages to get another perspective on how its price has changed over time. These charts can help make patterns easier to explore, but past performance does not guarantee future results.</p>
                <Button text="Explore Now" className='btn-outline-info' url='/login' />
            </div>
        </div>
        </>
    )
}

export default Main
