import React, {useState, forwardRef} from "react";
import "./AddProductForm.scss";
import AddBook from "../AddBook/AddBook";
import AddDVD from "../AddDVD/AddDVD";
import AddFurniture from "../AddFurniture/AddFurniture";
import axios from "axios";
import {useNavigate} from "react-router-dom";

interface Props {
}

export interface IProduct {
    sku: string;
    name: string;
    price: number;
    product_type: string;
    size?: number;
    weight?: number;
    height?: number;
    width?: number;
    length?: number;
}

export const AddProductForm = forwardRef<HTMLFormElement, Props>((props, ref) => {
        const navigate = useNavigate();
        const [renderWarning, setRenderWarning] = useState<boolean>(false);
        const [selectedOption, setSelectedOption] = useState("DVD");
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
            console.log(productData);
            setRenderWarning(false);
        }

        const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
            setSelectedOption(event.target.value);
            setProductData({
                ...productData,
                product_type: event.target.value,
                size: undefined,
                weight: undefined,
                height: undefined,
                length: undefined,
                width: undefined
            });
            setRenderWarning(false);
        };

        const renderComponentByValue = (value: string) => {
            switch (value) {
                case 'DVD':
                    return <AddDVD handleInputChange={handleInputChange}/>;
                case 'Book':
                    return <AddBook handleInputChange={handleInputChange}/>;
                case 'Furniture':
                    return <AddFurniture handleInputChange={handleInputChange}/>;
                default:
                    return null;
            }
        };

        const validateForm = () => {
            return !(productData.sku.length === 0 || productData.name.length === 0 || productData.price.toString().length === 0 || (productData.product_type === "DVD" && (productData.size?.toString().length === 0 || productData.size?.toString() === "e")) || (productData.product_type === "Book" && (productData.weight?.toString().length === 0 || productData.weight?.toString() === "e")) || (productData.product_type === "Furniture" && (productData.height?.toString().length === 0 || productData.height?.toString() === "e" || productData.length?.toString().length === 0 || productData.length?.toString() === "e" || productData.width?.toString().length === 0 || productData.width?.toString() === "e")));
        }

        const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            if (validateForm()) {
                await axios.post("http://localhost:8000/api/create_product.php", productData);
                navigate("/");
            } else {
                setRenderWarning(true);
            }
        };

        return (
            <form method="post" id="product_form" ref={ref} onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="sku">SKU</label>
                    <input type="text" id="sku" name="sku" value={productData.sku} onChange={handleInputChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={productData.name} onChange={handleInputChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price ($)</label>
                    <input type="number" id="price" name="price" value={productData.price} onChange={handleInputChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="product_type">Type Switcher</label>
                    <div className="product_type">
                        <select id="productType" name="product_type" onChange={handleOptionChange}>
                            <option id="DVD" value="DVD">DVD</option>
                            <option id="Book" value="Book">Book</option>
                            <option id="Furniture" value="Furniture">Furniture</option>
                        </select>
                    </div>
                </div>
                {renderComponentByValue(selectedOption)}
                {renderWarning && <div>Please fill required fields!</div>}
            </form>
        );
    }
);