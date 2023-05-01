import React, {ChangeEvent} from 'react';

interface Props {
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function AddFurniture({ handleInputChange }: Props) {
    return (
        <div>
            <div className="form-group">
                <label htmlFor="height">Height (CM)</label>
                <input type="number" id="height" name="height" onChange={handleInputChange} />
            </div>
            <div className="form-group">
                <label htmlFor="width">Width (CM)</label>
                <input type="number" id="width" name="width" onChange={handleInputChange} />
            </div>
            <div className="form-group">
                <label htmlFor="length">Length (CM)</label>
                <input type="number" id="length" name="length" onChange={handleInputChange} />
            </div>
            <p>Please provide dimension of the Furniture in HxWxLx format.</p>
        </div>
    );
}
