import React from "react";
import { Link } from "react-router-dom";

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
              <Link to={`/supplements/${supplement.id}/edit`}>
                <button>edit</button>
              </Link>
              <button onClick={() => handleDelete(supplement.id)}>
                delete
              </button>
            </>
          }
        </React.Fragment>
      ))}
      <br />
      <Link to="/supplement/new">
        <button>Create</button>
      </Link>
    </div>
  );
}
