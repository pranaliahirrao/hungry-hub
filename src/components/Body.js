import React from "react";
import RestaurantCard from "./RestaurantCard";
import {restaurantList} from '../utils/swiggyData'

const Body = () => {
    const resObj =  {
        info: {
          id: "243625",
          name: "KFC",
          cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
          locality: "Deccan Gymkhana",
          areaName: "Deccan Gymkhana",
          costForTwo: "₹400 for two",
          cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
          avgRating: 4,
          feeDetails: {
            restaurantId: "243625",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 4200,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 4200,
          },
          parentId: "547",
          avgRatingString: "4.0",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 24,
            lastMileTravel: 2,
            serviceability: "SERVICEABLE",
            slaString: "24 mins",
            lastMileTravelString: "2.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-11-26 01:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {
          context: "seo-data-5f5dc7c3-70b8-4e93-965b-2b50ca7d9687",
        },
        cta: {
          link: "https://www.swiggy.com/restaurants/kfc-deccan-gymkhana-pune-243625",
          text: "RESTAURANT_MENU",
          type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
      };


  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
      {
        restaurantList.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        )) 
      }
      </div>
    </div>
  );
};

export default Body;
