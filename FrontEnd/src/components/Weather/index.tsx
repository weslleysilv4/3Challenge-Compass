import React, { useEffect, useState } from "react";
import axios from "axios";

interface WeatherData {
  minTemp: number;
  maxTemp: number;
}

interface WeatherProps {
  city: string;
}

const WeatherComponent: React.FC<WeatherProps> = ({ city }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiKey = "37c4dcbec9494faeab372526240309";

    const today = new Date().toISOString().split("T")[0];

    const getWeatherData = async () => {
      try {
        const url = `https://api.weatherapi.com/v1/history.json?key=${apiKey}&q=${encodeURIComponent(
          city
        )}&dt=${today}`;

        const response = await axios.get(url);
        const dayData = response.data.forecast.forecastday[0].day;

        setWeatherData({
          minTemp: dayData.mintemp_c,
          maxTemp: dayData.maxtemp_c,
        });

        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setError("Failed to fetch weather data");
        setLoading(false);
      }
    };

    getWeatherData();
  }, [city]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className="bg-[#F7F8FA] p-5 rounded-md">
      <h2 className="text-lg font-bold text-primary mb-4">
        Weather in {city} Today
      </h2>
      <div className="flex justify-between border-b pb-2">
        <span className="text-md text-primary">Min - Max Temperature</span>
        <span className="text-md text-secondary">
          {weatherData?.minTemp.toFixed(1)}°C -{" "}
          {weatherData?.maxTemp.toFixed(1)}°C
        </span>
      </div>
    </section>
  );
};

export default WeatherComponent;
