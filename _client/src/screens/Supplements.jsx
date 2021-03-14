import React from "react";
import { Link } from "react-router-dom";
import MyButton from "../components/MyButton";

export default function Supplements(props) {
  const { supplements, handleDelete } = props;

  return (
    <div>
      <h3>Supplements</h3>
      {supplements.map((supplement) => (
        <React.Fragment key={supplement.id}>
          <Link to={`/supplement/${supplement.id}`}>
            <p>{supplement.name}</p>
          </Link>
          {
            <>
              <Link to={`/supplement/${supplement.id}/edit`}>
                <MyButton>edit</MyButton>
              </Link>
              <MyButton onClick={() => handleDelete(supplement.id)}>
                delete
              </MyButton>
            </>
          }
        </React.Fragment>
      ))}
      <br />
      <Link to="/supplement/new">
        <MyButton>Create</MyButton>
      </Link>
    </div>
  );
}
