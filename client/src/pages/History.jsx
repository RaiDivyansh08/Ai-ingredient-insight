import { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedHistory =
      JSON.parse(localStorage.getItem("scanHistory")) || [];

    setHistory(savedHistory);
  }, []);

  return (
    <>
     <Navbar />
    <div className="max-w-5xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        Scan History
      </h1>

      {history.length === 0 ? (
        <div className="bg-white p-6 rounded-xl shadow">
          No scans found
        </div>
      ) : (
        <div className="space-y-4">

          {history.map((scan, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow"
            >

              <div className="flex justify-between items-center">

                <div>
                  <h2 className="text-xl font-semibold">
                    Safety Score: {scan.score}/100
                  </h2>

                  <p className="text-gray-500">
                    {scan.date}
                  </p>
                </div>

                <div>
                  <span
                    className="
                      bg-blue-100
                      text-blue-700
                      px-4
                      py-2
                      rounded-full
                    "
                  >
                    {scan.status}
                  </span>
                </div>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
    </>
  );
}

export default History;