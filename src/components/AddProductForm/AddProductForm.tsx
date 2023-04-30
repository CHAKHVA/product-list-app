import React, {useState, forwardRef, ForwardRefRenderFunction} from "react";
import {Link} from "react-router-dom";
import "./AddProductForm.scss";
import AddBook from "../AddBook/AddBook";
import AddDVD from "../AddDVD/AddDVD";
import AddFurniture from "../AddFurniture/AddFurniture";
import axios from "axios";

interface Props {}

export interface IProduct {
    sku: string;
    name: string;
    price: number;
    product_type: "DVD" | "Book" | "Furniture";
    size?: number;
    weight?: number;
    height?: number;
    width?: number;
    length?: number;
}

export const AddProductForm = forwardRef<HTMLFormElement, Props>((props, ref) => {
        const [selectedOption, setSelectedOption] = useState('DVD');

        const [productData, setProductData] = useState<IProduct>({
            sku: "",
            name: "",
            price: 0,
            product_type: "DVD",
            size: undefined,
            weight: undefined,
            height: undefined,
            width: undefined,
            length: undefined
        });

        const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setProductData({
                ...productData,
                [event.target.name]: event.target.value
            });
        }

        const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
            setSelectedOption(event.target.value);
        };

        const renderComponentByValue = (value: string) => {
            switch (value) {
                case 'DVD':
                    return <AddDVD />;
                case 'Book':
                    return <AddBook />;
                case 'Furniture':
                    return <AddFurniture />;
                default:
                    return null;
            }
        };

        const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const response = await axios.post("http://localhost:8000/api/create_product.php", productData);
        };

        return (
            <form method="post" id="product_form" ref={ref} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="sku">SKU</label>
                    <input type="text" id="sku" name="sku" value={productData.sku} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={productData.name} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="price">Price ($)</label>
                    <input type="text" id="price" name="price" value={productData.price} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="product_type">Type Switcher</label>
                    <select id="productType" name="product_type" onChange={handleOptionChange}>
                        <option id="DVD" value="DVD">DVD</option>
                        <option id="Book" value="Book">Book</option>
                        <option id="Furniture" value="Furniture">Furniture</option>
                    </select>
                </div>
                {renderComponentByValue(selectedOption)}
            </form>
        );
    }
);