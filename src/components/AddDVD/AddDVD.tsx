import React, {ChangeEvent} from 'react';

interface Props {
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function AddDVD({ handleInputChange }: Props) {
    return (
        <div>
            <div className="form-group">
                <label htmlFor="size">Size (MB)</label>
                <input type="number" id="size" name="size" onChange={handleInputChange} />
            </div>
            <p>Please provide size of the DVD in MBs.</p>
        </div>
    );
}
