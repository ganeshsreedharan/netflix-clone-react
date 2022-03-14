import './PlansScreen.css'
import React, { useState } from 'react'
import { IProduct, ISubscription, IUser } from '../../shared/ICommonMovie';

const PlansScreen:React.FC = () => {

    const loadCheckout = async (priceId:string) => {
        console.log("loadCheckout")
    }

    const [products, setProducts] = useState([]);
    const user:IUser = {
        email:"ganesh@dd.com",
        uid:'test'
    } ;
    const product:IProduct={
        productId:'erettcccff',
        name:'Monthly pack',
        description:"4 USD per month",
        prices:{
            priceId:'122'
        }
    };
    const initSubscription:ISubscription ={
        current_period_end :30*45*12
    }

    const [subscription, setSubscription] = useState<ISubscription>();
    const isCurrentPackage = true;

  return (
    <div className="plansScreen">
        <p>
          Renewal date:{" "}
          {new Date(
            initSubscription?.current_period_end * 1000
          ).toLocaleDateString()}
        </p>
        <div
            key={product.productId}
            className={`${
              isCurrentPackage && "plansScreen__plan--disabled"
            } plansScreen__plan`}
          >
            <div className="plansScreen__info">
              <h5>{product.name}</h5>
              <h6>{product.description}</h6>
            </div>

            <button
              onClick={() =>
                !isCurrentPackage && loadCheckout(product.prices.priceId)
              }
            >
              {isCurrentPackage ? "Current Package" : "Subscribe"}
            </button>
          </div>
    </div>
  )
}

export default PlansScreen