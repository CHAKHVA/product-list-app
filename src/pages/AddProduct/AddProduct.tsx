import React, {useRef} from "react";
import AddProductHeader from "../../components/Header/AddProductHeader";
import { AddProductForm } from "../../components/AddProductForm/AddProductForm";

export default function AddProduct() {
    const formRef = useRef<HTMLFormElement>(null);

    const handleButtonClick = () => {
        if (formRef.current) {
            formRef.current.requestSubmit();
        }
    };
  return (
    <>
      <AddProductHeader handleClick={handleButtonClick}/>
      <AddProductForm ref={formRef} />
    </>
  );
}
