import { BASE_URL } from "../utils/baseURL"
import axios from "axios"
import { useLoaderData } from "react-router";

export async function loader() {
  const res = await axios.get(`${BASE_URL}/api/events/`)
  return res.data;
}

export default function EventList() {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="flex flex-col items-center">
      <div className="border-solid border-2 border-green-500 p-3 m-3 inline-block rounded-br-xl	rounded-tl-xl">
        {data?.map(event => (
          <div key={event.id}>
            <h1 className="text-2xl font-bold mb-2">{event.name}</h1>
            <p className="text-gray-600">{event.organization}</p>
            <p className="text-gray-600">{event.location}</p>
            <p className="text-gray-600">{event.time}</p>
            <p className="text-gray-800 mt-2">{event.description}</p>
          </div>
        ))}
      </div>
    </div>

  )
}