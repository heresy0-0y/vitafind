import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSupplement } from "../services/supplements";
import { addSupplementToVitamin } from "../services/vitaminsSupplements";

export default function SupplementDetail(props) {
  const [supplementItem, setSupplementItem] = useState(null);
  const [selectedVitamin, setSelectedVitamin] = useState("");
  const { id } = useParams();
  const { vitamins } = props;

  useEffect(() => {
    const fetchSupplementItem = async () => {
      const supplementData = await getSupplement(id);
      setSupplementItem(supplementData);
    };
    fetchSupplementItem();
  }, [id]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedVitamin(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const supplementData = await addSupplementToVitamin(selectedVitamin, id);
    setSupplementItem(supplementData);
  };

  return (
    <div>
      <h3>{supplementItem?.name}</h3>
      <h2>{supplementItem?.price}</h2>
      {supplementItem?.vitamins.map((vitamin) => (
        <p key={vitamin.id}>{vitamin.name}</p>
      ))}
      <form onSubmit={handleSubmit}>
        <select defaultValue="default" onChange={handleChange}>
          <option value="default" dsabled>
            --Select a Vitamin--
          </option>
          {vitamins.map((vitamin) => (
            <option value={vitamin.id} key={vitamin.id}>
              {vitamin.name}
            </option>
          ))}
        </select>
        <button>add</button>
      </form>
    </div>
  );
}
