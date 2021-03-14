import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSupplement } from "../services/supplements";

export default function SupplementDetail(props) {
  const [supplementItem, setSupplementItem] = useState(null);
  const [vitamin, setVitamin] = useState({
    name: "",
    weight: "",
  });
  const { name, weight } = vitamin;
  const { id } = useParams();
  const { vitamins, addVitaServing } = props;

  useEffect(() => {
    const fetchSupplementItem = async () => {
      const supplementData = await getSupplement(id);
      setSupplementItem(supplementData);
    };
    fetchSupplementItem();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVitamin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    addVitaServing(id, vitamin);
  };

  return (
    <div>
      <h3>{supplementItem?.name}</h3>
      <h2>{supplementItem?.price}</h2>
      {supplementItem?.vitamins.map((vitamin) => (
        <p key={vitamin.id}>{vitamin.name}</p>
      ))}
      <form onSubmit={handleSubmit}>
        <select
          defaultValue="default"
          name="name"
          value={name}
          onChange={handleChange}
        >
          <option value="default" dsabled>
            --Select a Vitamin--
          </option>
          {vitamins.map((vitamin) => (
            <option value={vitamin.name} key={vitamin.id}>
              {vitamin.name}
            </option>
          ))}
        </select>
        <label htmlFor="amount per serving, milligrams">
          Amount per serving (in milligrams):
          <input
            onChange={handleChange}
            type="number"
            name="weight"
            value={weight}
          />
        </label>
        <button>add</button>
      </form>
    </div>
  );
}
