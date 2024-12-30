import { useEffect, useState } from "react";

function useData(url, query) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.statusText}`);
        }
        return response.json();
      })
      .then((result) => {
        setData(doFilter(query, result));
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [query, url]);

  return { data, isLoading, error };
}

export default useData;

const doFilter = (query, jobs) => {
  const { limit, jobDetails, location, fullTimeOnly } = query;

  const filteredData = jobs.filter((job) => {
    const matchesDetaills = jobDetails
      ? [
          job.company,
          job.position,
          job.desciption,
          job.requirements?.contract,
          ...(job.requirements.items || []),
          job.role?.content,
          ...(job.role.items || []),
        ].some(
          (field) =>
            field && field.toLowerCase().includes(jobDetails.toLowerCase())
        )
      : true;

    const matchesLocation = location
      ? job.location.toLowerCase().includes(location.toLowerCase())
      : true;

    const matchesFullTime = fullTimeOnly ? job.contract === "Full Time" : true;

    return matchesDetaills && matchesLocation && matchesFullTime;
  });

  return filteredData ? filteredData.slice(0, limit) : filteredData;
};
