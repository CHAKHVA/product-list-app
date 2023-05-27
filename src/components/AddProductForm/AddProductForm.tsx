import React, {useState, forwardRef} from "react";
import "./AddProductForm.scss";
import AddBook from "../AddBook/AddBook";
import AddDVD from "../AddDVD/AddDVD";
import AddFurniture from "../AddFurniture/AddFurniture";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const API_KEY = "https://juniortest-aleksandre-chakhvashvili.000webhostapp.com" || "http://localhost:8000"


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
        const [uniqueSKU, setUniqueSKU] = useState<string>("");
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

        const AddProductSwitch: Record<string, JSX.Element> = {
            "DVD": <AddDVD handleInputChange={handleInputChange}/>,
            "Book": <AddBook handleInputChange={handleInputChange}/>,
            "Furniture": <AddFurniture handleInputChange={handleInputChange}/>
        }

        const renderComponentByValue = (value: string) => {
            return AddProductSwitch[value];
        };

        const validateForm = () => {
            const { sku, name, price, product_type, size, weight, height, length, width } = productData;

            const isDVD = product_type === "DVD";
            const isBook = product_type === "Book";
            const isFurniture = product_type === "Furniture";

            const isInvalidSKU = sku.length === 0;
            const isInvalidName = name.length === 0;
            const isInvalidPrice = price.toString().length === 0;
            const isInvalidDVDSize = isDVD && (size === undefined || size?.toString().length === 0);
            const isInvalidBookWeight = isBook && (weight === undefined || weight?.toString().length === 0);
            const isInvalidFurnitureDimensions =
                    isFurniture &&
                    (height === undefined || length === undefined || width === undefined ||
                    height?.toString().length === 0 ||
                    length?.toString().length === 0 ||
                    width?.toString().length === 0)

            return !(
                isInvalidSKU ||
                isInvalidName ||
                isInvalidPrice ||
                isInvalidDVDSize ||
                isInvalidBookWeight ||
                isInvalidFurnitureDimensions
            );
        }

        const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const jsonData = JSON.stringify(productData);
            if (validateForm()) {
                const response = await axios.post(`${API_KEY}/api/create_product.php`, jsonData);
                if (response.data.message === "SKU must be UNIQUE!") {
                    setUniqueSKU("SKU must be UNIQUE!")
                } else {
                    setUniqueSKU("");
                    navigate("/");
                }
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
                {renderWarning && <div>Please, submit required data</div>}
                {uniqueSKU && <div>{uniqueSKU}</div>}
            </form>
        );
    }
);