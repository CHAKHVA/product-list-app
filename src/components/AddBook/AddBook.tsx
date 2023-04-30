import React from 'react';

export default function AddBook() {
    return (
        <div>
            <div>
                <label htmlFor="weight">Weight (KG)</label>
                <input type="text" id="weight" name="weight"/>
            </div>
            <p>Please provide weight of the Book in KGs.</p>
        </div>
    );
}
