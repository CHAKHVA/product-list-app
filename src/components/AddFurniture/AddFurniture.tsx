import React from 'react';

export default function AddFurniture() {
    return (
        <div>
            <div>
                <label htmlFor="height">Height (CM)</label>
                <input type="text" id="height" name="height" />
            </div>
            <div>
                <label htmlFor="width">Width (CM)</label>
                <input type="text" id="width" name="width" />
            </div>
            <div>
                <label htmlFor="length">Length (CM)</label>
                <input type="text" id="length" name="length" />
            </div>
            <p>Please provide dimension of the Furniture in HxWxLx format.</p>
        </div>
    );
}
