import React from "react";
import { useFetch } from "./hooks";

function Photos() {
  const [data, loading] = useFetch(
    "https://jsonplaceholder.typicode.com/photos?albumId=1"
  );

  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <View>
          {data.map(({ id, title, url }) => (
            <Text key={`photo-${id}`}>
            </Text>
          ))}
        </View>
      )}
    </>
  );
}

export default Photos;