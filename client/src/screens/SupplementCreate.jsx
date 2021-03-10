import { useState } from "react";

export default function SuplementCreate(props) {
  const [formData, setFormData] = useState({
    name: "",
    image_url: "",
    nutrition_label_url: "",
    price: "",
    retail_url: "",
  });
  const { name } = formData;
  const { handleCreate } = props;

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
        Price:
        <input
          type="number"
          name="price"
          value={name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Image URL:
        <input
          type="text"
          name="image_url"
          value={name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Nutrition Label URL:
        <input
          type="text"
          name="nutrition_label_url"
          value={name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Retail URL:
        <input
          type="text"
          name="retail_url"
          value={name}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}
