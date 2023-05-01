import React, {ChangeEvent} from 'react';

interface Props {
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function AddBook({ handleInputChange }: Props) {
    return (
        <div>
            <div className="form-group">
                <label htmlFor="weight">Weight (KG)</label>
                <input type="number" id="weight" name="weight" onChange={handleInputChange}/>
            </div>
            <p>Please provide weight of the Book in KGs.</p>
        </div>
    );
}
