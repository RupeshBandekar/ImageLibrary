import React, { useState, useEffect } from "react";
import { Cities, Sources } from "./Constants";
import "./imageLibrary.css";
const SERVER_URL = "http://localhost:3001";

function ImageLibrary() {

    const [images, setImages] = useState([]);

    useEffect(() => {
        fetchImages();
    }, []);

    useEffect(() => {
        const pushImages = setTimeout(() => {
            syncImages();
        }, 30000)
    
        return () => clearTimeout(pushImages)
    }, [images]);

    const fetchImages = async () => {
        try {
          const response = await fetch(`${SERVER_URL}/api/images`);
          if (!response.ok) {
            throw new Error("Network response was not ok.");
          }
          const data = await response.json();
          setImages(data);        
        } catch (error) {
            console.error(error);
        }
      };

    const syncImages = async () => {
        try {
            const options = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(images)
              };
            const response = await fetch(`${SERVER_URL}/api/images/sync`, options);
            if (!response.ok) {
              throw new Error("Network response was not ok.");
            }
            console.log("images synced");
          } catch (error) {
              console.error(error);
          }
    };

    const handleTitleChange = (id, event) => {
        setImages(images.map(image => {
            if (image.Id === id) {
                return {...image, Title: event.target.value};
            } else {
                return image;
            }
        }));
    };

    const handleSouceChange = (id, event) => {
        setImages(images.map(image => {
            if (image.Id === id) {
                return {...image, SourceId: event.target.value};
            } else {
                return image;
            }
        }));
    };

    const handleCityChange = (id, event) => {
        setImages(images.map(image => {
            if (image.Id === id) {
                return {...image, CityId: event.target.value};
            } else {
                return image;
            }
        }));
    };

    const handleFavouriteChange = (id, event) => {
        const index = images.findIndex(x => x.Id === id);
        const newFavourite = !images[index].IsFavourite;  

        setImages(images.map(image => {
            if (image.Id === id) {
                return {...image, IsFavourite: newFavourite};
            } else {
                if (newFavourite === true) {
                    return {...image, IsFavourite: false};
                } else {
                    return image;
                }
            }
        }));
    };

    return(
        <div className="content">
            {images.map((item) => (
                <div className="list-view">
                    <img key={item.Id} src={`${SERVER_URL}/images/${item.ImageId}`} alt={`Image ${item.Id}`} />
                    <div>
                        <label key={item.Id}>
                        <div className="left">
                        Title: 
                        </div>
                        <div className="right">
                        <input key={item.Id} value={item.Title} type="input" onChange={(e) => handleTitleChange(item.Id, e)}/> 
                        </div>
                        </label>
                    </div>
                    <div>
                        <label key={item.Id}>
                        <div className="left">
                        Source: 
                        </div>
                        <div className="right">
                        <select key={item.Id} value={item.SourceId} onChange={(e) => handleSouceChange(item.Id, e)}>
                            <option key={`${item.Id}-0`} value={0}>{"Select Source"}</option>
                            {Sources.map((source) => (
                                <option key={`${item.Id}-${source.value}`} value={source.value}>{source.text}</option>
                            ))}
                        </select>
                        </div>
                        </label>
                    </div>
                    <div>
                        <label key={item.Id}>
                        <div className="left">
                        City: 
                        </div>
                        <div className="right">
                        <select key={item.Id} value={item.CityId} onChange={(e) => handleCityChange(item.Id, e)}>
                            <option key={`${item.Id}-0`} value={0}>{"Select City"}</option>
                            {Cities.map((city) => (
                                <option key={`${item.Id}-${city.value}`} value={city.value}>{city.text}</option>
                            ))}
                        </select>
                        </div>
                        </label>
                    </div>
                    <div>
                        <label key={item.Id}>
                        <div className="left">
                        Is Favourite: 
                        </div>
                        <div className="right">
                        <input key={item.Id} value={item.IsFavourite} type="checkbox" onChange={(e) => handleFavouriteChange(item.Id, e)} checked={item.IsFavourite}/> 
                        </div>
                        </label>
                    </div>
                </div>
                ))}
        </div>
    )
};

export default ImageLibrary;