import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { finish } from "../features/loading/loadingSlice";
import "../styles/_curriculum.scss";

import Console from "./Console";

const Curriculum = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(finish());
  }, [dispatch]);

  return (
    <div className="curriculum-background">
      <Console defaultOpen={true} showIcon={false} />
    </div>
  );
};

export default Curriculum;
