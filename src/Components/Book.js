function Book() {
    return (
        <>
            <div className="container">
                <h1>Booking Details</h1>
                <main className="main">
                    <form>
                        <div className="form-group">
                            <label htmlFor='date'>Date:</label>
                            <input className='form-contorl' type='date' name='date' id='date' required />
                        </div>
                        <div className="form-group">
                            <label htmlFor='time'>Time:</label>
                            <input className='form-contorl' type='time' name='time' id='time' required />
                        </div>
                        <div className="form-group">
                            <label htmlFor='guests'>Numbe of Guests:</label>
                            <input className='form-contorl' type='number' name='guests' id='guests' min="0" max="8" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor='notes'>Notes:</label>
                            <textarea className='form-contorl' type='text' name='notes' id='notes' required />
                        </div>
                        <div className="form-group">
                            <button type='submit'>Book Now!</button>
                        </div>
                    </form>
                </main>
            </div>
        </>
    )
}

export default Book;