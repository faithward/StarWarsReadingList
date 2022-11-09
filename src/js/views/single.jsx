import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Single = () => {
  const { store, actions } = useContext(Context);
  console.log(store.singleEntry);
  return (
    <>
        {store.singleEntry.uid ?
            <div className="card mb-3" style={{maxWidth: '540px'}}>
            <div className="row g-0">
              <div className="col-md-4">
                {store.singleEntry.description.includes('person') ? 
                    <img src={store.baseImgURL + '/characters/' + store.singleEntry.uid + '.jpg'} className="img-fluid rounded-start" alt="..."></img>
                    :
                    <img src={store.baseImgURL + '/planets/' + store.singleEntry.uid + '.jpg'} className="img-fluid rounded-start" alt="..."></img>
                }
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{store.singleEntry.properties.name}</h5>
                  <p className="card-text">
                    {store.singleEntry.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          :
          <Link to='/'>
            <p>Whoops! Click to return to first page</p>
          </Link>
        }
    </>
    
  );
};
