import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SuplementEdit(props) {
  const [formData, setFormData] = useState({
    name: "",
    image_url: "",
    nutrition_label_url: "",
    price: "",
    retail_url: "",
  });
  const { name } = formData;
  const { supplements, handleUpdate } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const supplementItem = supplements.find(
        (supplement) => supplement.id === Number(id)
      );
      setFormData({
        name: supplementItem.name,
        price: supplementItem.price,
        image_url: supplementItem.image_url,
        nutrition_label_url: supplementItem.nutrition_label_url,
        retail_url: supplementItem.retail_url,
      });
    };
    if (supplements.length) {
      prefillFormData();
    }
  }, [supplements, id]);

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
        handleUpdate(formData);
      }}
    >
      <h3>Edit Supplement</h3>
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
