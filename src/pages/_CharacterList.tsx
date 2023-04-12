import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import CharacterProfile from "./_CharacterProfile";
import Link from "next/link";

const CharacterList = () => {
  const [page, setPage] = useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const { data, isLoading } = useQuery(
    ["characters", page],
    async () =>
      await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      ).then((result) => result.json()),
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <div>
        {data && (
          <Pagination
            count={data?.info.pages}
            page={page}
            onChange={handleChange}
          />
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {data?.results.map((result: any) => {
          // eslint-disable-next-line react/jsx-key
          return (
            <>
              <Link href={`/CharacterDetailedView/${result.id}`}>
                <CharacterProfile result={result} />;
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};

export default CharacterList;
