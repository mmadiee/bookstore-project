//Backend API
import { BACKEND_API } from "../../config";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete, MdPadding } from "react-icons/md";
import { LuBook } from "react-icons/lu";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BACKEND_API}/books`)
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="h-screen flex-col justify-between">
      <div className="flex justify-between items-center px-24">
        <div className="flex items-center">
          <img
            src="/GreatReads-Logo.png"
            className="w-12"
            alt="GreatReads Logo"
          />
          <h1 className="font-baskervville text-3xl my-8">
            Great<strong>Reads</strong>
          </h1>
        </div>

        <Link to="/books/create">
          <button className="border-2 border-raisin-black px-5 py-2 w-40 hover:bg-raisin-black hover:text-bone flex items-center justify-center gap-2">
            <LuBook size={20} />
            <p>New Book</p>
          </button>
        </Link>
      </div>

      <div className="border-t-2 border-raisin-black px-24">
        {loading ? (
          <Spinner />
        ) : (
          <table className="w-full border-separate border-spacing-2">
            <thead>
              <tr>
                <th className="border border-slate-600 rounded-md">No</th>
                <th className="border border-slate-600 rounded-md">Title</th>
                <th className="border border-slate-600 rounded-md max-md:hidden">
                  Author
                </th>
                <th className="border border-slate-600 rounded-md max-md:hidden">
                  Publish Year
                </th>
                <th className="border border-slate-600 rounded-md">
                  Operations
                </th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={books._id}>
                  <td className="border border-slate-700 rounded-md text-center">
                    {index + 1}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {book.title}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                    {book.author}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                    {book.publishYear}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    <div className="flex justify-center gap-x-4">
                      <Link to={`/books/details/${book._id}`}>
                        <BsInfoCircle className="text-2xl text-green-800" />
                      </Link>
                      <Link to={`/books/edit/${book._id}`}>
                        <AiOutlineEdit className="text-2xl text-yellow-600" />
                      </Link>
                      <Link to={`/books/delete/${book._id}`}>
                        <MdOutlineDelete className="text-2xl text-red-600" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="fixed bottom-0 w-full border-t-2 border-raisin-black">
        <div className="flex items-center justify-center py-4">
          <p className="text-xl">© 2024 mmadiee</p>
        </div>
      </div>
    </div>
  );
}
