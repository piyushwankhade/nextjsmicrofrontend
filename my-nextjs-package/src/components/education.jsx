"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

async function fetchData(payload) {
  try {
    const response = await axios.get(
      `https://dev.tii.cloud.sitefinity.com/api/default/${payload}?$select=*&$expand=*`
    );
    console.log("Response:", response);
    return response.data.value;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

const Education = ({ content }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const result = await fetchData("educationCenters");
      setData(result);
    };

    fetchAPI();
  }, []);

  return (
    <div>
      <h1>{content ? content : "Default Content"}</h1>

      <div className="row cardList">
        {data.length > 0 &&
          data.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100">
                <div className="imageWrapper">
                  <img
                    src={
                      "https://dev.tii.cloud.sitefinity.com/" +
                      item.Image[0].Url
                    }
                    alt={item.Image[0].AlternativeText}
                    width={item.Image[0].Width}
                    height={item.Image[0].Height}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold">{item.Title}</h5>
                  <p className="card-text ">{item.SubTitle}</p>
                  {item.DetailPageUrl && (
                    <button
                      className="btn moreLink text-decoration-none"
                      onClick={() =>
                        handleClick(JSON.parse(item.DetailPageUrl)[0].href)
                      }
                    >
                      Read More
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Education;
