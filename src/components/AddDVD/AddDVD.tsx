import React from 'react';

export default function AddDVD() {
    return (
        <div>
            <div>
                <label htmlFor="size">Size (MB)</label>
                <input type="text" id="size" name="size"/>
            </div>
            <p>Please provide size of the DVD in MBs.</p>
        </div>
    );
}
