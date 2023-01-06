import React, { memo } from "react";

function Todo({ item }) {
  console.log("child Call");
  return item?.map((Val, index) => <tr key={index}>
      <td>{Val}</td>
    </tr>
  );
}
export default memo(Todo);
