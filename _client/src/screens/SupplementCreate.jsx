import { useState } from "react";
import MyButton from "../components/MyButton";

export default function SuplementCreate(props) {
  const [formData, setFormData] = useState({
    name: "",
    image_url: "",
    nutrition_label_url: "",
    price: "",
    retail_url: "",
    brand_id: "",
  });
  const {
    name,
    image_url,
    nutrition_label_url,
    price,
    retail_url,
    brand_id,
  } = formData;
  const { handleCreate, brands } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate(formData);
      }}
    >
      <h3>Create Supplement</h3>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Brand:
        <select
          defaultValue="default"
          value={brand_id}
          name="brand_id"
          onChange={handleChange}
        >
          <option value="default" disabled="true">
            --Select a Brand--
          </option>
          {brands.map((brand) => (
            <option value={brand.id} key={brand.id}>
              {brand.name}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={price}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Image URL:
        <input
          type="text"
          name="image_url"
          value={image_url}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Nutrition Label URL:
        <input
          type="text"
          name="nutrition_label_url"
          value={nutrition_label_url}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Retail URL:
        <input
          type="text"
          name="retail_url"
          value={retail_url}
          onChange={handleChange}
        />
      </label>
      <br />
      <MyButton>Submit</MyButton>
    </form>
  );
}
